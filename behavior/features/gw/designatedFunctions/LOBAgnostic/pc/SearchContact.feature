 @policycenter @designatedfunction
Feature: Searching contact in policy center
    As a user, I want to search contact in policy center

    @search_contact_pc
    Scenario: Searching contact in policy center
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "searchContact_01" from json "SearchContactTestData"
        And the user creates personal account
        And the user searches contact in policycenter
        Then the contact details are loaded successfully

