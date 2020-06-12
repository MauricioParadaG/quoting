
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

// If formData.year is older, every year 0.1%
// If formData.city is berlin its is - 2%, Bogota 15%, Bquilla 18%
// if formData.rooms is more, its cheaper. for every room it is a 5% cheaper. 
// if formData.qmeters are more, is cheaper. 5% cheaper
// If formData.rented, if yes 8% if not 20%

