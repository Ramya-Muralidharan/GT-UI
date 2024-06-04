const moment = require('moment');
import { t, Selector} from 'testcafe';

    //To generate date from current date in MMDDYYYY format
    export function dateFunction(noOfDays, dateFormat='MMDDYYYY') {
        var modifiedDate = moment().add(noOfDays, 'days').format(dateFormat).toString();
        return modifiedDate;
    }

    //Splits the string and returns value based on index
    export function splitFunction(value, delimiter, index) {
        console.log("b4" + value)
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

    //To click on a specific record in a table.
    //This function by default considers first table in a page
    export async function searchTableRecord(columnIndex, stringValue){
        await t.wait(1000)     
        const tableRows = Selector('table').nth(0).find('tr');
        const rowCount = await tableRows.count;
        for (let i = 1; i < rowCount; i++) {
            const cellText = await tableRows.nth(i).find('td').nth(Number.parseInt(columnIndex)).textContent;
            if (cellText.includes(stringValue)) {
                await t.click(tableRows.nth(i).find('td').nth(Number.parseInt(columnIndex)));
                await t.wait(2000)
                break;    
            }      
        }   
    
}