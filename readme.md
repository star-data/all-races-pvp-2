# All Races PVP 2

This repository contains All Races PVP 2 data mods, extension and unit tester

Dependencies:
- [all-races-factions-assets](..%2F..%2FASSETS%2Fall-races-factions-assets)
- [all-races-factions-data](..%2Fall-races-factions-data)

## installation

Clone it to `<SC2Directory>\MODS\all-races-pvp-2`

```
git clone Star-Mods/all-races-factions-assets <SC2Directory>/ASSETS/all-races-factions-assets
git clone Star-Mods/all-races-factions-data <SC2Directory>/MODS/all-races-factions-data
git clone Star-Mods/all-races-pvp-2 <SC2Directory>/MODS/all-races-pvp-2
```
## Mods

#### Data
Contains data to adjust different mods to work with each other

#### Bundle
Bundled Factions and All races pvp data. Generated using Script
```
node scripts/make-factions-bundle
```
#### Extensinon
This mod available in Custom Games  as `All Races PvP 2`

#### Tester
Available in Arcade as `Unit Tester - All Races PvP 2`