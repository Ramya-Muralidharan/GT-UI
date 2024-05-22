@invoice
Feature: Invoice in billing center
As a user I want to update Invoices in Billing center

    @invoice_due
    Scenario: Updating billed date for an invoice due
        Given the user logs into the billing center  
        When the user loads the data "defaultDataSet" from json "BillingTestData"
        And the user loads the account and navigates to invoices on billing center home page
        And the user changes the invoice billed date
        Then the user verifies invoice billed date is updated
