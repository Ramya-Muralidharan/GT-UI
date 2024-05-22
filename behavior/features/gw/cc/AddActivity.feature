@claimcenter

Feature: Add Activity in Claim center
    As a user I want to perform Add Activity transaction in claim center

    @add_activity
    Scenario: Adding the activity from the account level
        Given the user logs into the policy center as superuser
        When the user loads the data "defaultDataSet" from json "AddActivityTestData"
        And the user creates personal account
        And the user performs add activity transaction in account level
        Then the add activity should be successful