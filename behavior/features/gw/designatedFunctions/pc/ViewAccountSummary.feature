@policycenter
Feature: creating an account in policy center
   As a user, I want to View Account Summary in policy center

   @view_account_summary
   Scenario: View Personal Account Summary
      Given the user logs into the policy center as "superuser"
      When the user loads "pc" data "viewAccountSummary_01" from json "PersonalLineAccountTestData"
      And the user creates personal account
      And the user search with an account number
      Then the view account summary details are loaded