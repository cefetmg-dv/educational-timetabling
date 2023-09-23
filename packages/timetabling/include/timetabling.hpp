#ifndef SOLVER_TIMETABLING_HPP__
#define SOLVER_TIMETABLING_HPP__

#include <cstddef>
#include <tuple>
#include <vector>
#include <list>
#include <set>
#include <map>
#include <string>

using id_t = size_t;

struct Event {
    id_t teacher;
    id_t group;
    id_t subgroup;
    std::vector<id_t> possible_rooms;
};

struct EventSchedule {
    EventSchedule(id_t event_, id_t timeslot_, id_t room_) : event(event_), timeslot(timeslot_), room(room_) {}
    id_t event;
    id_t timeslot;
    id_t room;
};

struct Problem {
public:
    size_t n_timeslots;
    size_t n_rooms;
    size_t n_events;
    std::list< std::set<id_t> > resource_sharing;
    std::set< std::tuple< id_t, id_t > > precedence;
    std::map< id_t, std::set<id_t> > compatibility;
    std::map< id_t, std::set<id_t> > rooms_unavailability;
    std::map< id_t, std::set<id_t> > events_unavailability;
};

Problem load_problem(const std::string& data);

#endif // SOLVER_TIMETABLING_HPP__
