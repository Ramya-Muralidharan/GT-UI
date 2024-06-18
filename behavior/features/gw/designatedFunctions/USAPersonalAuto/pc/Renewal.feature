@policycenter @designatedfunction
Feature: Processing a renewal on USAPersonalAuto policy
    As a user, I want to process Renewal on USAPersonalAuto policy

    @renewal_usapa
    Scenario: Perform renewal on USAPersonalAuto policy
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "renewal_04" from json "RenewalTestData"
        And the user creates personal account
        And the user issue the new USAPersonalAuto policy
        And the user performs renewal on USAPersonalAuto policy
        Then the renewal is applied successfully