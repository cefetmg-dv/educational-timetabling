#include <tuple>
#include "../include/timetabling.hpp"
#include "../libs/json.hpp"

using json = nlohmann::json;

Problem load_problem(const std::string& raw_data) {
    Problem problem;
    json data = json::parse(raw_data);

    size_t n_timeslots = data["timeslots"].size();
    size_t n_rooms = data["rooms"].size();
    size_t n_events = data["events"].size();
    size_t n_teachers = data["teachers"].size();
    size_t n_classes = data["classes"].size();

    // Events assigned to the same professor must be in different timeslots (resource sharing constraints)
    for (const auto& teacher : data["teachers"]) {
        id_type teacher_id = teacher["id"].get<id_t>();
        std::set<id_t> teacher_events;
        for (const auto& event : data["events"]) {
            id_type event_id = event["id"].get<id_t>();
            if (event["teacher"].get<id_t>() == teacher_id) {
                teacher_events.insert(event_id);
            }
        }
        problem.resource_sharing.emplace_back(std::move(teacher_events));
    }

    // Events from the same class must be in different timeslots (resource sharing constraints)
    for (const auto& clazz : data["classes"]) {
        id_type class_id = clazz["id"].get<id_t>();
        std::set<id_t> class_events;
        for (const auto& event : data["events"]) {
            id_type event_id = event["id"].get<id_t>();
            if (event["class"].get<id_t>() == class_id) {
                class_events.insert(event_id);
            }
        }
        problem.resource_sharing.emplace_back(std::move(class_events));
    }

    // Precedence rules must be respected (precedence rules constraints)
    for (const auto& rule : data["precedence_rules"]) {
        id_type event1 = rule["event"].get<id_t>();
        for (const auto& event2 : rule["dependent_events"])
        problem.precedence.emplace(event1, event2.get<id_t>());
    }

    // Events must be assigned to compatible rooms (compatibility constraints)
    for (const auto& event : data["events"]) {
        id_type event_id = event["id"].get<id_t>();
        id_type class_id = event["class"].get<id_t>();
        id_type subject_id = event["subject"].get<id_t>();
        for (const auto& room : data["classes"][class_id]["subjects"][subject_id]["rooms"]) {
            id_type room_id = room.get<id_t>();
            problem.compatibility[event_id].insert(room_id);
        }
    }

    // Rooms cannot have events assigned to it in timeslots in which they are unavailable (room unavailability constraints)
    for (const auto& room : data["rooms"]) {
        id_type room_id = room["id"].get<id_t>();
        for (const auto& unavailability : room["unavailability"]) {
            id_type timeslot_id = unavailability.get<id_t>();
            problem.rooms_unavailability[room_id].insert(timeslot_id);
        }
    }

    // Events cannot be assigned to timeslots in which pre-allocated resources are unavailable (event unavailability constraints)
    // TODO: professors and classes (shifts) unavailability

    // TODO: professors required resting when teaching at night
    // TODO: professors maximum classes per day
    // TODO: teach at most two shifts per day, which must be consecutive
    // ---
    // TODO: minimize the number of free times between events for classes (groups)
    // TODO: avoid some consecutive events when possible
    // TODO: avoid subgroups of a subject to have events in different days

    problem.n_timeslots = n_timeslots;
    problem.n_rooms = n_rooms;
    problem.n_events = n_events;

    return problem;
}