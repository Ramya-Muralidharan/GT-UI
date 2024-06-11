@policycenter @designatedfunction

Feature: New Submission to Quote
        As a user, I want to perform Quote Policy transaction in policy center

        @quote_submission
        Scenario: Creating personal auto quote
                Given the user logs into the policy center as "superuser"
                When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
                And the user creates personal account
                And the user quote the new submission for personal auto
                Then the quote is saved successfully
