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
  date: 2021-12-02
  loadTime: 1.108
  Region: London (UK)
pageSpeed:
  grade: B
  result: 84%
  previous: B (81%)
ySlow:
  grade: C
  result: 76%
  previous: C  ((75%)
Backup:
  latest: 01 Dicembre 2021
  next: 2021-01-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.8.1", "Plugins: 31", "Numero di Posts: 41", "Commenti Approvati: 0" ]
  total:  2206.39
  files: 2130
  db: 21.97
Security:
  latest: 2021-11-28T19:23:36+00:00
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
"data": [5, 2, 5, 5, 5, 4, 9, 5, 3, 5, 5, 4, 6, 5, 6, 6, 8, 6, 5, 6, 9, 11, 5, 5, 3, 5, 4, 6, 5, 6, 9 ],
"backgroundColor": "rgba(186, 218, 85, 0.4)",
"borderColor": "#bada55",
"borderWidth": 1
},
{
"label": "Dimensione Pagina (MB)",
"data": [4.56, 4.60, 4.60, 4.58, 5.75, 5.65, 4.59, 5.70, 4.85, 5.16,  4.60, 4.75, 4.64, 4.67, 4.65, 4.98, 4.71, 4.49, 4.51, 4.86, 4.70, 7.74, 4.68, 4.68, 4.62, 5.65, 4.60, 5.74, 4.63, 4.76, 4.58  ],
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
