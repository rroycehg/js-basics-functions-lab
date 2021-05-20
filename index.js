// Code your solution in this file!

const startBlock = 42;

function distanceFromHqInBlocks (street) {
    if (street < 42) {
        return startBlock - street;
    }   
        return street - startBlock;
}
    

function distanceFromHqInFeet(street) {
    let result = distanceFromHqInBlocks(street)*264;
    return result;
}


function distanceTravelledInFeet(street1, street2) {
    if(street1 > street2){
        return (street1 - street2)*264;
    } 
    return (street2-street1)*264;
}


function calculatesFarePrice(street1, street2) {
    let price = 0;
    const distance = distanceTravelledInFeet(street1, street2);
    let rate = (distance - 400);
    
    
    if (distance <= 400) {
        return price = 0;
    } else if (distance <= 2000) {
        price = 0.02;
        return rate * price
    } else if ( 2000 < distance < 2500) {
        price = 25.00
        return rate = price;
    } 
        return price = 'cannot travel that far';
    
}