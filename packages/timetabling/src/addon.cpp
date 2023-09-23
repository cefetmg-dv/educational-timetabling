#include <napi.h>
#include <chrono>
#include <random>
#include <string>
#include <iostream>
#include "../include/timetabling.hpp"
#include "../include/mip.hpp"


/**
 * Solve the timetabling problem.
 */
Napi::Value solve(const Napi::CallbackInfo& info) {

    // Get the environment
    Napi::Env env = info.Env();

    // Check the number of arguments
    if (info.Length() < 2) {
        Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    // Check the argument types
    if (!info[0].IsObject() || !info[1].IsString()) {
        Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
    }

    // Load the problem data
    Napi::Function stringify = env.Global().Get("JSON").As<Napi::Object>().Get("stringify").As<Napi::Function>();
    std::string json = stringify.Call(env.Global(), { info[0].As<Napi::Object>() }).As<Napi::String>().Utf8Value();
    //std::cout << json << std::endl;
    
    // Load the solver
    std::string solver = info[1].As<Napi::String>().Utf8Value();
    //std::cout << solver << std::endl;

    // Solve the problem
    auto schedule = MIP().solve(load_problem(json));

    // Create the solution object to return
    Napi::Array solution = Napi::Array::New(env, schedule.size());
    for (size_t i = 0; i < schedule.size(); ++i) {
        Napi::Object obj = Napi::Object::New(env);
        obj.Set("event", Napi::Number::New(env, schedule[i].event));
        obj.Set("timeslot", Napi::Number::New(env, schedule[i].timeslot));
        obj.Set("room", Napi::Number::New(env, schedule[i].room));
        solution.Set(i, obj);
    }

    return solution;
}


// Export native module for JavaScript
Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "solve"), Napi::Function::New(env, solve));
    return exports;
}

NODE_API_MODULE(addon, Init)
