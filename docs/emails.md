---
copyright:
  noCopy: true
  noSelect: true
title: emails settings
---

<nav aria-label="Breadcrumb">
  <ol>
    <li class="breadcrumb-item"><a href="/technicaldetails/">Dettagli</a></li>
    <li class="breadcrumb-item" aria-current="page">{{ $frontmatter.title }}</li>
  </ol>
</nav>

## 1. Emails Accounts

| Indirizzo e-mail              | Tipo di account     | Antispam | Spazio di Archiviazione  |
| ----------------------------- | ------------------- | -------- | ------------------------ |
| c.peretto@energ-tech.it       | 12 GB email Storage | Attivato | 5.4GB di 12GB utilizzato |
| s.fontan@energ-tech.it        | 2 GB email Storage  | Attivato | 1GB di 2GB utilizzato    |
| info@energ-tech.it            | 2 GB email Storage  | Attivato | 33MB di 2GB utilizzato   |
| commerciale@energ-tech.it     | 2 GB email Storage  | Attivato | 827MB di 2GB utilizzato  |
| amministrazione@energ-tech.it | 2 GB email Storage  | Attivato | 2MB di 2GB utilizzato    |

### 1.2 Casella PEC

| Indirizzo e-mail       | Tipo di account    | Antispam | Spazio di Archiviazione |
| ---------------------- | ------------------ | -------- | ----------------------- |
| info@pec.energ-tech.it | 2 GB email Storage | Attivato | 0MB di 2GB utilizzato   |


