@policycenter @designatedfunction
Feature: Processing a renewal on Commercial Umbrella and Excess Liability
    As a user, I want to process Renewal on Commercial Umbrella and Excess Liability policy

    @renewal_co
    Scenario: Creating Commercial Umbrella and Excess Liability Renewal
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "renewal_03" from json "RenewalTestData"
        And the user creates commercial account
        And the user issue the new submission for umbrella liability
        And the user performs renewal on commercial umbrella and excess liability policy
        Then the renewal is applied successfully