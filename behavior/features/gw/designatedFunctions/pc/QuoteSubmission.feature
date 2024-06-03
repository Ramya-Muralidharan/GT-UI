@policycenter

Feature: New Submission to Quote
        As a user, I want to perform Quote Policy transaction in policy center

        @quote_submission
        Scenario: Creating personal auto quote
                Given the user logs into the policy center as "superuser"
                When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
                And the user creates personal account
                And the user quote the new submission
                Then the quote is created successfully
