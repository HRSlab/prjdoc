# Dettagli di Progetto <a href="#url" class="branch-name">a_new_feature_branch</a>

[Contratto](/contract/)

<a class="branch-name">
[Proposta Commerciale](/proposal/)
</a>

<a href="#url" class="branch-name">a_new_feature_branch</a>

![Code Quality](https://www.code-inspector.com/project/8361/score/svg)

## Questi sono dettagli di progetto

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

<Testprimer/>

```Gherkin

Funzionalità: Guess the word

  # The first example has two steps
  Scenario: Maker starts a game
    Quando the Maker starts a game
    Allora the Maker waits for a Breaker to join

  # The second example has three steps
  Scenario: Breaker joins a game
    Dato the Maker has started a game with the word "silky"
    Quando the Breaker joins the Maker's game
    Allora the Breaker must guess a word with 5 characters

```

| English Keyword | Italian equivalent(s) |
| :-------------: | :-------------------: |
|     feature     |     Funzionalità      |
|   background    |       Contesto        |
|    scenario     |       Scenario        |
| scenarioOutline | Schema dello scenario |
|    examples     |        Esempi         |
|    given \*     |  Dato Data Dati Date  |
|     when \*     |        Quando         |
|     then \*     |        Allora         |
|     and \*      |           E           |
|     but \*      |          Ma           |

## Main Team

|      Role      |    contact    | Name |
| :------------: | :-----------: | :--: |
| Product Owner  | po@hrslab.com |      |
|  Scrum Master  | sm@hrslab.com |      |
|  UX Designer   | ux@hrslab.com |      |
|  UI Designer   | ui@hrslab.com |      |
| Front-End Eng. | fe@hrslab.com |      |
| Back-End Eng.  | be@hrslab.com |      |
|  Quality Test  | qa@hrslab.com |      |

## Stakeholders

|     Name     |     contact      |  Role  |
| :----------: | :--------------: | :----: |
| Name Surname | name@company.com | Client |
| Name Surname | name@company.com | Client |
| Name Surname | name@company.com |  User  |

## Supporting Team

|        Role        |     contact      | Name |
| :----------------: | :--------------: | :--: |
|     Specialist     | spec@support.com |      |
| Independent Tester | test@support.com |      |
|   Domain Expert    | dom@support.com  |      |
|  Technical Expert  | tech@support.com |      |
|   Integrator SIT   | sit@support.com  |      |

<div class="alert">

[![Stato](https://dev.azure.com/HRS2020/80d0713f-22ce-40eb-9ca6-8d1986bfce8a/07bd2436-5f5f-48ea-aa0b-11e23b11ea38/_apis/work/boardbadge/7e25d872-cb61-4bac-b24a-4a4670f17a07?columnOptions=1)](https://dev.azure.com/HRS2020/80d0713f-22ce-40eb-9ca6-8d1986bfce8a/_boards/board/t/07bd2436-5f5f-48ea-aa0b-11e23b11ea38/Microsoft.EpicCategory/)

</div>

[![Project](https://github.com/orgs/HRSlab/projects/1#card-38836158/)]

[Funzionalità 1](https://github.com/orgs/HRSlab/projects/1#card-38836158/)