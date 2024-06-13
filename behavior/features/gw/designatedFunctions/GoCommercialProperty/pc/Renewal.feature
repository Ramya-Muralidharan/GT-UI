@policycenter @designatedfunction
Feature: Processing a renewal
    As a user, I want to perform Renewal transaction in policy center

    @renewal
    Scenario: Perform renewal on commercial policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "renewal_01" from json "RenewalTestData"
        And the user creates commercial account
        And the user creates commercial policy
        And the user performs renewal on commercial policy
        Then the renewal is applied successfully