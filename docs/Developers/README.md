---
title: Technical Specification
copyright:
  noCopy: true
  noSelect: true
---

![coding](https://img.shields.io/badge/dynamic/json?color=informational&label=Tempo%20di%20Sviluppo&query=%24.data.29.grand_total.text&url=https%3A%2F%2Fwakatime.com%2Fshare%2F%40HRSlab%2Fa31fef80-e05f-4a44-ad97-bd1f95abfd08.json) ![Netlify](https://img.shields.io/netlify/2bdbab2d-4d7d-4a21-b393-aeb406bf14f3?label=Deploy&logo=Netlify&logoColor=%23fafafa) <span class="Label Label--outline Label--outline-green float-right mb-3">Ultimo Aggiornameto: {{ $page.lastUpdated }}</span>

# Specifiche Tecniche

## Server e Hosting

<!-- <DevicePhone>

<iframe src="https://academicwriterpro.com/sample-page" style="width:100%;border:none;height:100%" />

</DevicePhone> -->

### Dominio

|     Hostname      |                Indirizzo IP                | SSL | Tipo di utilizzo  | Obiettivo |
| :---------------: | :----------------------------------------: | :-: | -------------------------| --------------------|
| [www.cutawayapp.it](http://www.cutawayapp.it/) | [217.160.0.106](http://www.cutawayapp.it/) |  🔴 No |  Reindirizzamento Frame  | `https://cutawayweb.hrslab.com` |

##### Reindirizzamento

|     Hostname      |                Indirizzo IP                | SSL | Tipo di utilizzo  | Obiettivo |
| :---------------: | :----------------------------------------: | :-: | -------------------------| -------- |
| [cutawayweb.hrslab.com](https://cutawayweb.hrslab.com) | [217.160.0.31](https://cutawayweb.hrslab.com) |  🟢 Sì |  Sito web presso HRS  |  WordPress (cutawayweb) |

### Registrar

| Registrar | Stato               |    Tipo di Servizio     | Scadenza  |
| --------- | ------------------- | :---------------------: | --------- |
| aruba.it  | Registrato e Attivo | DNS Management + E-Mail | 20/8/2021 |

#### Credenziali

| Link di accesso                                  | Username           | Password     |
| ------------------------------------------------ | ------------------ | ------------ |
| [https://admin.aruba.it](https://admin.aruba.it) | `9388879@aruba.it` | `5hg31Y0w2Q` |

#### Configurazione DNS

```JSON
"A": [
    {"A":"A","HostName":"","IPAddress":"217.160.0.32"},
    {"A":"A","HostName":"hrs","IPAddress":"217.160.0.32"},
    {"A":"A","HostName":"itcutaway","IPAddress":"172.105.247.165"},
    {"A":"A","HostName":"localhost","IPAddress":"127.0.0.1"},
    {"A":"A","HostName":"webmail","IPAddress":"62.149.158.92"},
    {"A":"A","HostName":"webmail","IPAddress":"62.149.158.91"},
    {"A":"A","HostName":"www","IPAddress":"217.160.0.32"}
],
```

```JSON
"AAAA": [
    {"AAAA":"AAAA","HostName":"www","IPV6Address":"2001:8d8:100f:f000:0:0:0:2e1"},
    {"AAAA":"","HostName":"AAAA","IPV6Address":"2001:8d8:100f:f000:0:0:0:2e1"}
],
```

```JSON
"TXT": [
    {"TXT":"TXT","Value":"305aec8d729af29178a818ee9144b3c608272155d","HostName":"_dep_ws_mutex.www"},
    {"TXT":"","Value":"TXT","HostName":"907c0f8d56f35ca03e75bff0feeb18bb7c4312e9055\t_dep_ws_mutex"},
    {"TXT":"TXT","Value":"zone-ownership-verification-01c0e1e7fcb1f7393","HostName":""}
],
```

```JSON

"CNAME": [
    {"CNAME":"CNAME","HostName":"admin","AliasName":"admin.aruba.it."},
    {"CNAME":"CNAME","HostName":"autoconfig","AliasName":"autodiscover.aruba.it."},
    {"CNAME":"CNAME","HostName":"ftp\twww.cutawayapp.it","AliasName":""},
    {"CNAME":"CNAME","HostName":"imap","AliasName":"imaps.aruba.it."}
]

```

```JSON
"NS": [
    {"NS":"","NameServer":"","IPAddress":""}
]
```

```JSON

"SRV": [
    {"SRV":"SRV","Service":"autodiscover","Protocol":"tcp","Priority":0,"Weight":0,"Port":443,"Target":"autodiscover.aruba.it"},
    {"SRV":"SRV","Service":"xmpp-client","Protocol":"tcp","Priority":5,"Weight":0,"Port":5222,"Target":"imchat1.aruba.it"},
    {"SRV":"SRV","Service":"xmpp-server","Protocol":"tcp","Priority":5,"Weight":0,"Port":5269,"Target":"imchat1.aruba.it"}
]

```

### Hosting

| Server | Nome       | Contratto | Directory dell'installazione | Database   |
| ------ | ---------- | --------- | ---------------------------- | ---------- |
| HRSlab | cutawayweb | 61785583  | ../cutawayweb                | dbs1139144 |

![AppStatus](https://img.shields.io/badge/Stato-Installata-informational)

### Database

<section class="Box py-6 px-4 my-3">
<div class="TableObject text-small border-bottom text-gray-light py-1">
<div class="TableObject-item TableObject-item--primary">
Nome host
</div>
<div class="TableObject-item">db5001341038.hosting-data.io
</div>
</div>
<div class="TableObject text-small border-bottom text-gray-light py-1">
<div class="TableObject-item TableObject-item--primary">
Porta
</div>
<div class="TableObject-item">3306
</div>
</div>
<div class="TableObject text-small border-bottom text-gray-light py-1">
<div class="TableObject-item TableObject-item--primary">
Nome utente
</div>
<div class="TableObject-item">dbu1544293
</div>
</div>
<div class="TableObject text-small border-bottom text-gray-light py-1">
<div class="TableObject-item TableObject-item--primary">
Tipo e versione
</div>
<div class="TableObject-item">MySQL 5.7
</div>
</div>
<div class="TableObject text-small border-bottom text-gray-light py-1">
<div class="TableObject-item TableObject-item--primary">
Memoria
</div>
<div class="TableObject-item"><span class="text-small text-gray mr-2">7 di 2147 MB utilizzato</span>
<span class="Progress d-inline-flex" style="width: 100px">
  <div class="Progress-item bg-green" style="width: 10%"></div>
</span>
</div>
</div>
<div class="TableObject text-small border-bottom text-gray-light py-1">
<div class="TableObject-item TableObject-item--primary">
Password
</div>
<div class="TableObject-item">********
</div>
</div>
<div class="TableObject text-small border-bottom text-gray-light py-1">
<div class="TableObject-item TableObject-item--primary">
Backup
</div>
<div class="TableObject-item"><a href="https://www.hrslab.com/" target="_blank" rel="noopener noreferrer">ultimi 7 giorni</a>
</div>
</div>
</section>

### Documenti di riferimento

<BlankSlate></BlankSlate>

## Specifiche di Sistema

|      Server OS       | WordPress version | Worker version | PHP version |
| :------------------: | :---------------: | :------------: | :---------: |
| Linux (o compatible) |        5.6        |     4.9.7      |   7.4.13    |

<ul class="text-small Box border-0 Box--condensed my-8">
<li class="Box-row border">Site IP <span class="float-right">217.160.0.31</span></li>
<li class="Box-row border">Processor architecture <span class="float-right">64bit</span></li>
<li class="Box-row border">Language <span class="float-right">it_IT</span></li>
<li class="Box-row border">WordPress timezone <span class="float-right">Europe/London</span></li>
<li class="Box-row border">MySQL CLI access <span class="float-right">On</span></li>
<li class="Box-row border">MySQL version<span class="float-right"> 5.7.32</span></li>
<li class="Box-row border">MySQL Dump <span class="float-right">On</span></li>
<li class="Box-row border">Zip CLI access<span class="float-right"> On</span></li>
<li class="Box-row border">CURL<span class="float-right"> On</span></li>
<li class="Box-row border">Unzip CLI access<span class="float-right"> On</span></li>
<li class="Box-row border">Safe mode<span class="float-right"> Off</span></li>
<li class="Box-row border">PHP execution time<span class="float-right"> 1,800 s</span></li>
<li class="Box-row border">PHP memory limit<span class="float-right"> 768 MB</span></li>
<li class="Box-row border">Root folder<span class="float-right"> ../****/cutawayweb/</span></li>
<li class="Box-row border">Max post size<span class="float-right"> 64 MB</span></li>
<li class="Box-row border">Max upload size <span class="float-right">64 MB</span></li>

</ul>

### Struttura di Base

```ASCII
.
└── plublic
    ├── wp-admin
    │   ├── css
    │   ├── images
    │   ├── includes
    │   ├── js
    │   ├── maint
    │   ├── network
    │   ├── users
    │   └── ...
    ├── wp-content
    │   ├── ai1wm-bcakups
    │   ├── languages
    │   ├── plugins
    │   │   └── ...
    │   ├── themes
    │   │   └── ...
    │   ├── upgrades
    │   ├── uploads
    │   └── index.php
    ├── wp-includes
    │   └── ...
    │       └── ...
    ├── .htaccess
    ├── index.php
    ├── license.txt
    ├── readme.html
    ├── wp-activate.php
    ├── wp-admin.zip
    ├── wp-blog-header.php
    ├── wp-comments-post.php
    ├── wp-config-sample.php
    ├── wp-config.php
    ├── wp-cron.php
    ├── wp-links-opml.php
    ├── wp-load.php
    ├── wp-login.php
    ├── wp-mail.php
    ├── wp-settings.php
    ├── wp-signup.php
    ├── wp-trackback.php
    └── xmlrpc.php
```

<BlankSlate>Spiegazione Singoli File/Cartelle della struttra</BlankSlate>

---

### Architettura del Sito/Sistema

Sito a Pagina Singola.

@flowstart
Home=>operation: Home
Section1=>parallel: Find My Barber
Section2=>parallel: Funzionalità
Section3=>parallel: Become a Barber
Section4=>parallel: Download
Contacts=>operation: Contatti

Home->Section1(path1, bottom)->Section2(path1, bottom)->Section3(path1, bottom)->Section4(path1, bottom)->Contacts
@flowend

### Specifiche Hardware e Configurazione del Server

<BlankSlate>

(including the development, staging & live environments)

</BlankSlate>

### Requisiti Minimi Server

- [ ] Disk Space <span class="Counter bg-blue text-white">1GB+</span>
- [ ] Web Server: <span class="Counter bg-blue text-white">Apache (with mod_rewrite)</span> or <span class="Counter bg-blue text-white">Nginx </span>
- [ ] Database: MySQL version <span class="Counter bg-blue text-white">5.6</span> or greater or any version of MariaDB.
- [ ] RAM: <span class="Counter bg-blue text-white">512MB+</span>
- [ ] PHP: Version <span class="Counter bg-blue text-white"> 7.3 </span> or greater.
- [ ] Processor: <span class="Counter bg-blue text-white">1.0GHz+</span>

#### Configurazioni Server

<br>

- [Apache](/Developers/apacheConfig.md) ![Test](https://github.com/h5bp/server-configs-apache/workflows/server/badge.svg)
- [Google App Engine (GAE)](/Developers/GAEConfig.md)
- [Internet Information Services(IIS)](/Developers/IISConfig.md)
- [lighttpd](/Developers/lighttpdConfig.md)
- [Nginx](/Developers/NginxConfig.md) ![Test](https://github.com/h5bp/server-configs-nginx/workflows/server/badge.svg)
- [Node.js](/Developers/NodejsConfig.md) ![Build Status](https://secure.travis-ci.org/h5bp/server-configs-node.svg)

### Altre Piattaforme e/o Applicazioni

<BlankSlate>

(if applicable, WAP and iTV (set top configuration) should be documented in this section)

</BlankSlate>

### Specifiche Software

<BlankSlate>

(including application languages, web server, operating system)

</BlankSlate>

### Intefacce di Sistema e prodotti di terze parti

<BlankSlate>

(including content management system, payment providers, XML links, data transfer processes, COM objects, log analysis tools)

</BlankSlate>

### Sicurezza

<BlankSlate>

(including data storage requirements, sensitivities particular to the project, commitment, or non-commitment to, comply with the data protection legislation (country specific), public/private key infrastructure, SSL certificates, version control and release procedures details, directory structure standards)

</BlankSlate>

<div class="hide">

#### Data Storage Requirements

- Establishing Passwords and Accounts
- Limiting Physical Access to Cardholder Data
- Storing Data
- Maintaining Servers
- Securing Servers
- Decommissioning Computer Systems and Electronic Media Devices

##### Establishing Passwords and Accounts

All passwords to systems that access credit card information/transactions must conform to Company [password complexity guidelines]. Passwords must be set to expire after no longer than 90 days and must be changed. Users cannot submit a new password that is the same as any of the last four passwords they have used.

Wherever passwords are stored, they are strongly encrypted. Strong encryption is defined as cryptography based on industry-tested and accepted algorithms, along with strong key lengths and proper key-management practices. Cryptography is a method to protect data and includes both encryption (which is reversible) and hashing (which is not reversible, or Äúone way‚ Äù). SHA-1 is an example of an industry-tested and accepted hashing algorithm. Examples of industry-tested and accepted standards and algorithms for encryption include AES (128 bits and higher), TDES (minimum double-length keys), RSA (1024 bits and higher), ECC (160 bits and higher), and ElGamal (1024 bits and higher). For more information, see the National Institute of Standards and Technology (NIST) [Special Publication 800-57](https://csrc.nist.gov/publications/).

###### Requirements for Compliance\*\*

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
Intrusion detection software. (This can be coupled with the firewall software.)
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

</div>

## User Interface Specification

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
