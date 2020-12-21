---
title: Technical Specification
---

![coding](https://img.shields.io/badge/dynamic/json?color=%23347CDA&label=Ore%20di%20Sviluppo&prefix=Oggi%3A%20&query=%24.data%5B-1%3A%5D.grand_total.text&url=https%3A%2F%2Fwakatime.com%2Fshare%2F%40HRSlab%2Fa31fef80-e05f-4a44-ad97-bd1f95abfd08.json) ![Build Status](https://travis-ci.org/HRSlab/prjdoc.svg?branch=master) ![Netlify](https://img.shields.io/netlify/e32ab3ae-91ad-49d0-96bf-ef11b9df3a35?label=Deploy&logo=Netlify&logoColor=%23fafafa) ![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6IkhSU2xhYiIsInJlcG8xIjoiLXByamRvYyIsImluY2x1ZGVMaW50IjpmYWxzZSwiYXV0aG9ySWQiOjEzNTkyLCJpYXQiOjE2MDAxNDYzNTJ9.WBLIyWlU4EKM1sxl12VgZzcrpw93ev9qC4yiOZ_hi5U)

# Specifiche Tecniche

![Board Status](https://dev.azure.com/HRS2020/80d0713f-22ce-40eb-9ca6-8d1986bfce8a/07bd2436-5f5f-48ea-aa0b-11e23b11ea38/_apis/work/boardbadge/2b0507a7-e94a-4389-b141-5e66f56b0ca3?columnOptions=1)

[Features](/Developers/features/)


## 1. Controllo di Versione <div class="Label Label--outline Label--outline-green float-right mb-3">Ultimo Aggiornameto: {{ $page.lastUpdated }}</div>

<br>

 <DevicePhone>

<iframe src="https://reinnovame.com/" style="width:100%;border:none;height:100%" />

</DevicePhone>

A seguire la lista delle modifiche al documento, con l'autore delle modifiche, il codice identificativo delle modiche e la descrizione della modifica.

| Data                    | Autore                 | Versione | Descrizione         |
| ----------------------- | ---------------------- | :------: | ------------------- |
| {{ $page.git.commits[0].dateShort }} | {{ $page.git.author }} |  1.1   | {{ $page.git.commits[0].subject }} |
| {{ $page.git.updated }} | {{ $page.git.author }} |   1.0    | Creazione Documento |

## 2. Lista di Distribuzione

| Nome        | Azienda                | Ruolo            |        Contact        |
| ----------- | ---------------------- | ---------------- | :-------------------: |
| @ClientName | CompanyXY              | Project Sponsor  |  client@company.com   |
| @ClientName | CompanyXY              | Business Analyst |    ba@company.com     |
| @Mark       | HRS                     | Product Manager  |   mark@hrslab.com     |
| @Carlo      | HRS                     | Project Manager  |   carlo@hrslab.com    |
| @developers | HRS                     | Development Team | developers@hrslab.com |

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
| ERM           | Entity-Relationship Model                                                  |
| IDE           | Integrated development environment                                         |
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

<BlankSlate></BlankSlate>

## 4. Indice

[[toc]]

## 5. Introduzione

<BlankSlate>

Riassunto delle sezioni sottostanti.

</BlankSlate>

## 6. Specifiche di Sistema

### core

- [HTML](/Developers/html.md) — Guida alle impostazioni di base HTML.
- [CSS](/Developers/css.md) — Guida alle impostazioni di base CSS.
- [JavaScript](/Developers/js.md) — Guida alle impostazioni di base JavaScript.

#### Struttura di Base

```ASCII
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

Questa cartella contiene tutti i file CSS.
Le impostazioni di base sono descritte nella [sezione dedicata](/Developers/css.md).

#### doc

Cartella contenente la documentazione tecnica. <span title="Label: optional" class="Label Label--gray">Opzionale</span>

#### js

Questa cartella contiene tutti i file JavaScript.
Librerie, plugins, e codice personalizzato sono incluse qui.
Le impostazioni di base sono descritte nella [sezione dedicata](js.md).

#### .htaccess

Configurazione di base per il web server Apache. Per maggiorni informazioni vedi [Configurazione Server Apache](Developers/apacheConfig.md).

Per configurazione di servers alterativi consultare la sezione dedicata [Configuarazione Server](https://github.com/h5bp/server-configs/blob/master/README.md)

#### 404.html

La pagina 404 come da [disegno](https://hrslab.com/)

#### browserconfig.xml

Questo file contiene tutte le impostazioni per la personalizzazione di IE11 e Edge
Per maggiori informazioni sull'argomento fare riferimento alla [Documentazione Microsoft](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)).

#### .editorconfig

Il file `.editorconfig` serve a mantenere consistenza nel codice tra differenti editor e IDEs
[Per maggiori informazioni su `.editorconfig` file](misc.md#editorconfig).

#### index.html

Struttura HTML che serve come base per tutte le pagine del sito.

<BlankSlate>

If using a server-side templating framework, then integrate this starting HTML with proper setup. If WordPress links to official docs.
Eventuali impostazioni aggiuntive per server-side framework.

</BlankSlate>

- [x] Django (Python)
- [x] Flask (Python)
- [ ] ~~LMojolicious (Perl)~~ <span title="Label: deprecated" class="IssueLabel bg-red text-white mr-1 px-1">non supportato</span>
- [x] Express (Node.js/JavaScript)
- [x] Laravel (PHP)
- [ ] ~~ASP.NET~~  <span title="Label: deprecated" class="IssueLabel bg-red text-white mr-1 px-1">non supportato</span>

##### Check List

- [ ] Aggiornare gli URLs di CSS e JavaScript in caso di modifica alla struttura di base.
- [ ] Se Google Universal Analytics è in uso,  aggiornare analytics ID.

#### humans.txt

Questo file contiene il team che ha lavorato allo sviluppo del sito/app e la tecnolgia usata.

#### package.json

File per la gestione delle dipendenze di progetto. [vedi il file](https://github.com/HRSlab/-prjdoc/blob/b94458aa899e138990047b65dec68074a1f3677b/package.json)

#### robots.txt

File per nascondere le pagine dai motori di ricerca

#### Icons

<BlankSlate>

Replace the default `favicon.ico`, `tile.png`, `tile-wide.png` and Apple Touch
Icon with your own.

If you want to use different Apple Touch Icons for different resolutions please
refer to the [according documentation](extend.md#apple-touch-icons).

</BlankSlate>

---

### 6.1 Architettura del Sito/Sistema

<BlankSlate>

</BlankSlate>

@flowstart ant

Index=>start: index
Home=>parallel: Home
Products=>operation: Store
Product=>parallel: Products
About=>operation: About
Contact=>operation: Contact
Privacy=>operation: Privacy
Cart=>operation: Cart
Buy=>operation: Payment

Index->Home(path1, left)->Products(bottom)->Product
Home(path2, right)->Contact(right)->Privacy
Product(path1, bottom)->Cart->Buy->Home

@flowend

### 6.2 Specifiche Hardware e Configurazione del Server

<BlankSlate>

(including the development, staging & live environments)

</BlankSlate>

#### 6.2.1 Requisiti Minimi Server

- [ ] Disk Space <span class="Counter bg-blue text-white">1GB+</span>
- [ ] Web Server: <span class="Counter bg-blue text-white">Apache</span> or <span class="Counter bg-blue text-white">Nginx </span>
- [ ] Database: MySQL version <span class="Counter bg-blue text-white">5.0.15</span> or greater or any version of MariaDB.
- [ ] RAM: <span class="Counter bg-blue text-white">512MB+</span>
- [ ] PHP:  Version <span class="Counter bg-blue text-white"> 7.3 </span> or greater.
- [ ] Processor: <span class="Counter bg-blue text-white">1.0GHz+</span>

#### 6.2.2 Configurazioni Server

<br>

- [Apache](/Developers/apacheConfig.md) ![Test](https://github.com/h5bp/server-configs-apache/workflows/server/badge.svg)
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

#### 6.6.1 Data Storage Requirements

- Establishing Passwords and Accounts
- Limiting Physical Access to Cardholder Data
- Storing Data
- Maintaining Servers
- Securing Servers
- Decommissioning Computer Systems and Electronic Media Devices

##### 6.6.1.2 Establishing Passwords and Accounts

All passwords to systems that access credit card information/transactions must conform to Company [password complexity guidelines]. Passwords must be set to expire after no longer than 90 days and must be changed. Users cannot submit a new password that is the same as any of the last four passwords they have used.

Wherever passwords are stored, they are strongly encrypted. Strong encryption is defined as cryptography based on industry-tested and accepted algorithms, along with strong key lengths and proper key-management practices. Cryptography is a method to protect data and includes both encryption (which is reversible) and hashing (which is not reversible, or Äúone way‚ Äù). SHA-1 is an example of an industry-tested and accepted hashing algorithm. Examples of industry-tested and accepted standards and algorithms for encryption include AES (128 bits and higher), TDES (minimum double-length keys), RSA (1024 bits and higher), ECC (160 bits and higher), and ElGamal (1024 bits and higher). For more information, see the National Institute of Standards and Technology (NIST) [Special Publication 800-57](https://csrc.nist.gov/publications/).

###### Requirements for Compliance**

1. Review and remove unnecessary accounts from the list of user accounts
1. Change all default or vendor-supplied passwords, encryption keys, and SNMP community strings
1. Do not share user accounts. Each user must have a unique account
1. Limit repeated failed access attempts to no more than six. After six failed attempts, the account must be locked for no less than 30 minutes or until an administrator enables the user account
1. Require users to re-enter their passwords to reactivate sessions that are idle for more than 15 minutes. For example, use password-protected screen savers
1. Authenticate all access to any database containing cardholder data, including access by applications, administrators, and all users
1. Communicate the rules regarding passwords and account management to users during their yearly PCI training

##### 6.6.1.3 Secure All Media

Store media back-up in a secure off-site location. Review the location’s security at least annually
Physically secure all paper and electronic media that contain cardholder data
Maintain strict control over the internal or external distribution of any kind of media that contains cardholder data by the following means:
Classify media so it can be identified as confidential
Ship media by secured courier or other delivery method that can be accurately tracked
Obtain management approval for moving any and all media containing cardholder data from a secured area (especially when media is distributed to individuals)
Maintain strict control over the storage and accessibility of media that contains cardholder data
Properly maintain inventory logs of all media and conduct media inventories at least annually
Shred, incinerate, or pulp hard-copy materials so that cardholder data cannot be reconstructed
Render cardholder data on electronic media unrecoverable so that cardholder data cannot be reconstructed

##### 6.6.1.4 Storing Data

To maintain compliance with PCI DSS, units must never store sensitive information relating to credit card transactions. Units should analyze carefully why it is “necessary” to keep data that requires encryption, firewalling, special handling, and strict adherence to restrictive business practices and expansive technical solutions. Thoroughly explore other means to achieve the same goals without storing sensitive data and/or consult the Cash Management Office.

##### 6.6.1.5 Collecting Data

The Card Verification Code or Value ( CVC, CVV, et al.) is only necessary when your customer is entering it on your Web site. Units are prohibited from asking for this information when designing pamphlets or any materials that go out to prospective customers. Refer to the Data That Must Never Be Stored below. If you currently have forms, literature, etc. that requests this information, you must amend and eliminate that request.

:::tip Data That Must Never Be Stored
Full contents of any track from a magnetic stripe
Card Verification Codes or Values (CAV2/CVC2/CVV2/CID numbers) – the three digit number from back of the card
Personal Identification Number (PIN/PIN Block)
Note: For further details, see University Policy 3.17, Accepting Credit Cards to Conduct University Business.
:::

:::tip Data That Can Be Stored
The last four digits of the primary account number (PAN) - the number must be masked except for the last four digits anywhere it is stored (this includes all portable devices, logs, backup media, A/P systems, etc.). This information may be stored in the following ways:
One-way hashes based on strong cryptography
Truncation
Index tokens and pads (pads must be securely stored)
Strong cryptography with associated key-management processes and procedures
Protecting Stored Data
Units should consult with technical staff to implement the requirements for storing data securely. The minimum account information that must be rendered unreadable is the PAN.
:::

Units must protect cryptographic keys used for encryption of cardholder data against both disclosure and misuse:

Restrict access to cryptographic keys to the fewest number of custodians necessary
Store cryptographic keys securely in the fewest possible locations and forms
Units must also fully document and implement all key-management processes and procedures, including the generation, distribution, and storage of secure cryptographic keys used for encrypting cardholder data.

##### 6.6.1.6 Collecting Data Maintaining Servers

All systems storing cardholder data must have the following:

Antivirus software that is regularly updated (if available for the OS).
Firewall software, either the default firewall included with the operating system or a third-party package.
Intrusion detection software.  (This can be coupled with the firewall software.)
Integrity monitoring software, such as Tripwire, that are monitoring critical system files.
Additionally, system passwords must conform to the rules stated in University Policy 3.17, Accepting Credit Cards to Conduct University Business.

System Maintenance Requirements
Operating systems and applications must be regularly updated with vendor-supplied critical security patches within one month of the patches being published. All patches must be tested before they are deployed.
Any system used to process credit card transactions must be dedicated to processing credit cards. These systems must not be used as general productivity systems. Access to these systems must be restricted only to those staff members whose job requires such access. Physical security to these systems must be restricted and monitored.
System logging must be enabled and reviewed regularly. For example, for Windows systems, the System, Application, and Security logs must be enabled. The audit history must be maintained for one year, with at least three months available for immediate analysis. Application logging for Web and database applications must be enabled and actively monitored.
System clocks must be synchronized via Network Time Protocol (NTP).
Servers must be scanned for vulnerabilities quarterly. This scan includes scans for vulnerabilities in the operating system as well as in any services running on the system, such as Web applications.
Each server must have only one primary function.
All unnecessary functionality must be disabled or removed.
The system security must be configured based on current best practices.
All non-console administrative access must be encrypted.
Servers must be housed in a physically secure environment.
Top

Securing Servers
Servers must be housed in the CIT server farm. If servers are not housed in the CIT server farm, they must be housed in a facility that restricts physical access such that:

Only those staff members whose job requires such access can gain access to the systems
All accesses are logged and/or monitored through card access systems, video cameras, etc.
Visitors are logged and have a token indicating they are visitors
Back-up media is logged, stored within a secure environment, and destroyed based on a predetermined schedule

Decommissioning Computer Systems and Electronic Media Devices
Please refer to "Decommissioning of Computer Systems and Electronic Media Devices" in the Procedures of University Policy 3.17, Accepting Credit Cards to Conduct University Business.

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
- [x] [Style sheets](developers/css.md)
- [x] Application objects
- [x] Functions
- [x] [Database objects](https://codex.wordpress.org/Class_Reference/wpdb)
- [x] [Template include](https://codex.wordpress.org/Class_Reference/wpdb) files and [frameset](https://www.w3.org/TR/html4/present/frames.html) definitions
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

<div id="gitalk-container"></div>
