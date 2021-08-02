---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision: 8
  overhead: 709.68
Perfomance:
  date: 2021-07-31
  loadTime: 3.68
  Region: London (UK)
pageSpeed:
  grade: A
  result: 91%
  previous: A (90%)
ySlow:
  grade: C
  result: 77%
  previous: C  (76%)
Backup:
  latest: 01 Agosto 2021
  next: 2021-09-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.8", "Plugins: 30", "Numero di Posts:  35", "Commenti Approvati: 0" ]
  total: 2130
  files: 2120
  db: 18.08
Security:
  latest: 2021-07-21T15:21:14
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 100%
  downtimes: 0
  timedown: 0
  month: "Agosto"
---

<main
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark_dimmed"
    class="d-flex flex-justify-between flex-column flex-sm-row  flex-md-items-start">
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
    "labels": ["1 Ago", "2 Ago", "3 Ago", "4 Ago", "5 Ago", "6 Ago", "7 Ago", "8 Ago", "9 Ago", "10 Ago", "11 Ago", "12 Ago", "13 Ago", "14 Ago", "15 Ago", "16 Ago", "17 Ago", "18 Ago", "19 Ago", "20 Ago", "21 Ago", "22 Ago", "23 Ago", "24 Ago", "25 Ago", "26 Ago",  "27 Ago", "28 Ago", "29 Ago", "39 Ago", "31 Ago" ],
    "datasets": [
      {
        "label": "Tempo di Caricamento (s)",
        "data": [
          ],
        "backgroundColor": "rgba(186, 218, 85, 0.4)",
        "borderColor": "#bada55",
        "borderWidth": 1
      },
      {
        "label": "Dimensione Pagina (MB)",
        "data": [
        ],
        "backgroundColor": "rgba(117,85,218, 0.4)",
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
          "max": 30,
          "min": 0
        }
      }]
    }
  }
}
```
</ChartBox>

<OptimizationWidget />

<div class="container d-flex flex-column flex-sm-row">
  <DowntimeWidget class="col-sm-12 col-md-6 mx-auto" />
  <AxiosWp id="installed_pAgoins"  class="col-sm-12 col-md-6 color-bg-canvas rounded mt-3 color-bg-secondary" />
</div>

</section>


<section class="col-sm-12 col-md-3 mx-2">


<BackupCard />
<SecurityCard />

<ScanBot />

<HttpsStatus />

<UpdatesCard>

<PluginsTimeline />



</UpdatesCard>

</section>


</main>

<style>





</style>
