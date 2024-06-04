@claimcenter
Feature: Searching check in claim center
    As a user, I want to Search check in Claim Center

    @search_check
    Scenario: Searching check in claim center
       Given the user logs into the claims center as "superuser"
       When the user loads "cc" data "searchCheck_01" from json "SearchCheckTestData"
       And the user search the check
       Then the check details are loaded