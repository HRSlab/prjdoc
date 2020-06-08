---
sidebar: false
home: true
navbar: false
heroImage: /logo-hrs.png
heroText: Progetto Nome
tagline: Documentazione di Progetto
actionText: Inizia →
actionLink: /projectsummary/
Status: Non Inziato  # Available Options: On Track, At Risk, Off Track, Stopped
Version: 1.0.0
footer: © 2012 - 2020 HRS Consulting Group. All rights reserved.
---



<ProjectStatus></ProjectStatus>

<table>
  <tr>
    <th>Date</th>
    <th>Author</th> 
    <th>Version</th>
    <th>Change Description</th>
  </tr>
  <tr v-for="item in $page.git.commits">
    <td>{{ item.authorRelative }}</td>
    <td>{{ $page.git.author }}</td>
    <td>{{ item.shortHash }}</td>
    <td>{{ item.subject }}</td>
  </tr>
</table>

<div class="d-flex my-4">
<span class="branch-name mx-auto">{{ $page.git.commits[0].fullHash }}</span>
</div>
