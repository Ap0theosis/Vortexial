// Arcanista
let shelfItems = [
    ['apotheosis:seashelf'],
    ['apotheosis:hellshelf']
    
];

shelfItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    if (!event.player.stages.has('shelfs') ) {
    event.player.tell(Text.red("Ué?! Acho que você não é um arcanista habilidoso o suficiente ainda pra manusear isso..."));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  }})
})
BlockEvents.rightClicked('minecraft:grindstone', event => {
    if (event.player.getHeldItem('main_hand').id === 'experienceobelisk:astute_assembly') {
        event.block.set('experienceobelisk:precision_dispeller');
        event.item.count-- 
        event.cancel()
    }
});
BlockEvents.rightClicked('experienceobelisk:infected_enchanted_bookshelf', event => {
    if (event.player.getHeldItem('off_hand').id === 'experienceobelisk:cognitive_axe') {  
      event.player.give('1x experienceobelisk:bibliophage');
      event.block.set('experienceobelisk:enchanted_bookshelf'); 
      event.cancel()
    }
});
ItemEvents.entityInteracted('experienceobelisk:primordial_assembly', event =>{
  
    if (event.target.type == 'minecraft:zombie'){
      event.item.count-- 
      event.target.kill()
      event.player.give('experienceobelisk:bibliophage')
      event.cancel()
    }
})
// Biomante
ItemEvents.entityInteracted('biomancy:living_flesh', event =>{
  
    if (event.target.type == 'born_in_chaos_v1:maggot'){
      event.item.count-- 
      event.target.kill()
      event.player.give('biomancy:vial')
      event.cancel()
    }
})
BlockEvents.rightClicked('biomancy:primordial_cradle', event =>{
    if (event.player.getHeldItem('main_hand').id === 'kubejs:ponto_biomante'){
     if (event.player.stages.has('biomante2')) {
        if (event.player.getHeldItem('main_hand').id === 'kubejs:ponto_biomante') {  
            event.item.count-- 
            event.player.give('kubejs:biomante_primordial'); 
            event.player.tell('§dSua oferenda foi aceita...')
            event.cancel()
        }}
    else event.player.tell('§cVocê não possui afinidade o suficiente!')}
})
// Bruxo
BlockEvents.rightClicked('minecraft:cauldron', event => {
    if (event.player.getHeldItem('main_hand').id === 'kubejs:ponto_bruxo') {
        event.block.set('hexerei:mixing_cauldron');
        event.item.count-- 
        event.player.tell('§dVocê amaldiçoou este caldeirão com sucesso...')
        event.cancel()
    }
});
// Chef
BlockEvents.rightClicked('minecraft:furnace', event => {
    if (event.player.getHeldItem('main_hand').id === 'kubejs:ponto_cozinheiro') {
        event.block.set('minecraft:smoker');
        event.item.count-- 
        event.player.tell('§dAgora sim! Um verdadeiro escritório para um verdadeiro Chefe')
        event.cancel()
    }
});
let chefItems = [
    ['farmersdelight:flint_knife'],
    ['farmersdelight:iron_knife'],
    ['farmersdelight:golden_knife'],
    ['farmersdelight:diamond_knife'],
    ['farmersdelight:netherite_knife'],
    ['farmersdelight:fried_egg']
];

chefItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    if (!event.player.stages.has('chef') && !event.player.stages.has('farmer')) {
    event.player.tell(Text.red("Ai! Você não sabe manusear isso, ou talvez você deixou isso passar do ponto... Que pena!"));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  }})
})
let gunItems = [
    ['pneumaticcraft:micromissiles'],
    ['jeg:atlantean_spear'],
    ['jeg:holy_shotgun'],
    ['jeg:grenade'],
    ['jeg:rifle_ammo'],
    ['jeg:pistol_ammo'],
    ['jeg:blaze_round'],
    ['jeg:shotgun_shell'],
    ['jeg:typhoonee']
    
];

gunItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    if (!event.player.stages.has('atirador') ) {
    event.player.tell(Text.red("Oh não! Você disparou esse objeto mas parece que quebrou ele..."));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  }})
})
// Druida
let druidItems = [
    ['botania:white_petal'],['botania:orange_petal'],['botania:magenta_petal'],['botania:light_blue_petal'],
    ['botania:yellow_petal'],['botania:lime_petal'],['botania:pink_petal'],['botania:gray_petal'],
    ['botania:light_gray_petal'],['botania:cyan_petal'],['botania:purple_petal'],['botania:blue_petal'],
    ['botania:brown_petal'],['botania:green_petal'],['botania:red_petal'],['botania:black_petal'],
    ['botania:white_mushroom'],['botania:orange_mushroom'],['botania:magenta_mushroom'],['botania:light_blue_mushroom'],
    ['botania:yellow_mushroom'],['botania:lime_mushroom'],['botania:pink_mushroom'],['botania:gray_mushroom'],
    ['botania:light_gray_mushroom'],['botania:cyan_mushroom'],['botania:purple_mushroom'],['botania:blue_mushroom'],
    ['botania:brown_mushroom'],['botania:green_mushroom'],['botania:red_mushroom'],['botania:black_mushroom'],['botania:lexicon'],
    ['kubejs:ponto_druida']
];

druidItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    if (!event.player.stages.has('druid')) {
    event.player.tell(Text.red("As forças da natureza rejeitam seu espírito! Só druidas podem carregar isso."));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  }})
})
// Quimico

// Bloqueios de Classe
BlockEvents.rightClicked('minecraft:brewing_stand', event => {   
    if (!event.player.stages.has('alquimista') && !event.player.stages.has('bruxo')) {
       event.player.tell('§cEi! Você não faz ideia de como faz uma poção, deixe isso para Alquimistas e Bruxos!');
       event.cancel();
    }
});
BlockEvents.rightClicked('minecraft:enchanting_table', event => {
    if (!event.player.stages.has('arcanista')) {
       event.player.tell('§cVocê não possui o conhecimento necessário para liberar o potencial dos artefatos, vá falar com um Arcanista!');
       event.cancel();
    }
});
BlockEvents.rightClicked('occultism:golden_sacrificial_bowl', event => {
    if (!event.player.stages.has('bruxo')) {
       event.block.set('occultism:golden_sacrificial_bowl')
       event.player.tell('§cNão toque nisso, espírito tolo!');
       event.cancel();
    }
});
BlockEvents.rightClicked('occultism:sacrificial_bowl', event => {
    if (!event.player.stages.has('bruxo')) {
       event.block.set('occultism:sacrificial_bowl')
       event.player.tell('§cNão toque nisso, espírito tolo!');
       event.cancel();
    }
});
BlockEvents.rightClicked('hexerei:mixing_cauldron', event => {
    if (!event.player.stages.has('bruxo')) {
       event.player.tell('§cUm caldeirão arrepiante com uma aura sombria, é melhor não tocar nisso...');
       event.cancel();
    }
});
BlockEvents.rightClicked('experienceobelisk:precision_dispeller', event => {
    if (!event.player.stages.has('arcanista')) {
       event.player.tell('§cVocê não possui o conhecimento necessário para liberar o potencial dos artefatos, vá falar com um Arcanista!');
       event.cancel();
    }
});
BlockEvents.rightClicked('experienceobelisk:molecular_metamorpher', event => {
    if (!event.player.stages.has('arcanista')) {
       event.player.tell('§cVocê não possui o conhecimento necessário para liberar o potencial dos artefatos, vá falar com um Arcanista!');
       event.cancel();
    }
});
BlockEvents.rightClicked('experienceobelisk:experience_obelisk', event => {
    if (!event.player.stages.has('arcanista')) {
       event.player.tell('§cVocê não possui o conhecimento necessário para liberar o potencial dos artefatos, vá falar com um Arcanista!');
       event.cancel();
    }
});
BlockEvents.rightClicked('minecraft:spawner', event => {
    if (!event.player.stages.has('arcanista')) {
       event.player.tell('§cOps! Você achou que sabia como usar um spawner, mas acabou quebrando ele... Já pensou em ser um Arcanista?');
       event.block.set('minecraft:air')
       event.cancel();
    }
});

