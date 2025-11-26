- `Race` - race
  **Basic Units**
  This is used in AI build orders

- `Unit Worker` - SCV
- `Unit Detector` - AI will use it wen needs detection - Raven, Observer
- `Unit Transport` - AI will always keep at least 1 transport unit - Medivac
- `Unit Supply` - SupplyDepot
- `Unit Refinery` - Refinery
- `Unit Power` - pylon
- `Unit TownHall` - CommandCenter
- `Unit StaticDetector` - AI will build it at each base if needs detection - MissileTurret
- `Unit StaticDefense`- AI will build it if think that towm needs defenses - MissileTurret, Bunker
- `Unit Radar` - if defined AI will build it in the base corner - SensorTower
- `Unit Production` - ai will build multiple production buildings of each type
- `Unit Tech` - ai will build onlt 1 tech building of each type
- `Unit Creep` - creep generation - Creep Tumor
- `Unit Support`\*- AI will always keep at least 1 support unit - WarpPrism
- `Unit Guard`\*- AI will build guards at each base, and in case of emenrgency - Queen
- `Unit Larva`\*- ai will not try to build this units - Larva

**Army Units**
used for better army composition generation. AI will order different unit tiers depend on game stage and prefer Air in air build type.
- `Unit Combat Ground Tier1`
- `Unit Combat Ground Tier2`
- `Unit Combat Ground Tier3`
- `Unit Combat Ground Tier4`
- `Unit Combat Air Tier1`
- `Unit Combat Air Tier2`
- `Unit Combat Air Tier3`
- `Unit Combat Air Tier4`

**Upgrades**
used for better upgrades research order generation. AI will order different upgrade tiers depend on game stage
- `Upgrades Tier0`
- `Upgrades Tier1`
- `Upgrades Tier2`
- `Upgrades Tier3`

**Scout Settings**
Scounting settings
- `Unit AirScout` - priority scout - Medivac
- `Unit GroundScout`\*- units which cab be used as scout in early game - zergling
- `Unit EarlyDefenseScout`\*- scouting when AI feels itself in danger in early game - Medivac

**Unit Priority Settings**
controls units standard behavior
- `Unit Priority ClearObstacles` - basic army units which will attack rocks - marine, marauder
- `Unit Priority DiversionGround` - units jumping over cliffs - reapers ( i did not see if AI really uses it )
- `Unit Priority DiversionAir` - units to rush workers in early game - banshee ( i did not see if AI really uses it )
- `Unit Priority Ignored` - Larva, Temporary units
- `Unit Priority ExtraScout`\* - these units can be used as scouts if priority scouts unavailable- Overlord
- `Unit Priority StayHome`\*- support units which prefer to stay at base\*- WarpPrism
- `Unit Priority Guard`\*- this units preger to stay at and defend base - Queen
- `Unit Priority Healer`\*- Units to support army - Medivac

**Nuke Settings**
used in Terran Ghost tactical AI
- `Nuke UnitCaster`*
- `Nuke EffectCalldown`*
- `Nuke EffectDamage`*
- `Nuke AbilityNuke`*
- `Nuke UpgradeCloak`*
- `Nuke AbilityCloak`*
- `Nuke BehaviorCloak`*
- `Nuke CastTime`*

**Other**
- `AI TransportSetPanic` - 0.2697 for units with shields, "just below shield threshold"
- `Behavior NoCreep` - ZergBuildingNotOnCreep
