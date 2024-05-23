@claimcenter
Feature: Searching contact in claim center
    As a user, I want to Search contact in Claim Center
 
    @search_contact
    Scenario: Searching contact in claim center
       Given the user logs into the claims center
       When the user loads the data "defaultDataSet" from json "ClaimCenterSearchContactTestData"
       And the user search the contact
       Then the search contact details are loaded