---
copyright:
  noCopy: true
  noSelect: true
title: Mail Server Analytics
sidebar: false
---

<nav aria-label="Breadcrumb text-small">
<ol>
<li class="breadcrumb-item"><a href="#">Business</a></li>
<li class="breadcrumb-item"><a href="#">Customers</a></li>
<li class="breadcrumb-item" aria-current="page">MX</li>
</ol>
</nav>

# MX Mail Server Check


![error](https://img.shields.io/badge/Errors-3%20-critical?style=for-the-badge)
![warning](https://img.shields.io/badge/Warning-3%20-important?style=for-the-badge)
![passing](https://img.shields.io/badge/Passed-234%20-success?style=for-the-badge)

## Problems

<div class="Box container-xl clearfix my-6">
  <div class="Box-header col-12 float-left mx-auto">
    <h3 class="Box-title text-gray-dark col-12 float-left">
      <span class="col-2 float-left">Category</span><span class="col-4 mx-auto float-left">Host</span><span class="col-6float-left">Results</span>
    </h3>
  </div>
<div class="Box-row text-small col-12 float-left">
<span class="col-2 float-left text-gray-light">
<svg class="octicon text-red mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"></path></svg>dmarc</span>
<span class="col-4 mx-auto float-left text-gray">energ-tech.it</span>
<span class="col-6 float-left text-gray">No DMARC Record found</span>
</div>

<div class="Box-row text-small col-12 float-left">
<span class="col-2 float-left text-gray-light">
<svg class="octicon text-red mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"></path></svg>http</span>
<span class="col-4 mx-auto float-left text-gray">energ-tech.it</span>
<span class="col-6 float-left text-gray">The remote server returned an error: (503) Server Unavailable. (http://energ-tech.it)</span>
</div>

<div class="Box-row text-small col-12 float-left">
<span class="col-2 float-left text-gray-light">
<svg class="octicon text-red mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"></path></svg>mx</span>
<span class="col-4 mx-auto float-left text-gray">energ-tech.it</span>
<span class="col-6float-left text-gray">No DMARC Record found</span>
</div>

<div class="Box-row text-small col-12 float-left">
<span class="col-2 float-left text-gray-light">
<svg class="octicon text-yellow mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>mx</span>
<span class="col-4 mx-auto float-left text-gray">energ-tech.it</span>
<span class="col-6 float-left text-gray">DMARC Quarantine/Reject policy not enabled </span>
</div>

<div class="Box-row text-small col-12 float-left">
<span class="col-2 float-left text-gray-light">
<svg class="octicon text-yellow mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>smtp</span>
<span class="col-4 mx-auto float-left text-gray">mx-01-eu-central-1.prod.hydra.sophos.com </span>
<span class="col-6 float-left text-gray">Reverse DNS does not match SMTP Banner </span>
</div>

<div class="Box-row text-small col-12 float-left">
<span class="col-2 float-left text-gray-light">
<svg class="octicon text-yellow mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>smtp</span>
<span class="col-4 mx-auto float-left text-gray">mx-02-eu-central-1.prod.hydra.sophos.com </span>
<span class="col-6 float-left text-gray">Reverse DNS does not match SMTP Banner </span>

</div>
</div>

## Mail Server

#### mx:energ-tech.it <span class="IssueLabel bg-red text-white mr-1">1 Tests Failed</span>

| Pref | Hostname                                 | IP Address  | TTL    |
| ---- | ---------------------------------------- | ----------- | ------ |
| 10   | mx-01-eu-central-1.prod.hydra.sophos.com | 18.196.6.43 | 60 min |
| 20   | mx-02-eu-central-1.prod.hydra.sophos.com | 18.196.6.43 | 60 min |

#### dmarc:energ-tech.it <span class="IssueLabel bg-red text-white mr-1">1 Tests Failed</span>

| Category | Host          | Result                |
| -------- | ------------- | --------------------- |
| dmarc    | energ-tech.it | No DMARC Record found |

#### smtp:mx-01-eu-central-1.prod.hydra.sophos.com

| Category | Host  | Result  |
| -------- | ---------------------------------------- | -------------------------------------------------------|
| smtp     | mx-01-eu-central-1.prod.hydra.sophos.com | Reverse DNS does not match SMTP Banner      |
| smtp     | mx-01-eu-central-1.prod.hydra.sophos.com | OK - 18.196.6.43 resolves to ec2-18-196-6-43.eu-central-1.compute.amazonaws.com |
| smtp     | mx-01-eu-central-1.prod.hydra.sophos.com | OK - Reverse DNS is a valid Hostname           |
| smtp     | mx-01-eu-central-1.prod.hydra.sophos.com | OK - Supports TLS.    |
| smtp     | mx-01-eu-central-1.prod.hydra.sophos.com | 0.316 seconds - Good on Connection time   |
| smtp     | mx-01-eu-central-1.prod.hydra.sophos.com | OK - Not an open relay.   |
| smtp     | mx-01-eu-central-1.prod.hydra.sophos.com | 1.021 seconds - Good on Transaction Time   |

