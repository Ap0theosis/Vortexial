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
// Bloqueios de Classe
BlockEvents.rightClicked('minecraft:brewing_stand', event => {   
    if (!event.player.stages.has('alquimista')) {
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

// Broken
BlockEvents.broken('minecraft:brewing_stand', event => {
    if (!event.player.stages.has('alquimista')) {
        event.player.tell('§cSomente Alquimistas podem extrair este equipamento.');
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