BlockEvents.rightClicked('lootr:lootr_chest', event => {
    if (!event.player.stages.has('arqueologo')) {
        event.player.tell('§cEste tesouro... está trancado de uma forma que só Arqueólogos conhecem.');
        event.cancel();
     }
});
BlockEvents.rightClicked('lootr:lootr_barrel', event => {
    if (!event.player.stages.has('arqueologo')) {
        event.player.tell('§cEste tesouro... está trancado de uma forma que só Arqueólogos conhecem.');
        event.cancel();
     }
});
BlockEvents.rightClicked('lootr:lootr_inventory', event => {
    if (!event.player.stages.has('arqueologo')) {
        event.player.tell('§cEste tesouro... está trancado de uma forma que só Arqueólogos conhecem.');
        event.cancel();
     }
});
BlockEvents.rightClicked('lootr:lootr_trapped_chest', event => {
    if (!event.player.stages.has('arqueologo')) {
        event.player.tell('§cEste tesouro... está trancado de uma forma que só Arqueólogos conhecem.');
        event.cancel();
     }
});
BlockEvents.rightClicked('lootr:lootr_shulker', event => {
    if (!event.player.stages.has('arqueologo')) {
        event.player.tell('§cEste tesouro... está trancado de uma forma que só Arqueólogos conhecem.');
        event.cancel();
     }
});
BlockEvents.rightClicked('powah:energizing_orb', event => {
    if (!event.player.stages.has('atirador')) {
        event.player.tell('§cSomente Atiradores dominam a arte da montagem de armas!');
        event.cancel();
     }
});
BlockEvents.rightClicked('biomancy:decomposer', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEca!');
        event.cancel();
     }
});
BlockEvents.rightClicked('biomancy:bio_forge', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEca!');
        event.cancel();
     }
});
BlockEvents.rightClicked('biomancy:digester', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEca!');
        event.cancel();
     }
});
BlockEvents.rightClicked('biomancy:bio_lab', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEca!');
        event.cancel();
     }
});
BlockEvents.rightClicked('biomancy:fleshkin_chest', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEca!');
        event.cancel();
     }
});
ItemEvents.canPickUp('occultism:datura_seeds', event => {
    if (!event.player.stages.has('bruxo')) {
       event.cancel()
    }
});
ItemEvents.canPickUp('occultism:datura', event => {
    if (!event.player.stages.has('bruxo')) {
       event.cancel()
    }
});
BlockEvents.rightClicked('minecraft:smoker', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cVocê sente um cheiro de padaria nostálgico e decide não mexer onde não deve...');
        event.cancel();
     }
});
BlockEvents.rightClicked('farmersdelight:cooking_pot', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cVocê sente um cheiro de cozinha nostálgico e decide não mexer onde não deve...');
        event.cancel();
     }
});
BlockEvents.rightClicked('farmersdelight:skillet', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cVocê sente um cheiro de cozinha nostálgico e decide não mexer onde não deve...');
        event.cancel();
     }
});
BlockEvents.rightClicked('farmersdelight:stove', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cVocê sente um cheiro de cozinha nostálgico e decide não mexer onde não deve...');
        event.cancel();
     }
});
const smithBlocks = [
    'apotheosis:simple_reforging_table',
    'apotheosis:reforging_table',
    'minecraft:anvil',
    'minecraft:chipped_anvil',
    'minecraft:damaged_anvil',
    'cataclysm:mechanical_fusion_anvil',
    'minecraft:smithing_table',
    'apotheosis:salvaging_table',
    'apotheosis:gem_cutting_table'
]
BlockEvents.rightClicked(smithBlocks, event => {
    if (!event.player.stages.has('smith')) {
        event.player.tell('§cSkill issue!');
        event.cancel();
    }
})
const chemBlocks = [
    'alchemistry:compactor',
    'alchemistry:atomizer',
    'alchemistry:liquifier',
    'alchemistry:combiner',
    'alchemistry:dissolver',
    'alchemistry:fission_chamber_controller',
    'alchemistry:fusion_chamber_controller'
]
BlockEvents.rightClicked(chemBlocks, event => {
    if (!event.player.stages.has('chem')) {
        event.player.tell('§cMesmo se você pudesse usar isso, não teria ideia de como.');
        event.cancel();
    }
})

