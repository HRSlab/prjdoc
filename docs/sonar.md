---
copyright:
  noCopy: true
  noSelect: true
navbar: true
reliability:
  bugs: 3607
  rating: E
  effort: 26d
security:
  vulnerabilities: 14
  rating: E
  effort: 4h 50min
  hotspots: 43
maintainability:
  smell: 23060
  debt: 556d
  ratio: 0%
  rating: A
  effort: 556d
coverage:
  coeverage: 0.0%
  toCover: 274140
  lines: 0%
  uncovered: 274140
  lineCoverage: 0.0%
duplication:
  density: 14.2%
  lines: 194727
  blocks: 7825
  files: 1080
size:
  loc: 1,013,756
  CSS: 397k
  PHP: 391k
  JavaScript: 210k
  HTML: 16K
  XML: 694
  PLSQL: 44
  total: 1,369,898
complexitiy:
  cyclomatic: 143,672
  cognitive: 210,638
issues:
  bug: 3,607
  vulnerability: 14
  smell: 23,060
  blocker: 142
  critical: 6,056
  major: 12,552
  minor: 4,159
  info: 151
  insecureConfig: 6
  weakCrypt: 6
  xss: 5
  dos: 1
  manipulation: 1
  objInjection: 1
  others: 26,661
---

# Overview

<div class="Box box-shadow my-4">

<div class="Box-body py-4">
<img :src="$withBase('./sonar/Overview.png')" alt="Overview">
  <span class="f6-light text-small float-left">Color: Worse of Reliability Rating and Security Rating</span>
  <span class="f6-light  text-small float-right">Size: Lines of Code</span>

</div>
<div class="Box-footer text-center">
    <p class="Counter ml-1 text-gray" style="background-color:#cceecc;">A</p>
    <p class="Counter ml-1 text-gray" style="background-color:#eff7cf;">B</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fbf2cd;">C</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fce5d2;">D</p>
    <p class="Counter ml-1  text-gray" style="background-color:#f7d6d8;">E</p>
  <p class="text-small">Any color but green indicates immediate risks: Bugs or Vulnerabilities that should be examined. A position at the top or right of the graph means that the longer-term health may be at risk. Green bubbles at the bottom-left are best.</p>
  </div>
</div>

## Reliability

<p class="ws-normal text-small mt-2">
Issues in this domain mark code where you will get behavior other than what was expected.
</p>

<div class="Box box-shadow my-4">
  <div class="Box-header">
    <p>
      <span class="f6-light text-small float-left">Bugs:<span class="Counter ml-1">{{ $frontmatter.reliability.bugs  }}</span></span>
      <span class="f6-light  text-small float-right">Remediation Effort:<span class="Counter ml-1">{{ $frontmatter.reliability.effort  }}</span></span>
    </p>
</div>

<div class="Box-body py-4">
<img :src="$withBase('./sonar/Reliability.png')" alt="Reliability">
  <span class="f6-light text-small float-left">Color: Reliability Rating</span>
  <span class="f6-light  text-small float-right">Size: Bugs</span>

</div>
<div class="Box-footer text-center">
    <p class="Counter ml-1 text-gray" style="background-color:#cceecc;">A</p>
    <p class="Counter ml-1 text-gray" style="background-color:#eff7cf;">B</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fbf2cd;">C</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fce5d2;">D</p>
    <p class="Counter ml-1  text-gray" style="background-color:#f7d6d8;">E</p>
  <p class="text-small">The closer a bubble's color is to red, the more severe the worst bugs are. Bubble size indicates bug volume, and each bubble's vertical position reflects the estimated time to address the bugs. Small green bubbles on the bottom edge are best.</p>
  </div>
</div>

## Security

<p class="ws-normal text-small mt-2">
Issues in this domain mark potential weaknesses to hackers.
</p>

