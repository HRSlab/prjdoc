---
title: Technical Specification
---

![Code Quality](https://www.code-inspector.com/project/8361/score/svg)

# Specifiche Tecniche

![Board Status](https://dev.azure.com/HRS2020/80d0713f-22ce-40eb-9ca6-8d1986bfce8a/07bd2436-5f5f-48ea-aa0b-11e23b11ea38/_apis/work/boardbadge/2b0507a7-e94a-4389-b141-5e66f56b0ca3?columnOptions=1)

[Features](/Developers/features/)

## 1. Controllo di Versione

<div class="Label Label--outline Label--outline-green float-right my-2">Ultimo Aggiornameto: {{ $page.lastUpdated }}</div>
<br>

A seguire la lista delle modifiche al documento, con l'autore delle modifiche, il codice identificativo delle modiche e la descrizione della modifica.

| Data                    | Autore                 | Versione | Descrizione         |
| ----------------------- | ---------------------- | :------: | ------------------- |
| {{ $page.git.created }} | {{ $page.git.author }} |   1.0    | Creazione Documento |

## 2. Lista di Distribuzione

| Nome    | Azienda                | Ruolo           |
| ------- | ---------------------- | --------------- |
| @Andrea | {{ $page.git.author }} | Product Manager |
| @Carlo  | {{ $page.git.author }} | Project Manager |

## 3. Terminologia e Riferimenti

### 3.1 Abbreviazioni

| Abbreviazione | Definizione                                                                |
| ------------- | -------------------------------------------------------------------------- |
| API           | Application Programming Interface                                          |
| AWS           | Amazon Web Services                                                        |
| Ajax          | Asynchronous JavaScript and XML                                            |
| CAPTCHA       | Completely Automated Public Turing Test to tell Computers and Humans Apart |
| CDN           | Content Delivery Network                                                   |
| ERD           | Entity-Relationship Diagram                                                |
| ERD           | Entity-Relationship Diagram                                                |
| ERM           | Entity-Relationship Model                                                  |
| ERP           | Enterprise Resource Planning                                               |
| HFS           | Hierarchical File System                                                   |
| HTTP          | Hypertext Transfer Protocol                                                |
| HTTPS         | HTTP Secure                                                                |
| SDK           | Software Development Kit                                                   |

Per altri termini non inclusi consulta il [Dizionario](/glossary/)

### 3.2 Documenti di riferimento

| Documento                         | Versione |    Data    |   Stato    | Autore |
| --------------------------------- | :------: | :--------: | :--------: | :----: |
| [Features](/Developers/features/) |   1.0    | dd.mm.yyyy | pubblicato | @Carlo |

### 3.3 Presupposti

<BlankSlate>

</BlankSlate>

## 4. Indice

[[toc]]

## 5. Introduzione

Contains:
Description of the purpose of the document (i.e. to describe the underlying technology of the application to be delivered to the client):
Setting the scope for the technical responsibilities of the individuals on the project including any disclaimers with regard to the information or processes mentioned in the document
This should contain a high level overview of the project's technical design, which will be outlined in further detail in subsequent sections.

## 6. Specifiche di Sistema

![Test](https://github.com/h5bp/server-configs-apache/workflows/server/badge.svg)

<BlankSlate>

Contains:
Detailed technical analysis of the proposed solution relating to the overall web site and any server side components:

</BlankSlate>


### core

- [HTML](/Developers/html.md) — Guide to the default HTML.
- [CSS](/Developers/css.md) — Guide to the default CSS.
- [JavaScript](/Developers/js.md) — Guide to the default JavaScript.

#### Basic structure

```
.
├── css
│   ├── main.css
│   └── normalize.css
├── doc
├── img
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       └── modernizr.min.js
├── .editorconfig
├── .htaccess
├── 404.html
├── browserconfig.xml
├── favicon.ico
├── humans.txt
├── icon.png
├── index.html
├── package.json
├── robots.txt
├── site.webmanifest
├── tile.png
└── tile-wide.png
```

#### css

This directory should contain all your project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](/Developers/css.md).

#### doc

This directory contains all the Project Technical documentation. You can use it
as the location and basis for your own project's documentation.

#### js

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.md).

#### .htaccess

The default web server configs are for Apache. For more information, please
refer to the [Apache Server Configs
repository](https://github.com/h5bp/server-configs-apache).

Host your site on a server other than Apache? You're likely to find the
corresponding server configs project listed in our [Server
Configs](https://github.com/h5bp/server-configs/blob/master/README.md)
repository.

#### 404.html

A helpful custom 404 to get you started.

#### browserconfig.xml

This file contains all settings regarding custom tiles for IE11 and Edge.

For more info on this topic, please refer to [Microsoft's
Docs](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)>).

#### .editorconfig

The `.editorconfig` file is provided in order to encourage and help you and your
team to maintain consistent coding styles between different editors and IDEs.
[Read more about the `.editorconfig` file](misc.md#editorconfig).

#### index.html

This is the default HTML skeleton that should form the basis of all pages on
your site. If you are using a server-side templating framework, then you will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Universal Analytics, make sure that you edit the
corresponding snippet at the bottom to include your analytics ID.

#### humans.txt

Edit this file to include the team that worked on your site/app, and the
technology powering it.

#### package.json

Edit this file to describe your application, add dependencies, scripts and
other properties related to node based development and the npm registry

#### robots.txt

Edit this file to include any pages you need hidden from search engines.

#### Icons

Replace the default `favicon.ico`, `tile.png`, `tile-wide.png` and Apple Touch
Icon with your own.

If you want to use different Apple Touch Icons for different resolutions please
refer to the [according documentation](extend.md#apple-touch-icons).

-----

### 6.1 Architettura di Sistemma

<BlankSlate>

</BlankSlate>

### 6.2 Hardware Specification and Server Configuration

<BlankSlate>

(including the development, staging & live environments)

</BlankSlate>

Configurations for web servers such as Apache and Nginx.

- [Apache](/Developers/apacheConfig.md)  ![Test](https://github.com/h5bp/server-configs-apache/workflows/server/badge.svg)
- [Google App Engine (GAE)](/Developers/GAEConfig.md)
- [Internet Information Services(IIS)](/Developers/IISConfig.md)
- [lighttpd](/Developers/lighttpdConfig.md)
- [Nginx](/Developers/NginxConfig.md) ![Test](https://github.com/h5bp/server-configs-nginx/workflows/server/badge.svg)
- [Node.js](/Developers/NodejsConfig.md) ![Build Status](https://secure.travis-ci.org/h5bp/server-configs-node.svg)

### 6.3 Altre Piattaforme e/o Applicazioni

<BlankSlate>

(if applicable, WAP and iTV (set top configuration) should be documented in this section)

</BlankSlate>

### 6.4 Specifiche Software

<BlankSlate>

(including application languages, web server, operating system)

</BlankSlate>

### 6.5 Intefacce di Sistema e prodotti di terze parti

<BlankSlate>

(including content management system, payment providers, XML links, data transfer processes, COM objects, log analysis tools)

</BlankSlate>

### 6.6 Sicurezza

<BlankSlate>

(including data storage requirements, sensitivities particular to the project, commitment, or non-commitment to, comply with the data protection legislation (country specific), public/private key infrastructure, SSL certificates, version control and release procedures details, directory structure standards)

</BlankSlate>

### 6.7 Development Standards & Compliance

<BlankSlate>

(including file types being used, file naming standards, content and application directory structures and naming conventions to be used (for both client and server side together))

</BlankSlate>

### 6.8 Configuration Management

<BlankSlate>

(including the process to maintain version control of the software from the development, staging and through to the production environment)

</BlankSlate>

### 6.9 Backup & Recovery

<BlankSlate></BlankSlate>

## 7. User Interface Specification

<BlankSlate>

</BlankSlate>

Contains:

- [x] Detailed technical analysis of the user interface relating back to the Functional Specification:
- [x] Validation
- [x] Identification of dynamic content
- [x] Style sheets
- [x] Application objects
- [x] Functions
- [x] Database objects
- [x] Template include files and frameset definitions
- [x] Screen grabs/access to assets, give examples
- [x] Screen resolutions/display properties
- [x] Page weights
- [x] Any other multimedia objects used

### 7.1 User Agent specification

<BlankSlate>

including browsers (versions to be supported and the applications limitations) & operating systems)

</BlankSlate>

### 7.2 User Interface Design and Development

<BlankSlate>

(including information on JavaScript and client side validation, server page integration & style sheets)

</BlankSlate>

## 8. Technical Design

<BlankSlate></BlankSlate>

Contains:

- [x] Details how the environment for the application will be produced:
- [x] Application Design and Development (including application layer coding, database design and development (including entity-relationship diagram, entity - [X]definitions, stored procedures (pseudo code)), class diagrams
- [x] Special Notes (details of any unusual requirements or aspects to the application environment)

## 9. Integration

<BlankSlate></BlankSlate>

Contains:

- [x] A description of how the various technical service teams and third parties involved in the project will work together co-ordinating their work and integrating it into the overall solution:
- [x] Third Party relationships

## 10. Appendices

<BlankSlate></BlankSlate>

Contains:

- [x] Technical RAID document (listing the Risks, Issues, Assumptions and Dependencies that are being made when scoping the technical elements of the project)
