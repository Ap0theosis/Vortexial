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
  event.shaped('mysticalagriculture:soulium_spawner', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'kubejs:ponto_agricultor',
    B: 'kubejs:ponto_bruxo'
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
    ' B ',
    ' A ',
    ' B '
  ], {
    A: 'enigmaticlegacy:iron_ring',
    B: 'kubejs:ponto_alquimista'
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
    'ABA',
    'ACA',
    'BDB'
  ], {
    A: 'minecraft:gunpowder',
    B: 'enigmaticlegacy:golden_ring',
    C: 'minecraft:netherite_ingot',
    D: 'minecraft:nether_star'
  })
  
  // Smelting
  event.smelting('3x minecraft:experience_bottle', 'kubejs:ponto_alquimista')

  // Remoção
  event.remove({ output: 'industrialforegoing:hydroponic_bed' })
  event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
  event.remove({ output: 'mysticalagriculture:infusion_altar' })
  event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
  event.remove({ output: 'mysticalagriculture:prosperity_seed_base' })
  event.remove({ output: 'mysticalagriculture:prosperity_gemstone' })
  event.remove({ output: 'mysticalagriculture:prosperity_ingot' })
  event.remove({ output: 'mysticalagriculture:infusion_crystal' })
  event.remove({ output: 'mysticalagriculture:tertium_essence' })
  event.remove({ output: 'mysticalagriculture:imperium_essence' })
  event.remove({ output: 'mysticalagriculture:supremium_essence' })
  event.remove({ output: 'mysticalagriculture:air_agglomeratio' })
  event.remove({ output: 'mysticalagriculture:earth_agglomeratio' })
  event.remove({ output: 'mysticalagriculture:water_agglomeratio' })
  event.remove({ output: 'mysticalagriculture:fire_agglomeratio' })
  event.remove({ output: 'mysticalagriculture:tinkering_table' })
  event.remove({ output: 'mysticalagriculture:unattuned_augment' })
  event.remove({ output: 'mysticalagriculture:inferium_helmet' })
  event.remove({ output: 'mysticalagriculture:inferium_chestplate' })
  event.remove({ output: 'mysticalagriculture:inferium_leggings' })
  event.remove({ output: 'mysticalagriculture:inferium_boots' })
  event.remove({ output: 'mysticalagriculture:machine_frame' })
  event.remove({ output: 'mysticalagriculture:enchanter' })
  event.remove({ output: 'mysticalagriculture:soulium_spawner' })
  event.remove({ output: 'thermal:machine_insolator' })
  event.remove({ output: 'bloodmagic:sacrificialdagger' })
  event.remove({ output: 'bloodmagic:bloodaltar' })
  event.remove({ output: 'reliquary:apothecary_mortar' })
  event.remove({ output: 'enigmaticlegacy:golden_ring' })
  event.remove({ output: 'reliquary:alkahestry_tome' })

})