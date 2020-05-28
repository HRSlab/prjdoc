---

sidebar: false
title: proposal
client: NomeCliente
startdate: DD/MM/AAAA
enddate: DD/MM/AAAA
manager: Andrea

---

# Proposta Commerciale

<div class="Header d-flex flex-justify-between">
<span class="Header-item text-center f6"> Data: {{ $frontmatter.startdate }} </span>
<span class="Header-item text-center f6"> Offerta redatta da: {{ $frontmatter.manager }} </span>
<span class="Header-item text-center f6"> Offerta valida fino al:  {{ $frontmatter.enddate }} </span>
</div><br>

Spett.le {{ $frontmatter.client }},

Grazie per averci contattato.
Qui ti presentiamo una stima preliminare per il progetto sottoposto ieri telefonicamente.

Le stime qui riprodotte si riferiscono ad iterazioni della durata di 2 settimane utilizzando la metodologia Agile Scrum.
Una stima più precisa dell'investimento totale la potremo definire una volta stabiliti ulterirori dettagli.

<div class="text-center text-small text-mono mt-6 px-6 py-2 border text-gray-light">
    <span title="min" class="Label bg-green">min</span> 
    <--- range calcolato per lo sviluppo della tua app --->
    <span title="max" class="Label bg-red">max</span>
</div>

<div class="box border mt-1 b-6 p-6">
<div class="DashedConnection">
<div class="d-flex flex-justify-between">
<li class="CircleBadge CircleBadge--large f5 bg-green text-white text-center" aria-label="Min">€ 2.635,31<br>196hrs/iter<br>3 Weeks</li>
<li class="CircleBadge CircleBadge--large  f5 bg-red text-white text-center" aria-label="Max">€ 5.656,56<br>480hrs/Iter<br> 6 weeks</li>
</div>
</div>
</div>

Il tempo stimato per la realizzazione della app va dalle 3 alle 6 settimane.

Come riferimento, una iterazione della durata di due settimane è così composta:

<div class="Box Box--condensed box-shadow my-4">

<div class="Box-header bg-white text-right">
<span class="Box-title">Settimane<span class="Counter Counter--blue ml-2">2</span></span>
</div>

<div class="Box-body py-4">
    <span class="text-small text-gray mr-2">Product Manager</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 20%"></div>
    </span>
    <span class="text-small text-gray mr-2">Scrum Master</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 60%"></div>
    </span>
    <span class="text-small text-gray mr-2">Front-End Engineer</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 35%"></div>
    </span>
    <span class="text-small text-gray mr-2">Mobile Engineer</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 100%"></div>
    </span>
    <span class="text-small text-gray mr-2">QA Engineer</span>
    <span class="Progress" style="width: 300px">
        <div class="bg-green" style="width: 70%"></div>
    </span>
</div>
<div class="Box-footer text-right">
    <p class="Label Label--outline">Totale:  € 2.375,82</p>
  </div>
</div>

## Processo di Sviluppo

Solitamente abbiamo bisogno di 16-20 settimane per finire completamente una mobile app.
Inviamo periodici aggiornamenti per ogni fase di progetto e notifichiamo giornalmente l'avanzamento dei lavori.

### Fasi di Sviluppo

<span class="Counter bg-green text-white">Inizio</span>

<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
1. Discovery e presentazione offerta formale.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
2. Firma del Contratto e riunione Iniziale.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
3. Ricerca e Analisi dati.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
4. Creazione dei primi mockup e wireframe e approvazione.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
5.  Prototipazione ad alta definizione usando wireframes.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
6. Sviluppo delle tecnologie front-end.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
7. Miglioramento e/o correzioni design della User Interface.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
8. Sviluppo delle tecnologie di backend.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
9. Test della User Experience e QA Testing.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
10. Test e collaudo della app con il cliente e principali stakeholders.
</div>
</div>
<div class="TimelineItem TimelineItem--condensed">
<div class="TimelineItem-badge">
<svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
<path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
</svg>
</div>
<div class="TimelineItem-body">
11. Lancio della app su App Store (iOS) and Play Store (Android).
</div>
</div>

<span class="Counter bg-red text-white">Fine</span>

## Team

<div class="Box">
  <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Andrea</strong>
      <div class="text-small text-gray-light">
        Product Manager
      </div>
    </div>
    <img class="avatar" src="" width="72" height="72" />
  </div>
  <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Carlo</strong>
      <div class="text-small text-gray-light">
        Project Manager
      </div>
    </div>
    <img class="avatar" src="" width="72" height="72" />
  </div>
  <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Khun mae</strong>
      <div class="text-small text-gray-light">
        Software Engineer <span class="Label bg-gray text-gray px-2">Front-End</span> 
      </div>
    </div>
    <img class="avatar" src="" width="72" height="72" />
  </div>
    <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Pawarut</strong>
      <div class="text-small text-gray-light">
        Software Engineer <span class="Label bg-gray text-gray px-2">Flutter</span>
      </div>
    </div>
    <img class="avatar" src="" width="72" height="72" />
  </div>
      <div class="Box-row d-flex flex-items-center">
    <div class="flex-auto">
      <strong>Nitithorn</strong>
      <div class="text-small text-gray-light">
        Software Engineer <span class="Label bg-gray text-gray px-2">QA</span>
      </div>
    </div>
    <img class="avatar" src="" width="72" height="72" />
  </div>
</div>
