ServerEvents.recipes(event => {
    // Array of items to remove by output
    const itemsToRemoveByOutput = [
        'enigmaticlegacy:unholy_stone',
        'enigmaticlegacy:evil_ingot',
        'enigmaticlegacy:cosmic_heart',
        'enigmaticlegacy:the_twist',
        'enigmaticlegacy:twisted_heart',
        'enigmaticaddons:pure_heart',
        'ars_nouveau:abjuration_essence',
        'enigmaticlegacy:insignia',
        'enigmaticlegacy:extradimensional_eye',
        'industrialforegoing:hydroponic_bed',
        'mysticalagriculture:infusion_pedestal',
        'mysticalagriculture:infusion_altar',
        'mysticalagriculture:prosperity_seed_base',
        'mysticalagriculture:prosperity_gemstone',
        'mysticalagriculture:prosperity_ingot',
        'mysticalagriculture:infusion_crystal',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagriculture:air_agglomeratio',
        'mysticalagriculture:earth_agglomeratio',
        'mysticalagriculture:water_agglomeratio',
        'mysticalagriculture:fire_agglomeratio',
        'mysticalagriculture:tinkering_table',
        'mysticalagriculture:unattuned_augment',
        'mysticalagriculture:inferium_helmet',
        'mysticalagriculture:inferium_chestplate',
        'mysticalagriculture:inferium_leggings',
        'mysticalagriculture:inferium_boots',
        'mysticalagriculture:machine_frame',
        'mysticalagriculture:enchanter',
        'mysticalagriculture:soulium_spawner',
        'thermal:machine_insolator',
        'bloodmagic:sacrificialdagger',
        'bloodmagic:bloodaltar',
        'reliquary:apothecary_mortar',
        'enigmaticlegacy:golden_ring',
        'reliquary:alkahestry_tome',
        'reliquary:lantern_of_paranoia',
        'minecraft:popped_chorus_fruit',
        'apotheosis:potion_charm',
        'reliquary:fertile_essence',
        'reliquary:infernal_claw',
        'reliquary:fertile_lily_pad',
        'reliquary:fertile_potion',
        'reliquary:void_tear',
        'reliquary:infernal_tear',
        'reliquary:alkahestry_altar',
        'reliquary:glowing_water',
        'reliquary:empty_potion_vial',
        'reliquary:magicbane',
        'bloodmagic:altar',
        'reliquary:angelheart_vial',
        'reliquary:witherless_rose',
        'born_in_chaos_v1:potion_of_rampage',
        'reliquary:midas_touchstone',
        'mysticalagriculture:inferium_seeds',
        'apotheosis:ender_lead',
        'experienceobelisk:experience_jelly',
        'enigmaticlegacy:the_acknowledgment',
        'pneumaticcraft:memory_stick',
        'reliquary:hero_medallion',
        'reliquary:fortune_coin',
        'mob_grinding_utils:entity_spawner',
        'bloodmagic:experiencebook',
        'mysticalagriculture:experience_capsule',
        'thermal:xp_crystal',
        'mob_grinding_utils:tank_sink',
        'evilcraft:blook',
        'evilcraft:invigorating_pendant',
        'evilcraft:primed_pendant',
        'minecraft:brewing_stand',
        'minecraft:enchanting_table',
        'experienceobelisk:cognitive_flux',
        'experienceobelisk:experience_obelisk',
        'experienceobelisk:molecular_metamorpher',
        'experienceobelisk:precision_dispeller',
        'experienceobelisk:cognitive_axe',
        'experienceobelisk:cognitive_shovel',
        'experienceobelisk:bibliophage',
        'apotheosis:hellshelf',
        'apotheosis:seashelf',
        'experienceobelisk:enchanted_bookshelf',
        'experienceobelisk:archivers_bookshelf',
        'apotheosis:library',
        'apotheosis:filtering_shelf',
        'apotheosis:dormant_deepshelf',
        'hostilenetworks:blank_data_model',
        'hostilenetworks:deep_learner',
        'forbidden_arcanus:soul_extractor',
        'hostilenetworks:prediction_matrix',
        'enigmaticlegacy:xp_scroll',
        'enigmaticlegacy:heaven_scroll',
        'enigmaticlegacy:fabulous_scroll',
        'enigmaticlegacy:escape_scroll',
        'apotheosis:augmenting_table',
        'evilcraft:vengeance_pickaxe',
        'minecraft:dragon_head',
        'mekanism:flamethrower',
        'born_in_chaos_v1:pumpkin_bullet',
        'powah:steel_energized',
        'create:potato_cannon',
        'powah:crystal_niotic',
        'powah:crystal_spirited',
        'powah:crystal_nitro',
        'pneumaticcraft:micromissiles',
        'cataclysm:wither_assault_shoulder_weapon',
        'biomancy:bio_lab',
        'biomancy:vial',
        'sons_of_sins:soul_steel',
        'sons_of_sins:remnant_helmet',
        'sons_of_sins:remnant_chestplate',
        'sons_of_sins:remnant_leggings',
        'sons_of_sins:remnant_boots',
        'evilcraft:dark_block',
        'evilcraft:burning_gem_stone',
        'evilcraft:blood_infusion_core',
        'apotheosis:diamond_mining_arrrow',
        'apotheosis:iron_mining_arrrow',
        'enigmaticlegacy:infinimeal',
        'hexerei:animal_fat',
        'hexerei:mixing_cauldron',
        'enigmaticlegacy:ender_rod'
    ];

    // Remove all outputs from the list above
    itemsToRemoveByOutput.forEach(item => {
        event.remove({ output: item });
    });

    // Array of items to remove by ID
    const itemsToRemoveById = [
        'apotheosis:hellshelf',
        'apotheosis:seashelf'
    ];

    itemsToRemoveById.forEach(id => {
        event.remove({ id: id });
    });

 // Substituições
    const replacements = [
        { from: 'minecraft:bookshelf', to: 'experienceobelisk:bibliophage' },
        { from: 'powah:dielectric_casing', to: 'kubejs:ponto_atirador' },
        { from: 'powah:dielectric_paste', to: 'jeg:scrap' },
        { from: 'biomancy:living_flesh', to: 'kubejs:ponto_biomante' },
        { from: 'biomancy:primordial_core', to: 'kubejs:ponto_biomante' },
        { from: 'biomancy:primal_orifice', to: 'kubejs:biomante_primordial' },
        { from: 'evilcraft:dark_gem', to: 'biomancy:bloomberry' },
        { from: 'evilcraft:dark_block', to: 'biomancy:bloomlight' },
        { from: 'evilcraft:dark_gem_crushed', to: 'biomancy:acid_bucket' },
        { from: 'evilcraft:dark_power_gem', to: 'forbidden_arcanus:obsidian_with_iron' },
        { from: 'enigmaticlegacy:void_stone', to: 'kubejs:ponto_bruxo' },
        { from: 'hexerei:animal_fat', to: 'occultism:tallow' }
    ];

    replacements.forEach(replacement => {
        event.replaceInput({ input: replacement.from }, replacement.from, replacement.to);
    });
    
 // Remover por Input
    const inputRemovals = [
        'hostilenetworks:overworld_prediction',
        'hostilenetworks:nether_prediction',
        'hostilenetworks:end_prediction',
        'hostilenetworks:twilight_prediction',
        '#sons_of_sins:is_osseous'
    ];
    inputRemovals.forEach(input => {
        event.remove({ input: input });
    });
 // Remover por Mod
    event.remove({ mod: 'jeg' });
});

// Banimentos
let bannedItems = [[
    'evilcraft:broom', 
]];

bannedItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    event.player.tell(Text.red("O Vortex absorveu este item da sua posse."));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  })
})

// Drops (NÃO FUNCIONA AINDA)
let bannedDrops = [
    'mysticalagriculture:inferium_essence',
    'hexerei:animal_fat'
];

EntityEvents.drops(event => {
    event.drops.forEach(drop => {
        if (bannedDrops.includes(drop.id)) {
            drop.remove(); 
        }
    });
});