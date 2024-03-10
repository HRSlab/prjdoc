---
title: Prestazioni
performance: 27
accessibility: 87
bestpractice: 87
SEO: 82
---

<div class="border mt-8 pt-3 text-center rounded">

![coding](https://img.shields.io/badge/dynamic/json?color=informational&label=Ore%20di%20Sviluppo&query=%24.data%5B5%5D.grand_total.text&url=https%3A%2F%2Fwakatime.com%2Fshare%2F%40HRSlab%2Fbf231007-0255-4824-9490-b836eca49a51.json) ![Netlify](https://img.shields.io/netlify/0190582a-9df0-4f61-8b8d-0118b7eb39c6?label=Build&logo=%20)
![Board Status](https://dev.azure.com/HRS2020/80d0713f-22ce-40eb-9ca6-8d1986bfce8a/07bd2436-5f5f-48ea-aa0b-11e23b11ea38/_apis/work/boardbadge/2b0507a7-e94a-4389-b141-5e66f56b0ca3?columnOptions=1)

</div>

<div class="clearfix text-white my-5">
  <div class="col-6 col-md-3 float-left bg-gray-dark border rounded-3 border-4 border-white p-4  mb-1">
    <h1 class="text-center my-3">{{ $frontmatter.performance }}</h1>
    <span class="Progress">
  <span class="Progress-item color-bg-danger-inverse" style="width:19%;"></span>
</span>
<p class="f5 text-center mt-2">PRESTAZIONI</p>
  </div>
  <div class="col-6 col-md-3  float-left bg-gray-dark border rounded-3 border-4 border-white p-4  mb-1">
    <h1 class="text-center my-3">{{ $frontmatter.accessibility }}</h1>
    <span class="Progress">
  <span class="Progress-item color-bg-warning-inverse" style="width: 83%;"></span>
</span>
<p class="f5 text-center mt-2">ACCESSIBILITÀ</p>
  </div>
  <div class="col-6 col-sm-3  float-left bg-gray-dark border rounded-3 border-4 border-white p-4 mb-1">
      <h1 class="text-center my-3">{{ $frontmatter.bestpractice }}</h1>
    <span class="Progress">
  <span class="Progress-item color-bg-success-inverse" style="width: 93%;"></span>
</span>
<p class="f5 text-center mt-2">BEST PRACTICE</p>
  </div>
    <div class="col-6 col-md-3 float-left bg-gray-dark border rounded-3 border-4 border-white p-4 mb-1">
      <h1 class="text-center my-3">{{ $frontmatter.SEO }}</h1>
    <span class="Progress">
  <span class="Progress-item color-bg-warning-inverse" style="width: 66%;"></span>
</span>
<p class="f5 text-center mt-2">SEO</p>
  </div>
</div>

### Speed Index

_`in secondi`_

```chart
{
"type": "line",
"data": {
"labels": ["Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"],
 "datasets": [{
      "label": "reinnovame",
      "data": [10.6, 14.2, 11.9, 14.4, 11.7, 6.1, 6.5],
      "backgroundColor": "rgba(186, 218, 85, 0.2)",
      "borderColor": "#bada55",
      "borderWidth": 1
    },
    {
      "label": "test",
      "data": [6.3, 4.1, 9.5, 8.7, 9.3, 9.5, 9.6],
       "backgroundColor": "rgba(117,85,218, 0.2)",
      "borderColor": "#7555da",
      "borderWidth": 1
    }
    ]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
}
```

### First Byte

_`in secondi`_

```chart
{
"type": "line",
"data": {
"labels": ["Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"],
 "datasets": [{
      "label": "reinnovame",
      "data": [1.5, 2.9, 1.9, 1.86, 0.743, 0.714, 0.649],
      "backgroundColor": "rgba(186, 218, 85, 0.2)",
      "borderColor": "#bada55",
      "borderWidth": 1
    },
    {
      "label": "test",
      "data": [0.120, 0.151, 0.161, 0.233, 0.166, 0.157, 0.169],
       "backgroundColor": "rgba(117,85,218, 0.2)",
      "borderColor": "#7555da",
      "borderWidth": 1
    }
    ]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
}
```

## Core Web Vitals

Questi indicatori fanno parte dei fattori di Ranking di Google.
[Vai all' Articolo Google](https://developers.google.com/search/blog/2020/05/evaluating-page-experience)

### Largest Contentful Paint (LCP)

<span class="Label">Benchmark: < 2.5 secondi</span>

Indica il tempo di rendering dell’elemento più pesante (Largest) all'interno della schermata.
[dettagli](https://web.dev/lcp/)

```chart
{
"type": "line",
"data": {
"labels": ["Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"],
 "datasets": [{
      "label": "reinnovame",
      "data": [6, 9.3, 6.7, 8.5, 6.6, 6.6, 6.8],
      "backgroundColor": "rgba(186, 218, 85, 0.2)",
      "borderColor": "#bada55",
      "borderWidth": 1
    },
    {
      "label": "test",
      "data": [4.6, 4.1, 4.6, 4.0, 3.4, 3.6, 3.6],
       "backgroundColor": "rgba(117,85,218, 0.2)",
      "borderColor": "#7555da",
      "borderWidth": 1
    }
    ]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
}
```

### First Imput Delay (FID)

<span class="Label">Benchmark: < 0.1 secondi</span>

Indica il tempo di reazione del browser agli input dell’utente
[dettagli](https://web.dev/fid/)

```chart
{
"type": "line",
"data": {
"labels": ["Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"],
 "datasets": [{
      "label": "reinnovame",
      "data": [1.2, 1.2, 0.920, 1.5, 1, 0.931, 1.2],
      "backgroundColor": "rgba(186, 218, 85, 0.2)",
      "borderColor": "#bada55",
      "borderWidth": 1
    },
    {
      "label": "test",
      "data": [1, 0.912, 1.3, 0.814, 0.936, 1.1, 0.796 ],
       "backgroundColor": "rgba(117,85,218, 0.2)",
      "borderColor": "#7555da",
      "borderWidth": 1
    }
    ]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
}
```

### Cumulative Layout Shift (CLS)

<span class="Label">Benchmark: < 0.1</span>

Misura i cambi di layout durante l’intera durata della visita della pagina.
[dettagli](https://web.dev/cls/)

```chart
{
"type": "line",
"data": {
"labels": ["Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"],
 "datasets": [{
      "label": "reinnovame",
      "data": [0.0595, 0.0586, 0.0595, 0.0586, 0.0595, 0.0585, 0.0595],
      "backgroundColor": "rgba(186, 218, 85, 0.2)",
      "borderColor": "#bada55",
      "borderWidth": 1
    },
    {
      "label": "test",
      "data": [0.0580, 0, 0.0586, 0.0585, 0, 0, 0.0595 ],
       "backgroundColor": "rgba(117,85,218, 0.2)",
      "borderColor": "#7555da",
      "borderWidth": 1
    }
    ]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
}
```

## Test Comparazione Server

```chart
{
"type": "bar",
"data": {
"labels": [ "TTFB ms", "Connect ms", "Backend ms" ],
 "datasets": [{
      "label": "Pantheon",
      "data": [ 239, 111, 128 ],
      "backgroundColor": "rgba(117, 85, 218, 0.2)",
      "borderColor": "#7555DA",
      "borderWidth": 1
    },
    {
      "label": "Register",
      "data": [256, 107, 149 ],
       "backgroundColor": "rgba(218, 117, 85, 0.2)",
      "borderColor": "#da7555",
      "borderWidth": 1
    },
        {
      "label": "Vultr",
      "data": [152, 116, 36 ],
       "backgroundColor": "rgba(85, 218, 117, 0.2)",
      "borderColor": "#55da75",
      "borderWidth": 1
    }
    ]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
}
```

| Pantheon       | Register       | Vultur         |
| -------------- | -------------- | -------------- |
| 20 GB SSD DISK | 50 GB SSD DISK | 64 GB SSD DISK |
| 1 CPU          | 1 CPU          | 1 CPU          |
| 2 GB RAM       | 1 GB RAM       | 2 GB RAM       |
| 2 TB Transnfer | N/A            | 2 TB Transnfer |

<ul class="Box text-small mt-6">
<li class="Box-row">Report generated:<span class="IssueLabel">Fri, May 7, 2021 11:28 AM +0200</span></li>
<li class="Box-row">Test Server Location: London, UK</li>
<li class="Box-row">Using: Chrome (Desktop) 86.0.4240.193, Lighthouse 6.3.0</li>
<li class="Box-row">Connection: Broadband Fast (20/5 Mbps, 25ms)</li>
</ul>

## Utilizzo File

Current application web files usage is `377MB` (97.16%)

| File        | MB  |   %    |
| ----------- | :-: | :----: |
| wp-content  | 328 | 84.54% |
| wp-includes | 38  | 9.79%  |
| wp-admin    | 10  | 2.58%  |

## Utilizzo Database

Current application database usage is `11MB` (2.84%)

| File                         |  MB   |   %   |
| ---------------------------- | :---: | :---: |
| wp_options                   |   2   | 0.52% |
| reinn0vam3_wfknownfilelist   |   1   | 0.26% |
| reinn0vam3_wfconfig          |   1   | 0.26% |
| reinn0vam3_postmeta          |   1   | 0.26% |
| reinn0vam3_posts             |   1   | 0.26% |
| reinn0vam3_wp_quiz_play_data | 0.713 | 0.18% |
| reinn0vam3_options           | 0.507 | 0.13% |
| reinn0vam3_ewwwio_images     | 0.477 | 0.12% |
| reinn0vam3_smush_dir_images  |  0.3  | 0.08% |
| reinn0vam3_yoast_indexable   | 0.264 | 0.07% |

<span class="text-small" style="color:#98DB35;">
<pre>Current total application usage is 388MB</pre>
</span>

## Benchmark Server

```chart
{
"type": "bar",
"data": {
"labels": ["Math(CPU)", "String(CPU)", "Loops(CPU)", "Conditionals(CPU)", "Mysql(Databese)", "Server Total", "WordPress Performance"],
 "datasets": [{
      "label": "Your Server",
      "data": [2.526, 0.270, 0.008, 0.019, 9.696, 12.519, 2.455],
      "backgroundColor": "rgba(186, 218, 85, 0.2)",
      "borderColor": "#bada55",
      "borderWidth": 1
    },
    {
      "label": "Industry Average",
      "data": [0.641, 0.637, 0.009, 0.020, 8.845, 10.191, 3.978],
       "backgroundColor": "rgba(117,85,218, 0.2)",
      "borderColor": "#7555da",
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

## Carico Server e Altri Errori

<div class="border my-4 pt-3 px-4 rounded">

<div class="text-center">

![Sonar Violations (long format)](https://img.shields.io/sonar/blocker_violations/SteveVercellin_salient-theme?color=F8333C&server=https%3A%2F%2Fsonarcloud.io) ![Sonar Violations (long format)](https://img.shields.io/sonar/critical_violations/SteveVercellin_salient-theme?color=F95738&server=https%3A%2F%2Fsonarcloud.io) ![Sonar Violations (long format)](https://img.shields.io/sonar/major_violations/SteveVercellin_salient-theme?color=FFFD82&server=https%3A%2F%2Fsonarcloud.io) ![Sonar Violations (long format)](https://img.shields.io/sonar/minor_violations/SteveVercellin_salient-theme?color=ADE25D&server=https%3A%2F%2Fsonarcloud.io)

</div>

<nav class="menu text-small" aria-labelledby="menu-heading">
  <span class="menu-heading" id="menu-heading">Remediation Effort</span>
  <a class="menu-item" href="../sonar.html#reliability">Reliability Remediation Effort
<span class="diffstat float-right"> 16d
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
</span>
</a>
  <a class="menu-item" href="../sonar.html#security">Security Remediation Effort
  <span class="diffstat float-right"> 2d 2h
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
</span></a>
  <a class="menu-item" href="#url">Maintainability  Remediation Effort<span class="diffstat float-right">0
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
</span></a>
 <a class="menu-item" href="#url">Technical Debt<span class="diffstat float-right">973d
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="AnimatedEllipsis"></span>
</span></a>

</nav>

</div>

### CPU Usage. DB usage included

<div class="my-3 p-3">

![CPU](/images/CPUusage.png)

<span class="Label mr-1" style="border-color:#7fffd4; color:#7fffd4;">faults</span>
<span class="Label mr-1" style="border-color:#008000; color:#008000;">average</span>
<span class="Label mr-1" style="border-color:#0000ff; color:#0000ff;">database</span>
<span class="Label mr-1" style="border-color:#ff0000; color:#ff0000;">limit 100%</span>

</div>

### Physical Memory Usage

<div class="my-3 p-3">

![Memory](/images/memoryUsage.png)

<span class="Label mr-1" style="border-color:#008000; color:#008000;">average</span>
<span class="Label mr-1" style="border-color:#ff0000; color:#ff0000;">512MB</span>

</div>

### Input/Output Usage. DB usage included

<div class="my-3 p-3">

![Input|Output](/images/IOusage.png)

<span class="Label mr-1" style="border-color:#7fffd4; color:#7fffd4;">faults</span>
<span class="Label mr-1" style="border-color:#008000; color:#008000;">average</span>
<span class="Label mr-1" style="border-color:#0000ff; color:#0000ff;">database</span>
<span class="Label mr-1" style="border-color:#ff0000; color:#ff0000;">limit 1MB/s</span>

</div>

## Storico Analisi Sito.

<main class="Box Box--condensed my-4">

<section class="Box-row color-bg-success">
<div class="TableObject text-small ">
  <div class="TableObject-item TableObject-item--primary">
    <p class="text-gray"/>
       Apr 30, 2021, 8:10 AM GMT+2
    </p>
  </div>
  <div class="TableObject-item">
    <a class="btn-link ml-2" type="button" href="../Performance/reinnovame.com_2021-04-30_08-10-33.html" target="_blank">Visualizza</a>
  </div>
</div>
</section>
<section class="Box-row">
<div class="TableObject text-small ">
  <div class="TableObject-item TableObject-item--primary">
    <p class="text-gray"/>
      Jan 3, 2021, 3:57 PM GMT+1
    </p>
  </div>
  <div class="TableObject-item">
    <a class="btn-link ml-2" type="button" href="../Performance/reinnovame.com_2021-01-03_15-57-21.html" target="_blank">Visualizza</a>
  </div>
</div>
</section>
<section class="Box-row">
<div class="TableObject text-small ">
  <div class="TableObject-item TableObject-item--primary">
    <p class="text-gray"/>
    Jan 1, 2021, 12:03 PM GMT+1
    </p>
  </div>
  <div class="TableObject-item">
    <a class="btn-link ml-2" type="button" href="../Performance/reinnovame.com_2021-01-01_12-03-28.html" target="_blank">Visualizza</a>
  </div>
</div>
</section>

</main>
