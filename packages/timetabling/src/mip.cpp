#include "../include/mip.hpp"
#include <gurobi_c++.h>


std::vector<EventSchedule> MIP::solve(const Problem& problem) {

    // Create environment and model
    GRBEnv env = GRBEnv();
    GRBModel model = GRBModel(env);

    // Create variables
    std::vector< std::vector< std::vector<GRBVar> > > x;
    for (size_t i = 0; i < problem.n_events; ++i) {
        x.emplace_back();
        for (size_t j = 0; j < problem.n_timeslots; ++j) {
            x[i].emplace_back();
            for (size_t k = 0; k < problem.n_rooms; ++k) {
                x[i][j].emplace_back(model.addVar(0.0, 1.0, 0.0, GRB_BINARY));
            }
        }
    }

    // Set objective function
    GRBLinExpr obj = 0;
    model.setObjective(obj, GRB_MINIMIZE);

    // Constraints (1): Each event is scheduled exactly once
    for (size_t i = 0; i < problem.n_events; ++i) {
        GRBLinExpr expr = 0;
        for (size_t j = 0; j < problem.n_timeslots; ++j) {
            for (size_t k = 0; k < problem.n_rooms; ++k) {
                expr += x[i][j][k];
            }
        }
        model.addConstr(expr == 1);
    }

    // Constraints (2): Each room is used at most once per timeslot
    for (size_t j = 0; j < problem.n_timeslots; ++j) {
        for (size_t k = 0; k < problem.n_rooms; ++k) {
            GRBLinExpr expr = 0;
            for (size_t i = 0; i < problem.n_events; ++i) {
                expr += x[i][j][k];
            }
            model.addConstr(expr <= 1);
        }
    }

    // Constraints (3): Resource sharing constraints
    for (const auto& events : problem.resource_sharing) {
        for (size_t j = 0; j < problem.n_timeslots; ++j) {
            GRBLinExpr expr = 0;
            for (const auto& event : events) {
                for (size_t k = 0; k < problem.n_rooms; ++k) {
                    expr += x[event][j][k];
                }
            }
            model.addConstr(expr <= 1);
        }
    }

    // Constraints (4): Precedence rules
    for (const auto& [first, second] : problem.precedence) {
        for (size_t i = 0; i < problem.n_timeslots; ++i) {

            GRBLinExpr left = 0;
            for (size_t k = 0; k < problem.n_rooms; ++k) {
                left += x[first][i][k];
            }

            GRBLinExpr right = 0;
            for (size_t j = i + 1; j < problem.n_timeslots; ++j) {
                for (size_t k = 0; k < problem.n_rooms; ++k) {
                    right += x[second][j][k];
                }
            }

            model.addConstr(left <= right);
        }
    }

    // Constraints (5): Compatibility constraints
    for (const auto& [event, rooms] : problem.compatibility) {
        for (size_t i = 0; i < problem.n_timeslots; ++i) {
            for (size_t k = 0; k < problem.n_rooms; ++k) {
                if (rooms.find(k) == rooms.end()) {
                    model.addConstr(x[event][i][k] == 0);
                }
            }
        }
    }

    // Constraints (6): Rooms unavailability constraints
    for (const auto& [room, timeslots] : problem.rooms_unavailability) {
        for (const auto& timeslot : timeslots) {
            for (size_t i = 0; i < problem.n_events; ++i) {
                model.addConstr(x[i][timeslot][room] == 0);
            }
        }
    }

    // Solve the model
    model.optimize();

    // Get the solution (schedules)
    std::vector<EventSchedule> schedules;
    for (size_t i = 0; i < problem.n_events; ++i) {
        for (size_t j = 0; j < problem.n_timeslots; ++j) {
            for (size_t k = 0; k < problem.n_rooms; ++k) {
                if (x[i][j][k].get(GRB_DoubleAttr_X) > 0.5) {
                    schedules.emplace_back(i, j, k);
                }
            }
        }
    }

    return schedules;
}