> Provider: [Aruba Business](https://admin.arubabusiness.it)



#### Dominio


| Stato  | Tipo         | Certificato SSL | Tipo di Utilizzo |
| ------ | ------------ | --------------- | ---------------- |
| Attivo | Sottodominio | Attivato        | Pec              |

**Configurazioni DNS**

| TIPO | Nome Host | Valore                       | Servizio   |
| ---- | --------- | ---------------------------- | ---------- |
| A    | pec       | `217.160.0.30`                 | Webhosting |
| AAAA | pec       | `2001:8d8:100f:f000:0:0:0:257` | Webhosting |
| A    | www.pec   | `217.160.0.30`                 | Webhosting |
| AAAA | www.pec   | `2001:8d8:100f:f000:0:0:0:257` | Webhosting |
| MX   | pec       | `mx.pec.aruba.it`              | -          |

## 2. Configurazione Clients

### 2.1 Dati di accesso

| SETTING     | VALUE                                    |
| ----------- | ---------------------------------------- |
| Nome utente | Indirizzo di posta elettronica completo. |
| Password    | La password dell' indirizzo di posta.    |

### 2.2 Impostazioni IMAP

#### **Server di posta in entrata**

| SETTING                                   | VALUE         |
| ----------------------------------------- | ------------- |
| Indirizzo del server                      | imap.ionos.it |
| Porta (per SSL)                           | 993           |
| Porta (TLS/STARTTLS, alternativa all'SSL) | 143           |

#### **Server di posta in uscita (SMTP)**

| SETTING                                   | VALUE         |
| ----------------------------------------- | ------------- |
| Server                                    | smtp.ionos.it |
| Porta (per SSL)                           | 465           |
| Porta (TLS/STARTTLS, alternativa all'SSL) | 587           |

### 2.3 Impostazioni POP

#### **Server di posta in entrata**

| SETTING                                   | VALUE        |
| ----------------------------------------- | ------------ |
| Server                                    | pop.ionos.it |
| Porta (per SSL)                           | 995          |
| Porta (TLS/STARTTLS, alternativa all'SSL) | 110          |

#### **Server di posta in uscita (SMTP)**

| SETTING                                   | VALUE         |
| ----------------------------------------- | ------------- |
| Server                                    | smtp.ionos.it |
| Porta (per SSL)                           | 465           |
| Porta (TLS/STARTTLS, alternativa all'SSL) | 587           |

## Migrazione Email


### info@energ-tech.it

| Emails | MB    | Status                                                                                  |
| ------ | ----- | --------------------------------------------------------------------------------------- |
| 291    | 33 MB | ![stauts migration](https://img.shields.io/badge/Status-Migration%20job%20done-success) |

::: details Dettagli

**Migrazione Principale**

```yaml
Migration start: 15.01.2021 19:58
Migration finished: 15.01.2021 20:00
Emails: 291 (33 MB)
Order number: 5b6d4c7f-c9d1-4a6f-82a9-3fecbf6a7d22
```

**Migrazione Delta**

```yaml
Job: fd8674d4-affe-4e7f-9075-16cfc15f8ef8
Status: Migration job done
Migration start: 1/17/21, 8:41 AM
Migration finished: 1/17/21, 8:42 AM
Data: 33 MB
Emails migrated: 4 (240 duplicates)
General errors: 0
```

:::

### commerciale@energ-tech.it

| Emails | MB     | Status                                                                                  |
| ------ | ------ | --------------------------------------------------------------------------------------- |
| 3,526  | 827 MB | ![stauts migration](https://img.shields.io/badge/Status-Migration%20job%20done-success) |

::: details Dettagli

**Migrazione Principale**

```yaml
Migration start: 15.01.2021 20:57
Migration finished: 15.01.2021 21:22
Emails: 3526 (827 MB)
Order number: 3d017a28-879e-4faa-90ea-afe4d86c5213
```

**Migrazione Delta**

```yaml
Job: 7982e9e6-99eb-43c1-a64c-f82b06028d31
Migration start: 1/17/21, 8:52 AM
Migration finished: 1/17/21, 8:57 AM
Data: 828 MB
Emails migrated: 0 (427 errors)
General errors: 0
```

:::

### amministrazione@energ-tech.it

| Emails | MB   | Status                                                                                  |
| ------ | ---- | --------------------------------------------------------------------------------------- |
| 6      | 2 MB | ![stauts migration](https://img.shields.io/badge/Status-Migration%20job%20done-success) |

::: details Dettagli

**Migrazione Principale**

```yaml
Migration start: 15.01.2021 21:08
Migration finished: 15.01.2021 21:08
Emails: 6 (2 MB)
Order number: 58d6e388-f924-419f-b735-32f4d2ed89d7
```

**Migrazione Delta**

```yaml
Job: 7982e9e6-99eb-43c1-a64c-f82b06028d31
Status: Migration job aborted
Migration start: 1/17/21, 8:53 AM
Migration finished: 1/17/21, 8:54 AM
Data: 2 MB
Emails migrated: 0
General errors: 0
```

:::

### c.peretto@energ-tech.it

| Emails | MB       | Status                                                                                  |
| ------ | -------- | --------------------------------------------------------------------------------------- |
| 7,382  | 5,580 MB | ![stauts migration](https://img.shields.io/badge/Status-Migration%20job%20done-success) |

::: details Dettagli

**Migrazione Principale**

```yaml
Migration start: 15.01.2021 21:08
Migration finished: 15.01.2021 22:29
Emails: 7382 (5,580 MB)
Order number: d48c4e2f-3ff4-4c41-b6f0-27a44c2a5fb0
```

**Migrazione Delta**

```yaml
Job: cde4e57c-b0a7-4efc-866a-afbcfacf8322
Status: Migration job aborted
Migration start: 1/17/21, 8:47 AM
Migration finished: 1/17/21, 8:53 AM
Data: 5,582 MB
Emails migrated: 0 (7 duplicates and 505 errors)
General errors: 0
```

:::

### s.fontan@energ-tech.it

| Emails | MB       | Status                                                                                  |
| ------ | -------- | --------------------------------------------------------------------------------------- |
| 2.755  | 1.034 MB | ![stauts migration](https://img.shields.io/badge/Status-Migration%20job%20done-success) |

::: details Dettagli

**Migrazione Principale**

```yaml
Migration start: 15.01.2021 17:17
Migration finished: 15.01.2021 17:56
Emails: 2760 (1.035 MB)
Order number: eea0fa40-2aa6-4bed-8e4d-fe3715f49ad3
```

**Migrazione Delta**

```yaml
Job: cde4e57c-b0a7-4efc-866a-afbcfacf8322
Migration start: 1/17/21, 08:43 AM
Migration finished: 1/17/21, 08:47 AM
Data: 1035 MB
Emails migrated: 5 (2059 duplicates)
General errors: 0
```

:::

# Allegati