// Broken
BlockEvents.broken(smithBlocks, event => {
    if (!event.player.stages.has('smith')) {
        event.player.tell('§cNão toque nessas ferramentas!');
        event.cancel();
    }
})
BlockEvents.broken('minecraft:brewing_stand', event => {
    if (!event.player.stages.has('alquimista') && !event.player.stages.has('bruxo')) {
        event.player.tell('§cSomente Alquimistas e Bruxos podem extrair este equipamento.');
        event.cancel();
    }
})
BlockEvents.broken('minecraft:enchanting_table', event => {
    if (!event.player.stages.has('arcanista')) {
        event.player.tell('§cSomente Arcanistas podem extrair este artefato.');
        event.cancel();
    }
})
BlockEvents.broken('minecraft:spawner', event => {
    if (!event.player.stages.has('arcanista')) {
        event.player.tell('§cSomente Arcanistas podem extrair este artefato.');
        event.cancel();
    }
});
BlockEvents.broken('experienceobelisk:precision_dispeller', event => {
    if (!event.player.stages.has('arcanista')) {
       event.player.tell('§cSomente Arcanistas podem extrair este artefato.');
       event.cancel();
    }
});
BlockEvents.broken('powah:energizing_orb', event => {
    if (!event.player.stages.has('atirador')) {
        event.player.tell('§cComo que tira esse treco?! Talvez um Atirador saiba.');
        event.cancel();
    }
});
BlockEvents.broken('biomancy:decomposer', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEssa coisa não sai!');
        event.cancel();
     }
});
BlockEvents.broken('biomancy:bio_forge', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEssa coisa não sai!');
        event.cancel();
     }
});
BlockEvents.broken('biomancy:digester', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEssa coisa não sai!');
        event.cancel();
     }
});
BlockEvents.broken('biomancy:bio_lab', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEssa coisa não sai!');
        event.cancel();
     }
});
BlockEvents.broken('biomancy:fleshkin_chest', event => {
    if (!event.player.stages.has('biomante')) {
        event.player.tell('§cEssa coisa não sai!');
        event.cancel();
     }
});
BlockEvents.broken('hexerei:mixing_cauldron', event => {
    if (!event.player.stages.has('bruxo')) {
        event.player.tell('§cUm Bruxo assombrou este caldeirão!');
        event.cancel();
    }
})
BlockEvents.broken('minecraft:smoker', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cDeveria ser crime estragar a cozinha de um Chefe!');
        event.cancel();
     }
});
BlockEvents.broken('farmersdelight:cooking_pot', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cDeveria ser crime estragar a cozinha de um Chefe!');
        event.cancel();
     }
});
BlockEvents.broken('farmersdelight:skillet', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cDeveria ser crime estragar a cozinha de um Chefe!');
        event.cancel();
     }
});
BlockEvents.broken('farmersdelight:stove', event => {
    if (!event.player.stages.has('chef')) {
        event.player.tell('§cDeveria ser crime estragar a cozinha de um Chefe!');
        event.cancel();
     }
}); 
BlockEvents.broken(chemBlocks, event => {
    if (!event.player.stages.has('chem')) {
        event.player.tell('§cEste equipamento é caríssimo! Não toque.');
        event.cancel();
    }
})
ItemEvents.foodEaten('minecraft:rotten_flesh', event => {
 event.entity.runCommandSilent(`effect give @s born_in_chaos_v1:myiasis 60 1`)
});