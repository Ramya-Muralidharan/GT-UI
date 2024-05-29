@claimcenter
Feature: Searching recovery in claim center
    As a user, I want to Create and Search Recovery in Claim Center

    @search_recovery
    Scenario: Searching recovery in claim center
         Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "defaultDataSet" from json "SearchRecoveryCreationTestData"
        And the user creates new FNOL
        And the user search with claim number
        And the user creates the recovery
        Then the recovery is added successfully