// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')
ServerEvents.recipes(event => {
event.remove({ output: 'createendertransmission:fluid_transmitter' })
event.remove({ output: 'createendertransmission:item_transmitter' })
event.remove({ output: 'createendertransmission:energy_transmitter' })
event.remove({ output: 'createendertransmission:chunk_loader' })
event.remove({ output: 'bigglobe:private_waypoint' })
// Еврейский Жид. передатчик
  event.recipes.create.mechanical_crafting('2x createendertransmission:fluid_transmitter', [
    'OOUOO',
    'OEPEO',
    'OPSPO',
    'OEPEO',
    'OOUOO'
  ], {
    O: 'minecraft:obsidian',
	E: 'minecraft:ender_pearl',
	P: 'create:precision_mechanism',
	S: 'minecraft:nether_star',
	U: 'create:mechanical_pump'
  })
// Предметный передатчик
  event.recipes.create.mechanical_crafting('2x createendertransmission:item_transmitter', [
    'OOUOO',
    'OEPEO',
    'OPSPO',
    'OEPEO',
    'OOUOO'
  ], {
    O: 'minecraft:obsidian',
	E: 'minecraft:ender_pearl',
	P: 'create:precision_mechanism',
	S: 'minecraft:nether_star',
	U: 'create:chute'
  })
// Энергетический передатчик
  event.recipes.create.mechanical_crafting('2x createendertransmission:energy_transmitter', [
    'OOUOO',
    'OEPEO',
    'OPSPO',
    'OEPEO',
    'OOUOO'
  ], {
    O: 'minecraft:obsidian',
	E: 'minecraft:ender_pearl',
	P: 'create:precision_mechanism',
	S: 'minecraft:nether_star',
	U: 'create:shaft'
  })
// Прогрузчик Чанков
  event.recipes.create.mechanical_crafting('createendertransmission:chunk_loader', [
    'OOOOO',
    'OVVVO',
    'OVSVO',
    'OVCVO',
    'OBBBO'
  ], {
    O: 'minecraft:glass',
	C: 'minecraft:heart_of_the_sea',
	B: 'minecraft:obsidian',
	S: 'minecraft:nether_star',
	V: 'bigglobe:voidmetal_ingot'
  })
event.shaped(
  Item.of('bigglobe:private_waypoint'), // arg 1: output
  [
    ' B ',
    'BAB', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'sophisticatedcore:ender_linker',
    B: '#bigglobe:aura_bottles'
  }
)
})