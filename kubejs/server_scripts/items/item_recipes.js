ServerEvents.recipes(event => { 
  //Crafting Table Shaped
  event.shaped('kubejs:talisma_possessao', [
    '   ',
    'B A',
    '   '
  ], {
    A: 'kubejs:talisma_destruicao',
    B: 'kubejs:talisma_controle'
  })
  event.shaped('apotheosis:simple_reforging_table', [
    ' A ',
    'BCB',
    'DDD'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'apotheosis:gem_dust',
    C: 'kubejs:ponto_ferreiro',
    D: 'minecraft:smooth_stone'
  })
  event.shaped('industrialforegoing:hydroponic_bed', [
    'ABA',
    'ACA',
    'ADA'
  ], {
    A: 'mysticalagriculture:wither_skeleton_essence',
    B: 'kubejs:ponto_agricultor',
    C: 'industrialforegoing:machine_frame_advanced',
    D: 'mysticalagriculture:wither_resistance_augment'
  })
  event.shaped('mysticalagriculture:infusion_pedestal', [
    'BAB',
    ' C ',
    ' C '
  ], {
    A: 'farmersdelight:tomato_sauce',
    B: 'farmersdelight:pumpkin_slice',
    C: 'minecraft:stone'
  })
  event.shaped('mysticalagriculture:infusion_altar', [
    'BAB',
    ' C ',
    'CCC'
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'farmersdelight:stuffed_pumpkin_block',
    C: 'minecraft:stone'
  })
  event.shaped('mysticalagriculture:prosperity_seed_base', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'mysticalagriculture:prosperity_shard',
    B: 'minecraft:honey_bottle'
  })
  event.shaped('mysticalagriculture:prosperity_ingot', [
    '   ',
    ' B ',
    ' A '
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'minecraft:iron_ingot'
  })
  event.shaped('mysticalagriculture:prosperity_gemstone', [
    '   ',
    ' B ',
    ' A '
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'minecraft:diamond'
  })
  event.shaped('mysticalagriculture:infusion_crystal', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'mysticalagriculture:nature_agglomeratio',
    B: 'mysticalagriculture:ice_essence',
    C: 'mysticalagriculture:wood_essence',
    D: 'kubejs:ponto_agricultor'
  })
  event.shaped('mysticalagriculture:tertium_essence', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'mysticalagriculture:prudentium_essence',
    B: 'mysticalagriculture:honey_essence',
    C: 'mysticalagriculture:pig_essence',
    D: '#mysticalagriculture:infusion_crystals'
  })
  event.shaped('mysticalagriculture:imperium_essence', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'mysticalagriculture:iron_essence',
    B: 'mysticalagriculture:tertium_essence'
  })
  event.shaped('mysticalagriculture:supremium_essence', [
    'A A',
    'BCB',
    'A A'
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'mysticalagriculture:imperium_essence',
    C: '#mysticalagriculture:infusion_crystals'
  })
  event.shaped('mysticalagriculture:air_agglomeratio', [
    'DAD',
    'DCD',
    'DBD'
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'ars_nouveau:air_essence',
    C: 'mysticalagriculture:master_infusion_crystal',
    D: 'mysticalagriculture:chicken_essence'
  })
  event.shaped('mysticalagriculture:earth_agglomeratio', [
    'DAD',
    'DCD',
    'DBD'
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'ars_nouveau:earth_essence',
    C: 'mysticalagriculture:master_infusion_crystal',
    D: 'mysticalagriculture:amethyst_essence'
  })
  event.shaped('mysticalagriculture:water_agglomeratio', [
    'DAD',
    'DCD',
    'DBD'
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'ars_nouveau:water_essence',
    C: 'mysticalagriculture:master_infusion_crystal',
    D: 'mysticalagriculture:fish_essence'
  })
  event.shaped('mysticalagriculture:fire_agglomeratio', [
    'DAD',
    'DCD',
    'DBD'
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'ars_nouveau:fire_essence',
    C: 'mysticalagriculture:master_infusion_crystal',
    D: 'mysticalagriculture:blaze_essence'
  })
  event.shaped('mysticalagriculture:cognizant_dust', 16[
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'mysticalagriculture:wither_skeleton_essence',
    B: 'kubejs:ponto_agricultor'
  })
  event.shaped('mysticalagriculture:tinkering_table', [
    'BBB',
    'ACA',
    'BBB'
  ], {
    A: 'mysticalagriculture:soulium_dust',
    B: 'minecraft:stone',
    C: 'kubejs:ponto_ferreiro'
  })
  event.shaped('mysticalagriculture:unattuned_augment', [
    ' D ',
    'ACA',
    ' B '
  ], {
    A: 'mysticalagriculture:prudentium_ingot',
    B: 'mysticalagriculture:prudentium_gemstone',
    C: 'mysticalagriculture:prosperity_block',
    D: 'kubejs:ponto_ferreiro'
  })
  event.shaped('mysticalagriculture:inferium_helmet', [
    ' D ',
    'ACA',
    ' B '
  ], {
    A: 'mysticalagriculture:inferium_ingot',
    B: 'mysticalagriculture:inferium_gemstone',
    C: 'minecraft:diamond_helmet',
    D: 'mysticalagriculture:unattuned_augment'
  })
  event.shaped('mysticalagriculture:inferium_chestplate', [
    ' D ',
    'ACA',
    ' B '
  ], {
    A: 'mysticalagriculture:inferium_ingot',
    B: 'mysticalagriculture:inferium_gemstone',
    C: 'minecraft:diamond_chestplate',
    D: 'mysticalagriculture:unattuned_augment'
    
  })
  event.shaped('mysticalagriculture:inferium_leggings', [
    ' D ',
    'ACA',
    ' B '
  ], {
    A: 'mysticalagriculture:inferium_ingot',
    B: 'mysticalagriculture:inferium_gemstone',
    C: 'minecraft:diamond_leggings',
    D: 'mysticalagriculture:unattuned_augment'
  })
  event.shaped('mysticalagriculture:inferium_boots', [
    ' D ',
    'ACA',
    ' B '
  ], {
    A: 'mysticalagriculture:inferium_ingot',
    B: 'mysticalagriculture:inferium_gemstone',
    C: 'minecraft:diamond_boots',
    D: 'mysticalagriculture:unattuned_augment'
  })
  event.shaped('mysticalagriculture:machine_frame', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'kubejs:ponto_mecanico'
  })
  event.shaped('mysticalagriculture:enchanter', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'kubejs:ponto_arcanista'
  })
  event.shaped('thermal:machine_insolator', [
    ' A ',
    'EBE',
    'DCD'
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'thermal:machine_frame',
    C: 'thermal:rf_coil',
    D: 'thermal:lumium_gear',
    E: 'minecraft:glass'
  })
  event.shaped('ars_nouveau:potion_flask', [
    'CAC',
    'BDB',
    ' C '
  ], {
    A: 'kubejs:ponto_alquimista',
    B: 'minecraft:gold_ingot',
    C: 'minecraft:gold_nugget',
    D: 'minecraft:glass_bottle'
  })
  event.shaped('3x born_in_chaos_v1:potion_of_rampage', [
    'BAB',
    'BDB',
    'ECE'
  ], {
    A: 'minecraft:tnt',
    B: 'minecraft:blaze_powder',
    C: 'farmersdelight:milk_bottle',
    D: 'minecraft:nether_wart',
    E: 'kubejs:ponto_alquimista'
  })
  event.shaped('6x enigmaticaddons:ichor_droplet', [
    'BAB',
    'BDB',
    'BCB'
  ], {
    A: 'reliquary:frozen_core',
    B: 'minecraft:ghast_tear',
    C: 'reliquary:molten_core',
    D: 'kubejs:ponto_alquimista'
  })
  event.shaped('bloodmagic:sacrificialdagger', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'kubejs:talisma_controle',
    B: 'farmersdelight:iron_knife',
    C: 'kubejs:talisma_hades'
  })
  event.shaped('enigmaticlegacy:golden_ring', [
    'CCC',
    'CAC',
    ' B '
  ], {
    A: 'enigmaticlegacy:iron_ring',
    B: 'enigmaticlegacy:recall_potion',
    C: 'born_in_chaos_v1:potion_of_rampage'
  })
  event.shaped('5x enigmaticlegacy:astral_dust', [
    'AAA',
    'ABA',
    'CDE'
  ], {
    A: 'minecraft:gunpowder',
    B: 'enigmaticlegacy:golden_ring',
    C: 'minecraft:dragon_breath',
    D: 'minecraft:wither_rose',
    E: 'botania:ender_air_bottle'
  })
  event.shaped('reliquary:alkahestry_tome', [
    'EFE',
    'ACA',
    'BDB'
  ], {
    A: 'enigmaticlegacy:astral_dust',
    B: 'enigmaticlegacy:golden_ring',
    C: 'minecraft:netherite_ingot',
    D: 'minecraft:nether_star',
    E: 'bloodmagic:weapon_repair_anointment',
    F: 'reliquary:witherless_rose'
  })
  event.shaped('reliquary:lantern_of_paranoia', [
    'ABA',
    'DCD',
    ' A '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'enigmaticlegacy:golden_ring',
    C: 'minecraft:torch',
    D: 'minecraft:glass'
  })
  event.shaped(Item.of('apotheosis:potion_charm', { Potion: "minecraft:night_vision" }), [
    'ADA',
    'BBB',
    'ECE'
 ], {
    A: 'minecraft:ender_eye',
    B: 'minecraft:gold_ingot',
    C: 'kubejs:ponto_alquimista',
    D: Item.of('minecraft:potion', '{Potion:"minecraft:night_vision"}').strongNBT(),

    E: 'minecraft:golden_carrot'
 })
 event.shaped(Item.of('apotheosis:potion_charm', { Potion: "apotheosis:flying" }), [
  ' A ',
  'DBC',
  ' E '
 ], {
  A: 'minecraft:elytra',
  B: 'reliquary:alkahestry_tome',
  C: 'enigmaticlegacy:golden_ring',
  D: 'reliquary:lantern_of_paranoia',
  E: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:night_vision"}').strongNBT()
 }).keepIngredient('apotheosis:potion_charm').keepIngredient('enigmaticlegacy:golden_ring').keepIngredient('reliquary:alkahestry_tome')
 event.shaped(Item.of('reliquary:fertile_essence'), [
  'AB ',
  'CD ',
  '   '
 ], {
  A: 'reliquary:rib_bone',
  B: 'reliquary:catalyzing_gland',
  C: 'enigmaticlegacy:golden_ring',
  D: 'reliquary:slime_pearl'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('reliquary:infernal_claw'), [
  'AB ',
  'CD ',
  '   '
 ], {
  A: 'reliquary:rib_bone',
  B: 'reliquary:molten_core',
  C: 'enigmaticlegacy:golden_ring',
  D: 'reliquary:slime_pearl'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('reliquary:infernal_tear'), [
  'AB ',
  'CD ',
  '   '
 ], {
  A: 'reliquary:void_tear',
  B: 'reliquary:molten_core',
  C: 'enigmaticlegacy:golden_ring',
  D: 'reliquary:infernal_claw'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('reliquary:void_tear'), [
  'AB ',
  'CD ',
  '   '
 ], {
  A: 'minecraft:ghast_tear',
  B: 'reliquary:nebulous_heart',
  C: 'enigmaticlegacy:golden_ring',
  D: 'reliquary:slime_pearl'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('reliquary:alkahestry_altar'), [
  ' C ',
  'ADA',
  ' B '
 ], {
  A: 'minecraft:glowstone',
  B: 'reliquary:alkahestry_tome',
  C: 'enigmaticlegacy:golden_ring',
  D: 'reliquary:lantern_of_paranoia'
 }).keepIngredient('enigmaticlegacy:golden_ring').keepIngredient('reliquary:alkahestry_tome')
 event.shaped(Item.of('reliquary:glowing_water'), [
  ' A ',
  'DDD',
  ' C '
 ], {
  A: 'minecraft:glowstone_dust',
  C: 'reliquary:empty_potion_vial',
  D: 'enigmaticaddons:ichor_droplet'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('3x reliquary:empty_potion_vial'), [
  ' A ',
  'ABA',
  '   '
 ], {
  A: 'minecraft:glass_bottle',
  B: 'enigmaticlegacy:golden_ring',
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('3x reliquary:angelheart_vial'), [
  ' A ',
  ' C ',
  'DBD'
 ], {
  A: 'reliquary:glowing_water',
  B: 'enigmaticlegacy:golden_ring',
  C: 'reliquary:infernal_claw',
  D: 'reliquary:fertile_essence'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('3x reliquary:witherless_rose'), [
  'ABA',
  'DCD',
  'DDD'
 ], {
  A: 'reliquary:fertile_essence',
  B: 'kubejs:ponto_druida',
  C: 'minecraft:rose_bush',
  D: 'botania:ender_air_bottle'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('reliquary:midas_touchstone'), [
  'AAA',
  'DBD',
  'CCC'
 ], {
  A: 'minecraft:gold_block',
  B: 'enigmaticlegacy:golden_ring',
  C: 'enigmaticaddons:ichor_droplet',
  D: 'chemlib:gold'
 }).keepIngredient('enigmaticlegacy:golden_ring')
 event.shaped(Item.of('3x experienceobelisk:cognitive_flux'), [
  ' A ',
  'ABA',
  ' C '
 ], {
  A: 'minecraft:lapis_lazuli',
  B: 'kubejs:ponto_arcanista',
  C: 'minecraft:enchanted_book'
 })
 event.shaped(Item.of('experienceobelisk:molecular_metamorpher'), [
  'DEF',
  'ABA',
  'CCC'
 ], {
  A: 'experienceobelisk:cognitive_crystal',
  B: 'kubejs:ponto_arcanista',
  C: 'experienceobelisk:astute_assembly',
  D: 'experienceobelisk:cognitive_sword',
  E: 'experienceobelisk:enlightened_amulet',
  F: 'experienceobelisk:cognitive_pickaxe'
 }).keepIngredient('experienceobelisk:enlightened_amulet')
 event.shaped(Item.of('apotheosis:dormant_deepshelf'), [
  ' A ',
  'ABA',
  ' A '
 ], {
  B: 'experienceobelisk:primordial_assembly',
  A: 'experienceobelisk:bibliophage',
 })
 event.shaped(Item.of('hostilenetworks:deep_learner'), [
  'CAC',
  'CBC',
  'CDC'
 ], {
  B: 'kubejs:talisma_possessao',
  A: 'forbidden_arcanus:soul',
  C: 'mysticalagriculture:obsidian_essence',
  D: 'forbidden_arcanus:soul_extractor'
 })
 event.shaped(Item.of('16x hostilenetworks:prediction_matrix'), [
  'BC ',
  'CAC',
  ' CB' 
 ], {
  B: 'apotheosis:infused_breath',
  A: 'experienceobelisk:forgotten_dust',
  C: 'minecraft:glass'
 })
 event.shaped(Item.of('enigmaticlegacy:xp_scroll').strongNBT(), [
  'CAC',
  'DBD',
  'CDC' 
 ], {
  B: 'enigmaticlegacy:thicc_scroll',
  A: 'experienceobelisk:enlightened_amulet',
  C: 'minecraft:lapis_lazuli',
  D: 'experienceobelisk:forgotten_dust'
 })
 event.shaped(Item.of('enigmaticlegacy:heaven_scroll').strongNBT(), [
  'CAC',
  'DBD',
  'CDC' 
 ], {
  B: Item.of('enigmaticlegacy:xp_scroll').strongNBT(),
  A: 'forbidden_arcanus:soul',
  C: 'minecraft:dragon_breath',
  D: 'experienceobelisk:forgotten_dust'
 }).keepIngredient('enigmaticlegacy:xp_scroll')
 event.shaped(Item.of('enigmaticlegacy:fabulous_scroll').strongNBT(), [
  'CAC',
  'DBD',
  'CDC' 
 ], {
  B: Item.of('enigmaticlegacy:heaven_scroll').strongNBT(),
  A: 'experienceobelisk:enlightened_amulet',
  C: 'minecraft:dragon_head',
  D: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:warden"}}').strongNBT()
 })
 event.shaped(Item.of('enigmaticlegacy:darkest_scroll').strongNBT(), [
  'DDD',
  'DBD',
  'DDD' 
 ], {
  B: Item.of('enigmaticlegacy:thicc_scroll').strongNBT(),
  D: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:warden"}}').strongNBT()
 })
 event.shaped(Item.of('enigmaticlegacy:escape_scroll').strongNBT(), [
  ' A ',
  'DBD',
  ' A ' 
 ], {
  B: Item.of('enigmaticlegacy:thicc_scroll').strongNBT(),
  D: Item.of('minecraft:enchanted_book', {
    StoredEnchantments: [
        {
            id: 'minecraft:mending',
            lvl: 1
        }
    ]
 }).strongNBT(),
  A: 'experienceobelisk:bibliophage'
 })
 event.shaped(Item.of('apotheosis:augmenting_table'), [
  'BCD',
  'FAF',
  'GEG' 
 ], {
  A: Item.of('apotheosis:ender_library'),
  B: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:warden"}}').strongNBT(),
  C: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT(),
  D: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:elder_guardian"}}').strongNBT(),
  E: 'apotheosis:simple_reforging_table',
  F: 'minecraft:netherite_ingot',
  G: 'minecraft:crying_obsidian'
 })
 event.shapeless(Item.of('minecraft:arrow', 64),[
  'kubejs:ponto_atirador',
  'minecraft:flint',
  'minecraft:stick'
 ]) 
 event.shaped(Item.of('born_in_chaos_v1:pumpkin_pistol'), [
  'AAA',
  'BCD',
  'E  '
 ], {
  A: 'forbidden_arcanus:boom_arrow',
  B: 'minecraft:crossbow',
  C: 'kubejs:ponto_atirador',
  D: 'minecraft:copper_block',
  E: 'minecraft:stick'
 })
 event.shapeless(Item.of('born_in_chaos_v1:pumpkin_bullet', 32),[
  'kubejs:ponto_atirador',
  'minecraft:pumpkin'
 ]) 
 event.shapeless(Item.of('jeg:scrap', 9),[
  'jeg:scrap_block'
 ]) 
 event.shaped(Item.of('jeg:boohive'), [
  'CCC',
  'ABA',
  'AAA'
 ], {
  A: 'jeg:soul_treat',
  B: 'minecraft:beehive',
  C: 'kubejs:ponto_bruxo'
 })
 event.shaped(Item.of('cataclysm:wither_assault_shoulder_weapon'), [
  'AD ',
  'BCB',
  ' DA'
 ], {
  A: 'cataclysm:witherite_ingot',
  B: 'minecraft:gunpowder',
  C: 'pneumaticcraft:micromissiles',
  D: 'jeg:gunnite_ingot'
 })
 event.shaped(Item.of('pneumaticcraft:micromissiles'), [
  ' B ',
  'ACA',
  'ADA'
 ], {
  A: 'pneumaticcraft:plastic',
  B: 'minecraft:tnt',
  C: 'pneumaticcraft:printed_circuit_board',
  D: 'jeg:grenade'
 })
  // Cognition Recipes

  event.custom({
    type: 'experienceobelisk:molecular_metamorphosis', // Define the custom recipe type
    ingredient1: { item: 'minecraft:lapis_lazuli' },        // First ingredient
    count1: 3,                                         // Count of first ingredient
    ingredient2: { item: 'minecraft:book' },        // Second ingredient
    count2: 1,                                         // Count of second ingredient
    ingredient3: { item: 'kubejs:ponto_arcanista' },    // Third ingredient
    count3: 1,                                         // Count of third ingredient
    result: {
        item: 'experienceobelisk:cognitive_flux',             // Resulting item
        count: 6
    },
    cost: 100,                                       // Energy or cost of the process
    processTime: 60                                   // Time taken to process the recipe
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:lapis_lazuli' },        
  count1: 64,                                         
  ingredient2: { item: 'experienceobelisk:cognitive_crystal' },        
  count2: 5,                                         
  ingredient3: { item: 'kubejs:ponto_arcanista' },   
  count3: 10,                                         
  result: {
      item: 'experienceobelisk:experience_obelisk',             
      count: 1
  },
  cost: 2500,                                       
  processTime: 2000                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:lapis_lazuli' },        
  count1: 1,                                         
  ingredient2: { item: 'minecraft:iron_pickaxe' },        
  count2: 1,                                         
  ingredient3: { item: 'kubejs:ponto_arcanista' },   
  count3: 1,                                         
  result: {
      item: 'experienceobelisk:cognitive_pickaxe',             
      count: 1
  },
  cost: 250,                                       
  processTime: 200                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:lapis_lazuli' },        
  count1: 1,                                         
  ingredient2: { item: 'minecraft:iron_sword' },        
  count2: 1,                                         
  ingredient3: { item: 'kubejs:ponto_arcanista' },   
  count3: 1,                                         
  result: {
      item: 'experienceobelisk:cognitive_sword',             
      count: 1
  },
  cost: 250,                                       
  processTime: 200                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:lapis_lazuli' },        
  count1: 1,                                         
  ingredient2: { item: 'minecraft:iron_axe' },        
  count2: 1,                                         
  ingredient3: { item: 'kubejs:ponto_arcanista' },   
  count3: 1,                                         
  result: {
      item: 'experienceobelisk:cognitive_axe',             
      count: 1
  },
  cost: 250,                                       
  processTime: 200                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:lapis_lazuli' },        
  count1: 1,                                         
  ingredient2: { item: 'minecraft:iron_shovel' },        
  count2: 1,                                         
  ingredient3: { item: 'kubejs:ponto_arcanista' },   
  count3: 1,                                         
  result: {
      item: 'experienceobelisk:cognitive_shovel',             
      count: 1
  },
  cost: 250,                                       
  processTime: 200                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:enchanted_book' },        
  count1: 1,                                         
  ingredient2: { item: 'minecraft:bookshelf' },        
  count2: 8,                                         
  ingredient3: { item: 'experienceobelisk:forgotten_dust' },   
  count3: 8,                                         
  result: {
      item: 'experienceobelisk:enchanted_bookshelf',             
      count: 8
  },
  cost: 500,                                       
  processTime: 20*60                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: Item.of('minecraft:enchanted_book', {
    StoredEnchantments: [
        {
            id: 'minecraft:fire_protection',
            lvl: 4
        }
    ]
 }).strongNBT(),      
  count1: 1,                                         
  ingredient2: { item: 'minecraft:blaze_rod' },        
  count2: 2,                                         
  ingredient3: { item: 'experienceobelisk:forgotten_dust' },   
  count3: 2,                                         
  result: {
      item: 'apotheosis:hellshelf',             
      count: 4
  },
  cost: 500,                                       
  processTime: 20*60                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:lectern' },      
  count1: 1,                                         
  ingredient2: { item: 'apotheosis:blazing_hellshelf' },        
  count2: 2,                                         
  ingredient3: { item: 'apotheosis:glowing_hellshelf' },   
  count3: 2,                                         
  result: {
      item: 'apotheosis:library',             
      count: 1
  },
  cost: 1000,                                       
  processTime: 20*60                                   
 })

 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: Item.of('minecraft:enchanted_book', {
    StoredEnchantments: [
        {
            id: 'minecraft:fire_protection',
            lvl: 3
        }
    ]
 }).strongNBT(),      
  count1: 1,                                         
  ingredient2: { item: 'minecraft:flint_and_steel' },        
  count2: 1,                                         
  ingredient3: { item: 'experienceobelisk:bibliophage' },   
  count3: 2,                                         
  result: 
      Item.of('minecraft:enchanted_book', {
        StoredEnchantments: [
            {
                id: 'minecraft:fire_protection',
                lvl: 4
            }
        ]
     }).strongNBT(),       
      count: 1
  ,
  cost: 500,                                       
  processTime: 20*10                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:cod'},      
  count1: 1,                                         
  ingredient2: { item: 'minecraft:water_bucket' },        
  count2: 1,                                         
  ingredient3: { item: 'experienceobelisk:forgotten_dust' },   
  count3: 2,                                         
  result: {
      item: 'apotheosis:seashelf',             
      count: 2
  },
  cost: 500,                                       
  processTime: 20*60                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:cod'},      
  count1: 10,                                         
  ingredient2: { item: 'apotheosis:infused_seashelf' },        
  count2: 2,                                         
  ingredient3: { item: 'experienceobelisk:forgotten_dust' },   
  count3: 8,                                         
  result: {
      item: 'apotheosis:filtering_shelf',             
      count: 1
  },
  cost: 500,                                       
  processTime: 20*60                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'minecraft:quartz'},      
  count1: 16,                                         
  ingredient2: { item: 'apotheosis:deepshelf' },        
  count2: 2,                                         
  ingredient3: { item: 'experienceobelisk:forgotten_dust' },   
  count3: 32,                                         
  result: {
      item: 'forbidden_arcanus:soul_extractor',             
      count: 1
  },
  cost: 1000,                                       
  processTime: 20*60                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'experienceobelisk:primordial_assembly'},      
  count1: 1,                                         
  ingredient2: { item: 'forbidden_arcanus:soul' },        
  count2: 1,                                         
  ingredient3: { item: 'experienceobelisk:bibliophage' },   
  count3: 1,                                         
  result: {
      item: 'hostilenetworks:blank_data_model',             
      count: 1
  },
  cost: 100,                                       
  processTime: 20*3                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'experienceobelisk:primordial_assembly'},      
  count1: 16,                                         
  ingredient2: { item: 'minecraft:nether_star' },        
  count2: 16,                                         
  ingredient3: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT(),   
  count3: 16,                                         
  result: 
    {
      item: 'minecraft:dragon_head',
      count: 1
    },             
  cost: 5000,                                       
  processTime: 20*120                                   
 })
 event.custom({
  type: 'experienceobelisk:molecular_metamorphosis', 
  ingredient1: { item: 'experienceobelisk:cognitive_pickaxe'},      
  count1: 1,                                         
  ingredient2: { item: 'minecraft:enchanted_book' },        
  count2: 4,                                         
  ingredient3: { item: 'minecraft:diamond'},   
  count3: 3,                                         
  result: 
    Item.of('evilcraft:vengeance_pickaxe', '{Damage:0}').enchant('evilcraft:vengeance', 3).enchant('minecraft:fortune', 5),
    count: 1,             
  cost: 500,                                       
  processTime: 20*120                                   
 }) 

 // Powah
 event.recipes.powah.energizing(["kubejs:ponto_atirador", "minecraft:gold_ingot"], "4x powah:steel_energized", 10000)
 event.recipes.powah.energizing(["minecraft:water_bucket", "minecraft:iron_block"], "jeg:scrap_block", 24000)
 event.recipes.powah.energizing(["minecraft:flint_and_steel", "minecraft:tnt"], "64x minecraft:gunpowder", 90000)
 event.recipes.powah.energizing(["4x jeg:scrap_block", "born_in_chaos_v1:pumpkin_pistol", "powah:energized_steel_block"], "create:potato_cannon", 160000)
 event.recipes.powah.energizing(["jeg:scrap_block", "create:potato_cannon"], "create:potato_cannon", 10000)
 event.recipes.powah.energizing(["minecraft:carrot", "powah:blazing_crystal_block", "3x born_in_chaos_v1:pumpkin_bullet"], "64x minecraft:golden_carrot", 500000)
 event.recipes.powah.energizing(["powah:reactor_niotic", "create:potato_cannon", "twilightforest:magic_map_focus"], "jeg:revolver", 1000000)
 event.recipes.powah.energizing(["6x minecraft:cyan_dye"], "2x powah:crystal_niotic", 1000000)
 event.recipes.powah.energizing(["powah:uraninite_block"], "2x powah:crystal_spirited", 500000)
 event.recipes.powah.energizing(["cataclysm:ignitium_upgrade_smithing_template", "5x minecraft:golden_carrot"], "32x jeg:pistol_ammo", 1500000)
 event.recipes.powah.energizing(["powah:crystal_spirited", "5x jeg:pistol_ammo"], "32x jeg:rifle_ammo", 1500000)
 event.recipes.powah.energizing(["powah:crystal_niotic", "5x jeg:pistol_ammo"], "8x jeg:handmade_shell", 1500000)
 event.recipes.powah.energizing(["kubejs:ponto_atirador", "jeg:revolver", "jeg:handmade_shell"], "jeg:waterpipe_shotgun", 2000000)
 event.recipes.powah.energizing(["2x kubejs:ponto_atirador", "jeg:revolver", "jeg:handmade_shell"], "jeg:double_barrel_shotgun", 2000000)
 event.recipes.powah.energizing(["kubejs:ponto_atirador", "jeg:revolver", "jeg:pistol_ammo"], "jeg:custom_smg", 2000000)
 event.recipes.powah.energizing(["2x kubejs:ponto_atirador", "jeg:revolver", "jeg:rifle_ammo"], "jeg:semi_auto_rifle", 2000000)
 event.recipes.powah.energizing(["2x kubejs:ponto_atirador", "jeg:scrap_block"], "jeg:light_stock", 100000)
 event.recipes.powah.energizing(["2x kubejs:ponto_atirador", "2x jeg:scrap_block", "minecraft:bucket"], "jeg:extended_mag", 100000)
 event.recipes.powah.energizing(["powah:ender_core", "powah:crystal_blazing", "powah:energy_cell_starter", "minecraft:granite", "powah:steel_energized", "jeg:scrap_block"], "6x jeg:gunmetal_ingot", 500000)
 event.recipes.powah.energizing(["2x minecraft:green_dye", "jeg:gunmetal_ingot", "minecraft:tnt"], "jeg:grenade", 100000)
 event.recipes.powah.energizing(["2x jeg:gunmetal_ingot", "jeg:waterpipe_shotgun", "jeg:shotgun_shell", "powah:reactor_spirited", "minecraft:orange_dye"], "jeg:pump_shotgun", 2500000)
 event.recipes.powah.energizing(["jeg:gunmetal_ingot", "minecraft:red_dye", "jeg:handmade_shell"], "8x jeg:shotgun_shell", 1500000)
 event.recipes.powah.energizing(["2x jeg:gunmetal_ingot", "jeg:semi_auto_rifle", "jeg:rifle_ammo", "powah:reactor_spirited", "minecraft:orange_dye"], "jeg:assault_rifle", 2500000)
 event.recipes.powah.energizing(["2x kubejs:ponto_atirador", "jeg:gunmetal_ingot"], "jeg:light_grip", 100000)
 event.recipes.powah.energizing(["2x kubejs:ponto_atirador", "jeg:gunmetal_ingot", "minecraft:tripwire_hook", "minecraft:black_dye"], "jeg:holographic_sight", 100000)
 event.recipes.powah.energizing(["3x kubejs:ponto_atirador", "jeg:gunmetal_ingot", "2x minecraft:black_wool"], "jeg:silencer", 100000)
 event.recipes.powah.energizing(["4x chemlib:oganesson", "jeg:ectoplasm", "mekanism:block_uranium"], "powah:uraninite_block", 500000)
 event.recipes.powah.energizing(["jeg:brimstone_crystal", "2x jeg:ectoplasm", "2x jeg:gunmetal_ingot"], "2x jeg:gunnite_ingot", 3000000)
 event.recipes.powah.energizing(["chemlib:hydrochloric_acid", "chemlib:acetic_acid", "chemlib:phosphoric_acid", "3x jeg:raw_brimstone"], "6x jeg:brimstone_crystal", 500000)
 event.recipes.powah.energizing(["jeg:revolver", "jeg:ectoplasm", "jeg:gunnite_ingot"], "jeg:burst_rifle", 6000000)
 event.recipes.powah.energizing(["jeg:assault_rifle", "jeg:ectoplasm", "jeg:gunnite_ingot"], "jeg:combat_rifle", 6000000)
 event.recipes.powah.energizing(["jeg:semi_auto_rifle", "jeg:ectoplasm", "jeg:gunnite_ingot"], "jeg:bolt_action_rifle", 6000000)
 event.recipes.powah.energizing(["jeg:pump_shotgun", "jeg:ectoplasm", "jeg:gunnite_ingot"], "jeg:repeating_shotgun", 6000000)
 event.recipes.powah.energizing(["jeg:custom_smg", "jeg:ectoplasm", "jeg:gunnite_ingot"], "jeg:infantry_rifle", 6000000)
 event.recipes.powah.energizing(["jeg:custom_smg", "jeg:ectoplasm", "2x jeg:gunnite_ingot"], "jeg:service_rifle", 6000000)
 event.recipes.powah.energizing(["jeg:holographic_sight", "jeg:gunnite_ingot"], "jeg:telescopic_sight", 3000000)
 event.recipes.powah.energizing(["jeg:light_stock", "jeg:gunnite_ingot"], "jeg:weighted_stock", 3000000)
 event.recipes.powah.energizing(["jeg:light_grip", "jeg:gunnite_ingot"], "jeg:vertical_grip", 3000000)
 event.recipes.powah.energizing(["jeg:extended_mag", "jeg:gunnite_ingot"], "jeg:drum_mag", 3000000)
 event.recipes.powah.energizing(["reliquary:midas_touchstone","minecraft:netherite_ingot","mysticalagradditions:nether_star_crux", "jeg:gunnite_ingot"], "3x powah:crystal_nitro", 432000000)
 // Smelting
  event.smelting('3x minecraft:experience_bottle', 'kubejs:ponto_alquimista')
 // Create
 event.recipes.createMixing('jeg:blaze_round', [
  'jeg:rifle_ammo',
  'minecraft:blaze_rod'
 ]).superheated()

 event.recipes.createSequencedAssembly([ // start the recipe
  'kubejs:hollenfire_possessed' // have this item be a guaranteed output
 ], 'biomancy:unstable_compound', [ // 'create:brass_ingot' is the input.
 // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'kubejs:biomante_possessed']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'hostilenetworks:blank_data_model']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'powah:nitro_crystal_block']),
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'apotheosis:infused_breath']),
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'mythicbotany:alfsteel_template']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
 ]).transitionalItem('kubejs:materia_instavel').loops(1) // set the transitional item and the loops (amount of repetitions)

 event.recipes.createSequencedAssembly(['jeg:hollenfire_mk2'], 
  'kubejs:hollenfire_possessed', [ 
 event.recipes.createDeploying('kubejs:hollenfire_possessed', ['kubejs:hollenfire_possessed', 'jeg:blaze_round']),
 ]).transitionalItem('kubejs:hollenfire_possessed').loops(256)

 event.recipes.createSequencedAssembly([ 
  'kubejs:soulhunter_possessed' 
 ], 'biomancy:exotic_compound', [
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'kubejs:biomante_possessed']),
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'hostilenetworks:blank_data_model']), 
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'powah:nitro_crystal_block']),
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'apotheosis:infused_breath']),
  event.recipes.createDeploying('kubejs:materia_instavel', ['kubejs:materia_instavel', 'mythicbotany:alfsteel_template']),
 ]).transitionalItem('kubejs:materia_instavel').loops(1)

 event.recipes.createSequencedAssembly(['jeg:soulhunter_mk2'], 
  'kubejs:soulhunter_possessed', [ 
 event.recipes.createDeploying('kubejs:soulhunter_possessed', ['kubejs:soulhunter_possessed', 'jeg:blaze_round']),
 ]).transitionalItem('kubejs:soulhunter_possessed').loops(256)
 // Smithing
 event.smithing(
  'sons_of_sins:remnant_helmet',                     // arg 1: output
  'born_in_chaos_v1:dark_upgrade', // arg 2: the smithing template
  'minecraft:iron_helmet',                          // arg 3: the item to be upgraded
  'sons_of_sins:soul_steel'                            // arg 4: the upgrade item
 )
 event.smithing(
  'sons_of_sins:remnant_chestplate',           
  'born_in_chaos_v1:dark_upgrade', 
  'minecraft:iron_chestplate',                          
  'sons_of_sins:soul_steel'                            
 )
 event.smithing(
  'sons_of_sins:remnant_leggings',           
  'born_in_chaos_v1:dark_upgrade', 
  'minecraft:iron_leggings',                          
  'sons_of_sins:soul_steel'                            
 )
 event.smithing(
  'sons_of_sins:remnant_boots',           
  'born_in_chaos_v1:dark_upgrade', 
  'minecraft:iron_boots',                          
  'sons_of_sins:soul_steel'                            
 )
 // Biomancy
 event.custom({
  "type": "biomancy:bio_forging",
  "bio_forge_tab": "biomancy:misc",
  "ingredients": [{
      "count": 9,
      "item": "biomancy:flesh_bits"
    },{
      "count": 3,
      "item": "biomancy:mineral_fragment"
    },{
      "count": 3,
      "item": "biomancy:elastic_fibers"
    },{
      "count": 3,
      "item": "biomancy:tough_fibers"
    },{
      "count": 3,
      "item": "biomancy:living_flesh"
    }],
  "nutrientsCost": 50,
  "result": {
    "item": "kubejs:ponto_biomante"
  }}),
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:tools",
    "ingredients": [{
        "count": 8,
        "item": "biomancy:bone_fragments"
      },{
        "count": 1,
        "item": "kubejs:ponto_biomante"
      },{
        "count": 4,
        "item": "biomancy:elastic_fibers"
      },{
        "count": 1,
        "item": "minecraft:stone_pickaxe"
      }],
    "nutrientsCost": 50,
    "result": {
      "item": "sons_of_sins:osseous_pickaxe"
  }}),
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:tools",
    "ingredients": [{
        "count": 8,
        "item": "biomancy:bone_fragments"
      },{
        "count": 1,
        "item": "kubejs:ponto_biomante"
      },{
        "count": 4,
        "item": "biomancy:elastic_fibers"
      },{
        "count": 1,
        "item": "minecraft:stone_axe"
      }],
    "nutrientsCost": 50,
    "result": {
      "item": "sons_of_sins:osseous_axe"
  }}),
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:tools",
    "ingredients": [{
        "count": 8,
        "item": "biomancy:bone_fragments"
      },{
        "count": 1,
        "item": "kubejs:ponto_biomante"
      },{
        "count": 4,
        "item": "biomancy:elastic_fibers"
      },{
        "count": 1,
        "item": "minecraft:stone_sword"
      }],
    "nutrientsCost": 50,
    "result": {
      "item": "sons_of_sins:osseous_sword"
  }}),
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:tools",
    "ingredients": [{
        "count": 8,
        "item": "biomancy:bone_fragments"
      },{
        "count": 1,
        "item": "kubejs:ponto_biomante"
      },{
        "count": 4,
        "item": "biomancy:elastic_fibers"
      },{
        "count": 1,
        "item": "minecraft:stone_shovel"
      }],
    "nutrientsCost": 50,
    "result": {
      "item": "sons_of_sins:osseous_shovel"
  }}),
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:tools",
    "ingredients": [{
        "count": 8,
        "item": "biomancy:bone_fragments"
      },{
        "count": 1,
        "item": "kubejs:ponto_biomante"
      },{
        "count": 4,
        "item": "biomancy:elastic_fibers"
      },{
        "count": 1,
        "item": "minecraft:stone_hoe"
      }],
    "nutrientsCost": 50,
    "result": {
      "item": "sons_of_sins:osseous_hoe"
  }})
  event.custom({
    "type": "biomancy:digesting",
    "ingredient": {
      "item": "kubejs:ponto_biomante"
    },
    "result": {
      "item": "biomancy:nutrient_bar"
    },
    "nutrientsCost": 5,
    "processingTime": 200,
  }),
  event.custom({
    "type": "biomancy:digesting",
    "ingredient": {
      "item": "hexerei:animal_fat"
    },
    "result": {
      "count": 2,
      "item": "biomancy:nutrient_paste"
    },
    "nutrientsCost": 1,
    "processingTime": 20,
  }),
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:machines",
    "ingredients": [{
        "count": 8,
        "item": "sons_of_sins:crystallized_ether"
      },{
        "count": 4,
        "item": "kubejs:ponto_biomante"
      },{
        "count": 4,
        "item": "biomancy:toxin_extract"
      },{
        "count": 16,
        "item": "biomancy:exotic_dust"
      },{
        "count": 1,
        "item": "sons_of_sins:heart"
      }],
    "nutrientsCost": 100,
    "result": {
      "item": "biomancy:bio_lab"
  }})
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {
        "item": "born_in_chaos_v1:corpse_maggot"
      }
    ],
    "nutrientsCost": 1,
    "processingTime": 60,
    "reactant": {
      "item": "biomancy:vial"
    },
    "result": {
      "item": "biomancy:organic_compound"
    }
  })
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {
        "item": "sons_of_sins:osseous_pickaxe"
      },{
        "item": "sons_of_sins:heart"
      },{
        "item": "sons_of_sins:crystallized_ether"
      },
    ],
    "nutrientsCost": 150,
    "processingTime": 20*60,
    "reactant": {
      "item": "biomancy:rejuvenation_serum"
    },
    "result": {
      "item": "sons_of_sins:flesh_pickaxe"
    }
  })
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {
        "item": "sons_of_sins:osseous_axe"
      },{
        "item": "sons_of_sins:heart"
      },{
        "item": "sons_of_sins:crystallized_ether"
      },
    ],
    "nutrientsCost": 150,
    "processingTime": 20*60,
    "reactant": {
      "item": "biomancy:rejuvenation_serum"
    },
    "result": {
      "item": "sons_of_sins:flesh_axe"
    }
  })
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {
        "item": "sons_of_sins:osseous_sword"
      },{
        "item": "sons_of_sins:heart"
      },{
        "item": "sons_of_sins:crystallized_ether"
      },
    ],
    "nutrientsCost": 150,
    "processingTime": 20*60,
    "reactant": {
      "item": "biomancy:rejuvenation_serum"
    },
    "result": {
      "item": "sons_of_sins:flesh_sword"
    }
  })
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {
        "item": "sons_of_sins:osseous_shovel"
      },{
        "item": "sons_of_sins:heart"
      },{
        "item": "sons_of_sins:crystallized_ether"
      },
    ],
    "nutrientsCost": 150,
    "processingTime": 20*60,
    "reactant": {
      "item": "biomancy:rejuvenation_serum"
    },
    "result": {
      "item": "sons_of_sins:flesh_shovel"
    }
  })
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {
        "item": "sons_of_sins:osseous_hoe"
      },{
        "item": "sons_of_sins:heart"
      },{
        "item": "sons_of_sins:crystallized_ether"
      },
    ],
    "nutrientsCost": 150,
    "processingTime": 20*60,
    "reactant": {
      "item": "biomancy:rejuvenation_serum"
    },
    "result": {
      "item": "sons_of_sins:flesh_hoe"
    }
  })
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {
        "item": "mysticalagriculture:soulium_ingot"
      },
    ],
    "nutrientsCost": 1,
    "processingTime": 40,
    "reactant": {
      "item": "biomancy:cleansing_serum"
    },
    "result": {
      "item": "sons_of_sins:soul_steel"
    }
  })
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:tools",
    "ingredients": [{
        "count": 2,
        "item": "kubejs:biomante_primordial"
      },{
        "count": 1,
        "item": "sons_of_sins:golem_cuirass"
      },{
        "count": 1,
        "item": "sons_of_sins:flesh_sword"
      },{
        "count": 1,
        "item": "sons_of_sins:flesh_axe"
      }],
    "nutrientsCost": 200,
    "result": {
      "item": "sons_of_sins:ether_sword"
  }})
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:tools",
    "ingredients": [{
        "count": 3,
        "item": "kubejs:biomante_primordial"
      },{
        "count": 1,
        "item": "sons_of_sins:golem_cuirass"
      },{
        "count": 1,
        "item": "sons_of_sins:flesh_shovel"
      },{
        "count": 1,
        "item": "sons_of_sins:flesh_pickaxe"
      },{
        "count":1,
        "item": "sons_of_sins:flesh_hoe"
      }],
    "nutrientsCost": 200,
    "result": {
      "item": "sons_of_sins:shape_shifting_tool"
  }})
  event.custom({
    "type": "biomancy:bio_forging", "bio_forge_tab": "biomancy:blocks",
    "ingredients": [{
        "count": 3,
        "item": "kubejs:biomante_primordial"
      },{
        "count": 9,
        "item": "born_in_chaos_v1:corpse_maggot"
      },{
        "count": 1,
        "item": "biomancy:flesh"
      }],
    "nutrientsCost": 200, "result": {"item": "biomancy:primal_orifice"}
  })
  event.custom({
    "type": "biomancy:bio_forging", "bio_forge_tab": "biomancy:blocks",
    "ingredients": [{
        "count": 3,
        "item": "kubejs:biomante_primordial"
      },{
        "count": 9,
        "item": "minecraft:shroomlight"
      },{
        "count": 1,
        "item": "ars_nouveau:source_berry_pie"
      }],
    "nutrientsCost": 200, "result": {"item": "biomancy:primal_bloom"}
  })
  event.custom({
    "type": "biomancy:bio_forging", "bio_forge_tab": "biomancy:blocks",
    "ingredients": [{
        "count": 3,
        "item": "kubejs:biomante_primordial"
      },{
        "count": 9,
        "item": "biomancy:tendon_chain"
      },{
        "count": 1,
        "item": "biomancy:flesh"
      }],
    "nutrientsCost": 20, "result": {"item": "biomancy:malignant_flesh_veins"}
 })
 event.custom({
  "type": "biomancy:decomposing",
  "ingredient": {
    "count": 1,
    "item": "evilcraft:dark_gem"
  },
  "nutrientsCost": 1,
  "processingTime": 90,
  "results": [
    {
      "countRange": {
        "type": "constant",
        "value": 2
      },
      "item": "biomancy:gem_fragments"
    },
    {
      "countRange": {
        "type": "uniform",
        "max": 1,
        "min": 0
      },
      "item": "biomancy:withering_ooze"
    },
  ]
 })
 event.custom({
  "type": "biomancy:decomposing",
  "ingredient": {
    "count": 1,
    "item": "evilcraft:dark_gem"
  },
  "nutrientsCost": 1,
  "processingTime": 90,
  "results": [
    {
      "countRange": {
        "type": "constant",
        "value": 1
      },
      "item": "biomancy:exotic_dust"
    },
  ]
 })
 event.custom({
  "type": "biomancy:decomposing",
  "ingredient": {
    "count": 1,
    "item": "kubejs:biomante_primordial"
  },
  "nutrientsCost": 10,
  "processingTime": 20*10,
  "results": [
    {
      "countRange": {
        "type": "constant",
        "value": 1
      },
      "item": "forbidden_arcanus:obsidian_with_iron"
    },
  ]
 })
 // Occultism
 event.recipes.occultism.spirit_fire('hexerei:willow_sapling', 'occultism:otherworld_sapling_natural')
 event.recipes.occultism.spirit_fire('hexerei:witch_hazel_sapling', 'hexerei:willow_sapling')
 event.recipes.occultism.spirit_fire('hexerei:mahogany_sapling', 'hexerei:witch_hazel_sapling')
 event.recipes.occultism.ritual(
   '2x enigmaticlegacy:ender_rod',
   [
    "minecraft:blaze_rod",
    "minecraft:blaze_rod",
    "minecraft:ender_pearl",
    "enigmaticlegacy:astral_dust",
    "enigmaticlegacy:astral_dust",
   ],
   'kubejs:ponto_bruxo',
   'occultism:summon_foliot'
 ).dummy('occultism:ritual_dummy/custom_ritual')
 event.recipes.occultism.ritual(
  'enigmaticlegacy:extradimensional_eye',
  [
   "minecraft:blaze_powder",
   "minecraft:blaze_powder",
   "minecraft:ender_eye",
   "minecraft:gold_ingot",
   "minecraft:gold_ingot",
  ],
  'kubejs:ponto_bruxo',
  'occultism:summon_foliot'
).dummy('occultism:ritual_dummy/custom_ritual')
event.recipes.occultism.ritual(
  'ars_nouveau:abjuration_essence',
  [
   "minecraft:sugar",
   "minecraft:spider_eye"
  ],
  'kubejs:ponto_bruxo',
  'occultism:summon_foliot'
 ).dummy('occultism:ritual_dummy/custom_ritual')
 event.custom({
  "type": "occultism:ritual",
  "activation_item": {
    "item": "occultism:otherworld_essence"
  },
  "pentacle_id": "occultism:summon_djinni",
  "entity_to_sacrifice": {
    "tag": "forge:chicken",
    "display_name": "ritual.occultism.sacrifice.chicken"
  },
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/custom_ritual"
  },
  "ingredients": [
    {
      "item": "minecraft:apple"
    }
  ],
  "result": {
    "item": "kubejs:ponto_bruxo"
  }})
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "minecraft:emerald_block"
    },
    "pentacle_id": "occultism:possess_afrit",
    "entity_to_sacrifice": {
      "tag": "forge:villagers",
      "display_name": "Villager"
    },
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/custom_ritual"
    },
    "ingredients": [
     {"item": "kubejs:ponto_bruxo"},
     {"item": "enigmaticlegacy:extradimensional_eye"},
     {"item": "enigmaticlegacy:earth_heart"},
     {"item": "enigmaticaddons:ichor_droplet"},
     {"item": "enigmaticlegacy:astral_dust"}
    ],
    "result": {
    "item": "minecraft:totem_of_undying"
  }
  })
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:otherworld_essence"
    },
    "pentacle_id": "occultism:summon_afrit",
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/custom_ritual"
    },
    "ingredients": [
      {"item": "kubejs:ponto_bruxo"},
      {"item": "hexerei:mahogany_sapling"},
      {"item": "hexerei:mandrake_root"},
      {"item": "hexerei:dried_sage"},
      {"item": "hexerei:belladonna_flowers"},
      {"item": "hexerei:bottle_of_blood"}
      
    ],
    "result": {
      "item": "enigmaticlegacy:earth_heart"
    }})
  event.recipes.occultism.ritual(
    '3x enigmaticaddons:ichor_droplet',
    [
      "minecraft:ghast_tear",
      "minecraft:ghast_tear",
      "minecraft:gold_block",
      "minecraft:gold_ore",
      "hexerei:gold_rings",
    ],
    'kubejs:ponto_bruxo',
    'occultism:summon_djinni'
  ).dummy('occultism:ritual_dummy/custom_ritual')
  event.recipes.occultism.ritual(
    'enigmaticaddons:pure_heart',
    [
     "enigmaticaddons:ichor_droplet",
     "enigmaticaddons:ichor_droplet",
     "minecraft:glowstone_dust",
     "minecraft:glowstone_dust",
     "minecraft:ender_eye",
     "enigmaticlegacy:ender_rod"
    ],
    'enigmaticlegacy:earth_heart',
    'occultism:summon_marid'
  ).dummy('occultism:ritual_dummy/custom_ritual')
  event.recipes.occultism.ritual(
    'enigmaticlegacy:twisted_heart',
    [
     "minecraft:nether_star",
     "minecraft:wither_skeleton_skull",
     "minecraft:carved_pumpkin",
     "hexerei:moon_dust",
     "biomancy:bloomberry"
    ],
    'enigmaticlegacy:earth_heart',
    'occultism:summon_marid'
  ).dummy('occultism:ritual_dummy/custom_ritual')
  event.recipes.occultism.ritual(
    'enigmaticlegacy:cosmic_heart',
    [
     "minecraft:nether_star",
     "minecraft:wither_skeleton_skull",
     "minecraft:carved_pumpkin",
     "hexerei:moon_dust",
     "biomancy:bloomberry"
    ],
    'kubejs:bruxo_possessed',
    'occultism:summon_marid'
  ).dummy('occultism:ritual_dummy/custom_ritual')
  event.recipes.occultism.ritual(
    'enigmaticlegacy:the_twist',
    [
     "minecraft:netherite_ingot",
     "kubejs:talisma_ares",
     "enigmaticlegacy:twisted_heart",
     "enigmaticlegacy:twisted_heart",
     "hexerei:moon_dust_brush",
     "enigmaticlegacy:enchanters_pearl"
    ],
    'enigmaticlegacy:the_acknowledgment',
    'occultism:bind_marid'
  ).dummy('occultism:ritual_dummy/custom_ritual')
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "minecraft:netherite_ingot"
    },
    "pentacle_id": "occultism:possess_afrit",
    "entity_to_sacrifice": {
      "tag": "forge:villagers",
      "display_name": "Villager"
    },
    "ritual_dummy": {
      "item": "occultism:ritual_dummy/custom_ritual"
    },
    "ingredients": [
     {"item": "enigmaticlegacy:evil_essence"},
     {"item": "enigmaticlegacy:evil_essence"},
     {"item": "enigmaticlegacy:evil_essence"},
     {"item": "enigmaticlegacy:evil_essence"},
     {"item": "enigmaticlegacy:twisted_heart"},
     {"item": "occultism:iesnium_block"},

    ],
    "result": {
    "item": "enigmaticlegacy:evil_ingot"
  }
  })
  event.recipes.occultism.crushing('enigmaticlegacy:astral_dust', 'minecraft:amethyst_shard')
})
