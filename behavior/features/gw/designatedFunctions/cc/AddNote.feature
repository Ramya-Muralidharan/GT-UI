@claimcenter
Feature: Adding note in claim center
    As a user, I want to Add Note in Claim Center

    @add_note_cc
    Scenario: Adding notes in a claim center
        Given the user logs into the claims center as "superuser"
        When the user loads "cc" data "defaultDataSet" from json "CreateClaimAddNoteTestData"
        And the user creates new FNOL
        And the user creates the note
        Then the note is added successfully