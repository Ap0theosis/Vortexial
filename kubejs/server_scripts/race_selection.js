
//talvez FTBQuestEvents

ServerEvents.customCommand('scaleDwarf', event => {
	// diminui proporcoes do player, ajusta movimentacao
  event.player.runCommandSilent('scale persist set true @s')
  event.player.runCommandSilent('scale set pehkui:base 0.6 @s')
  event.player.runCommandSilent('scale set pehkui:width 1.5 @s')
  event.player.runCommandSilent('scale set pehkui:motion 1.8 @s')

})

ServerEvents.customCommand('scaleElf', event => {
	// aumenta proporcoes do player
  event.player.runCommandSilent('scale persist set true @s')
  event.player.runCommandSilent('scale set pehkui:base 1.5 @s')
  event.player.runCommandSilent('scale set pehkui:width 0.7 @s')
  //event.player.runCommandSilent('scale set pehkui:reach 1.4 @s') talvez?

})

ServerEvents.customCommand('scaleGnome', event => {
	// aumenta proporcoes do player
  event.player.runCommandSilent('scale persist set true @s')
  event.player.runCommandSilent('scale set pehkui:base 1.5 @s')
  event.player.runCommandSilent('scale set pehkui:width 0.7 @s')
  //event.player.runCommandSilent('scale set pehkui:reach 1.4 @s') talvez?

})