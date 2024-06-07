@claimcenter @designatedfunction
Feature: Searching contact in claim center
    As a user, I want to Search contact in Claim Center

    @search_contact_cc
    Scenario: Searching contact in claim center
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "searchContact_01" from json "SearchContactTestData"
        And the user searches the contact
        Then the search contact details are loaded