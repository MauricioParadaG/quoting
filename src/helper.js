// Money base $2.000
//1. If formData.year is older, every year 0.1%
//2. If formData.city is berlin its is - 2%, Bogota 15%, Bquilla 18%
//3. if formData.rooms is more, its cheaper. for every room it is a 3% cheaper. 
//4. if formData.qmeters are more, is cheaper. 2% cheaper
//5. If formData.rented, if yes 8% if not 20%


export function checkYearDifference (year)  {
    return new Date().getFullYear() - year;
}


export function checkCity (city)  {
    let cityCost;

    if (city === 'berlin'){
        cityCost = -2;
    } else if (city === 'bogota'){
        cityCost = 15;
    } else if (city === 'barranquilla'){
        cityCost = 18;
    }

    return cityCost;
}

export function checkRooms (rooms)  {
    return parseInt(rooms);
}

export function checkqMeters (qMeters)  {
    let valueForQMeters;

    if (qMeters === '1 - 45'){
        valueForQMeters = 1;
    } else if (qMeters === '46 - 130'){
        valueForQMeters = 2;
    } else if (qMeters === '131 - 250'){
        valueForQMeters = 3;
    } else if (qMeters === '251 - 500'){
        valueForQMeters = 4;
    } else if (qMeters === '501 - 1000'){
        valueForQMeters = 5;
    }

    return valueForQMeters;
}

export function checkRented (rented)  {
    return (rented === 'yes') ? 1.08 : 1.20;
}

// First letter in Caps
export function firstCaps (textGoingCaps)  {
    return textGoingCaps.charAt(0).toUpperCase() + textGoingCaps.slice(1);
}



