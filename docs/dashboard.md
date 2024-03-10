---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision:  4
  overhead:  166.2
Perfomance:
  date: 2022-01-07
  loadTime: 2.315
  Region: London (UK)
pageSpeed:
  grade: B
  result: 82%
  previous: B (82%)
ySlow:
  grade: C
  result: 76%
  previous: C (76%)
Backup:
  latest: 01 Gennaio 2021
  next: 2022-02-01
  details: [ "ReinnovaMe Theme v1.5.2", "Versione WP: 5.8.2", "Plugins: 32", "Numero di Posts: 42", "Commenti Approvati: 0" ]
  total:  2225.55
  files: 2150
  db: 21.92
Security:
  latest: 2021-01-07T10:09:00+00:00
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 99.949
  downtimes: 1
  timedown: 5 Min 49 Sec
  month: "Gennaio"
---
<div
style="z-index: 10; padding: 100%; border-radius: 5px; background-color: rgba(0,0,0,.7); box-shadow: 0 0 10px rgba(0,0,0,.2); position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
class="details-overlay details-overlay-dark">
<div class="flash mt-3 flash-warn"
style="width: 500px;"
>
From January 2022, This Dashboard will be available only for Premium users.
A Basic version will be available soon on your website backend.
For more information, please contact your account manager.
Thank you for your understanding.
</div>
</div>


<main
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark_dimmed"
    class="d-flex flex-justify-between flex-column flex-sm-row  flex-md-items-start" >

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
"labels": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",  "27", "28", "29", "30", "31" ],
"datasets": [
{
"label": "Tempo di Caricamento (s)",
"data": [ 2.8, 3, 3.7, 2.9, 2.7, 2.9, 3.2,
          3.5, 3.7
        ],
"backgroundColor": "rgba(186, 218, 85, 0.4)",
"borderColor": "#bada55",
"borderWidth": 1
},
{
"label": "Dimensione Pagina (MB)",
"data": [ 12.1, 12.3, 4.16, 12, 12, 11.9, 4.17,
          4.24, 4.17
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
  "max": 25,
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