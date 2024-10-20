// Arcanista
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
ItemEvents.entityInteracted('biomancy:living_flash', event =>{
  
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
BlockEvents.rightClicked('minecraft:spawner', event => {
    if (!event.player.stages.has('arcanista')) {
       event.player.tell('§cOps! Você achou que sabia como usar um spawner, mas acabou quebrando ele... Já pensou em ser um Arcanista?');
       event.block.set('minecraft:blaze_rod')
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
// Broken
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