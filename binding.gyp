{
  "targets": [],

  "target_defaults": {
    "include_dirs": [
      "<!(node -p \"require('node-addon-api').include_dir\")",
      "packages/solver/libs"
    ],
    "sources": [
      "packages/timetabling/src/timetabling.cpp",
      "packages/timetabling/src/mip.cpp",
      "packages/timetabling/src/addon.cpp",
      "packages/simulatedAnnealing/src/addon.cpp",
      "packages/simulatedAnnealing/src/SA.cpp",
      "packages/simulatedAnnealing/src/timetabling.cpp"
      
    ],
    "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
    "cflags!": [ "-fno-exceptions" ],
    "cflags": [ "-std=c++11" ],
    "cflags_cc!": [ "-fno-exceptions" ]
  },

  "conditions":[
    ["OS=='win'", {
      "targets": [
        {
          "target_name": "timetabling",
          "include_dirs": [
            "C:/gurobi1002/win64/include"
          ],
          "link_settings": {
            "libraries": [
              "gurobi_c++mt2017.lib",
              "gurobi100.lib"
            ]
          },
          "msvs_settings": {
            "VCLinkerTool": {
              "AdditionalLibraryDirectories": [
                  "C:/gurobi1002/win64/lib"
              ]
            }
          }
        }
      ],
    }],

    ["OS=='linux'", {
      "targets": [
        {
          "target_name": "timetabling",
          "include_dirs": [
            "/opt/gurobi/include"
          ],
          "link_settings": {
            "libraries": [
              "/opt/gurobi/lib/libgurobi_g++5.2.a",
              "/opt/gurobi/lib/libgurobi100.so"
            ]
          }
        }
      ],
    }],

  ]
}