<div class="Box box-shadow my-4">
  <div class="Box-header">
    <p>
      <span class="f6-light text-small float-left">Vulnerabilities<span class="Counter ml-1">{{ $frontmatter.security.vulnerabilities  }}</span></span>
      <span class="f6-light  text-small float-right">Remediation Effort:<span class="Counter ml-1">{{ $frontmatter.security.effort  }}</span></span>
    </p>
</div>

<div class="Box-body py-4">

<img :src="$withBase('./sonar/Security.png')" alt="security">
  <span class="f6-light text-small float-left">Color: Security Rating</span>
  <span class="f6-light  text-small float-right">Size: Vulnerabilities</span>

</div>
<div class="Box-footer text-center">
    <p class="Counter ml-1 text-gray" style="background-color:#cceecc;">A</p>
    <p class="Counter ml-1 text-gray" style="background-color:#eff7cf;">B</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fbf2cd;">C</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fce5d2;">D</p>
    <p class="Counter ml-1  text-gray" style="background-color:#f7d6d8;">E</p>
  <p class="text-small">The closer a bubble's color is to red, the more severe the worst vulnerabilities are. Bubble size indicates vulnerability volume, and each bubble's vertical position reflects the estimated time to address the vulnerabilities. Small green bubbles on the bottom edge are best.</p>
  </div>
</div>

### Security Review

<p class="ws-normal text-small mt-2">
Issues in this domain mark potential weaknesses to hackers.
<span class="branch-name float-right">Security Hotspots: {{ $frontmatter.security.hotspots  }}</span>
</p>

## Maintainability

<p class="ws-normal text-small mt-2">
Issues in this domain mark code that will be more difficult to update competently than it should.
</p>

<div class="Box box-shadow my-4">
  <div class="Box-header">
    <p>
      <span class="f6-light text-small float-left">Code Smells<span class="Counter ml-1">{{ $frontmatter.maintainability.smell  }}</span></span>
      <span class="f6-light  text-small float-right">Technical Debt<span class="Counter ml-1">{{ $frontmatter.maintainability.debt  }}</span></span>
    </p>
</div>

<div class="Box-body py-4">

<img :src="$withBase('./sonar/Maintainability.png')" alt="maintainability">
  <span class="f6-light text-small float-left">Color: Maintainability Rating</span>
  <span class="f6-light  text-small float-right">Size: Code Smells</span>

</div>
<div class="Box-footer text-center">
    <p class="Counter ml-1 text-gray" style="background-color:#cceecc;">A</p>
    <p class="Counter ml-1 text-gray" style="background-color:#eff7cf;">B</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fbf2cd;">C</p>
    <p class="Counter ml-1  text-gray" style="background-color:#fce5d2;">D</p>
    <p class="Counter ml-1  text-gray" style="background-color:#f7d6d8;">E</p>
  <p class="text-small">The closer a bubble's color is to red, the higher the ratio of technical debt is. Bubble size indicates code smell volume, and each bubble's vertical position reflects the estimated time to address the code smells. Small green bubbles on the bottom edge are best.</p>
  </div>
</div>

## Coverage

<p class="ws-normal text-small mt-2">
Testing Not Available
</p>

<div class="Box box-shadow my-4">
  <div class="Box-header">
    <p>
      <span class="f6-light text-small float-left">Coverage<span class="Counter ml-1">{{ $frontmatter.coverage.coverage  }}</span></span>
      <span class="f6-light  text-small float-right">Lines to Cover<span class="Counter ml-1">{{ $frontmatter.coverage.toCover  }}</span></span>
    </p>
</div>

<div class="Box-body py-4">

<img :src="$withBase('./sonar/Coverage.png')" alt="coverage">
  <span class="f6-light text-small float-left">Line Coverage: {{ $frontmatter.coverage.lines  }}</span>
  <span class="f6-light  text-small float-right">Uncovered Lines: {{ $frontmatter.coverage.uncovered  }}</span>

</div>
<div class="Box-footer text-center">
  <p class="text-small">See missing test coverage's long-term risks. Bubble size indicates the volume of uncovered lines, and each bubble's vertical position reflects the volume of missing coverage. Small bubbles on the bottom edge are best.</p>
  </div>
