---
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision: 0
  overhead: 0
Perfomance:
  date: 2021-07-31
  loadTime: 2.71
  Region: London (UK)
pageSpeed:
  grade: B
  result: 81%
  previous: B (81%)
ySlow:
  grade: D
  result: 66%
  previous: C (73%)
Backup:
  latest: 14 July 2021
  next: 2021-08-14
  details: [ "Tema: OceanWP v2.1.1", "Versione WP: 5.7.2", "Plugins: 31", "Numero di Posts: 0", "Commenti Approvati: 0" ]
  total: 389.92
  files: 275.43
  db: 123.09
Security:
  latest: 2021-07-16T21:14:41
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 99.766
  downtimes: 2
  timedown: 20 Min 12 Sec
  month: Luglio
---

<main class="container d-flex flex-justify-between flex-column flex-sm-row  flex-md-items-start">

<section
class="color-bg-secondary my-2 p-md-4 p-sm-2 border rounded col-sm-12 mx-1 col-md-8 flex-1">
<PerfomanceHeader />
<div class="d-flex flex-wrap flex-justify-around flex-sm-items-center">
<pageSpeed /> <ySlow />
</div>

<ChartBox>

```chart
{
  "type": "line",
  "width": "400",
  "height": "400",
  "data": {
    "labels": ["01/08", "02/08", "03/08", "04/08", "05/08", "06/08", "07/08", "08/08", "09/08", "10/08", "11/08", "12/08", "13/08", "14/08", "15/08", "16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08", "24/08", "25/08", "26/08", "27/08", "28/08",  "29/08", "30/08", "31/08" ],
    "datasets": [
      {
        "label": "Fully Loaded Time (s)",
        "data": [ ],
        "backgroundColor": "rgba(186, 218, 85, 0.2)",
        "borderColor": "#bada55",
        "borderWidth": 1
      },
      {
        "label": "Time To The First Byte (s)",
        "data": [  ],
        "backgroundColor": "rgba(117,85,218, 0.2)",
        "borderColor": "#7555da",
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "type": "linear",
        "display": true,
        "ticks": {
          "beginAtZero": false,
          "max": 10,
          "min": 0
        }
      }]
    }
  }
}
```
</ChartBox>

<OptimizationWidget />

<section class="d-flex flex-justify-around">

<DowntimeWidget class="col-sm-12 col-md-5" />

<PluginsInstalled class="col-sm-12 col-md-5">

<div class="flash mt-3 flash-error text-small">
  Data Not Available for security reason. Contact us for more info.
</div>

</PluginsInstalled>

</section>

</section>


<section class="col-sm-12 col-md-3 mx-2">


<BackupCard />
<SecurityCard />

<ScanBot />

<UpdatesCard>

<PluginsTimeline />

</UpdatesCard>

</section>


</main>

<style>

div.theme-default-content:not(.custom) {
max-width: 100%;
}


</style>
