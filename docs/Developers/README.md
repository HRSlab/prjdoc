---
title: Technical Specification
---

![Code Quality](https://www.code-inspector.com/project/8361/score/svg)

# Specifiche Tecniche

![Board Status](https://dev.azure.com/HRS2020/80d0713f-22ce-40eb-9ca6-8d1986bfce8a/07bd2436-5f5f-48ea-aa0b-11e23b11ea38/_apis/work/boardbadge/2b0507a7-e94a-4389-b141-5e66f56b0ca3?columnOptions=1)

[Features](/Developers/features/)

## 1. Version Control <div class="Label Label--outline Label--outline-green float-right">Ultimo Aggiornameto: {{ $page.lastUpdated }}</div>

The following is a list all changes made to this document, the person making the change, the new version number and the reason why the change was necessary.


<table>
  <tr>
    <th>Date</th>
    <th>Author</th> 
    <th>Version</th>
    <th>Change Description</th>
  </tr>
  <tr v-for="item in $page.git.commits">
    <td>{{ item.authorRelative }}</td>
    <td>{{ $page.git.author }}</td>
    <td>{{ item.shortHash }}</td>
    <td>{{ item.subject }}</td>
  </tr>
</table>

{{ $page.git.commits.shortHash }}

## Introduction

Contains:
Description of the purpose of the document (i.e. to describe the underlying technology of the application to be delivered to the client):
Setting the scope for the technical responsibilities of the individuals on the project including any disclaimers with regard to the information or processes mentioned in the document
This should contain a high level overview of the project's technical design, which will be outlined in further detail in subsequent sections.

## System Specification

Contains:
Detailed technical analysis of the proposed solution relating to the overall web site and any server side components:

## System Architecture Diagram

Hardware Specification and Server Configuration
(including the development, staging & live environments)

## Other Platforms

(if applicable, WAP and iTV (set top configuration) should be documented in this section)

## Software Specification

(including application languages, web server, operating system)

## System Interfaces or 3rd Party Products

(including content management system, payment providers, XML links, data transfer processes, COM objects, log analysis tools)

## Security

(including data storage requirements, sensitivities particular to the project, commitment, or non-commitment to, comply with the data protection legislation (country specific), public/private key infrastructure, SSL certificates, version control and release procedures details, directory structure standards)

## Development Standards & Compliance

(including file types being used, file naming standards, content and application directory structures and naming conventions to be used (for both client and server side together))

## Configuration Management

(including the process to maintain version control of the software from the development, staging and through to the production environment)

## Backup & Recovery

## User Interface Specification

Contains:
Detailed technical analysis of the user interface relating back to the Functional Specification:
Validation
Identification of dynamic content
Style sheets
Application objects
Functions
Database objects
Template include files and frameset definitions
Screen grabs/access to assets, give examples
Screen resolutions/display properties
Page weights
Any other multimedia objects used

## User Agent specification

including browsers (versions to be supported and the applications limitations) & operating systems)

## User Interface Design and Development

(including information on JavaScript and client side validation, server page integration & style sheets)

## Technical Design

Contains:
Details how the environment for the application will be produced:
Application Design and Development (including application layer coding, database design and development (including entity-relationship diagram, entity definitions, stored procedures (pseudo code)), class diagrams
Special Notes (details of any unusual requirements or aspects to the application environment)

## Integration

Contains:
A description of how the various technical service teams and third parties involved in the project will work together co-ordinating their work and integrating it into the overall solution:
Third Party relationships

## Appendices

Contains:
Technical RAID document (listing the Risks, Issues, Assumptions and Dependencies that are being made when scoping the technical elements of the project)

## core

- [HTML](/Developers/html.md) — Guide to the default HTML.
- [CSS](/Developers/css.md) — Guide to the default CSS.
- [JavaScript](/Developers/js.md) — Guide to the default JavaScript.

## Basic structure

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

### css

This directory should contain all your project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](/Developers/css.md).

### doc

This directory contains all the Project Technical documentation. You can use it
as the location and basis for your own project's documentation.

### js

This directory should contain all your project's JS files. Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.md).

### .htaccess

The default web server configs are for Apache. For more information, please
refer to the [Apache Server Configs
repository](https://github.com/h5bp/server-configs-apache).

Host your site on a server other than Apache? You're likely to find the
corresponding server configs project listed in our [Server
Configs](https://github.com/h5bp/server-configs/blob/master/README.md)
repository.

### 404.html

A helpful custom 404 to get you started.

### browserconfig.xml

This file contains all settings regarding custom tiles for IE11 and Edge.

For more info on this topic, please refer to [Microsoft's
Docs](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)>).

### .editorconfig

The `.editorconfig` file is provided in order to encourage and help you and your
team to maintain consistent coding styles between different editors and IDEs.
[Read more about the `.editorconfig` file](misc.md#editorconfig).

### index.html

This is the default HTML skeleton that should form the basis of all pages on
your site. If you are using a server-side templating framework, then you will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Universal Analytics, make sure that you edit the
corresponding snippet at the bottom to include your analytics ID.

### humans.txt

Edit this file to include the team that worked on your site/app, and the
technology powering it.

### package.json

Edit this file to describe your application, add dependencies, scripts and
other properties related to node based development and the npm registry

### robots.txt

Edit this file to include any pages you need hidden from search engines.

### Icons

Replace the default `favicon.ico`, `tile.png`, `tile-wide.png` and Apple Touch
Icon with your own.

If you want to use different Apple Touch Icons for different resolutions please
refer to the [according documentation](extend.md#apple-touch-icons).
