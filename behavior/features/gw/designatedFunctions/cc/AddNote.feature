@claimcenter
Feature: Adding note in claim center
    As a user, I want to Add Note in Claim Center

    @add_note_cc
    Scenario: Adding notes in a claim center
        Given the user logs into the claims center
        When the user loads "cc" data "defaultDataSet" from json "CreateClaimAddNoteTestData"
        And the user creates new FNOL
        And the user search with claim number
        And the user creates the note
        And the user search with claim number
        Then the note is added successfully