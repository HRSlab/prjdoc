---
title: Dashboard
lastUpdated: false
sidebar: true
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 13
  revision: 2
  overhead: 3.321
Perfomance:
  date: 2021-07-05
  loadTime: 3.265
  Region: London (UK)
pageSpeed:
  grade: C
  result: 74%
  previous: C (77%)
ySlow:
  grade: D
  result: 68%
  previous: D (73%)
Backup:
  latest: 14 Giugno 2021
  next: 2021-07-14
  details: [ "Tema: OceanWP v2.1.0", "Versione WP: 5.7.2", "Plugins: 32", "Numero di Posts: 0", "Commenti Approvati: 0" ]
  total: 398.52
  files: 275.43
  db: 123.09
Security:
  latest: 2021-07-05T21:14:41
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 99.698
  downtimes: 5
  timedown: 26 Min 5 Sec



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
"width":"400",
"height":"400",
"data": {
"labels": ["01/02", "10/03", "01/05", "10/06", "27/06", "01/07", "05/07" ],
"datasets": [
{
"label": "Tempo di Caricamento (s)",
"data": [2.222, 3.258, 3.27, 2.502, 2.563, 2.426, 3.57 ],
"backgroundColor": "rgba(186, 218, 85, 0.4)",
"borderColor": "#bada55",
"borderWidth": 1
},
{
"label": "Dimensione Pagina (MB)",
"data": [ 3.61, 4.28, 3.48, 3.48, 3.67, 3.48, 3,48  ],
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

<DowntimeWidget class="col-sm-12 col-md-5" />


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
