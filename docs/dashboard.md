---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision:  22
  overhead: 6.93
Perfomance:
  date: 2021-10-27
  loadTime: 2.729
  Region: London (UK)
pageSpeed:
  grade: B
  result: 82%
  previous: B (86%)
ySlow:
  grade: C
  result: 76%
  previous: C  (77%)
Backup:
  latest: 01 Ottobre 2021
  next: 2021-11-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.8", "Plugins: 30", "Numero di Posts:   52", "Commenti Approvati: 0" ]
  total: 2130
  files: 2120
  db: 19.55
Security:
  latest: 2021-08-12T09:29:00
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 99.658
  downtimes: 10
  timedown: 2 Ore 18 Min
  month: "Ottobre"
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
    "labels": ["1 Oct", "2 Oct", "3 Oct", "4 Oct", "5 Oct", "6 Oct", "7 Oct", "8 Oct", "9 Oct", "10 Oct", "11 Oct", "12 Oct", "13 Oct", "14 Oct", "15 Oct", "16 Oct", "17 Oct", "18 Oct", "19 Oct", "20 Oct", "21 Oct", "22 Oct", "23 Oct", "24 Oct", "25 Oct", "26 Oct",  "27 Oct", "28 Oct", "29 Oct", "30 Oct", "31 Oct" ],
    "dataOcts": [
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
          "max": 16,
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
  <AxiosWp id="installed_pOctins"  class="col-sm-12 col-md-6 color-bg-canvas rounded mt-3 color-bg-secondary" />
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
