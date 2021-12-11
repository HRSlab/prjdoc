---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision:  3
  overhead: 1.96
Perfomance:
  date: 2021-12-11
  loadTime: 2.112
  Region: London (UK)
pageSpeed:
  grade: B
  result: 80%
  previous: B (81%)
ySlow:
  grade: C
  result: 75%
  previous: C  (75%)
Backup:
  latest: 01 Dicembre 2021
  next: 2022-01-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.8.2", "Plugins: 32", "Numero di Posts: 42", "Commenti Approvati: 0" ]
  total:  2205.82
  files: 2130
  db: 20.61
Security:
  latest: 2021-12-10T19:23:36+00:00
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 100
  downtimes: 0
  timedown: 0 Ore 0 Min
  month: "Dicembre"
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
"labels": ["1 Dic", "2 Dic", "3 Dic", "4 Dic", "5 Dic", "6 Dic", "7 Dic", "8 Dic", "9 Dic", "10 Dic", "11 Dic", "12 Dic", "13 Dic", "14 Dic", "15 Dic", "16 Dic", "17 Dic", "18  Dic", "19 Dic", "20 Dic", "21 Dic", "22 Dic", "23 Dic", "24 Dic", "25 Dic", "26 Dic",  "27 Dic", "28 Dic", "29 Dic", "30 Dic", "31 Dic" ],
"datasets": [
{
"label": "Tempo di Caricamento (s)",
"data": [ 9, 5, 3, 5, 6, 5, 6, 8, 9, 5, 19 ],
"backgroundColor": "rgba(186, 218, 85, 0.4)",
"borderColor": "#bada55",
"borderWidth": 1
},
{
"label": "Dimensione Pagina (MB)",
"data": [4.58, 5.71, 4.60, 4.68, 5.77, 4.70, 4.58, 5.71, 5.65, 4.52, 5.82 ],
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
  "max": 20,
  "min": 0
}
}]
}
}
}
```
</ChartBox>

<div class="border color-bg-subtle my-4" >
  <p class="f5 pl-6 pt-2">Video Test<span class="text-small Label Label--inline">2021-11-25</span> </p>
  <div class="d-flex flex-wrap flex-justify-around">
      <video width="320" height="240" controls autoplay>
          <source src="/browsertime-results/reinnovame.com/2021-11-25T141217+0000/pages/reinnovame_com/data/video/1.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
          <video  width="320" height="240" controls autoplay>
          <source src="/browsertime-results/reinnovame.com/2021-11-25T141217+0000/pages/reinnovame_com/data/video/2.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
          <video  width="320" height="240" controls autoplay>
          <source src="/browsertime-results/reinnovame.com/2021-11-25T141217+0000/pages/reinnovame_com/data/video/3.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
  </div>
</div>

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
