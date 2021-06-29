---
title: Dashboard
sidebar: true
copyright:
  noCopy: true
  noSelect: true
Perfomance:
  date: 2021-06-27
  loadTime: 2.34
  Region: London (UK)
pageSpeed:
  grade: D
  result: 68%
  previous: D (68%)
ySlow:
  grade: D
  result: 69%
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

<main class="container clearfix d-flex flex-justify-between flex-column flex-sm-row  flex-md-items-start">

<section id="right-col"
class="color-bg-secondary my-2 p-4 border col-sm-12 mx-2 col-md-8 flex-1">
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
"labels": ["01-May", "10-June", " 27-June", " 28-June", " 29-June" ],
 "datasets": [{
      "label": "Tempo di Caricamento (s)",
      "data": [3.27, 2.50, 2.56, 2.34, 2.38 ],
      "backgroundColor": "rgba(186, 218, 85, 0)",
      "borderColor": "#bada55",
      "borderWidth": 1
    }
    ]
  },
    "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": false
        }
      }]
    }
  }
}
```

</ChartBox>

</section>

<section id="left-col" class="my-2 mx-2 col-sm-12 col-md-3">

<div class="mb-2">

<BackupCard />

<SecurityCard />

</div>



</section>


</main>

<style>

div.theme-default-content:not(.custom) {
max-width: 100%;
}

#performance {

}

#plugins {

}

</style>
