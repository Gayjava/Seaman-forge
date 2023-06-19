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

	event.shaped('1x vs_clockwork:physics_infuser', [
		'TET',
		'EBE',
		'TET'
	  ], {
		B: 'create_sa:brass_cube',
		T: 'create:railway_casing',
		E: 'create_sa:heap_of_experience'
	})

	event.shaped('1x vs_clockwork:physics_infuser', [
		'CPC',
		'SAS',
		'CPC'
	  ], {
		C: 'create:copper_casing',
		P: 'minecraft:piston',
		S: 'create:shaft',
		A: 'vs_clockwork:afterblazer'
	})

	event.shaped('1x vs_clockwork:bluperglue', [
		'BS',
		'NB'
	  ], {
		B: 'vs_clockwork:bluuguu',
		S: 'create:iron_sheet',
		N: 'minecraft:iron_nugget'
	})

	event.shaped('1x vs_clockwork:wing', [
		'WS'
	  ], {
		W: 'create:sail_frame',
		S: 'create:iron_sheet'
	})

	event.shaped('1x vs_clockwork:flap', [
		'W'
	  ], {
		W: 'vs_clockwork:wing'
	})

	event.shaped('1x vs_clockwork:wing', [
		'W'
	  ], {
		W: 'vs_clockwork:flap'
	})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})