# Задача для Aider: KubeJS скрипт совместимости для Big Globe (NeoForge 1.21.1)

Контекст:
- В папке bigglobe_src находится исходный код мода генератора Big Globe.
- Целевой файл: kubejs/server_scripts/bigglobe_auto_compat.js

Проблема:
В мире Big Globe не генерируются сторонние модовые руды (UNDERGROUND_ORES) и растения/декорации (VEGETAL_DECORATION), так как генератор игнорирует или не содержит стандартных тегов биомов для Biome Modifiers.

Что нужно сделать:
1. Изучи исходники в bigglobe_src (особенно регистрацию биомов, их ResourceKey и классы генератора/декораций).
2. Напиши в kubejs/server_scripts/bigglobe_auto_compat.js полностью динамический скрипт на синтаксисе KubeJS 1.21.1 (ServerEvents.tags):
   - Найди все биомы мода Big Globe (по его modid/namespace).
   - Автоматически зарегистрируй их во все стандартные оверворлд-теги: #minecraft:is_overworld, #c:is_overworld, #forge:is_overworld, а также в базовые теги климата (температура/влажность).
   - Скрипт должен быть полностью автономным: не зашивай жестко названия сторонних модов, чтобы любые новые моды на руды и флору сразу подхватывались миром Big Globe.