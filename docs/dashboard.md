---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision:  8
  overhead: 2.33
Perfomance:
  date: 2021-11-07
  loadTime: 1.121
  Region: London (UK)
pageSpeed:
  grade: B
  result: 82%
  previous: B (82%)
ySlow:
  grade: C
  result: 76%
  previous: C  (76%)
Backup:
  latest: 01 Novembre 2021
  next: 2021-12-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.8.1", "Plugins: 31", "Numero di Posts: 41", "Commenti Approvati: 0" ]
  total:  2150
  files: 2130
  db: 21.97
Security:
  latest: 2021-11-10T08:40:14
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 100
  downtimes: 0
  timedown: 0 Ore 0 Min
  month: "Novembre"
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
"labels": ["1 Nov", "2 Nov", "3 Nov", "4 Nov", "5 Nov", "6 Nov", "7 Nov", "8 Nov", "9 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov", "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov",  "27 Nov", "28 Nov", "29 Nov", "30 Nov", "31 Nov" ],
"datasets": [
{
"label": "Tempo di Caricamento (s)",
"data": [5, 2, 5, 5, 5, 4, 9, 5 ],
"backgroundColor": "rgba(186, 218, 85, 0.4)",
"borderColor": "#bada55",
"borderWidth": 1
},
{
"label": "Dimensione Pagina (MB)",
"data": [4.56, 4.60, 4.60, 4.58, 5.75, 5.65, 4.59, 5.70 ],
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
