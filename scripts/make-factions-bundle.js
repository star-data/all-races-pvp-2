import * as SCParser from "./../../../tools/tool-parser/index.js";
const SC2 = 'C:/Program Files (x86)/StarCraft II'
SCParser.config.binaryFolder = `${SC2}/TOOLS/tool-parser/binary`
SCParser.SCGame.directories.factions = `${SC2}/mods/all-races-factions-data`
SCParser.SCGame.directories.mods = `${SC2}/mods/all-races-pvp-2`

let mod = await SCParser.createMod({
    mods: [
        '$factions/Broodwar.SC2Mod',
        '$factions/Dragons.SC2Mod',
        '$factions/Scion.SC2Mod',
        '$factions/Synoid.SC2Mod',
        '$factions/TalDarim.SC2Mod',
        '$factions/UED.SC2Mod',
        '$factions/Umojan.SC2Mod',
        '$factions/UPL.SC2Mod',
        '$factions/ZCR.SC2Mod',
        '$mods/AllRaces2-Data.SC2Mod'
    ]
})

mod.dependencies = [
    'bnet:Void Multi (Mod)/0.0/999,file:Mods/VoidMulti.SC2Mod',
    'bnet:[AR3] AllRaces-Assets/0.0/332433,file:ASSETS/AllRaces-Assets.SC2Mod',
    'bnet:[AR2] BroodWar Assets/0.0/455593,file:ASSETS/BroodWar-Assets.SC2Mod'
]

mod.setDocInfo({
    Name:`[AR2] AllRaces2-Bundle`,
    DescLong: `All Races PvP Factions Data Bundle`,
    DescShort: ``
})

mod.write('./../../all-races-pvp-2/AllRaces2-Bundle-New.SC2Mod')