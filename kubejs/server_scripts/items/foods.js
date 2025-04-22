ServerEvents.recipes(event => { 
  const itemsToRemoveByOutput = [
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'minecraft:golden_carrot',
    'minecraft:cookie',
    'artifacts:everlasting_beef',
    'minecraft:pumpkin_pie',
    'farmersdelight:apple_pie',
    'farmersdelight:sweet_berry_cheesecake',
    'farmersdelight:chocolate_pie',
    'farmersdelight:shepherds_pie_block',
    'ars_nouveau:source_berry_pie',
    'minecraft:mushroom_stew',
    'forbidden_arcanus:bat_soup',
    'ars_nouveau:source_berry_roll',
    'farmersdelight:sweet_berry_cookie',
    'farmersdelight:honey_cookie',
    'farmersdelight:melon_popsicle',
    'apotheotic_additions:commonapple',
    'apotheotic_additions:uncommonapple',
    'apotheotic_additions:rareapple',
    'apotheotic_additions:epicapple',
    'apotheotic_additions:mythicapple',
    'farmersdelight:fruit_salad',
    'farmersdelight:mixed_salad',
    'farmersdelight:nether_salad',
    'farmersdelight:egg_sandwich',
    'farmersdelight:chicken_sandwich',
    'farmersdelight:hamburger',
    'farmersdelight:salmon_roll',
    'farmersdelight:cod_roll',
    'farmersdelight:mutton_wrap',
    'farmersdelight:bacon_sandwich',
    'farmersdelight:barbecue_stick',
    'farmersdelight:stuffed_potato',
    'farmersdelight:kelp_roll',
    'farmersdelight:grilled_salmon',
    'farmersdelight:roasted_mutton_chops',
    'farmersdelight:steak_and_potatoes',
    'farmersdelight:mushroom_rice',
    'farmersdelight:bacon_and_eggs',
    'farmersdelight:pasta_with_meatballs',
    'farmersdelight:pasta_with_mutton_chop',
    'farmersdelight:vegetable_noodles',
    'farmersdelight:squid_ink_pasta',
    'farmersdelight:ratatouille',
    'pneumaticcraft:cod_n_chips',
    'farmersdelight:roast_chicken_block',
    'farmersdelight:stuffed_pumpkin_block',
    'farmersdelight:honey_glazed_ham_block',
    'farmersdelight:rice_roll_medley_blcok',
    'nethersdelight:raw_stuffed_hoglin',
    'nethersdelight:nether_skewer',
    'mysticalagradditions:inferium_apple',
    'mysticalagradditions:prudentium_apple',
    'mysticalagradditions:tertium_apple',
    'mysticalagradditions:imperium_apple',
    'mysticalagradditions:supremium_apple',
    'mysticalagradditions:insanium_apple',
    'enigmaticlegacy:cosmic_cake',
    'enigmaticaddons:ichoroot',
    'enigmaticlegacy:astral_potato',
    'reliquary:glowing_bread',

  ]
  itemsToRemoveByOutput.forEach(item => {
      event.remove({ output: item });
  });
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:baked_potato' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:cooked_beef' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:cooked_porkchop' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:cooked_mutton' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:cooked_chicken' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:cooked_rabbit' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:cooked_cod' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:cooked_salmon' })
  event.remove({ not: { type: 'minecraft:smoking' }, output: 'minecraft:bread' })
  event.remove({ output: 'born_in_chaos_v1:campfire_co', type: 'minecraft:campfire_cooking' })
  event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'minecraft:beetroot_soup' })
  event.remove({ not: { type: 'farmersdelight:cooking' }, output: 'minecraft:rabbit_stew' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'farmersdelight:fried_egg' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'farmersdelight:beef_patty' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'farmersdelight:cooked_chicken_cuts' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'farmersdelight:cooked_bacon' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'farmersdelight:cooked_cod_slice' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'farmersdelight:cooked_salmon_slice' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'farmersdelight:cooked_mutton_chops' })
  event.remove({ not: { type: 'minecraft:campfire_cooking' }, output: 'nethersdelight:hoglin_sirloin' })

 // Receitas
  event.recipes.createSequencedAssembly(['minecraft:golden_apple'], 
  'minecraft:apple', [ 
  event.recipes.createFilling('kubejs:receita', ['kubejs:receita', Fluid.of('thermal:glowstone', 250)]),
  event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['minecraft:enchanted_golden_apple'], 
  'minecraft:golden_apple', [ 
  event.recipes.createFilling('kubejs:receita', ['kubejs:receita', Fluid.of('thermal:glowstone', 250)]),
  event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(9)

  event.recipes.createSequencedAssembly(['minecraft:golden_carrot'], 
  'minecraft:carrot', [ 
  event.recipes.createFilling('kubejs:receita', ['kubejs:receita', Fluid.of('thermal:glowstone', 50)]),
  event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.smoking('minecraft:cookie', 'minecraft:cocoa_beans').xp(0.35)
  event.custom({
  "type": "farmersdelight:cooking",
  "container": {"item": "farmersdelight:pie_crust"},
  "cookingtime": 100,
  "experience": 1.0,
  "ingredients": [
    {"item": "minecraft:pumpkin"},
    {"item": "minecraft:egg"},
    {"item": "minecraft:sugar"}
  ],
  "result": {"item": "minecraft:pumpkin_pie"}
 })
 event.custom({
  "type": "farmersdelight:cooking",
  "container": {"item": "farmersdelight:pie_crust"},
  "cookingtime": 100,
  "experience": 1.0,
  "ingredients": [
    {"item": "minecraft:wheat"},
    {"item": "minecraft:wheat"},
    {"item": "minecraft:apple"},
    {"item": "minecraft:apple"},
    {"item": "minecraft:sugar"}
  ],
  "result": {"item": "farmersdelight:apple_pie"}
 })
 event.custom({
  "type": "farmersdelight:cooking",
  "container": {"item": "farmersdelight:pie_crust"},
  "cookingtime": 100,
  "experience": 1.0,
  "ingredients": [
    {"item": "minecraft:sweet_berries"},
    {"item": "minecraft:sweet_berries"},
    {"item": "minecraft:sweet_berries"},
    {"item": "minecraft:sweet_berries"},
    {"item": "farmersdelight:milk_bottle"},
    {"item": "farmersdelight:milk_bottle"}
  ],
  "result": {"item": "farmersdelight:sweet_berry_cheesecake"}
 })
 event.recipes.createFilling('farmersdelight:chocolate_pie', ['farmersdelight:pie_crust', Fluid.of('create:chocolate', 250)])
 event.recipes.createSequencedAssembly(['farmersdelight:shepherds_pie_block'], 
  'minecraft:bowl', [ 
  event.recipes.createFilling('kubejs:receita', ['kubejs:receita', Fluid.of('minecraft:milk', 125)]),
  event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:baked_potato']),
  event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_mutton_chops']),
  event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:onion']),
  event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(2)
 
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "farmersdelight:pie_crust"},
    "cookingtime": 100,
    "experience": 1.0,
    "ingredients": [
      {"item": "minecraft:egg"},
      {"item": "minecraft:sugar"},
      {"item": "ars_nouveau:magebloom"},
      {"item": "ars_nouveau:sourceberry_bush"},
      {"item": "ars_nouveau:sourceberry_bush"},
      {"item": "ars_nouveau:sourceberry_bush"}
    ],
    "result": {"item": "ars_nouveau:source_berry_pie"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:bowl"},
    "cookingtime": 100,
    "experience": 1.0,
    "ingredients": [
      {"tag": "forge:mushrooms"},
      {"tag": "forge:mushrooms"}
    ],
    "result": {"item": "minecraft:mushroom_stew"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "farmersdelight:milk_bottle"},
    "cookingtime": 20,
    "experience": 0.5,
    "ingredients": [
      {"item": "minecraft:bread"},
      {"item": "minecraft:mushroom_stew"},
      {"item": "farmersdelight:tomato"},
      {"item": "farmersdelight:fried_egg"},
      {"item": "farmersdelight:onion"},
    ],
    "result": {"item": "kubejs:ponto_cozinheiro"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:bowl"},
    "cookingtime": 100,
    "experience": 1.0,
    "ingredients": [
      {"tag": "forge:mushrooms"},
      {"item": "forbidden_arcanus:bat_wing"},
      {"item": "minecraft:nether_wart"}
    ],
    "result": {"item": "forbidden_arcanus:bat_soup"}
  })
  event.recipes.createMixing('ars_nouveau:source_berry_roll', [
    'ars_nouveau:sourceberry_bush',
    'farmersdelight:wheat_dough',
    'kubejs:ponto_cozinheiro'
  ]).heated()
  event.shaped(Item.of('8x farmersdelight:sweet_berry_cookie'), [
    'BBB',
    'BAB',
    'BBB'
   ], {
    A: 'minecraft:sweet_berries',
    B: 'minecraft:cookie',
   })
   event.shaped(Item.of('8x farmersdelight:honey_cookie'), [
    'BBB',
    'BAB',
    'BBB'
   ], {
    A: 'minecraft:honey_bottle',
    B: 'minecraft:cookie',
  })
  // event.recipes.createSplashing('farmersdelight:melon_popsicle', ['minecraft:melon_slice'])
  event.recipes.createSequencedAssembly(['farmersdelight:melon_popsicle'], 
    'minecraft:stick', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:ice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:melon_slice']),
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:fruit_salad'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:apple']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:melon_slice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:pumpkin_slice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:sweet_berries']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro']),
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:nether_salad'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:crimson_fungus']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:warped_fungus']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:mixed_salad'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cabbage_leaf']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:beetroot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:tomato']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)
  
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:bread"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:fried_egg"},
      {"item": "farmersdelight:fried_egg"}
    ],
    "result": {"item": "farmersdelight:egg_sandwich"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:bread"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:cabbage_leaf"},
      {"item": "farmersdelight:cooked_chicken_cuts"},
      {"item": "minecraft:carrot"}
    ],
    "result": {"item": "farmersdelight:chicken_sandwich"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:bread"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:cabbage_leaf"},
      {"item": "farmersdelight:beef_patty"},
      {"item": "farmersdelight:tomato"},
      {"item": "farmersdelight:onion"},
    ],
    "result": {"item": "farmersdelight:hamburger"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "farmersdelight:cooked_rice"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:salmon_slice"},
      {"item": "farmersdelight:salmon_slice"},

    ],
    "result": {"item": "farmersdelight:salmon_roll"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "farmersdelight:cooked_rice"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:cod_slice"},
      {"item": "farmersdelight:cod_slice"},

    ],
    "result": {"item": "farmersdelight:cod_roll"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:bread"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:cabbage_leaf"},
      {"item": "farmersdelight:cooked_mutton_chops"},
      {"item": "farmersdelight:onion"},

    ],
    "result": {"item": "farmersdelight:mutton_wrap"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:bread"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:cabbage_leaf"},
      {"item": "farmersdelight:cooked_bacon"},
      {"item": "farmersdelight:tomato"},

    ],
    "result": {"item": "farmersdelight:bacon_sandwich"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:stick"},
    "cookingtime": 100,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:beef_patty"},
      {"item": "farmersdelight:tomato"},
      {"item": "farmersdelight:onion"},

    ],
    "result": {"item": "farmersdelight:barbecue_stick"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:baked_potato"},
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "farmersdelight:beef_patty"},
      {"item": "farmersdelight:milk_bottle"},

    ],
    "result": {"item": "farmersdelight:stuffed_potato"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 5.0,
    "ingredients": [
      {"item": "minecraft:dried_kelp"},
      {"item": "minecraft:dried_kelp"},
      {"item": "minecraft:dried_kelp"},
      {"item": "farmersdelight:cooked_rice"},
      {"item": "farmersdelight:cooked_rice"},
      {"item": "minecraft:carrot"}
    ],
    "result": {"item": "farmersdelight:kelp_roll"}
  })
  event.recipes.createMixing('5x pneumaticcraft:chips', [
    '5x minecraft:potato',
    Fluid.of('createaddition:seed_oil', 500),
  ]).superheated()
  event.recipes.createSequencedAssembly(['farmersdelight:grilled_salmon'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_salmon_slice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:sweet_berries']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cabbage_leaf']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:onion']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:roasted_mutton_chops'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_mutton_chops']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:beetroot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:tomato']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_rice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:steak_and_potatoes'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:cooked_beef']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:baked_potato']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:onion']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_rice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:mushroom_rice'], 
    'farmersdelight:cooked_rice', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:red_mushroom']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:brown_mushroom']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:carrot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:bacon_and_eggs'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_bacon']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_bacon']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:fried_egg']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:fried_egg']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:pasta_with_meatballs'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:minced_beef']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:raw_pasta']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:tomato_sauce']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)
  
  event.recipes.createSequencedAssembly(['farmersdelight:pasta_with_mutton_chop'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:mutton_chops']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:raw_pasta']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:tomato_sauce']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:vegetable_noodles'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:carrot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:brown_mushroom']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:raw_pasta']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cabbage_leaf']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:beetroot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:squid_ink_pasta'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:ink_sac']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cod_slice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:raw_pasta']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:tomato']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:ratatouille'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:beetroot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:onion']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:potato']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(2)

  event.recipes.createSequencedAssembly(['pneumaticcraft:cod_n_chips'], 
    'minecraft:paper', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:cooked_cod']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'pneumaticcraft:chips']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(1)

  event.recipes.createSequencedAssembly(['farmersdelight:roast_chicken_block'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:cooked_chicken']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:carrot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:baked_potato']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:bread']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:egg']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:onion']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(2)

  event.recipes.createSequencedAssembly(['farmersdelight:stuffed_pumpkin_block'], 
    'minecraft:pumpkin', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:potato']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:sweet_berries']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:beetroot']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:brown_mushroom']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:rice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:onion']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(2)

  event.recipes.createSequencedAssembly(['farmersdelight:honey_glazed_ham_block'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:smoked_ham']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:honey_bottle']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:sweet_berries']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:sweet_berries']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_rice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(2)

  event.recipes.createSequencedAssembly(['farmersdelight:rice_roll_medley_block'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:kelp_roll_slice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:salmon_roll']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cod_roll']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(3)

  event.recipes.createSequencedAssembly(['farmersdelight:honey_glazed_ham_block'], 
    'minecraft:bowl', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:smoked_ham']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:honey_bottle']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:sweet_berries']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:sweet_berries']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:cooked_rice']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(2)

  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"item": "minecraft:blaze_rod"},
    "cookingtime": 90,
    "experience": 5.0,
    "ingredients": [
      {"item": "nethersdelight:propelpearl"},
      {"item": "nethersdelight:ground_strider"},
    ],
    "result": {"item": "nethersdelight:nether_skewer"}
  })
  event.recipes.createSequencedAssembly(['nethersdelight:raw_stuffed_hoglin'], 
    'nethersdelight:hoglin_hide', [ 
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:ham']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'nethersdelight:hoglin_loin']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:warped_roots']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:crimson_roots']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'farmersdelight:nether_salad']),
    event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_cozinheiro'])
  ]).transitionalItem('kubejs:receita').loops(2)
})