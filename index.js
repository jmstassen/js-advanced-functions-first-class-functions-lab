// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwoDrivers = drivers.slice(drivers.length-2)
    return lastTwoDrivers;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(factor) {
    return function(value) {
        const fareMultiplier = value * factor;
        return fareMultiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, functionName) {
    return functionName(drivers);
}