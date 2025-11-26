## Add a new race AI triggers

create Race folder **_TriggerLibs/Terran_**

create **_TriggerLibs/Terran/requirementsai.galaxy_** file in Race folder 

### [Race/requirementsai.galaxy](terran%2Frequirementsai.galaxy)
define required constants in the file
```cpp
const string c_TU_AutoTurret            = "AutoTurret";
```

### [Race/baseai.galaxy](terran%2Fbaseai.galaxy)

implement **_AIBaseConfigRace_** function
```cpp
void AIBaseConfigTerran (int player,bool campaign) {
    AIAddHealer(player, "MULE", "MULERepair", 0);
    ...
}
```
### [Race/Race.galaxy](Race%2FRace.galaxy)

next functions should be loaded natively if race is selected by main race dropdown in the lobby.
For custom races in extension mods these functions should be called from _**switch.galaxy**_ file.

implement `void DebugCallbackTerr(int player);`

implement `void AINewUnitTerr(int player, unit u)`

implement `unit AIGetScoutTerr(int player, int index, unit prev, bool allowWorkers)`

implement `unit AIEarlyDefScoutTerr(int player, unit prev, bool allowWorkers)`

implement `void AIWaveThinkTerr(int player, wave w, int type)`

implement `void AIMeleeTerr(int player)`

next functions are custom. it is used in modified melee AI script.
these functions should be called from _**switch.galaxy**_ file.

implement `int AIGetDefaultBuildFlagsTerran (int player, string objType)`

implement `void AISharedConfigTerran (int player)`

implement `void AIGlobalConfigTerran ()`

Implement AI build orders for Low and High difficulties and Tactical AI. include it to the main ai file
```cpp
include "TriggerLibs/Terran/TerranLow"
include "TriggerLibs/Terran/TerranVyEy"
include "TriggerLibs/Terran/TerranEasy"
include "TriggerLibs/Terran/TerranMedi"
include "TriggerLibs/Terran/TerranMdHd"
include "TriggerLibs/Terran/TerranHard"
include "TriggerLibs/Terran/TerranHigh"
include "TriggerLibs/Terran/TerranHdVH"
include "TriggerLibs/Terran/TerranVyHd"
include "TriggerLibs/Terran/TerranChVi"
include "TriggerLibs/Terran/TerranChRe"
include "TriggerLibs/Terran/TerranChIn"
```
## Integration 

### [requirementsai.galaxy](requirementsai.galaxy)
include race requirementsai file
```cpp
include "TriggerLibs/Terran/requirementsai"
```

### [switchbaseai.galaxy](switchbaseai.galaxy)

include race baseai file
```cpp
include "TriggerLibs/Terran/baseai"
```
add a switch case in AIBaseConfig function 
```cpp
void AIBaseConfig(int player, bool campaign){
    ...
    if (race == "Terr"){AIBaseConfigTerran(player,campaign);return;}
    ...
}
```
### [switchai.galaxy](switchai.galaxy)
include main race ai file
```cpp
include "TriggerLibs/Terran/Terran"
```
add race switches
```cpp
...
void AINewUnit (int player, unit u) {
    ...
    if (PlayerRace(player) == "Terr" ){ AINewUnitTerrLegacy(player,u);return;}
    ...
}
...
unit AIEarlyDefScout (int player, unit prev, bool allowWorkers) {
    ...
    if (PlayerRace(player) == "Terr"){ return AIEarlyDefScoutTerrLegacy(player, prev, allowWorkers);}
    ...
}
...
unit AIGetScout(int player, int index, unit prev, bool allowWorkers) {
    ...
    if (race == "Terr"){ return AIGetScoutTerrLegacy(player, index, prev, allowWorkers);}
    ...
}
...
void AIMelee (int player) {
    ...
    if (race == "Terr"){AIMeleeTerrLegacy(player);return;}
    ...
}
...
void AIGlobalConfig(){
    ...
    AIGlobalConfigTerran();
    ...
}
...
void AISharedConfig (int player) {
    ...
    AISharedConfigTerran(player);
    ...
}
...
int AIGetDefaultBuildFlags (int player, string objType) {
    ...
    value = AIGetDefaultBuildFlagsTerran(player, objType); if(value){return value;}
    ...
}
...
```


Done!