</div>

## Duplication

<p class="ws-normal text-small mt-2">

</p>

<div class="Box box-shadow my-4">
  <div class="Box-header">
    <p>
      <span class="f6-light text-small float-left">Density<span class="Counter ml-1">{{ $frontmatter.duplication.density  }}</span></span>
      <span class="f6-light  text-small float-right">Duplicated Lines<span class="Counter ml-1">{{ $frontmatter.duplication.lines  }}</span></span>
    </p>
</div>

<div class="Box-body py-4">

<img :src="$withBase('./sonar/Duplications.png')" alt="duplication">
  <span class="f6-light text-small float-left">Duplicated Blocks: {{ $frontmatter.duplication.blocks  }}</span>
  <span class="f6-light  text-small float-right">Duplicated Files: {{ $frontmatter.duplication.files  }}</span>

</div>
<div class="Box-footer text-center">
  <p class="text-small">Bubble size indicates the volume of duplicated blocks, and each bubble's vertical position reflects the volume of lines in those blocks. Small bubbles on the bottom edge are best.</p>
  </div>
</div>

## Size

<div class="Box box-shadow my-4">
  <div class="Box-header">
    <p>
      <span class="f6-light text-small float-left">Size<span class="Counter ml-1">XL</span></span>
      <span class="f6-light  text-small float-right">LOC<span class="Counter ml-1">{{ $frontmatter.size.loc }}</span></span>
    </p>
</div>

<div class="Box-body py-4">
    <span class="text-small text-gray mr-2">PHP {{ $frontmatter.size.PHP }}</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 29%"></div>
    </span>
    <span class="text-small text-gray mr-2">CSS {{ $frontmatter.size.CSS }}</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 30%"></div>
    </span>
    <span class="text-small text-gray mr-2">JavaScript {{ $frontmatter.size.JavaScript }}</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 20%"></div>
    </span>
        <span class="text-small text-gray mr-2">HTML {{ $frontmatter.size.HTML }}</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 10%"></div>
    </span>
    <span class="text-small text-gray mr-2">XML {{ $frontmatter.size.XML }}</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 7%"></div>
    </span>
        <span class="text-small text-gray mr-2">PL/SQL {{ $frontmatter.size.PLSQL }}</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 2%"></div>
    </span>
</div>
<div class="Box-footer text-right">
    <p class="Label Label--outline">Total:  {{ $frontmatter.size.total }}</p>
  </div>
</div>

## Complexity

<p class="ws-normal text-small mt-2">
How simple or complicated the control flow of the application is.
Cyclomatic Complexity measures the minimum number of test cases required for full test coverage.
Cognitive Complexity is a measure of how difficult the application is to understand.
</p>

<BlankSlate>

<div class="Box-body py-4 border-0">
<ul>
    <li class="Box-row text-left border">
      Cyclomatic Complexity<span class="IssueLabel bg-blue text-white float-right">{{ $frontmatter.complexitiy.cyclomatic }}</span>
    </li>
    <li class="Box-row text-left border">
    Cognitive Complexity<span class="IssueLabel bg-yellow text-gray-dark float-right">{{ $frontmatter.complexitiy.cognitive }}</span>
    </li>
  </ul>
</div>

</BlankSlate>

## Issues

### Type

