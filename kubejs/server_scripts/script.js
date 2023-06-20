// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here'

	event.remove({output: "haghogs_military_uniform:military_uniform_armor_helmet"})
	event.remove({output: "haghogs_military_uniform:military_uniform_armor_chestplate"})
	event.remove({output: "haghogs_military_uniform:military_uniform_armor_leggings"})
	event.remove({output: "haghogs_military_uniform:military_uniform_armor_boots"})
	event.remove({output: "haghogs_military_uniform:bulletproofvest_helmet"})
	event.remove({output: "haghogs_military_uniform:bulletproofvest_chestplate"})
	event.remove({output: "haghogs_military_uniform:bulletproofvest_leggings"})
	event.remove({output: "haghogs_military_uniform:bulletproofvest_boots"})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})