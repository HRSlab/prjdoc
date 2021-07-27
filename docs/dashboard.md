---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision: 2
  overhead: 236
Perfomance:
  date: 2021-07-25
  loadTime: 1.67
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
  latest: 01 Luglio 2021
  next: 2021-08-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.7.2", "Plugins: 29", "Numero di Posts: 12", "Commenti Approvati: 0" ]
  total: 2130
  files: 2120
  db: 18.09
Security:
  latest: 2021-07-21T15:21:14
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 99.806
  downtimes: 12
  timedown: 1 Ore 7 Min
  month: "Luglio"
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
    "labels": ["1 Lug", "2 Lug", "3 Lug", "4 Lug", "5 Lug", "6 Lug", "7 Lug", "8 Lug", "9 Lug", "10 Lug", "11 Lug", "12 Lug", "13 Lug", "14 Lug", "15 Lug", "16 Lug", "17 Lug", "18 Lug", "19 Lug", "20 Lug", "21 Lug", "22 Lug", "23 Lug", "24 Lug" ],
    "datasets": [
      {
        "label": "Tempo di Caricamento (s)",
        "data": [3.9, 4, 3.6, 3.8, 3.7, 2.6, 3.8, 3.7, 4, 4, 4.1, 3.7, 3.8, 4.9, 3.8, 4, 4, 4, 20, 4, 4, 5,  4, 4 ],
        "backgroundColor": "rgba(186, 218, 85, 0.4)",
        "borderColor": "#bada55",
        "borderWidth": 1
      },
      {
        "label": "Dimensione Pagina (MB)",
        "data": [4.75, 12.5, 4.73, 4.63, 4.69, 4.86, 4.83, 12.3, 4.56,
11.3, 4.56, 4.76, 4.67, 12.3, 4.68, 25.4, 4.57, 12.5, 4.59, 4.69, 12.6, 4.73, 4.73, 10.7 ],
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
  <AxiosWp id="installed_plugins"  class="col-sm-12 col-md-6 color-bg-canvas rounded mt-3 color-bg-secondary" />
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
