function createSelectOptions(flightsData) {
    let carriers = {
        all: 'all' // this is default item for showing all items
    }

    // collect unique carriers
    for (let key in flightsData ) {
        let name = flightsData[key].carrier;
        carriers[name] = name
    }

    // convert to array
    let unique = Object.keys(carriers).map(key => carriers[key]);

    return unique.map((item,index) => {
        return {
            value: item,
            key : index,
            label: item
        }
    });
};

exports.createSelectOptions = createSelectOptions;
