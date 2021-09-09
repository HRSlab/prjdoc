---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision:  17
  overhead: 1.84
Perfomance:
  date: 2021-09-05
  loadTime: 1.915
  Region: London (UK)
pageSpeed:
  grade: B
  result: 86%
  previous: B (86%)
ySlow:
  grade: C
  result: 76%
  previous: C  (76%)
Backup:
  latest: 01 Settembre 2021
  next: 2021-10-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.8", "Plugins: 30", "Numero di Posts:   52", "Commenti Approvati: 0" ]
  total: 2130
  files: 2120
  db: 19.55
Security:
  latest: 2021-08-12T09:29:00
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 99.949
  downtimes: 1
  timedown: 5 Min 6 Sec
  month: "Settembre"
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
    "labels": ["1 Set", "2 Set", "3 Set", "4 Set", "5 Set", "6 Set", "7 Set", "8 Set", "9 Set", "10 Set", "11 Set", "12 Set", "13 Set", "14 Set", "15 Set", "16 Set", "17 Set", "18 Set", "19 Set", "20 Set", "21 Set", "22 Set", "23 Set", "24 Set", "25 Set", "26 Set",  "27 Set", "28 Set", "29 Set", "30 Set", "31 Set" ],
    "datasets": [
      {
        "label": "Tempo di Caricamento (s)",
        "data": [ 4, 6, 4, 2, 4, 3, 9, 5
          ],
        "backgroundColor": "rgba(186, 218, 85, 0.4)",
        "borderColor": "#bada55",
        "borderWidth": 1
      },
      {
        "label": "Dimensione Pagina (MB)",
        "data": [ 4.71, 4.33, 5.44, 2.85, 3.60, 3.65, 9.27, 4.28
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
  <AxiosWp id="installed_pSetins"  class="col-sm-12 col-md-6 color-bg-canvas rounded mt-3 color-bg-secondary" />
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
