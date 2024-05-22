const moment = require('moment');

    //To generate date from current date in MMDDYYYY format
    export function dateFunction(noOfDays, dateFormat='MMDDYYYY') {
        var modifiedDate = moment().add(noOfDays, 'days').format(dateFormat).toString();
        return modifiedDate;
    }

    //Splits the string and returns value based on index
    export function splitFunction(value, delimiter, index) {
        var stringValue = value.split(delimiter);
        var splitValue = stringValue[index];
        return splitValue;
    }

    //Generates and returns random string with length provided
    export function generateRandomStringFunction(length) {
        let randomString = '';
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            const randonIndex = Math.floor(Math.random() * alphabet.length);
            randomString += alphabet[randonIndex];
        }
        return randomString;
    }