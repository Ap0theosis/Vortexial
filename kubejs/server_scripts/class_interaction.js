// Arcanista
BlockEvents.rightClicked('minecraft:grindstone', event => {
    if (event.player.getHeldItem('main_hand').id === 'experienceobelisk:astute_assembly') {
        event.block.set('experienceobelisk:precision_dispeller');
        event.item.count-- 
        event.cancel()
    }
});
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
BlockEvents.leftClicked('minecraft:spawner', event => {
    if (!event.player.stages.has('arcanista')) {
        event.player.tell('§cSomente Arcanistas podem extrair este artefato.');
        event.cancel();
    }
});
// Blocos
BlockEvents.broken('minecraft:brewing_stand', event => {
    event.block.set('minecraft:blaze_rod')
    event.cancel()
})
BlockEvents.broken('minecraft:enchanting_table', event => {
    event.block.set('minecraft:blaze_rod')
    event.cancel()
})

//ciencia

ItemEvents.entityInteracted('experienceobelisk:primordial_assembly', event =>{
  
  if (event.target.type == 'minecraft:zombie'){
    event.item.count-- 
    event.target.kill()
    event.player.give('experienceobelisk:bibliophage')
    event.cancel()
  }
})


BlockEvents.rightClicked('experienceobelisk:infected_enchanted_bookshelf', event => {
    if (event.player.getHeldItem('off_hand').id === 'experienceobelisk:cognitive_axe') {  
      event.player.give('1x experienceobelisk:bibliophage');
      event.block.set('experienceobelisk:enchanted_bookshelf'); 
      event.cancel()
    }
})