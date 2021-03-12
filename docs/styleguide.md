---
title: Guida al design
copyright:
  noCopy: true
  noSelect: true
colors:
  primary:
   hex: 0075BF
   name: Strong blue
  secondary:
   hex: 00A8E8
   name: Pure blue
  accent:
   hex:  DD0C10
   name: Vivid red
  dark:
   hex:  2B2727
   name: Very dark red
  light:
   hex:  F7F7F7
   name: Very light gray
colorSystem:
  info:
   hex:  D90CDD
   name: Information
  success:
   hex:  0CDD71
   name: Success
  warning:
   hex:  FFE40D
   name: Warning
  Error:
   hex:  DD710C
   name: Danger

---

## Colori

<ColorsMain/>

<ColorsSystem />

### Primario

<li class="d-inline-block colorbox primary col-12 p-2 my-4">
<p class="f6 text-mono text-center">#{{ $frontmatter.colors.primary.hex }} - {{ $frontmatter.colors.primary.name }}</p>
</li>


#### Tabella di Conversione.

| Hex triplet  | 0075bf            | #0075bf               |
|--------------|-------------------|-----------------------|
| RGB Decimal  | 0, 117, 191       | rgb(0,117,191)        |
| RGB Percent  | 0, 45.9, 74.9     | rgb(0%,45.9%,74.9%)   |
| CMYK         | 100, 39, 0, 25    |                       |
| HSL          | 203.2°, 100, 37.5 | hsl(203.2,100%,37.5%) |
| HSV (or HSB) | 203.2°, 100, 74.9 |                       |
| Web Safe     | 0066cc            | #0066cc               |
| IE-LAB     | 47.601, 0.563, -46.309       |
| XYZ        | 15.763, 16.483, 51.638       |
| xyY        | 0.188, 0.196, 16.483         |
| CIE-LCH    | 47.601, 46.313, 270.697      |
| CIE-LUV    | 47.601, -29.065, -70.159     |
| Hunter-Lab | 40.599, -1.743, -46.992      |
| Binary     | 00000000, 01110101, 10111111 |



#### Simulazione Ipovisione.
<br/>

*Acromatopsia*

<div class="container-lg clearfix mb-4">
  <div class="col-4 float-left border p-4" style="background-color: #5a5a5a;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="0.005% odella popolazione mondiale">acromatopsia</span>
  </div>
  <div class="col-4 float-left border p-4" style="background-color: #485f6e;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="0.001% della popolazione mondiale">atipica</span>
  </div>
</div>


*Dicromatismo*
<div class="container-lg clearfix mb-4">
  <div class="col-4 float-left border p-4" style="background-color: #5876bd;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="cecità per il primo colore fondamentale, ossia il rosso">protanopia</span>
  </div>
  <div class="col-4 float-left border p-4" style="background-color: #3979c3;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="cecità per il secondo colore fondamentale, ossia il verde">deuteranopia</span>
  </div>
<div class="col-4 float-left border p-4" style="background-color: #00848c;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="cecità per ilterzo colore fondamentale, ossia il blu-giallo">tritanopia</span>
  </div>
</div>

**Tricromatismo**

<div class="container-lg clearfix mb-4">
  <div class="col-4 float-left border p-4" style="background-color: #3875bd;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="qualora sia deficitaria la sensibilità per il rosso">protanomalia</span>
  </div>
  <div class="col-4 float-left border p-4" style="background-color: #2477c1;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="qualora sia deficitaria la sensibilità per il verde">deuteranomalia</span>
  </div>
<div class="col-4 float-left border p-4" style="background-color: #007e9e;">
    <span class="f6 text-white tooltipped tooltipped-n" aria-label="qualora sia deficitaria la sensibilità per il blu-giallo">tritanomalia</span>
  </div>
</div>

### Secondario

<li class="d-inline-block colorbox secondary col-12 p-2 my-4">
<p class="f6 text-mono text-center">#{{ $frontmatter.colors.secondary }}</p>
</li>

### Accento

<li class="d-inline-block colorbox accent col-12 p-2 my-4">
<p class="f6 text-mono text-center">#{{ $frontmatter.colors.accent }}</p>
</li>



### Sfumature

### Gradienti

## Tipografia

## Tipografia

<style>

.primary {
background-color: #0075BF;
}

.secondary {
 background-color: #00A8E8;
}

.accent {
 background-color: #DD0C10;
}

.dark {
 background-color: #2B2727;
}

.light {
 background-color: #F7F7F7;
}

.info {
background-color: #D90CDD;
}

.success {
background-color: #0CDD71;
}

.warning {
background-color: #FFE40D;
}

.error {
background-color: #DD710C;
}

.colorblind {
width: 240px;
height: 48px;
}


</Style>
