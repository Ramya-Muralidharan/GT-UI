@policycenter

Feature: Add Note in policy center
    As a user, I want to perform Add Note transaction in policy center

    @add_note_pc
    Scenario: Adding the note from the account level
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "defaultDataSet" from json "PolicyCenterAddNoteTestData"
        And the user creates personal account
        And the user adds the note
        Then the add note should be successful