@policycenter @designatedfunction

Feature: Commercial Property new Submission
    As a user, I want to perform create new submission(Quote, Bind and Issue)

    @quote_submission_cp
    Scenario: Creating Commercial Property quote
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for commercial property
        Then the quote is saved successfully

    @bind_submission_cp
    Scenario: Creating Commercial Property bind
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user quote the new submission for commercial property
        And the user bind the new submission
        Then the policy is bound successfully

    @issue_submission_cp
    Scenario: Issuing Creating Commercial Property
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_04" from json "NewSubmissionTestData"
        And the user creates commercial account
        And the user creates commercial policy
        Then the policy is issued
