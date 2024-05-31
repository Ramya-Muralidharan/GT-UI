@claimcenter
Feature: Searching for a policy
    As a user, I want to search for a policy in Claim center

    @searchPolicy_cc
    Scenario Outline: Seaching with policy from Search Claims
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "searchPolicy_01" from json "SearchPolicyTestData"
        And the user searches for the policy in Search Claims
        Then the claim details are loaded successfully