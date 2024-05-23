@claimcenter 
Feature: Capturing first notice of loss
    As a user, I want to create a new FNOL in Claim Center

    @fnol
    Scenario: Creating a new FNOL with commercial policy
        Given the user logs into the claims center
        When the user loads the data "defaultDataSet" from json "FNOLTestData"
        And the user creates new FNOL
        Then the FNOL is added successfully