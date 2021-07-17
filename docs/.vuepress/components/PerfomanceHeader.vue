<template>
<div class="Subhead Subhead--spacious">
<div class="Subhead-heading ml-3">Prestazioni</div>
 <div class="Subhead-actions text-small mr-2">Caricamento pagina:
<!-- Conditional Render Based on Page Load Time -->

<!-- Good -->
<span v-if="$frontmatter.Perfomance.loadTime  <= '1.7' && $frontmatter.Perfomance.loadTime  >= '0'">
<span class="IssueLabel color-bg-success-inverse color-text-white color-shadow-medium anim-hover-grow" >{{ $frontmatter.Perfomance.loadTime }}s</span>
<p class="color-text-tertiary">Bounce Rate Stimata: 1% - 6%</p>

</span>
<!-- Average -->
<span v-else-if="$frontmatter.Perfomance.loadTime <=  '3.5' && $frontmatter.Perfomance.loadTime >= '1.8'" >
<span class="IssueLabel color-bg-warning-inverse color-shadow-medium anim-hover-grow ">{{ $frontmatter.Perfomance.loadTime }}s </span>
<p class="color-text-tertiary">Bounce Rate Stimata: 7% - 11%</p>
</span>

<!-- Bad -->
<span v-else-if="$frontmatter.Perfomance.loadTime <=  '4.9' &&  $frontmatter.Perfomance.loadTime >=  '3.6' ">
<span class="IssueLabel color-bg-danger-inverse color-text-white color-shadow-medium anim-hover-grow ">{{ $frontmatter.Perfomance.loadTime }}s</span>
<p class="color-text-tertiary">Bounce Rate Stimata: 11% - 37%</p>
</span>

<!-- Very Serious -->
<span v-else-if="$frontmatter.Perfomance.loadTime <= '10' && $frontmatter.Perfomance.loadTime >= '5'">
<span class="IssueLabel color-bg-danger-inverse color-text-white color-shadow-medium anim-hover-grow ">{{ $frontmatter.Perfomance.loadTime }}s</span>
<p class="color-text-tertiary">Bounce Rate Stimata: 38% - 65%</p>
</span>

<!-- Google Target -->
<span v-else-if="$frontmatter.Perfomance.loadTime >= '15'" >
<span class="IssueLabel color-bg-canvas-inverse color-text-inverse anim-pulse color-shadow-medium anim-hover-grow ">{{ $frontmatter.Perfomance.loadTime }}s</span>
<p class="color-text-tertiary">Bounce Rate Stimata: +65%</p>
</span>

</div>
<p class="Subhead-description ml-3">
Ultimo Controllo eseguito:
{{ Math.floor((new Date() - new Date($frontmatter.Perfomance.date)) / 86400000) }} giorni fa.
</p>
</div>
</template>
