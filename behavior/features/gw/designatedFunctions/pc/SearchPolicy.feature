@policycenter
Feature: Searching for a policy
    As a user I want to search with policy from Search tab

    @SearchPolicy_pc
    Scenario: Seaching with policy from Search tab
        Given the user logs into the policy center as superuser
        When the user loads "pc" data "defaultDataSet" from json "RenewalTestData"
        When the user creates commercial account
        And the user creates commercial policy
        And the user searches for the policy with policy number
        Then the policy details are loaded successfully