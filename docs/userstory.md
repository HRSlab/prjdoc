---
title: user story template
---

# User Story

<div class="border p-5">
As an end user, I want to access the human resource database to generate reports so that I can periodically update the company’s staffing contact list.
</div>

## Acceptance Criteria

- [x] Ability to gain access to human resource database

- [x] Ability to generate a report which includes

- [x] Employee names

- [x] Dates of birth

- [x] Social security numbers

- [x] Addresses

- [x] Telephone numbers

- [x] ~~_Ability to use report data to update staffing contact list_~~ [2020-05-24]

## Acceptance Testing

- [x] Database is accessible internally but not from outside company firewall

- [x] MS Access report can be generated from database based on query inputs

- [x] ~~_MS Access report data can be exported to MS Excel spreadsheet_~~ [2020-05-24]

- [x] Staffing contact list updates contain only most recent data from the database


## Develper Stuff

```Gherkin

Feature: Guess the word

  # The first example has two steps
  Scenario: Maker starts a game
    When the Maker starts a game
    Then the Maker waits for a Breaker to join

  # The second example has three steps
  Scenario: Breaker joins a game
    Given the Maker has started a game with the word "silky"
    When the Breaker joins the Maker's game
    Then the Breaker must guess a word with 5 characters

```