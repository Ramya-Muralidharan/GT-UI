@billingcenter
Feature: Invoice in billing center
    As a user, I want to update Invoices in Billing center

    @invoice_due
    Scenario: Updating billed date for an invoice due
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "defaultDataSet" from json "BillingTestData"
        And the user loads the account and navigates to invoices on billing center home page
        And the user changes the invoice billed date
        Then the user verifies invoice billed date is updated

    @invoice_billed
    Scenario: Resend invoice for a billed invoice
        Given the user logs into the billing center as "superuser"
        When the user loads "bc" data "Invoice_billed" from json "BillingTestData"
        And the user loads the account and navigates to invoices on billing center home page
        And the user resends invoice
        Then the user verifies invoice resent confirmation message is displayed