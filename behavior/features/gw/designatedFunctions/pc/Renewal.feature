@policycenter
Feature: Processing a renewal
    As a user, I want to perform Renewal transaction in policy center

    @renewal
    Scenario: Perform renewal on commercial policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "defaultDataSet" from json "RenewalTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user performs renewal transaction on the policy
        Then the renewal should be successful