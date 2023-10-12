#ifndef SOLVER_TIMETABLING_HPP__
#define SOLVER_TIMETABLING_HPP__

#include <cstddef>
#include <tuple>
#include <vector>
#include <list>
#include <set>
#include <map>
#include <string>

using id_type = size_t;

struct Event {
    id_type teacher;
    id_type group;
    id_type subgroup;
    std::vector<id_type> possible_rooms;
};

struct EventSchedule {
    EventSchedule(id_type event_, id_type timeslot_, id_type room_) : event(event_), timeslot(timeslot_), room(room_) {}
    id_type event;
    id_type timeslot;
    id_type room;
};

struct Problem {
public:
    size_t n_timeslots;
    size_t n_rooms;
    size_t n_events;
    std::list< std::set<id_type> > resource_sharing;
    std::set< std::tuple< id_type, id_type > > precedence;
    std::map< id_type, std::set<id_type> > compatibility;
    std::map< id_type, std::set<id_type> > rooms_unavailability;
    std::map< id_type, std::set<id_type> > events_unavailability;
};

Problem load_problem(const std::string& data);

#endif // SOLVER_TIMETABLING_HPP__
