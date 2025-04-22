ServerEvents.recipes(event => { 
    event.stonecutting('create:large_water_wheel', 'kubejs:tech_t1')
    event.stonecutting('2x create:water_wheel','kubejs:tech_t1')
    event.stonecutting('4x create:gearbox','kubejs:tech_t1')
    event.stonecutting('4x create:depot','kubejs:tech_t1')
    event.stonecutting('create:deployer','kubejs:tech_t1')
    event.stonecutting('8x create:large_cogwheel','kubejs:tech_t1')
    event.stonecutting('16x create:cogwheel','kubejs:tech_t1')
    event.stonecutting('create:spout','kubejs:tech_t1')
    event.stonecutting('32x create:shaft','kubejs:tech_t1')
    event.stonecutting('4x create:basin','kubejs:tech_t1')
    event.stonecutting('4x create:chute','kubejs:tech_t1')
    event.stonecutting('2x create:smart_chute','kubejs:tech_t2')
    event.stonecutting('create:stockpile_switch','kubejs:tech_t2')
    event.stonecutting('3x create:mechanical_crafter','kubejs:tech_t2')
    event.stonecutting('2x create:redstone_link','kubejs:tech_t1')
    event.shaped(Item.of('mekanism:basic_chemical_tank'), [
        'DAD',
        'ABA',
        'DAD' 
       ], {
        D: Item.of('minecraft:redstone'),
        A: Item.of('mekanism:ingot_osmium'),
        B: Item.of('kubejs:ponto_quimico')
       })
       event.shaped(Item.of('create:cogwheel'), [
        ' A ',
        'ABA',
        ' A ' 
       ], {
        A: Item.of('minecraft:stick'),
        B: Item.of('minecraft:smooth_stone')
       })

    event.recipes.createMixing('create:brass_ingot', [
        'kubejs:tech_t1',
        'kubejs:tech_t1',
        'create:zinc_ingot',
        'minecraft:copper_ingot',
    ]).heated()
    event.recipes.createMixing('36x pneumaticcraft:ingot_iron_compressed', [
        'kubejs:tech_t3b',
        'minecraft:iron_block',
        'minecraft:iron_block',
        'minecraft:iron_block',
        'minecraft:iron_block',
        'minecraft:tnt',
    ]).heated()
    event.recipes.createMixing('12x minecraft:tuff', [
        'minecraft:cobblestone',
        'minecraft:dirt',
        'minecraft:gravel',
        'minecraft:clay',
        'minecraft:sand',
        'kubejs:tech_t1',

    ]).heated()
    event.recipes.createCompacting('createaddition:diamond_grit', [
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
        '#minecraft:coals',
    ]).superheated()
    event.recipes.createEmptying(['biomesoplenty:small_rose_quartz_bud', Fluid.of('thermal:redstone', 1000)], 'create:rose_quartz')
    event.recipes.createFilling('biomesoplenty:medium_rose_quartz_bud', ['biomesoplenty:small_rose_quartz_bud', Fluid.of('thermal:redstone', 250)])
    event.recipes.createFilling('biomesoplenty:large_rose_quartz_bud', ['biomesoplenty:medium_rose_quartz_bud', Fluid.of('thermal:redstone', 250)])
    event.recipes.createFilling('biomesoplenty:rose_quartz_cluster', ['biomesoplenty:large_rose_quartz_bud', Fluid.of('thermal:redstone', 250)])
    event.recipes.createFilling('2x create:rose_quartz', ['biomesoplenty:rose_quartz_cluster', Fluid.of('thermal:redstone', 250)])
    event.recipes.createDeploying('create:cinder_flour', ['minecraft:netherrack', 'minecraft:iron_pickaxe']).keepHeldItem(),
    event.recipes.createSequencedAssembly(['kubejs:tech_t1'], 
    'create:andesite_casing', [ 
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:ponto_mecanico']).keepHeldItem(),
    ]).transitionalItem('kubejs:receita').loops(1)
    event.recipes.createSequencedAssembly(['thermal:rf_coil'], 
    'create:rose_quartz', [ 
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:gold_nugget']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:redstone'])
    ]).transitionalItem('kubejs:receita').loops(4)
    event.recipes.thermal.smelter('thermal:enderium_ingot', ['minecraft:iron_ingot', 'minecraft:ender_pearl', 'create:powdered_obsidian']).energy(10000)
    event.recipes.createSequencedAssembly(['kubejs:tech_t2'], 
        'kubejs:tech_t1', [ 
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:tech_t1']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:tech_t1']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:tech_t1']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:brass_casing']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:electron_tube']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'createaddition:diamond_grit']),
    ]).transitionalItem('kubejs:receita').loops(1)
    event.recipes.createSequencedAssembly(['kubejs:tech_t2.5'], 
        'kubejs:tech_t2', [ 
        event.recipes.createFilling('kubejs:receita', ['kubejs:receita', Fluid.of('minecraft:lava', 250)]),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'thermal:rf_coil']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:iron_ingot']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:powdered_obsidian']),
        event.recipes.createFilling('kubejs:receita', ['kubejs:receita', Fluid.of('minecraft:water', 250)]),
    ]).transitionalItem('kubejs:receita').loops(1)
    event.recipes.createSequencedAssembly(['kubejs:tech_t3'], 
        'kubejs:tech_t2', [ 
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:tech_t2']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:tech_t2']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'kubejs:tech_t2']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'mekanism:steel_casing']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'mekanism:energy_tablet']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'thermal:enderium_ingot']),
    ]).transitionalItem('kubejs:receita').loops(1)
    event.recipes.createSequencedAssembly(['kubejs:tech_t3b'], 
        'kubejs:tech_t2', [ 
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:black_valve_handle']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:precision_mechanism']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:copper_backtank']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'thermal:bitumen_block']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'thermal:enderium_ingot']),
    ]).transitionalItem('kubejs:receita').loops(1)
    event.recipes.createSequencedAssembly(['mekanism:metallurgic_infuser'], 
        'kubejs:tech_t2.5', [ 
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'mekanism:ingot_osmium']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'thermal:signalum_ingot']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'minecraft:furnace']),
    ]).transitionalItem('kubejs:receita').loops(4)
    event.recipes.createSequencedAssembly(['create:precision_mechanism'], 
        'kubejs:tech_t1', [ 
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:receita', ['kubejs:receita', 'create:large_cogwheel']),
    ]).transitionalItem('kubejs:receita').loops(4)


})
const tech1Blocks = [
    'create:encased_fan',
    'mekanism:metallurgic_infuser'

]
BlockEvents.rightClicked(tech1Blocks, event => {
    if (!event.player.stages.has('tech1')) {
        event.player.tell('§cAcho que nem você sabe o que está fazendo.');
        event.cancel();
    }
})
BlockEvents.broken(tech1Blocks, event => {
    if (!event.player.stages.has('tech1')) {
        event.player.tell('§cEpa! Não esbarre nisso novamente.');
        event.cancel();
    }
})
let tech1Items = [
    ['kubejs:ponto_mecanico'],['create:andesite_tunnel'],['create:andesite_funnel'],['create:brass_funnel'],['create:brass_tunnel'],
    ['kubejs:tech_t1'],['kubejs:tech_t2'],['create:chute'],['create:smart_chute'],['kubejs:tech_t2.5'],['kubejs:tech_t3'],['kubejs:tech_t3b']
];
tech1Items.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    if (!event.player.stages.has('tech1')) {
    event.player.tell(Text.red("Que objeto estranho esse que você tentou pegar..."));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  }})
})
BlockEvents.leftClicked('create:andesite_casing', event => {
    if (event.player.getHeldItem('main_hand').id === 'create:cogwheel') {
        if (event.player.getHeldItem('off_hand').id === 'kubejs:ponto_mecanico') {
            event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'create:crafter_click', 'master', 1, 1);
            event.player.tell('§dInteressante...');
            event.player.give('kubejs:tech_t1');
            event.player.getHeldItem('main_hand').count --;
            event.block.set("minecraft:air")
            
            event.cancel();
        }
    }
});
