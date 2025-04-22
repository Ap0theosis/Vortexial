EntityEvents.spawned(event => {
    if (event.entity.type === 'minecraft:player' && event.level.dimension === 'twilightforest:twilight_forest') {
     if (!event.entity.stages.has('apollo')) {     
         event.server.scheduleInTicks(20*3, () => {
            event.entity.tell(Text.red("Você não possui a benção de Apolo para visitar este reino.")),  
            event.entity.runCommand(`spawn`)})
        }
        else
        event.entity.tell("§dApolo lhe abençoa...")
       
    }
})
BlockEvents.broken('ae2:sky_stone_block', event => {
    if (!event.player.stages.has('atena')) {
        event.player.tell('§cVocê precisa da benção de atena para acessar estes segredos!');
        event.cancel();
    }
})
let tpItems = [
    ['mekanism:teleportation_core'],
    ['ars_nouveau:warp_scroll'],
    ['bloodmagic:teleposerfocus'],
    ['waystones:waystone'],
    ['waystones:mossy_waystone'],
    ['waystones:sandy_waystone'],
    ['waystones:warp_stone'],
    ['waystones:warp_plate']
];
tpItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    if (!event.player.stages.has('hermes')) {
    event.player.tell(Text.red("Opa! Você sente um jato de vento te furtando, provavelmente foi Hermes."));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  }})
})
BlockEvents.rightClicked('waystones:waystone', event => {
    if (!event.player.stages.has('hermes')) {
        event.player.tell('§cUm caduceu brilha e repele sua mão, você acha esse símbolo familiar');
        event.cancel();
     }
});
BlockEvents.rightClicked('waystones:mossy_waystone', event => {
    if (!event.player.stages.has('hermes')) {
        event.player.tell('§cUm caduceu brilha e repele sua mão, você acha esse símbolo familiar');
        event.cancel();
     }
});
BlockEvents.rightClicked('waystones:sandy_waystone', event => {
    if (!event.player.stages.has('hermes')) {
        event.player.tell('§cUm caduceu brilha e repele sua mão, você acha esse símbolo familiar');
        event.cancel();
     }
});
BlockEvents.broken(tpItems, event => {
    if (!event.player.stages.has('hermes')) {
        event.player.tell('§cEstranho... Assim que você quebrou alguém muito rápido colocou de volta!');
        event.cancel();
    }
})