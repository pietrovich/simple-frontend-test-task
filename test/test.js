let assert = require('chai').assert;
let createSelectOptions = require('../src/sample').createSelectOptions;

describe('check createSelectOptions on sample data', function () {

    let input = [
        {
            flight: "IM666",
            carrier: "Iron Maiden",
        },
        {
            id: "O815",
            carrier: "Oceanic Airlines",
        },
        {
            id: "FR6936",
            carrier: "Ryanair",
        },
        {
            id: "DE1386",
            carrier: "Condor",
        },
        {
            id: "AZ1173",
            carrier: "Alitalia",
        },
        {
            id: "U22865",
            carrier: "EasyJet",
        },
        {
            id: "AZ1185",
            carrier: "Alitalia",
        },
        {
            id: "FR5292",
            carrier: "Ryanair",
        },

        {
            id: "AZ1173",
            carrier: "Alitalia",
        },
        {
            id: "AZ1165",
            carrier: "Alitalia",
        },
        {
            id: "FR5092",
            carrier: "Ryanair",
        },
        {
            id: "U22861",
            carrier: "EasyJet",
        }
    ];
    let expectedOutput = [{value: 'all', key: 0, label: 'all'},
        {value: 'Iron Maiden', key: 1, label: 'Iron Maiden'},
        {value: 'Oceanic Airlines', key: 2, label: 'Oceanic Airlines'},
        {value: 'Ryanair', key: 3, label: 'Ryanair'},
        {value: 'Condor', key: 4, label: 'Condor'},
        {value: 'Alitalia', key: 5, label: 'Alitalia'},
        {value: 'EasyJet', key: 6, label: 'EasyJet'}
    ];

    it('should match', function (done) {
        let res = createSelectOptions(input);
        assert.deepEqual(res, expectedOutput, 'results should match');

        // var user = new User('Luna');
        // user.save(function(err) {
        //   if (err) done(err);
        //   else done();
        // });
        done();
    });
});

