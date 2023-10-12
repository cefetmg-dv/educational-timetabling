#ifndef TIMETABLING_SA_HPP__
#define TIMETABLING_SA_HPP__


#include "./solver.hpp"
#include "./timetabling.hpp"

class SA: public Solver{
    public:

        std::vector<EventSchedule> solve(const Problem& problem) override;
};


#endif //TIMETABLING_SA_HPP__