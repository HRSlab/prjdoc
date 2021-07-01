---
title: Dashboard
sidebar: true
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 13
  revision: 2
  overhead: 45
Perfomance:
  date: 2021-07-01
  loadTime: 2.43
  Region: London (UK)
pageSpeed:
  grade: C
  result: 77%
  previous: D (68%)
ySlow:
  grade: C
  result: 73%
  previous: D (68%)
Backup:
  latest: 14 Giugno 2021
  next: 2021-07-14
  details: [ "Tema: OceanWP v2.1.0", "Versione WP: 5.7.2", "Plugins: 32", "Numero di Posts: 0", "Commenti Approvati: 0" ]
  total: 398.52
  files: 275.43
  db: 123.09
Security:
  latest: 2021-06-29T10:37:13-04:00
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]


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
"labels": ["Lun", "Mar", "Mer", "Giov", "Ven", "Sab", "Dom" ],
 "datasets": [
   {
    "label": "Tempo di Caricamento (s)",
    "data": [3.27, 2.50, 2.56, 2.34, 2.38, 5.797, 2.426 ],
    "backgroundColor": "rgba(186, 218, 85, 0.4)",
    "borderColor": "#bada55",
    "borderWidth": 1
    },
    {
    "label": "Dimensione Pagina (MB)",
    "data": [ 3.46, 3.67, 3.48, 3.67, 4.28, 3.48, 3,48  ],
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
