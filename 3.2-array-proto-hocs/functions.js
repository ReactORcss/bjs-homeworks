console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(item => item.name);
}

function getCountReliableWeapons(durability) {
    let a = weapons.filter(item => item.durability > durability);
    return a.length;
}

function hasReliableWeapons(durability) {
    return weapons.some(item => item.durability > durability);
}

function getReliableWeaponsNames(durability) {
    let a = weapons.filter(item => item.durability > durability);
    return a.map(item => item.name);
}

function getTotalDamage() {
    let a = weapons.reduce((acc, item) => {
        return acc + item.attack;
    }, 0);
    return a;
}