export class ReadTestDataFiles {

    async loadTestData(testCaseID, module, jsonFileName) {
        //reading and storing the data in a jsonData
        let jsonData
        jsonData = require(`../../testdata/${module}/${jsonFileName}.json`)
        
        //If testCaseID doesnt match in json file then takes defaultDataSet
        let testCaseDataMap = new Map()
        if (!jsonData.hasOwnProperty(testCaseID)) {
            testCaseID = "defaultDataSet"
        }
        //loading test case data
        for (const [defaultDataKey, defaultDataValue] of Object.entries(jsonData[testCaseID]))
            if (typeof defaultDataValue === 'object') {
                for (const [key, value] of Object.entries(defaultDataValue)) {
                    testCaseDataMap.set(key, value);
                }
            } else {
                testCaseDataMap.set(defaultDataKey, defaultDataValue);
            }
        console.log(`Loaded ${testCaseID} data`);
        return testCaseDataMap;
    }
}