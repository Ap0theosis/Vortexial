ServerEvents.recipes(event => { 
    event.shaped(Item.of('forbidden_arcanus:processed_obsidian_block').strongNBT(), [
        'DDD',
        'DBD',
        'DDD' 
       ], {
        B: Item.of('minecraft:crying_obsidian'),
        D: Item.of('mysticalagriculture:amethyst_essence')
    })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:amethyst_block",
            "minecraft:amethyst_block",
            "minecraft:amethyst_block",
            "minecraft:book",
            "minecraft:diamond",
        ],
        "ars_nouveau:magebloom_fiber", 
        "kubejs:ponto_mago", 
        1000,
    );
	event.custom({
  "type": "ars_nouveau:glyph",
  "count": 1,
  "exp": 27,
  "inputItems": [
    {
      "item": {
        "item": "kubejs:ponto_mago"
      }
    }
  ],
  "output": "ars_nouveau:glyph_amplify"
})
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {"item": "minecraft:stick"},
        "output": "ars_nouveau:dowsing_rod",
        "pedestalItems": [
          { "item": {"item": "minecraft:lapis_lazuli"}},
          { "item": {"item": "minecraft:glass"}},
          { "item": {"item": "ars_nouveau:source_gem"}}
        ],
        "source": 500
    })
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {"item": "mysticalagriculture:amethyst_essence"},
        "output": "ars_nouveau:wilden_horn",
        "pedestalItems": [
          { "item": {"item": "minecraft:bone_block"}},
          { "item": {"item": "minecraft:bone_block"}},
          { "item": {"item": "minecraft:bone_block"}}
        ],
        "source": 500
    })
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {"item": "mysticalagriculture:amethyst_essence"},
        "output": "ars_nouveau:wilden_spike",
        "pedestalItems": [
          { "item": {"item": "minecraft:copper_ore"}},
          { "item": {"item": "minecraft:copper_ore"}},
          { "item": {"item": "minecraft:copper_ore"}}
        ],
        "source": 500
    })
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {"item": "mysticalagriculture:amethyst_essence"},
        "output": "ars_nouveau:wilden_wing",
        "pedestalItems": [
          { "item": {"item": "minecraft:coal_ore"}},
          { "item": {"item": "minecraft:coal_ore"}},
          { "item": {"item": "minecraft:coal_ore"}}
        ],
        "source": 500
    })
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {"item": "mysticalagriculture:amethyst_essence"},
        "output": "minecraft:chorus_fruit",
        "pedestalItems": [
          { "item": {"item": "minecraft:apple"}},
          { "item": {"item": "minecraft:apple"}},
          { "item": {"item": "minecraft:apple"}}
        ],
        "source": 500
    })
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {"item": "mysticalagriculture:amethyst_essence"},
        "output": "minecraft:crying_obsidian",
        "pedestalItems": [
          { "item": {"item": "minecraft:obsidian"}},
          { "item": {"item": "minecraft:obsidian"}},
          { "item": {"item": "minecraft:obsidian"}}
        ],
        "source": 1000
    })
    event.custom({
        "type": "ars_nouveau:book_upgrade",
        "pattern":
        [
          "   ",
          " y ",
          "   "
        ],
        "key": {
          "y": {
            "item": "ars_nouveau:spell_book"
          }
        },
        "ingredients": [
          {
            "item": "ars_nouveau:novice_spell_book"
          },
          {
            "item": "minecraft:obsidian"
          },
          {
            "item": "kubejs:ponto_mago"
          },
          {
            "item": "kubejs:ponto_mago"
          },
          {
            "item": "kubejs:ponto_mago"
          },
          {
            "item": "minecraft:quartz_block"
          },
          {
            "item": "minecraft:quartz_block"
          },
          {
            "item": "minecraft:blaze_rod"
          },
          {
            "item": "minecraft:blaze_rod"
          }
        ],
        "result":
        {
          "item": "ars_nouveau:apprentice_spell_book"
        }
    })
    event.custom({
        "type": "ars_nouveau:book_upgrade",
        "ingredients": [
          {
            "item": "ars_nouveau:apprentice_spell_book"
          },
          {
            "item": "minecraft:nether_star"
          },
          {
            "item": "ars_nouveau:wilden_tribute"
          },
          {
            "item": "forbidden_arcanus:processed_obsidian_block"
          },
          {
            "item": "forbidden_arcanus:processed_obsidian_block"
          },
          {
            "item": "forbidden_arcanus:processed_obsidian_block"
          },
          {
            "item": "forbidden_arcanus:processed_obsidian_block"
          },
          {
            "item": "forbidden_arcanus:processed_obsidian_block"
          },
          {
            "item": "minecraft:totem_of_undying"
          }
        ],
        "result": {
          "item": "ars_nouveau:archmage_spell_book"
        }
      })
    event.recipes.ars_nouveau.crush(
        "minecraft:amethyst_block", // input block
        [
            Item.of("mysticalagriculture:amethyst_essence").withChance(1.0),
//            { item: Item.of("minecraft:sand").withChance(1.0), maxRolls: 4 }
        ] // loot table
        // true // drop the item in world?
    );
})
const mageBlocks = [
    'ars_nouveau:scribes_table',
    'ars_nouveau:enchanting_apparatus',
    'ars_nouveau:arcane_platform',
    'ars_nouveau:arcane_pedestal',
    'ars_nouveau:storage_lectern',
    'ars_nouveau:alteration_table',
    'ars_nouveau:mob_jar',
    'ars_nouveau:imbuement_chamber'

]
BlockEvents.rightClicked(mageBlocks, event => {
    if (!event.player.stages.has('mage')) {
        event.player.tell('§cVocê não sabe a senha de mago!');
        event.cancel();
    }
})
BlockEvents.broken(mageBlocks, event => {
    if (!event.player.stages.has('mage')) {
        event.player.tell('§cUma aura repele sua tentativa inútil.');
        event.cancel();
    }
})
let mageItems = [
    ['ars_nouveau:novice_spell_book'],['ars_nouveau:apprentice_spell_book'],['ars_nouveau:archmage_spell_book'],['ars_nouveau:caster_tome']
];
mageItems.forEach((pair) => {
  PlayerEvents.inventoryChanged(pair[0], event => {
    if (!event.player.stages.has('mage')) {
    event.player.tell(Text.red("Este item é exclusivo da legião de Magos! Confiscado por uma mão mágica."));
    event.player.inventory.removeItem(event.getSlot(), event.item.count);
    event.player.inventory.clear(pair[0]);
  }})
})
BlockEvents.leftClicked('ars_nouveau:scribes_table', event => {
    if (event.player.getHeldItem('main_hand').id === 'ars_nouveau:worn_notebook') {
        if (event.player.getHeldItem('off_hand').id === 'ars_nouveau:source_gem') {
            event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:entity.dolphin.death', 'master', 1, 1);
            event.player.tell('§dVocê é abençoado com a senha mágica dos Magos! Hahahaha! Bem-vindo(a) a Legião!');
            event.player.give('ars_nouveau:novice_spell_book');
            event.player.getHeldItem('main_hand').count --;
            event.player.getHeldItem('off_hand').count --;
            event.cancel();
        }
    }
});