<div class="border-0 mt-4 Box--condensed Box">
  <ul>
  <li class="Box-row border">
    <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z"></path></svg><span class="ml-2">Bug</span><span class="Label text-gray-dark float-right">{{ $frontmatter.issues.bug }}</span>
  </li>
  <li class="Box-row  border">
    <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.533.133a1.75 1.75 0 00-1.066 0l-5.25 1.68A1.75 1.75 0 001 3.48V7c0 1.566.32 3.182 1.303 4.682.983 1.498 2.585 2.813 5.032 3.855a1.7 1.7 0 001.33 0c2.447-1.042 4.049-2.357 5.032-3.855C14.68 10.182 15 8.566 15 7V3.48a1.75 1.75 0 00-1.217-1.667L8.533.133zm-.61 1.429a.25.25 0 01.153 0l5.25 1.68a.25.25 0 01.174.238V7c0 1.358-.275 2.666-1.057 3.86-.784 1.194-2.121 2.34-4.366 3.297a.2.2 0 01-.154 0c-2.245-.956-3.582-2.104-4.366-3.298C2.775 9.666 2.5 8.36 2.5 7V3.48a.25.25 0 01.174-.237l5.25-1.68zM9.5 6.5a1.5 1.5 0 01-.75 1.3v2.45a.75.75 0 01-1.5 0V7.8A1.5 1.5 0 119.5 6.5z"></path></svg><span class="ml-2">Vulnerability</span><span class="Label text-gray-dark float-right">{{ $frontmatter.issues.vulnerability }}</span>
  </li>
  <li class="Box-row border">
  <svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 5.782V2.5h-.25a.75.75 0 010-1.5h6.5a.75.75 0 010 1.5H11v3.282l3.666 5.76C15.619 13.04 14.543 15 12.767 15H3.233c-1.776 0-2.852-1.96-1.899-3.458L5 5.782zM9.5 2.5h-3V6a.75.75 0 01-.117.403L4.73 9h6.54L9.617 6.403A.75.75 0 019.5 6V2.5zm-6.9 9.847L3.775 10.5h8.45l1.175 1.847a.75.75 0 01-.633 1.153H3.233a.75.75 0 01-.633-1.153z"></path></svg><span class="ml-2">Code Smell</span><span class="Label text-gray-dark float-right">{{ $frontmatter.issues.smell }}</span>
  </li>
</ul>

</div>

### Severity

<div class="border-0 mt-4 Box--condensed Box container-lg clearfix">
<div class="col-sm-6 col-12 float-left">
  <ul>
  <li class="Box-row border">
  <span class="ml-2">Blocker</span><span class="IssueLabel float-right bg-gray-dark text-white">{{ $frontmatter.issues.blocker }}</span>
  </li>
  <li class="Box-row  border">
  <span class="ml-2">Critical</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.critical }}</span>
  </li>
    <li class="Box-row  border">
  <span class="ml-2">Major</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.major }}</span>
  </li>
  </ul>
  </div>
  <div class="col-sm-6 col-12 float-left">
  <ul>
  <li class="Box-row border">
  <span class="ml-2">Minor</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.minor }}</span>
  </li>
    <li class="Box-row border">
  <span class="ml-2">Info</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.info }}</span>
  </li>
</ul>
</div>

</div>

### Security Category

<div class="border-0 mt-4 Box--condensed Box container-lg clearfix">
<div class="col-sm-6 col-12 float-left">
  <ul>
  <li class="Box-row border">
  <span class="ml-2">File Manipulation</span><span class="IssueLabel float-right bg-gray-dark text-white">{{ $frontmatter.issues.manipulation }}</span>
  </li>
  <li class="Box-row  border">
  <span class="ml-2">Insecure Configuration</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.insecureConfig }}</span>
  </li>
    <li class="Box-row  border">
  <span class="ml-2">Cross-Site Scripting (XSS)</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.xss }}</span>
  </li>
    <li class="Box-row border">
  <span class="ml-2">Denial of Service (DoS)</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.dos }}</span>
  </li>
  </ul>
  </div>
  <div class="col-sm-6 col-12 float-left">
  <ul>
  <li class="Box-row border">
  <span class="ml-2">Weak Cryptography</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.weakCrypt }}</span>
  </li>
    <li class="Box-row border">
  <span class="ml-2">Object Injection</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.objInjection }}</span>
  </li>
  <li class="Box-row border">
  <span class="ml-2">Others</span><span class="IssueLabel bg-gray-dark text-white float-right">{{ $frontmatter.issues.others }}</span>
  </li>
</ul>
</div>

</div>