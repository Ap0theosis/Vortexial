ServerEvents.recipes(event => { 
    event.stonecutting('alchemistry:dissolver', 'kubejs:ponto_quimico')
    event.stonecutting('alchemistry:combiner', 'kubejs:ponto_quimico')
    event.stonecutting('alchemistry:atomizer', 'kubejs:ponto_quimico')
    event.stonecutting('alchemistry:compactor', 'kubejs:ponto_quimico')
    event.stonecutting('alchemistry:liquifier', 'kubejs:ponto_quimico')
    // Reatores
    event.custom({
        "type": "alchemistry:fusion",
        "group": "fusion",
        "input1": {"item": "chemlib:cerium"},
        "input2": {"item": "chemlib:praseodymium"},
        "output": {"item": "chemlib:tennessine"}
    })
    event.custom({
        "type": "alchemistry:fusion",
        "group": "fusion",
        "input1": {"item": "chemlib:cerium"},
        "input2": {"item": "chemlib:cerium"},
        "output": {"item": "chemlib:livermorium"}
    })
    event.custom({
        "type": "alchemistry:fusion",
        "group": "fusion",
        "input1": {"item": "chemlib:tin"},
        "input2": {"item": "chemlib:antimony"},
        "output": {"item": "chemlib:mendelevium"}
    })
    event.custom({
        "type": "alchemistry:fusion",
        "group": "fusion",
        "input1": {"item": "chemlib:argon"},
        "input2": {"item": "chemlib:berkelium"},
        "output": {"item": "chemlib:moscovium"}
    })
    event.custom({
        "type": "alchemistry:fission",
        "group": "fission",
        "input": {"item": "chemlib:krypton"},
        "output1": {"item": "chemlib:argon"},
        "output2": {"item": "chemlib:argon"}
    })
    event.custom({
        "type": "alchemistry:fission",
        "group": "fission",
        "input": {"item": "chemlib:hafnium"},
        "output1": {"item": "chemlib:krypton"},
        "output2": {"item": "chemlib:krypton"}
    })
    // Combiner
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
          {"count": 2, "ingredient": {"item": "chemlib:graphite"}},
          {"count": 1, "ingredient": {"item": "chemlib:iron_oxide"}},
          {"count": 4, "ingredient": {"item": "chemlib:protein"}},
          {"count": 8, "ingredient": {"item": "chemlib:water"}},
        ],
        "result": {"item": "kubejs:ponto_quimico"}
    })
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
          {"count": 3, "ingredient": {"item": "chemlib:titanium_oxide"}},
          {"count": 1, "ingredient": {"tag": "forge:dyes"}},
          {"count": 1, "ingredient": {"item": "chemlib:silver"}},
          {"count": 1, "ingredient": {"item": "chemlib:phosphorus"}},
        ],
        "result": {"item": "mekanismgenerators:solar_panel"}
    })
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
          {"count": 3, "ingredient": {"item": "mekanismgenerators:solar_panel"}},
          {"count": 1, "ingredient": {"item": "chemlib:silicon_dioxide"}},
          {"count": 1, "ingredient": {"item": "chemlib:copper"}},
          {"count": 1, "ingredient": {"item": "chemlib:phosphorus"}},
        ],
        "result": {"item": "mekanismgenerators:solar_generator"}
    })
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
          {"count": 3, "ingredient": {"item": "chemlib:cerium"}},
          {"count": 3, "ingredient": {"item": "chemlib:praseodymium"}},
          {"count": 1, "ingredient": {"item": "chemlib:tungsten_ingot"}},
        ],
        "result": {"item": "alchemistry:fusion_core"}
    })
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
          {"count": 1, "ingredient": {"item": "botania:life_essence"}},
          {"count": 1, "ingredient": {"item": "chemlib:protactinium_ingot"}},
          {"count": 1, "ingredient": {"item": "chemlib:lithium_ingot"}},
        ],
        "result": {"item": "botania:gaia_ingot"}
    })
    // Dissolver
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
          "count": 1,
          "ingredient": {
            "item": "botania:terrasteel_ingot"
          }
        },
        "output": {
          "groups": [
            {
              "probability": 100.0,
              "results": [
                {"count": 16, "item": "chemlib:protactinium"},
                {"count": 64, "item": "chemlib:berkelium"},
                
            ]
            }],
          "rolls": 1,
          "weighted": false}
    })
    // Endgame
    event.recipes.createSequencedAssembly(['kubejs:elemento_x'], 
        'mysticalagradditions:nitro_crystal_crux', [ 
        event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'chemlib:livermorium']),
        event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'chemlib:moscovium']),
        event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'chemlib:tennessine']),
        event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'chemlib:lutetium_metal_block']),
        event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'botania:gaia_ingot']),
        event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'kubejs:ponto_quimico']),
        event.recipes.createFilling('kubejs:materia_instavel', ['kubejs:materia_instavel', Fluid.of('chemlib:ethanol_fluid', 125)]),
        event.recipes.createFilling('kubejs:materia_instavel', ['kubejs:materia_instavel', Fluid.of('chemlib:hydrogen_fluid', 125)]),
        event.recipes.createFilling('kubejs:materia_instavel', ['kubejs:materia_instavel', Fluid.of('chemlib:mercury_fluid', 125)]),
        event.recipes.createFilling('kubejs:materia_instavel', ['kubejs:materia_instavel', Fluid.of('mekanism:sulfuric_acid', 125)]),
      ]).transitionalItem('kubejs:materia_instavel').loops(64)
})
