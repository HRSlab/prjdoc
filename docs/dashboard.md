---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 13
  revision: 2
  overhead: 3.321
Perfomance:
  date: 2021-07-08
  loadTime: 3.7
  Region: London (UK)
pageSpeed:
  grade: A
  result: 91%
  previous: A (91%)
ySlow:
  grade: C
  result: 77%
  previous: C  (77%)
Backup:
  latest: 01 Luglio 2021
  next: 2021-08-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.7.2", "Plugins: 29", "Numero di Posts: 12", "Commenti Approvati: 0" ]
  total: 2130
  files: 2120
  db: 18.09
Security:
  latest: 2021-07-08T09:17:57
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 99.685
  downtimes: 6
  timedown: 36 Min 18 Sec
  month: "Luglio"
---

<main class="d-flex flex-justify-between flex-column flex-sm-row  flex-md-items-start">

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
    "labels": ["1 Lug", "2 Lug", "3 Lug", "4 Lug", "5 Lug", "6 Lug", "7 Lug", "8 Lug", "9 Lug"],
    "datasets": [
      {
        "label": "Tempo di Caricamento (s)",
        "data": [3.9, 4, 3.6, 3.8, 3.7, 2.6, 3.8, 3.7, 4 ],
        "backgroundColor": "rgba(186, 218, 85, 0.4)",
        "borderColor": "#bada55",
        "borderWidth": 1
      },
      {
        "label": "Dimensione Pagina (MB)",
        "data": [4.75, 12.5, 4.73, 4.63, 4.69, 4.86, 4.83, 12.3, 4.56 ],
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
          "max": 15,
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
  <DowntimeWidget class="col-sm-12 col-md-6 border-md-right" />
  <AxiosWp id="installed_plugins"  class="col-sm-12 col-md-6 color-bg-canvas color-bg-secondary" />
</div>

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





</style>
