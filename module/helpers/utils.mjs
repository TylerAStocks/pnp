

export function calculatePointsCost(systemData) {
    let total = 0;
    // add up ability costs
    Object.keys(systemData.abilities).forEach((ability) => {
        total += systemData.abilities[ability].value;
    })
    // add up talent costs
    Object.keys(systemData.talents).forEach((talent) => {
        total += systemData.talents[talent].value;
    })
    // add up power costs
    console.log('systemData: ', systemData)
    systemData.powers.forEach((power) => {
        systemData.powers[systemData.powers.indexOf(power)].totalCost = (power.system.cost * power.system.rank + power.system.pros - Math.abs(power.system.cons))
        power.system.totalCost = (power.system.cost * power.system.rank + power.system.pros - Math.abs(power.system.cons))
        total += power.system.totalCost;
    })

    // add Perks
    // TODO: implement perks

    // add flaws
    // TODO: implement flaws

    // Factor packages
    const civilian = {abilities: 2, talents: 2, cost: 35} // - 1
    const hero = {abilities: 3, talents: 2, cost: 40} // - 2
    const superHero = {abilities: 3, talents: 3, cost: 50} // - 4

    


    console.log('TOTAL: ', total);
    return total;
}