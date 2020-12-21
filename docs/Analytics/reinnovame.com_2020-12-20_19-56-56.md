<noscript>Lighthouse report requires JavaScript. Please enable.</noscript>

<div hidden=""> <template id="tmpl-lh-warnings--toplevel"></template>  <template id="tmpl-lh-scorescale"></template>  <template id="tmpl-lh-chevron"></template>  <template id="tmpl-lh-category-header"></template>  <template id="tmpl-lh-clump"></template>  <template id="tmpl-lh-metrics-toggle"></template>  <template id="tmpl-lh-audit"></template>  <template id="tmpl-lh-metric"></template>  <template id="tmpl-lh-opportunity"></template>  <template id="tmpl-lh-opportunity-header"></template>  <template id="tmpl-lh-scores-wrapper"></template>  <template id="tmpl-lh-topbar"></template>  <template id="tmpl-lh-heading"></template>  <template id="tmpl-lh-footer"></template>  <template id="tmpl-lh-gauge"></template>  <template id="tmpl-lh-gauge--pwa"></template>  <template id="tmpl-lh-crc"></template>  <template id="tmpl-lh-3p-filter"></template>  <template id="tmpl-lh-snippet"></template> </div>

<main><style>.lh-topbar { position: sticky; top: 0; left: 0; right: 0; z-index: 1000; display: flex; align-items: center; height: var(--topbar-height); background-color: var(--topbar-background-color); padding: var(--topbar-padding); } .lh-topbar__logo { width: var(--topbar-logo-size); height: var(--topbar-logo-size); user-select: none; flex: none; } .lh-topbar__logo .shape { fill: var(--report-text-color); } .lh-topbar__url { margin: var(--topbar-padding); text-decoration: none; color: var(--report-text-color); text-overflow: ellipsis; overflow: hidden; white-space: nowrap; } .lh-tools { margin-left: auto; will-change: transform; } .lh-tools__button { width: var(--tools-icon-size); height: var(--tools-icon-size); cursor: pointer; margin-right: 5px; /* This is actually a button element, but we want to style it like a transparent div. */ display: flex; background: none; color: inherit; border: none; padding: 0; font: inherit; outline: inherit; } .lh-tools__button svg { fill: var(--tools-icon-color); } .dark .lh-tools__button svg { filter: invert(1); } .lh-tools__button.active + .lh-tools__dropdown { opacity: 1; clip: rect(-1px, 187px, 242px, -3px); visibility: visible; } .lh-tools__dropdown { position: absolute; background-color: var(--report-background-color); border: 1px solid var(--report-border-color); border-radius: 3px; padding: calc(var(--default-padding) / 2) 0; cursor: pointer; top: 36px; right: 0; box-shadow: 1px 1px 3px #ccc; min-width: 125px; clip: rect(0, 164px, 0, 0); visibility: hidden; opacity: 0; transition: all 200ms cubic-bezier(0,0,0.2,1); } .lh-tools__dropdown a { display: block; color: currentColor; text-decoration: none; white-space: nowrap; padding: 0 12px; line-height: 2; } .lh-tools__dropdown a:hover, .lh-tools__dropdown a:focus { background-color: var(--color-gray-200); outline: none; } .lh-tools__dropdown .report-icon { cursor: pointer; background-repeat: no-repeat; background-position: 8px 50%; background-size: 18px; background-color: transparent; text-indent: 18px; } .dark .report-icon { color: var(--color-gray-900); filter: invert(1); } .dark .lh-tools__dropdown a:hover, .dark .lh-tools__dropdown a:focus { background-color: #BDBDBD; } /* copy icon needs slight adjustments to look great */ .lh-tools__dropdown .report-icon--copy { background-size: 16px; background-position: 9px 50%; } /* save-as-gist option hidden in report */ .lh-tools__dropdown .lh-tools--gist { display: none; } @media screen and (max-width: 964px) { .lh-tools__dropdown { right: 0; left: initial; } } @media print { .lh-topbar { position: static; margin-left: 0; } .lh-tools__dropdown { display: none; } }</style>

<div class="lh-topbar">[https://reinnovame.com/](https://reinnovame.com/ "https://reinnovame.com/")

<div class="lh-tools">

<div id="lh-tools-dropdown" role="menu" class="lh-tools__dropdown" aria-labelledby="lh-tools-button">[Print Summary](#) [Print Expanded](#) [Copy JSON](#) [Save as HTML](#) [Save as JSON](#) [Open in Viewer](#) [Save as Gist](#) [Toggle Dark Theme](#)</div>

</div>

</div>

<div class="lh-container">

<div class="lh-sticky-header">[

<div class="lh-gauge__percentage">22</div>

<div class="lh-gauge__label">Performance</div>

](#performance)[

<div class="lh-gauge__percentage">83</div>

<div class="lh-gauge__label">Accessibility</div>

](#accessibility)[

<div class="lh-gauge__percentage">93</div>

<div class="lh-gauge__label">Best Practices</div>

](#best-practices)[

<div class="lh-gauge__percentage">59</div>

<div class="lh-gauge__label">SEO</div>

](#seo)</div>

<div><style>/* CSS Fireworks. Originally by Eddie Lin https://codepen.io/paulirish/pen/yEVMbP */ .pyro { display: none; z-index: 1; pointer-events: none; } .score100 .pyro { display: block; } .score100 .lh-lighthouse stop:first-child { stop-color: hsla(200, 12%, 95%, 0); } .score100 .lh-lighthouse stop:last-child { stop-color: hsla(65, 81%, 76%, 1); } .pyro > .before, .pyro > .after { position: absolute; width: 5px; height: 5px; border-radius: 2.5px; box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff; animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards; animation-delay: 1s, 1s, 1s; } .pyro > .after { animation-delay: 2.25s, 2.25s, 2.25s; animation-duration: 1.25s, 1.25s, 6.25s; } .fireworks-paused .pyro > div { animation-play-state: paused; } @keyframes bang { to { box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47; } } @keyframes gravity { to { transform: translateY(80px); opacity: 0; } } @keyframes position { 0%, 19.9% { margin-top: 4%; margin-left: 47%; } 20%, 39.9% { margin-top: 7%; margin-left: 30%; } 40%, 59.9% { margin-top: 6%; margin-left: 70%; } 60%, 79.9% { margin-top: 3%; margin-left: 20%; } 80%, 99.9% { margin-top: 3%; margin-left: 80%; } }</style>

<div class="lh-header-container"><style>.lh-scores-container { display: flex; flex-direction: column; padding: var(--scores-container-padding); position: relative; width: 100%; } .lh-sticky-header { --gauge-circle-size: 36px; --plugin-badge-size: 18px; --plugin-icon-size: 75%; --gauge-wrapper-width: 60px; --gauge-percentage-font-size: 13px; position: fixed; left: 0; right: 0; top: var(--topbar-height); font-weight: 700; display: none; justify-content: center; background-color: var(--sticky-header-background-color); border-bottom: 1px solid var(--color-gray-200); padding-top: var(--score-container-padding); padding-bottom: 4px; z-index: 1; pointer-events: none; } .lh-devtools .lh-sticky-header { /* The report within DevTools is placed in a container with overflow, which changes the placement of this header unless we change `position` to `sticky.` */ position: sticky; } .lh-sticky-header--visible { display: grid; grid-auto-flow: column; pointer-events: auto; } /* Disable the gauge arc animation for the sticky header, so toggling display: none does not play the animation. */ .lh-sticky-header .lh-gauge-arc { animation: none; } .lh-sticky-header .lh-gauge__label { display: none; } .lh-highlighter { width: var(--gauge-wrapper-width); height: 1px; background-color: var(--highlighter-background-color); /* Position at bottom of first gauge in sticky header. */ position: absolute; grid-column: 1; bottom: -1px; } .lh-gauge__wrapper:first-of-type { contain: none; }</style>

<div class="lh-scores-wrapper">

<div class="lh-scores-container">

<div class="lh-scores-header">[

<div class="lh-gauge__percentage">22</div>

<div class="lh-gauge__label">Performance</div>

](#performance)[

<div class="lh-gauge__percentage">83</div>

<div class="lh-gauge__label">Accessibility</div>

](#accessibility)[

<div class="lh-gauge__percentage">93</div>

<div class="lh-gauge__label">Best Practices</div>

](#best-practices)[

<div class="lh-gauge__percentage">59</div>

<div class="lh-gauge__label">SEO</div>

](#seo)</div>

<div class="lh-scorescale"><span class="lh-scorescale-range lh-scorescale-range--fail">0–49</span> <span class="lh-scorescale-range lh-scorescale-range--average">50–89</span> <span class="lh-scorescale-range lh-scorescale-range--pass">90–100</span></div>

</div>

</div>

</div>

</div>

<div class="lh-report">

<div class="lh-categories">

<div class="lh-category-wrapper">

<div class="lh-category"><span class="lh-permalink" id="performance"></span>

<div class="lh-category-header">

<div class="lh-score__gauge" role="heading" aria-level="2">[

<div class="lh-gauge__percentage">22</div>

<div class="lh-gauge__label">Performance</div>

](#performance)</div>

</div>

<div class="lh-audit-group lh-audit-group--metrics">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Metrics</span></div>

<input class="lh-metrics-toggle__input" type="checkbox" id="toggle-metric-descriptions" aria-label="Toggle the display of metric descriptions"> <label class="lh-metrics-toggle__label" for="toggle-metric-descriptions"></label>

<div class="lh-columns">

<div class="lh-column">

<div class="lh-metric lh-metric--fail" id="first-contentful-paint">

<div class="lh-metric__innerwrap"><span class="lh-metric__title">First Contentful Paint</span>

<div class="lh-metric__value">4.0 s</div>

<div class="lh-metric__description"><span>First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/?utm_source=lighthouse&utm_medium=lr).</span></div>

</div>

</div>

<div class="lh-metric lh-metric--fail" id="speed-index">

<div class="lh-metric__innerwrap"><span class="lh-metric__title">Speed Index</span>

<div class="lh-metric__value">10.1 s</div>

<div class="lh-metric__description"><span>Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/?utm_source=lighthouse&utm_medium=lr).</span></div>

</div>

</div>

<div class="lh-metric lh-metric--fail" id="largest-contentful-paint">

<div class="lh-metric__innerwrap"><span class="lh-metric__title">Largest Contentful Paint</span>

<div class="lh-metric__value">9.5 s</div>

<div class="lh-metric__description"><span>Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/?utm_source=lighthouse&utm_medium=lr)</span></div>

</div>

</div>

</div>

<div class="lh-column">

<div class="lh-metric lh-metric--fail" id="interactive">

<div class="lh-metric__innerwrap"><span class="lh-metric__title">Time to Interactive</span>

<div class="lh-metric__value">12.4 s</div>

<div class="lh-metric__description"><span>Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/?utm_source=lighthouse&utm_medium=lr).</span></div>

</div>

</div>

<div class="lh-metric lh-metric--fail" id="total-blocking-time">

<div class="lh-metric__innerwrap"><span class="lh-metric__title">Total Blocking Time</span>

<div class="lh-metric__value">880 ms</div>

<div class="lh-metric__description"><span>Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/?utm_source=lighthouse&utm_medium=lr).</span></div>

</div>

</div>

<div class="lh-metric lh-metric--pass" id="cumulative-layout-shift">

<div class="lh-metric__innerwrap"><span class="lh-metric__title">Cumulative Layout Shift</span>

<div class="lh-metric__value">0.049</div>

<div class="lh-metric__description"><span>Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/?utm_source=lighthouse&utm_medium=lr).</span></div>

</div>

</div>

</div>

</div>

<div class="lh-metrics__disclaimer"><span>Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/?utm_source=lighthouse&utm_medium=lr) directly from these metrics.</span>[See calculator.](https://googlechrome.github.io/lighthouse/scorecalc/#first-contentful-paint=4040.5&speed-index=10084.46610884092&largest-contentful-paint=9540&interactive=12374&total-blocking-time=881&cumulative-layout-shift=0.04914469401041667&first-cpu-idle=8870&first-meaningful-paint=4265.5&device=mobile&version=6.3.0)</div>

</div>

<div class="lh-filmstrip-container" id="screenshot-thumbnails">

<div class="lh-filmstrip">

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAQkDHPXpQAAgkjPI60ALQAUAFABQAUAFABQAUAFABQAUAFABQB4p8aYPinN4usv+EGuhb6WtkvmA6qloDMXfd8raJfZ+XZz5q/7gxucA9D+G9p4ks/B2nR+LpY5/EKiT7VJHeLdqcyMUxKtrahvk29IEx0+YjewB1FABQAUAFABQAUAFABQAUAFABQAUAFACFQSMjpQAAYGKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,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)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,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)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,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)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzKJJzQSKnzNgdaARNgKcd6Chwwg5OOcc0AP2MM/KeOTx0oAbQAooAUdKAFoAKAF6daAFALdelADsZGDQA4LwfYUAKOVHoe9AGfs6gd/fFAH1Hb+DvhJL8EJr640i/Tx3NZW9vZ2tpbaj+8m+3yB5C5j8rP2VoCNrfMWYEBsMQD0J/BP7Ot5dXf2PRNbgtlub/7PJdWOosjxxvFHp8LulplWvczyiUIfJVAjRSPywBn2/gj4EtDej+wdYu501HSjpynTNTgW7h89Bfw3CJExRmhSWWPy5STHOgJDo2QDkPjV4X+D2n/AAeafw1o02m+MLKS3tXdn1Z1dshZhIbi1jiE42BjgorGeUBQIo9wB8wAZoAUDFAC0AGM0APVR3oAdsFADtooAAKAPYfhBL8MoPC12/jWz+0al9rby2/s57rbDsTbyus2WPm3/wDLJuv3znaoBwfxDuPD954w1CXwrC9voLeX9mje0a1IxGof9211ckfPu6zPnqNoO1QDj+pFAC84IHygjBC8UAC/KMDp3B5B+vrQAJGoKYH3M7fbPXFADgPmZgANxycDGTQAtABQA5V3H2oAkAyKAHDigBCKAHKuR6UAO25IoAUqHXBGRkH8un86AHbevqTmgDNUYFACjpQAUAO3GgBaACgAxk4oAmHNADqACgBQvTNADwMe1ADutACheaAHbaAMugAoAcM+lAC0AFAD1GQOKAHhQO2KAHUAA5NAEm0elACgDsKAHBeaAH4HoKADAHYCgBaAMplKYzjkZ4oAOtADhwKACgBVAJoAlAoAdQAdaQx6ihAx2MkUwQ8AA0Axe/FAgHXigByjJqblEgGKLj0sYxyxGST9aogXGKAFoAUDNAEiJgUALj3oAeq55zigY4KB3zQUPx70CY4DA60EiEZqWUhQvFIZKI8DrQCBVOaBjtuTQDMl/L3AoCBjnPrVXIsJ1FACAY70kUSKOM07hYfu6UXDlF4NFxco9eFouMUc1IDwM0AOIzQA5VBxQBKEUfWgqwd8UAOAxQIdQIwwtAC9qAHBQaBofgCgYUAPCjrQFx460EkgHFACgCgB6IM0ASAY6daCkKo5PegB2KAFAzQTYeoxQBg0AA5OKAJAMCgqx0vhr4f6v4uS6fTBZzfZ2SNopL6GGaV33bEhikdXmY7WAWNWOcDGWGQBNM+H+t6t9oNrbRutvexafNJJOkUcU0glZQ7uQqLtgmYuxCKEJZgKBXL1t8L9fu9U0ywggt5pdS1RtItJI7uJopbgGIYEgYpt/fxEPu2kOCCRkgEPn+FuvWYu3mOlBLWFJ2aPWbNxMrBv+PcrKRckFWUiEuQwwcHigC/pXwc1/WLCC7t77wuEniWZI5vFelxShSm8lke4VkwOoYArg5AxQBSk+GusxaZPfo2mXkULThorHV7S6mUQ+YZHMUUrOEAidt+3aV2sCQykgFPw94Q1LxPbXM+nLbSm3KA273kMdxMWOFWGF2WSZsjG2NWIyPUUFG3pXwl8Q6zHby2r6K0U1p9tLv4gsEEEO6Jczbpx5Lbpo1CSbWLEgDKnAFypqnw61rRPDVjrd+NPgs7wt5MX9qWxuXVZXhZxbiTztokikXdsA+QnOOaBXOfEBMBlyNoOMZ5/zzQMRBxyKA6WHj0xxQKxzwFAiUD2oKsFAGrofiK78PES2En2a8W4iuIrkAFoXQOFZeOGBcMGHKlQRzQB0Wm/E2XSvCHjHw+LC2Nj4nmtrm7llP7yBrd5XRYz05aQEnHRSBy2QEsm8JfEiDw23gvNobj/AIR7XX1xz5gHn7xZ5j6Hbzakg8/f6ccgFCz8cX+n6fJZNb6e9u22ORm0+3+0RBTkeTMYy8TfeJZWBbI3bgAAAR3fi651BbCG5t7HZYWklpEbLToLNirReXmVoo1aVsAHdIWbOefmJoAsW3jTUoNEstPt2s7ZLCTzoLq0sIILxXDGQMbpEEzYzkBnIGFwBsWgqxXTVrH+3Fuf7OeGwhvRP9gtp3iKqSpMaO251X5cKx3MAQSWIJIB1nhn4yaj4c0q6tBY6LdyPp32GB20HTyoUXFtLm4UwEXRxbqAZdxUtuDZzkE0V/GfxKbxf4X0DQ4tJsdNsNHhnjiWO1ieYmS8urjaLhlMwjC3AQI0jD5N3JPCuFjjNg+tFxu6HDFMOo9QB9aVyXc59gGYELtH1plWDHFABQBZZ0YIGhORgZ3dcD6UCZreDby307XY57neCsFwLd432NHcmFxbvv3pt2zGNt2QFxk5AwQR1qeINNm0+w/4S4ahr2ppqc7S3MOqpuVPLtsGSQxzeZ90gcgja4+gBo3nii1uLnwMsl7cHSrW409p45dUSW2QpFEJStqFDREEOGYk55/vUAYeiTS+H/DmtWH22dJJ0y6afr8MMMiEFcSxjd9oByw2AgjJB+8KCix/bMnl6etrqqWmhRWqJb291dB44L77HtklEJZ/KZphJtkIUBnDAqDwAdFDr5n8H3Olan4j08Oba/mvJ4Mz3FxOyF4Y7oMhW8DOipE6uxt2leQsoVBQBjfGTX/+Ei8bXt3DeXl5YvJIbY3erJf4jMjY2FVXy1xjCEZHrzQUjiRwOlSxp6k8a7ocJEWcsAG/pQA0x4bGQe/FAroeYtoUgg5Hr09jQPRmD9nlChii4HBPBqiBRaytghR2HUf40AOFo7uyjG5OSKACSJrd9rgA+lAmIq453UCNjStEu9QurK0W2Di7IkinnZoYkQsEZ3kI2rErA5YkYIPPGKAOxbwX4efwxpmqx38+nC+uJXWW6lhOIYUh8+MRDAaUPJKU3SR70jAxulQUAWNb8A6ZaeCo9Xs7pp7wWD3b6e7yS3MCDUJLVZpX8pYTHtVF+Vt5eQHaF3YCivqHgK20/VdRe1jl1HSreS8t1hhuB50E0UU7KJ/3Y4IgEvyja8YdVfekmwA5jVtPS0stGnW0ntXu7MzSNI+6OUieaPfGMZC4jCnJJ3K5zzgBSM5fWky0SDpSAVeMjjnvQMei/MKEJk/SqEjAcpuwHYgDOc4z+tBmCxq2My46cls49aBjooUaRgZtoHQ/3uaAseqfEn4Fv4F8Q6xpKt4haewgaWM6voX2GS7ZZJAzRxedITB5UE8vn52/umUheGoCxLoHwW0bWvEdxoEGta7qGs6fHKdRs9H0JL2QSRukbLaql1/pCbmbLkxEKobackACxnpo2oWWk6rpem+LNRGjWrG+fTz5kIEjypZMs0O8qkphn+bazjaxQk5IoFYY3gzSLnQodY/tnWG+H0d+9ibyTT7f7Wt0YhIypYi7IwyeVmQyKPlPUqAZAr6b/aHiXwZqFhdeJ9XvoNLlkuLHSbZZLmxADgSXEoaQfZ1Zp/kfym3O7htmSaoZ0HjH4Zaj4d1K6SyfxZNr0V9ZxxWur6EbC9uJJnugJUUTSlvniCq3VmlfAG35lsNFvRtCuPGWtvod1408RatqmrapbxSzWthJc2ksE1zbwm6kkedJC5ZYMI8Y3FIQWU4AGMsXXwC+xWnia8ceLBHo1tb3D2h8MYu7fzVuGzfRfaP9DTFuGD5kBSVGwM7Qikcx4G+Gr+MPEXhvS/Pvt2sWF1fLHpen/bbkCH7SdkcPmJ5jOLbgblxu9uQRz/iHSIdD1rUrBft0b2k7Q+VqdqLS5XBIIkh3PsYEHK7jigZQXHFArDwM0NoRzDFeMGqIANlup/CgaJMk4GW/Ggo6QfEDxCzSsL8gy3s1/KEgjUTyy7d/m4X94h2L+7YFFy2F+ZsgF3TpvFPjGXxDcWym8uNUk/4mFw6qrXU0jGVY9zYzJJIjssUfzOU4U7TgA1NL0DxTZW+o2tleaatneQwPeRRaxYtFsiljMTMTLxhigBJBO7GcMwouK5WtNN8XX/hqPRbaYyeHXY6u1i+oRC0hlx5azSbnxAzAqil9hfcgU/MAZFYjuvDnibRntLOazii1OaUiCyhSE34lnjQbGgQmUbgV2oy4XPygFzmgRYttL8RQG+gt7y0t0ugstxImqWyQyErIpQzeYELFZWBiDZwxyvBwmyg03SPFGlalo+tJHDb3ELwzWk9xNBEsJA86IyeYwEe8Dcnmbd4Hy7uaQy14lsvFmleGLaw1eAHSLQwwRlDDIsQPnz25YoSVEnnTyIW4kRyyblUEA0YNt4kv4HtSsqhbW0msojsBIil83zF5Hfz5Oeo3deBQMzgC4BOAcYIHTvQBMoxii1xD1GagFqc+97NvG9VyO3J6/jWpkRC4czo/Rlxjr2/GgaJ0u5VXAx0wD3xSuWPhuniTYoXGcjNFwsdd4H8ZWHh8PHq9pc6lp5uYZ59MSRRbXcSJKrxupG5JGEpVJ0O+INJtViw2lwsQeBPFVv4bfWkuFCLfWAtEkawhvVQi4hlyYpjtORERnJwTxSFymvpvjm1s7RY2mvfOe3MIl+y27hQGiIjmViReRHYCEkx5RSMoSFIYHYl8eeM9D8XarZXVpp8um6XCsMK6THHCssEEcaR7Be4aSU4QBWlQ49CBgjZNjIsdU0u30S90ITXqWNxcQXb3Bt0LCSJZEVFiEu3aRPIS+4nhflUbqm4zqvFPxOtfFupz6zeRy/2zf3q3stzcW0N6LYeU6SwASczI7mMoJeYEiCqz5LGho5TVPEclzYyaZbyKlg87XMixWiWwml3vsd1QlSVRyqqPlQMwX7zFlcoxQKALEbskBi42Mc9Oe3+FK9mAo4p3Exy81IrHKDG7HStSB6jvQykiTnGKkqw5QTQJ36D1TJ5NAXY/aM9aBXZIMnAySAcgU7DuSADafWpYhVxu/CptcaJV5A4xVjHrUsY4cE00BLj9KmSAUAntS1ESA4Ax1pgc4LcdRzV3FZDhDjrQMesQz0NAMkFsB2oFcesA9KBDvJGfu0FIcIhkGi4WHrGDSCxKluM9KV+wDxABjOaVxj1hHUA0XuA8QfxYoAkWLrgY+tAD0iK/XGKdwHpDnseKQGI+s2krhjg47FTVmfMNbUbGTkvsHT5UNAcwg1GzHSQkf7potcOYcNSsj1cj/gJotYOYUajY/wDPQ/8AfJoDmJF1KxI/1n5g/wCFAcxKdVsiipuXg9dpz/KgOYBqlkP+Wn/jp/wotcd+44arZY/1mP8AgJ/wpKI7pbD01ay7Sn/vk/4U7IOYkGrWef8AW5/4Cf8ACpaE5D/7XsCP9bz6bW/wpDUhy6zYENmXHtsbn9Kp6juOXWNOxzMQf9xv8KXKHMSJrOm95/8AyG3+FFrDvY4jyRWhhc1NC0CPWpZY2vbaxMYjObp9isGljjOD/shy5/2UY0CNa18AwXFnq8z+JNEhfTZpInjkuSPtO1SQ0B25kBII6DkrjOeAq5DceDEtxC41zR54ZGQFork5QNGkgJUru4DhTxwysvUUAWL3wAtlrJsP+Ej0CdQC/wBrivT5IASR+W29f3e3HXLpx8woAU+B7KTxDcafB4l0p7ZLmaKK9eQqs0SCQiXptG4RjA3HJkTB+YGgCtp/hKK/nWL+3dJty0cbhp5mVcuu4JnbjcCQpz905yeDgAbceFoYbG3uI9Z0y586c24hhmZpVIRW3su35U+bbnP3gw/hJoAj1Dw0unxx/wDEy0+5mcj93bzb9o8pXzuxg8ts47g+lAHR6h8M7Kx0uG4t/Fmi31y8yxPaxXC7lBhV94wxyocshJAAwCxUE7UwKlv8PxNqAtjr+hxBiAszXmUO4w7WJC5A/f5ORkeVLkDYaVgLulfDODVLN5D4s8P2dw06RQw3d4sWVMLSl3zyuMKmMfeLAkFCCAVPD3gq01j7bJPr+n2Vtaz28AkdwGm8yVUZ0Vip2IpdmPoo6ZyACjd+F1tdM+3DWNLnUldttFKzTtlI25ULhcebjk9Y5BklaAMkRfT8qAIPIxVCsbWhafoktrfy6tcmKdIXFrDhzvlMbFOFBGN4UEkjGRwwztAsbur6N4FfU9WfTdbufsmwtYI8Dksd7ALJlcr8uw5HUHsWKIBYq3XhrwqbrS1tfEUghllnF281o+IY0bEbKwX5jKuWCgfKcBjgE0DRZPhzwkuv3EEPiB20hXjEd01rJ5xXyXZmEQTkiQBMFlzuBGRuKAFnRdA8DyahqA1DxH9ntI51NsZbeYvNGJGViQsZ2sygSbTgYdRuVlagCOTwt4Xgkk8rxRC/+lJEsbRSujLiEu20Rq/lgvKNxVWJjGEJJ2gE3hvSPA8Ws+VrerTNp0huIzcBJlaJlYGGQKqZZWA68H5mUqhVWYAfeeG/AsLaclv4luJ43m2XrJazIyIXf95hkG5gu1mUdMFVL5LgAqar4e8GprWrRWXiG6l0lLOaayna1dzNcByIoSu1duQB8/I7kIW2KAWbTw74MayWS88RznUvPSJrSG1k8pVbZvk87aeE3OSu3PykLuG1mLgPTwv4MW40m3HiiZ0mLHUZ5LeVFtQAMKo8tmcs2QpAx8vzY3ZEgbWr+F/hvNNPJpviryIMg2ySwXWQMpuVsWx28eZyGb7qnHzEK7Acr4r0Pw/pS2/9ja3HrG8vuk8uVGzn5fleNcZXkjJwcjJwGYsBzwiz2pWAasJUggZI5qgudlZ6z4Sms7VL3w9cx3MUQid7edsPtBO7cHGCzM25dvKrGFdMHcBcutrHgltL1W0tfDEolnmjlhmlZ5GiVVYEBvOG3JYHoQWVmIwypGCuVdS1nwzdeDVtbbw59m11ZJJDcJKzxJG7odgzJuOFUBSxYYLfKWYuALlzVda8ETat5lh4XuLWzSGGGOOa4LOH813kd9rKTkFFBLkhQV+UsskYO5Jca78PZIbOG28JTwWkax/aGmvHknlw6M4VxKqrkKR9wj5s4XqALmZdX/hQzaqsejPClwiSWMLyORaSBJFb5vMG5TlWwwyCQclUxKDJbnX/AArN4d0q1Ph14r22sJIZrqJiBNcNs2SOA+5sDzO4GWVtmB5dAixFrngqwubJk0B7qGCFY5EuGfdcSh4tznEuDlRMABgDeBluCoK5SfVvComvnh0X5pZoXtoiz4hXYwdSPNJwWcsBuLAqmXI3BgLki6j4W/tS7b+w7sWEhVooHuC0qYhYEbg3QyENghjhVGcAh1YLmnbeJvB9trtjeHw2s9ipke4t5xKTJ8ybdoNwcAAEYORuJ4YMFQsMj/4Sfwu3lPP4aj3wwWluojXaMRx/vnba2HeWQ9WGAvvimK4xdV8H3UVrHcaIzlY1SfYZI2lby2DHeZmUHcykER4BXO3HyEGcYwDHcAcdBnrgcD1oAkMB9qDI0dL8MarraStp+mXd8sSs8jW0DSBFGMk4HAGRn6igDZttG1y/tdKSz8LSzrZFS0kNlI32kuwkTzMAhsrKgHqrJgcgkA3Nd1a8udUvNW/4QCw03Tp084Wx08rCkBMQB3bRgfJGN6bTmVyCpcYBEOrz+JNR8cC91DwkJNQkitZhp01hMyeUoihizGedrMka9slyBywwDFvbvXbxdNkbwfbQ2dtIJII/7PYI/nymaOPJHzIWBCL6FwOpJAKy6d4wi0B/DS+H7uTSRcG/jsZLBn8ubYp80NtLZCSLnnG2TplgaB3G6Dq9yur292ng/S9WiuTJBDazWLSQSP5vnEIqkEsodVwDwhVSOeQdzW0JvEH2TxF9j+H32tNXHlysunyMltDJscLHhNqH5oGQngHYcNlaATKqzeLG8P3ugN4RZ0jSO1b/AIlkpktnR55x7K+2eTqPujOOpIPQlsdS1ptds9RuPBtpqk8UshuEu9Laf7ZJc7pB5wJ+Zjv3J3IA69aBNmVYaVquqXK3Nh4T+0wTyS3ojgsJJFMbZGFbBIjQxMOpxsYdRkAXJnvNdhuNXk/4RgWg1kTWJhhsXjjRmlE5WNR0ZAyKARwpX60DMiTwPrNgY5dR0i/0+z84RSXVzayJHGdxU5Yrgcgj8DQO5n6npa6beyWwniuDHgGaA7kY4Gdp7jORnvigLjfKoMzf0bxvr3h/SX0zTruO3smuFuipgjZ/MBQghyu4DMcfGcHHI9QC5bfErxTaPqbJqal9RBFy726Oz/NuGGZSVweRtIwQCOQMAFS98a69qHha18O3F+JtGtZTPFamBF2ud2SXC7z99urd6ALWufEnxR4lVxqOpi7DxJAwNtEo2KkqKMKgHAuJecfxZ6gYALepfFrxfrN7p93fasbi5sZFlgcwRgI6urqSoTDEMgI3Zxz6nIB0Ohf8LL8bXWiXunBWe2LtbzfZoFMaZS3eZl2bmUcLuYMcI5GdhwAYmmaB41vjZabawI3mRrNDAkluZCskbbSeScssoAzyfMiHVo8gHS+PLL4ofDvRZrfVbzfol4ZrKSSNEaNy8s25eUBDP5bSZ64ZMkE4poDj4PiZ4ot7qG7XUyL2MoRceSpc7BbhAcjBA+yQfXbyTk5dgFt/iX4j07xDNrOnXMFpfSoEZvs0cmf9WWY71YFmeJXJxndyCM4pMBvh74k+J/CNhdWmk6iLWG7i8mcGCJyyZY7curHGWZuMcsTSApSeLtZngtIJLiBoLQbYYvssW3b5ax4I24b5EVTuzkD1Oaqw7kcviTVLiG7ilufMS6hEEwZFO5BKsvHHBLqGJGCTnJOTSEZItsE02O5Y+zL/AHKkQfZ1/uigBfs6+gFO9rsa1aV7XPTf+FA3Y5/tO1/74auH63DofS/2BXX2l8xT8AbzP/ISteOvyNR9cQ/7AxC+1H7mKfgFeD/mJ2w/4A3+FH1xC/sDEfzRINS+Cl9pOkXl4dUgaO2heYxqrfMFGcD/AL5pxxUZSSMa2S16MJTlJWSvsVPCvwsvfFOiw6hDqUcEblkEb7sjaSO3Hr+dXVrxpys9zDC5XVxlP2sJabamp/woXUdh/wCJrbbOp+RsfX9f1rP63Htc7f7Br/zREPwDvQM/2pajHJ+RqPrke1hvIMQt5RGn4DXoznVrQYGT8rcCj64hf2DX/miOHwDvv+gra/8AfDUfXI/yh/YGI/micHqvhu50vW7vTDGZZ7eTYfL53DcAGAHY7l/Ou6MuaNz52pD2UpU/5dCJtGuI7czFP3YXdnI6fJ/8cQ/jSMyp5ftQBOYD7UAAgPqKYCNbMR1Wk9mHVI+nT4n0MqR/bOnfjdp/jXg8kk9j9XliKEk05pX8zRm8f6BM5cXGhRAknZHLGABhAB1PGE/Hc2etXeX8hwWoqLSrfiv8xh8faGyPm70PefNIYTRZG9Qvr/DgEY6HP0ofN/KX+50ftl95z/ijxJo03hbWIotWsJJHtJVVFuUZmJQgAAGinCSnHTqPHYijLC1FGavZ9fIxfhbrml6d4MtYbrUrO2mEkpMctwiMBvOOCc10YmLlUujzsmq04YblnJLU7iy8b6FannUdJmXBX57iNiASDkZJAPGM+hNYRTj0PUrToVb2qpfMvy/EXw61ikMVxo0bFmaQPcxOrEq4GAMHjzDjJONqccElvmf2TmhGkr81dP5/8EWT4maJJbXCi80aO6uLk3D3SXKK6j5dqqQ2QAVJ/H25V5WtylONF2/fLTzMt/F+gz3Zll1XTIo3k3MkFxGAqk9FG4dB0FZuEn0O6GIoRjb2i+9Hh/iW80ebxPqU0V/qUyvezfv0C4ZN3ylcSHIyqnr0Ax0Fe7DSKTPzHFa15tdZN/Ixby5s2t/LgW4JZMMJpMqp+UY46j5c9B91RjjJZzmUIy3VQvPrmgCbaBTARhzTYDSoIpIaVxViB/8A1U1rsSkpsXyx6CqsyvZCeUPaizD2QKg9BRZh7PzF2DP19ajqRu+VgIwPSrsy/ZCiMH0/KizD2QhQA4osw9kJsBOKLMPZDgu41mNq2o7YKCQ2CgD/AP/Z)</div>

<div class="lh-filmstrip__frame">![Screenshot](data:image/jpeg;base64,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)</div>

</div>

</div>

<div class="lh-audit-group lh-audit-group--load-opportunities">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Opportunities</span><span class="lh-audit-group__description">These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/?utm_source=lighthouse&utm_medium=lr) the Performance score.</span></div>

<div class="lh-load-opportunity__header lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one">Opportunity</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">Estimated Savings</div>

</div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--fail" id="uses-webp-images"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Serve images in next-gen formats</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 2,241&nbsp;KiB">11.4 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Consider using a [plugin](https://wordpress.org/plugins/search/convert+webp/) or service that will automatically convert your uploaded images to the optimal formats.</span></div>

</div>

<style>.lh-3p-filter { background-color: var(--table-higlight-background-color); color: var(--color-gray-600); float: right; padding: 6px; } .lh-3p-filter-label, .lh-3p-filter-input { vertical-align: middle; user-select: none; } .lh-3p-filter-input:disabled + .lh-3p-ui-string { text-decoration: line-through; }</style>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--0"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--0" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--thumbnail"></th>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Resource Size</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg "https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg">[…07/02_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">397.3 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">326.2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg "https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg">[…09/PROBLEMA-4.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">371 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">268.4 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg "https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg">[…09/PROBLEMA-5.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">342.8 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">258.6 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg "https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg">[…09/PROBLEMA-3.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">379.3 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">256.5 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg "https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg">[…09/PROBLEMA-6.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">303.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">238.7 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg "https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg">[…09/PROBLEMA-2.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">468.9 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">234.9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg "https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg">[…09/09_SFONDO-con-sfumatura-3.jpg](https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">335.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">220.6 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg "https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg">[…07/06_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">285 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">208.9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg "https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg">[…07/07_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">240.8 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">199.3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg "https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg">[…12/Copertina.jpg](https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">138.7 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">29.3 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--fail" id="render-blocking-resources"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Eliminate render-blocking resources</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 3,350&nbsp;ms">3.35 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>There are a number of WordPress plugins that can help you [inline critical assets](https://wordpress.org/plugins/search/critical+css/) or [defer less important resources](https://wordpress.org/plugins/search/defer+css+javascript/). Beware that optimizations provided by these plugins may break features of your theme or plugins, so you will likely need to make code changes.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--1"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--1"> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">1</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

<th class="lh-table-column--timespanMs">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css">[…dfg6v4h9/bgdqo.css](https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">8.6 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">480 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css">[…7v245qy2/bgdqo.css](https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">11.1 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">780 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css">[…m7w4lq3q/bgdqa.css](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">116.4 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">2,580 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css">[…qgljwuxf/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">3.9 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">630 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext" data-url="https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext">[/css?family=…](https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext)

<div class="lh-text lh-text__url-host">(fonts.googleapis.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1.7 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">780 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css">[…ur7wv8/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">65.6 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">2,130 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js">[…kbji93u4/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">33.4 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">1,230 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js">[…rn5uia0/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">28.4 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">1,080 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js">[…modx0ugk/bgdqo.js](https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">14.2 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">630 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js">[…zefh2ss/bgdqo.js](https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">0.9 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">180 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css">[…ln74dogz/bgdq7.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1.7 KB</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">480 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--fail" id="uses-rel-preload"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Preload key requests</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 2,670&nbsp;ms">2.67 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--2"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--2" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--timespanMs">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2" data-url="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2">[…fonts/fontawesome-webfont.woff?v=4.2](https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">2,670 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2">[…fonts/National-Thin.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">1,920 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2">[…fonts/National-Light.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">1,770 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2">[…fonts/National-Semibold.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">1,410 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--fail" id="unused-css-rules"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Remove unused CSS</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 163&nbsp;KiB">1.2 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused CSS in your page. To identify plugins that are adding extraneous CSS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes?utm_source=lighthouse&utm_medium=lr#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the stylesheet. Look out for plugins that have many stylesheets in the list which have a lot of red in code coverage. A plugin should only enqueue a stylesheet if it is actually used on the page.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--3"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--3" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css">[…m7w4lq3q/bgdqa.css](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">116.4 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">110.5 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css">[…ur7wv8/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">65.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">52.7 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--fail" id="uses-optimized-images"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Efficiently encode images</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 176&nbsp;KiB">1.05 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Consider using an [image optimization WordPress plugin](https://wordpress.org/plugins/search/optimize+images/) that compresses your images while retaining quality.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--4"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--4" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--thumbnail"></th>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Resource Size</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg "https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg">[…07/06_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">285 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">88.3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg "https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg">[…07/02_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">397.3 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">48.8 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg "https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg">[…07/07_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">240.8 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">38.5 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--average" id="unused-javascript"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Remove unused JavaScript</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 147&nbsp;KiB">0.75 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Remove unused JavaScript to reduce bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused JavaScript in your page. To identify plugins that are adding extraneous JS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes?utm_source=lighthouse&utm_medium=lr#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the script. Look out for plugins that have many scripts in the list which have a lot of red in code coverage. A plugin should only enqueue a script if it is actually used on the page.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--5"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--5" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">98.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">70.3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0">[…third-party/jquery.fullPage.min.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">36.8 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">34.2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js">[…kbji93u4/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">33.4 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">21.8 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js">[…rn5uia0/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">28.4 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">20.5 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--average" id="unminified-javascript"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Minify JavaScript</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 72&nbsp;KiB">0.3 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>A number of [WordPress plugins](https://wordpress.org/plugins/search/minify+javascript/) can speed up your site by concatenating, minifying, and compressing your scripts. You may also want to use a build process to do this minification up front if possible.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--6"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--6" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">98.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">32.9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0">[…third-party/jquery.fullPage.min.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">36.8 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">18.2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6" data-url="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6">[…js/nectar-slider.js?ver=1.6](https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">36.8 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">12.2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1" data-url="https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1">[…js/wppopups.js?ver=2.1.1](https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">11.2 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">4.9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0">[…elements/nectar-full-page-rows.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">7.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2.2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0" data-url="https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0">[…dist/js_composer_front.min.js?ver=6.2.0](https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">6.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2.1 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--average" id="uses-responsive-images"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Properly size images</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 48&nbsp;KiB">0.15 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Upload images directly through the [media library](https://wordpress.org/support/article/media-library-screen/) to ensure that the required image sizes are available, and then insert them from the media library or use the image widget to ensure the optimal image sizes are used (including those for the responsive breakpoints). Avoid using `Full Size` images unless the dimensions are adequate for their usage. [Learn More](https://wordpress.org/support/article/inserting-images-into-posts-and-pages/).</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--7"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--7" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--thumbnail"></th>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Resource Size</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--thumbnail">![](https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg "https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg")</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg">[…12/Copertina.jpg](https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">138.7 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">47.8 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--load-opportunity lh-audit--numeric lh-audit--average" id="unminified-css"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary">

<div class="lh-load-opportunity__cols">

<div class="lh-load-opportunity__col lh-load-opportunity__col--one"><span class="lh-audit__score-icon"></span>

<div class="lh-audit__title"><span>Minify CSS</span></div>

</div>

<div class="lh-load-opportunity__col lh-load-opportunity__col--two">

<div class="lh-audit__display-text" title="Potential savings of 13&nbsp;KiB">0.15 s</div>

</div>

</div>

</div>

</summary>

<div class="lh-audit__description"><span>Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>A number of [WordPress plugins](https://wordpress.org/plugins/search/minify+css/) can speed up your site by concatenating, minifying, and compressing your styles. You may also want to use a build process to do this minification up-front if possible.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--8"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--8" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css">[…m7w4lq3q/bgdqa.css](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">116.4 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">8 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css">[…ur7wv8/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">65.6 KB</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">5 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

</div>

<div class="lh-audit-group lh-audit-group--diagnostics">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Diagnostics</span><span class="lh-audit-group__description">More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/?utm_source=lighthouse&utm_medium=lr) the Performance score.</span></div>

<div class="lh-audit lh-audit--numeric lh-audit--fail" id="total-byte-weight"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid enormous network payloads</span></span> <span class="lh-audit__display-text">Total size was 9,106 KiB</span></span></div>

</summary>

<div class="lh-audit__description"><span>Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Consider showing excerpts in your post lists (e.g. via the more tag), reducing the number of posts shown on a given page, breaking your long posts into multiple pages, or using a plugin to lazy-load comments.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--9"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--9" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4" data-url="https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4">[…09/102…-1080p-rid-compresso.mp4](https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2,558.7 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4" data-url="https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4">[…09/10410458-hd_OP17.mp4](https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1,749.5 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg">[…09/PROBLEMA-2.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">469.2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg">[…07/02_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">397.6 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg">[…09/PROBLEMA-3.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">379.6 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg">[…09/PROBLEMA-4.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">371.3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg">[…09/PROBLEMA-5.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">343.1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg">[…09/09_SFONDO-con-sfumatura-3.jpg](https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">335.9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg">[…09/PROBLEMA-6.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">303.9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg">[…07/06_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">285.3 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--numeric lh-audit--fail" id="uses-long-cache-ttl"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Serve static assets with an efficient cache policy</span></span> <span class="lh-audit__display-text">72 resources found</span></span></div>

</summary>

<div class="lh-audit__description"><span>A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Read about [Browser Caching in WordPress](https://wordpress.org/support/article/optimization/#browser-caching).</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--10"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--10" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Cache TTL</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4" data-url="https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4">[…09/102…-1080p-rid-compresso.mp4](https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2,559 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4" data-url="https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4">[…09/10410458-hd_OP17.mp4](https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1,749 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg">[…09/PROBLEMA-2.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">469 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg">[…07/02_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">398 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg">[…09/PROBLEMA-3.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">380 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg">[…09/PROBLEMA-4.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">371 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg">[…09/PROBLEMA-5.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">343 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg">[…09/09_SFONDO-con-sfumatura-3.jpg](https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">336 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg">[…09/PROBLEMA-6.jpg](https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">304 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg">[…07/06_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">285 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg">[…07/07_SFONDO.jpg](https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">241 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/10/SFONDO-STELLATO-con-sfumatura-1.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/10/SFONDO-STELLATO-con-sfumatura-1.jpg">[…10/SFONDO-ST….jpg](https://reinnovame.com/wp-content/uploads/2020/10/SFONDO-STELLATO-con-sfumatura-1.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">224 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/01-SFONDO-HOME-NUOVO-1-scaled.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/01-SFONDO-HOME-NUOVO-1-scaled.jpg">[…09/01-SFONDO….jpg](https://reinnovame.com/wp-content/uploads/2020/09/01-SFONDO-HOME-NUOVO-1-scaled.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">181 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg" data-url="https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg">[…12/Copertina.jpg](https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">139 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css">[…m7w4lq3q/bgdqa.css](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">116 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">99 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2" data-url="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2">[…fonts/fontawesome-webfont.woff?v=4.2](https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">96 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_568133044.png" data-url="https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_568133044.png">[…10/shutterstock_568….png](https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_568133044.png)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">67 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_1100694782.png" data-url="https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_1100694782.png">[…10/shutterstock_110….png](https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_1100694782.png)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">67 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css">[…ur7wv8/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">66 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2">[…fonts/National-Light.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">51 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2">[…fonts/National-Semibold.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">46 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2">[…fonts/National-Thin.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">42 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0">[…third-party/jquery.fullPage.min.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">37 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6" data-url="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6">[…js/nectar-slider.js?ver=1.6](https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">37 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4" data-url="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4">[…vendor/wp-polyfill.min.js?ver=7.4.4](https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">34 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js">[…kbji93u4/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">33 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.min.js" data-url="https://reinnovame.com/wp-content/themes/jquery.min.js">[…themes/jquery.min.js](https://reinnovame.com/wp-content/themes/jquery.min.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">33 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js">[…rn5uia0/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">28 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1">[…third-party/jquery.fancybox.min.js?ver=3.3.1](https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">22 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg" data-url="https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg">[…12/POLIEDRO-DEF-02.svg](https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">20 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2" data-url="https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2">[…third-party/select2.min.js?ver=3.5.2](https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">19 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/SATELLITE_SATELLITE-BIANCO-senza-dati.svg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/SATELLITE_SATELLITE-BIANCO-senza-dati.svg">[…09/SATELLITE_SATELLITE-BIANCO-senza-dati.svg](https://reinnovame.com/wp-content/uploads/2020/09/SATELLITE_SATELLITE-BIANCO-senza-dati.svg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">16 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js">[…modx0ugk/bgdqo.js](https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">14 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1" data-url="https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1">[…js/wppopups.js?ver=2.1.1](https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">11 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css">[…7v245qy2/bgdqo.css](https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">11 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css">[…dfg6v4h9/bgdqo.css](https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0">[…elements/nectar-full-page-rows.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">8 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0" data-url="https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0">[…dist/js_composer_front.min.js?ver=6.2.0](https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">7 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6" data-url="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6">[…js/anime.js?ver=1.6](https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">6 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3" data-url="https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3">[…js/underscore.min.js?ver=1.8.3](https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">6 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11">[…js/wp-quiz.js?ver=2.0.11](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">5 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1" data-url="https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1">[…js/scripts.js?ver=5.3.1](https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">4 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1" data-url="https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1">[…third-party/waypoints.js?ver=4.0.1](https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">4 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css">[…qgljwuxf/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">4 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css">[…d4v7biqm/bgdq7.css](https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">4 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0" data-url="https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0">[…third-party/touchswipe.min.js?ver=1.0](https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">4 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/Reinnovame-Logo-Def-02.svg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/Reinnovame-Logo-Def-02.svg">[…09/Reinnovam….svg](https://reinnovame.com/wp-content/uploads/2020/09/Reinnovame-Logo-Def-02.svg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.flipster.min.js" data-url="https://reinnovame.com/wp-content/themes/jquery.flipster.min.js">[…themes/jquery.flipster.min.js](https://reinnovame.com/wp-content/themes/jquery.flipster.min.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8" data-url="https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8">[…third-party/superfish.js?ver=1.4.8](https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9" data-url="https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9">[…third-party/transit.js?ver=0.9.9](https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11">[…quiz-types/trivia.js?ver=2.0.11](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">3 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4" data-url="https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4">[…dist/hooks.min.js?ver=b477869…](https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1" data-url="https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1">[…js/salient-social.js?ver=1.1](https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0">[…js/priority.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3">[…third-party/jquery.easing.js?ver=1.3](https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4" data-url="https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4">[…third-party/imagesLoaded.min.js?ver=4.1.4](https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1" data-url="https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1">[…js/wpcf7-redirect-frontend-script.js?ver=1.1](https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css">[…ln74dogz/bgdq7.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13">[…third-party/jquery.mousewheel.js?ver=3.1.13](https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0">[…js/jquery.serialize-object.js?ver=2.5.0](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.png" data-url="https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.png">[…10/LINK-Inizia-Qui.png](https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.png)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/Game__01-CASHFLOW.svg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/Game__01-CASHFLOW.svg">[…09/Game__01-CASHFLOW.svg](https://reinnovame.com/wp-content/uploads/2020/09/Game__01-CASHFLOW.svg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9" data-url="https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9">[…third-party/hoverintent.js?ver=1.9](https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/Game__01-FATTURATI.svg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/Game__01-FATTURATI.svg">[…09/Game__01-FATTURATI.svg](https://reinnovame.com/wp-content/uploads/2020/09/Game__01-FATTURATI.svg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/09/Game__01-GUADAGNO.svg" data-url="https://reinnovame.com/wp-content/uploads/2020/09/Game__01-GUADAGNO.svg">[…09/Game__01-GUADAGNO.svg](https://reinnovame.com/wp-content/uploads/2020/09/Game__01-GUADAGNO.svg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg" data-url="https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg">[…10/LINK-Inizia-Qui.svg](https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3" data-url="https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3">[…js/wp-embed.min.js?ver=5.5.3](https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3" data-url="https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3">[…js/wp-util.min.js?ver=5.5.3](https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js">[…zefh2ss/bgdqo.js](https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0">[…force-actions/redirect.js?ver=2.0.0](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">1 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/uploads/2020/11/audio_new.mp3" data-url="https://reinnovame.com/wp-content/uploads/2020/11/audio_new.mp3">[…11/audio_new.mp3](https://reinnovame.com/wp-content/uploads/2020/11/audio_new.mp3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">None</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">0 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="font-display"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Ensure text remains visible during webfont load</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--11"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--11"> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">3</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2" data-url="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2">[…v18/mem8YaGs1….woff2](https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2)

<div class="lh-text lh-text__url-host">(fonts.gstatic.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2" data-url="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2">[…v18/mem5YaGs1….woff2](https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2)

<div class="lh-text lh-text__url-host">(fonts.gstatic.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2" data-url="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2">[…v18/mem5YaGs1….woff2](https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2)

<div class="lh-text lh-text__url-host">(fonts.gstatic.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2" data-url="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2">[…fonts/fontawesome-webfont.woff?v=4.2](https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">220 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="uses-passive-event-listeners"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Does not use passive listeners to improve scrolling performance</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--12"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--12" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--text">

<div class="lh-text">Location</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6" data-url="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6">[…js/nectar-slider.js?ver=1.6](https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">line: 2529</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13">[…third-party/jquery.mousewheel.js?ver=3.1.13](https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">line: 8</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--numeric lh-audit--fail" id="mainthread-work-breakdown"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Minimize main-thread work</span></span> <span class="lh-audit__display-text">6.4 s</span></span></div>

</summary>

<div class="lh-audit__description"><span>Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=lr)</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--text">

<div class="lh-text">Category</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Time Spent</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Script Evaluation</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,846 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Style & Layout</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,600 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Other</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,556 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Rendering</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">746 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Parse HTML & CSS</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">434 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Script Parsing & Compilation</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">191 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--numeric lh-audit--average" id="dom-size"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid an excessive DOM size</span></span> <span class="lh-audit__display-text">1,250 elements</span></span></div>

</summary>

<div class="lh-audit__description"><span>A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations?utm_source=lighthouse&utm_medium=lr), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow?utm_source=lighthouse&utm_medium=lr). [Learn more](https://web.dev/dom-size/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--text">

<div class="lh-text">Statistic</div>

</th>

<th class="lh-table-column--code">

<div class="lh-text">Element</div>

</th>

<th class="lh-table-column--numeric">

<div class="lh-text">Value</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Total DOM Elements</div>

</td>

<td class="lh-table-column--empty"></td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">1,250</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Maximum DOM Depth</div>

</td>

<td class="lh-table-column--code">

<pre class="lh-code"><img src="https://reinnovame.com/wp-content/uploads/2020/09/Game__01-GUADAGNO.svg" class="attachment-full size-full" alt="" loading="lazy" height="200" width="200"></pre>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">35</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Maximum Child Elements</div>

</td>

<td class="lh-table-column--code">

<pre class="lh-code"><body data-rsssl="1" class="home page-template-default page page-id-7 material nectar_using_pfsr necta…" data-footer-reveal="false" data-footer-reveal-shadow="none" data-header-format="default" data-body-border="off" data-boxed-style="" data-header-breakpoint="1000" data-dropdown-style="minimal" data-cae="easeOutCubic" data-cad="750" data-megamenu-width="contained" data-aie="none" data-ls="fancybox" data-apte="standard" data-hhun="0" data-fancy-form-rcs="1" data-form-style="default" data-form-submit="regular" data-is="minimal" data-button-style="default" data-user-account-button="false" data-flex-cols="true" …></pre>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">56</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--numeric lh-audit--average" id="bootup-time"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Reduce JavaScript execution time</span></span> <span class="lh-audit__display-text">1.9 s</span></span></div>

</summary>

<div class="lh-audit__description"><span>Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--13"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--13" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Total CPU Time</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Script Evaluation</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Script Parse</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.min.js" data-url="https://reinnovame.com/wp-content/themes/jquery.min.js">[…themes/jquery.min.js](https://reinnovame.com/wp-content/themes/jquery.min.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,759 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,190 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">7 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,497 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">25 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">15 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,404 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">215 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">38 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<pre class="lh-code">Unattributable</pre>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">754 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">16 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js">[…kbji93u4/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">244 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">84 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">6 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4" data-url="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4">[…vendor/wp-polyfill.min.js?ver=7.4.4](https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">220 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">204 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">11 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css">[…m7w4lq3q/bgdqa.css](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">127 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css">[…ur7wv8/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">81 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js">[…rn5uia0/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">51 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">34 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">7 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--informative" id="critical-request-chains"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid chaining critical requests</span></span> <span class="lh-audit__display-text">48 chains found</span></span></div>

</summary>

<div class="lh-audit__description"><span>The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-crc-container lh-details"><style>.lh-crc .tree-marker { width: 12px; height: 26px; display: block; float: left; background-position: top left; } .lh-crc .horiz-down { background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>'); } .lh-crc .right { background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>'); } .lh-crc .up-right { background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>'); } .lh-crc .vert-right { background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>'); } .lh-crc .vert { background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>'); } .lh-crc .crc-tree { font-size: 14px; width: 100%; overflow-x: auto; } .lh-crc .crc-node { height: 26px; line-height: 26px; white-space: nowrap; } .lh-crc .crc-node__tree-value { margin-left: 10px; } .lh-crc .crc-node__tree-value div { display: inline; } .lh-crc .crc-node__chain-duration { font-weight: 700; } .lh-crc .crc-initial-nav { color: #595959; font-style: italic; } .lh-crc__summary-value { margin-bottom: 10px; }</style>

<div>

<div class="lh-crc__summary-value"><span class="lh-crc__longest_duration_label">Maximum critical path latency:</span> **2,010 ms**</div>

</div>

<div class="lh-crc">

<div class="crc-initial-nav">Initial Navigation</div>

 <template id="tmpl-lh-crc__chains"></template>

<div class="crc-node" title="https://reinnovame.com/"><span class="crc-node__tree-marker"><span class="tree-marker up-right"></span><span class="tree-marker right"></span><span class="tree-marker horiz-down"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/themes/jquery.flipster.min.js"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.flipster.min.js" data-url="https://reinnovame.com/wp-content/themes/jquery.flipster.min.js">[…themes/jquery.flipster.min.js](https://reinnovame.com/wp-content/themes/jquery.flipster.min.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 110 ms,</span> <span class="crc-node__chain-duration">3.27 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4" data-url="https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4">[…third-party/imagesLoaded.min.js?ver=4.1.4](https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">2.14 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0">[…js/priority.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">2.26 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css">[…d4v7biqm/bgdq7.css](https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 110 ms,</span> <span class="crc-node__chain-duration">3.79 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3" data-url="https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3">[…js/underscore.min.js?ver=1.8.3](https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 340 ms,</span> <span class="crc-node__chain-duration">5.94 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js">[…zefh2ss/bgdqo.js](https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">0.93 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3" data-url="https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3">[…js/wp-util.min.js?ver=5.5.3](https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">0.95 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css">[…qgljwuxf/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 420 ms,</span> <span class="crc-node__chain-duration">3.9 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1" data-url="https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1">[…js/salient-social.js?ver=1.1](https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 110 ms,</span> <span class="crc-node__chain-duration">2.39 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8" data-url="https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8">[…third-party/superfish.js?ver=1.4.8](https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">3.24 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6" data-url="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6">[…js/nectar-slider.js?ver=1.6](https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 240 ms,</span> <span class="crc-node__chain-duration">36.78 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1" data-url="https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1">[…js/wppopups.js?ver=2.1.1](https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 120 ms,</span> <span class="crc-node__chain-duration">11.2 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0" data-url="https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0">[…dist/js_composer_front.min.js?ver=6.2.0](https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 340 ms,</span> <span class="crc-node__chain-duration">6.64 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11">[…js/wp-quiz.js?ver=2.0.11](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">4.89 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2" data-url="https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2">[…third-party/select2.min.js?ver=3.5.2](https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 450 ms,</span> <span class="crc-node__chain-duration">18.95 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1" data-url="https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1">[…js/scripts.js?ver=5.3.1](https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 120 ms,</span> <span class="crc-node__chain-duration">4.21 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0">[…elements/nectar-full-page-rows.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 340 ms,</span> <span class="crc-node__chain-duration">7.64 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0">[…force-actions/redirect.js?ver=2.0.0](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">0.58 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js">[…rn5uia0/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 120 ms,</span> <span class="crc-node__chain-duration">28.42 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker horiz-down"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css">[…ur7wv8/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2">[…fonts/National-Thin.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 540 ms,</span> <span class="crc-node__chain-duration">42.29 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2">[…fonts/National-Semibold.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 530 ms,</span> <span class="crc-node__chain-duration">45.72 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert"></span><span class="tree-marker"></span><span class="tree-marker up-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2" data-url="https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2">[…fonts/National-Light.woff2](https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 320 ms,</span> <span class="crc-node__chain-duration">50.8 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9" data-url="https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9">[…third-party/transit.js?ver=0.9.9](https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">3 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css">[…dfg6v4h9/bgdqo.css](https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">8.63 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js">[…kbji93u4/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 530 ms,</span> <span class="crc-node__chain-duration">33.41 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0" data-url="https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0">[…third-party/touchswipe.min.js?ver=1.0](https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 340 ms,</span> <span class="crc-node__chain-duration">3.58 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/themes/jquery.min.js"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.min.js" data-url="https://reinnovame.com/wp-content/themes/jquery.min.js">[…themes/jquery.min.js](https://reinnovame.com/wp-content/themes/jquery.min.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 120 ms,</span> <span class="crc-node__chain-duration">32.87 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1">[…third-party/jquery.fancybox.min.js?ver=3.3.1](https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 440 ms,</span> <span class="crc-node__chain-duration">21.87 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker horiz-down"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css">[…m7w4lq3q/bgdqa.css](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert"></span><span class="tree-marker"></span><span class="tree-marker up-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2" data-url="https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2">[…fonts/fontawesome-webfont.woff?v=4.2](https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 220 ms,</span> <span class="crc-node__chain-duration">96 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3" data-url="https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3">[…js/wp-embed.min.js?ver=5.5.3](https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">1.12 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0">[…third-party/jquery.fullPage.min.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 540 ms,</span> <span class="crc-node__chain-duration">36.84 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js">[…modx0ugk/bgdqo.js](https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 540 ms,</span> <span class="crc-node__chain-duration">14.25 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6" data-url="https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6">[…js/anime.js?ver=1.6](https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 110 ms,</span> <span class="crc-node__chain-duration">6.27 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 650 ms,</span> <span class="crc-node__chain-duration">98.59 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13">[…third-party/jquery.mousewheel.js?ver=3.1.13](https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">1.58 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1" data-url="https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1">[…third-party/waypoints.js?ver=4.0.1](https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">3.97 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0">[…js/jquery.serialize-object.js?ver=2.5.0](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">1.54 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11">[…quiz-types/trivia.js?ver=2.0.11](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">2.73 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css">[…ln74dogz/bgdq7.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 420 ms,</span> <span class="crc-node__chain-duration">1.73 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9" data-url="https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9">[…third-party/hoverintent.js?ver=1.9](https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 340 ms,</span> <span class="crc-node__chain-duration">1.29 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4" data-url="https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4">[…dist/hooks.min.js?ver=b477869…](https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 110 ms,</span> <span class="crc-node__chain-duration">2.46 KB</span></span></div>

<div class="crc-node" title="https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker horiz-down"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext" data-url="https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext">[/css?family=…](https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext)

<div class="lh-text lh-text__url-host">(fonts.googleapis.com)</div>

</div>

</span></div>

<div class="crc-node" title="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2" data-url="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2">[…v18/mem5YaGs1….woff2](https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2)

<div class="lh-text lh-text__url-host">(fonts.gstatic.com)</div>

</div>

<span class="crc-node__chain-duration">- 0 ms,</span> <span class="crc-node__chain-duration">9.52 KB</span></span></div>

<div class="crc-node" title="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2" data-url="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2">[…v18/mem8YaGs1….woff2](https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2)

<div class="lh-text lh-text__url-host">(fonts.gstatic.com)</div>

</div>

<span class="crc-node__chain-duration">- 0 ms,</span> <span class="crc-node__chain-duration">9.47 KB</span></span></div>

<div class="crc-node" title="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert"></span><span class="tree-marker"></span><span class="tree-marker up-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2" data-url="https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2">[…v18/mem5YaGs1….woff2](https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2)

<div class="lh-text lh-text__url-host">(fonts.gstatic.com)</div>

</div>

<span class="crc-node__chain-duration">- 0 ms,</span> <span class="crc-node__chain-duration">9.42 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1" data-url="https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1">[…js/wpcf7-redirect-frontend-script.js?ver=1.1](https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">1.95 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3" data-url="https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3">[…third-party/jquery.easing.js?ver=1.3](https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 330 ms,</span> <span class="crc-node__chain-duration">2.25 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker vert-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css">[…7v245qy2/bgdqo.css](https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 550 ms,</span> <span class="crc-node__chain-duration">11.07 KB</span></span></div>

<div class="crc-node" title="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4"><span class="crc-node__tree-marker"><span class="tree-marker"></span><span class="tree-marker"></span><span class="tree-marker up-right"></span><span class="tree-marker right"></span><span class="tree-marker right"></span></span><span class="crc-node__tree-value">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4" data-url="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4">[…vendor/wp-polyfill.min.js?ver=7.4.4](https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

<span class="crc-node__chain-duration">- 220 ms,</span> <span class="crc-node__chain-duration">33.79 KB</span></span></div>

</div>

</div>

</details></div>

<div class="lh-audit lh-audit--informative" id="resource-summary"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Keep request counts low and transfer sizes small</span></span> <span class="lh-audit__display-text">77 requests • 9,106 KiB</span></span></div>

</summary>

<div class="lh-audit__description"><span>To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--text">

<div class="lh-text">Resource Type</div>

</th>

<th class="lh-table-column--numeric">

<div class="lh-text">Requests</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Total</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">77</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">9,106 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Media</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">3</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">4,308.5 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Image</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">22</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">3,851.9 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Script</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">36</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">443.8 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Font</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">7</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">263.2 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Stylesheet</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">8</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">212.8 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Document</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">1</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">25.6 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Other</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">0</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">0 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Third-party</div>

</td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">4</div>

</td>

<td class="lh-table-column--bytes">

<div class="lh-text">30.1 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--informative" id="largest-contentful-paint-element"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Largest Contentful Paint element</span></span> <span class="lh-audit__display-text">1 element found</span></span></div>

</summary>

<div class="lh-audit__description"><span>This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/?utm_source=lighthouse&utm_medium=lr)</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Element</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.full-page-inner > div.row-bg-wrap > div.inner-wrap > div.row-bg" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV" data-selector="div.full-page-inner > div.row-bg-wrap > div.inner-wrap > div.row-bg" data-snippet="<div class=&quot;row-bg using-image&quot; style=&quot;background-image: url(https://reinnovame.com/wp-content/uploads/2020/09/01…&quot;>">

<div>div</div>

<div class="lh-node__snippet"><div class="row-bg using-image" style="background-image: url(https://reinnovame.com/wp-content/uploads/2020/09/01…"></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--informative" id="layout-shift-elements"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid large layout shifts</span></span> <span class="lh-audit__display-text">4 elements found</span></span></div>

</summary>

<div class="lh-audit__description"><span>These DOM elements contribute most to the CLS of the page.</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Element</div>

</th>

<th class="lh-table-column--numeric">

<div class="lh-text">CLS Contribution</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="body.home > div#slide-out-widget-area > div.inner-wrap" data-path="1,HTML,1,BODY,5,DIV,0,DIV" data-selector="body.home > div#slide-out-widget-area > div.inner-wrap" data-snippet="<div class=&quot;inner-wrap&quot;>">

<div>HOME COME FUNZIONA JOURNAL THE GOOD CONSULTANT CAREERS CONTATTI</div>

<div class="lh-node__snippet"><div class="inner-wrap"></div>

</span></td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">0.01893033806272814</div>

</td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.full-page-inner-wrap-outer > div.full-page-inner-wrap > div.full-page-inner > div.container" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV" data-selector="div.full-page-inner-wrap-outer > div.full-page-inner-wrap > div.full-page-inner > div.container" data-snippet="<div class=&quot;container&quot;>">

<div>PUOI PRETENDERE CHE LE COSE CAMBINO... FACENDO SEMPRE LE STESSE COSE?</div>

<div class="lh-node__snippet"><div class="container"></div>

</span></td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">0.015693846880308508</div>

</td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.full-page-inner-wrap > div.full-page-inner > div.container > div.row_col_wrap_12" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,0,DIV" data-selector="div.full-page-inner-wrap > div.full-page-inner > div.container > div.row_col_wrap_12" data-snippet="<div class=&quot;row_col_wrap_12 col span_12 light left&quot;>">

<div>PUOI PRETENDERE CHE LE COSE CAMBINO... FACENDO SEMPRE LE STESSE COSE?</div>

<div class="lh-node__snippet"><div class="row_col_wrap_12 col span_12 light left"></div>

</span></td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">0.012922960845385934</div>

</td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.off-canvas-menu-container > ul.menu > li.starthere > a" data-path="1,HTML,1,BODY,5,DIV,0,DIV,0,DIV,0,DIV,0,UL,6,LI,0,A" data-selector="div.off-canvas-menu-container > ul.menu > li.starthere > a" data-snippet="<a href=&quot;https://reinnovame.com/appuntamento-gratuito/&quot;>">

<div>a</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/appuntamento-gratuito/"></div>

</span></td>

<td class="lh-table-column--numeric">

<div class="lh-numeric">0.0015975482219940833</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--informative" id="long-tasks"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid long main-thread tasks</span></span> <span class="lh-audit__display-text">16 long tasks found</span></span></div>

</summary>

<div class="lh-audit__description"><span>Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/?utm_source=lighthouse&utm_medium=lr)</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--14"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--14" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Start Time</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Duration</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">15,180 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">698 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">13,337 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">334 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4" data-url="https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4">[…vendor/wp-polyfill.min.js?ver=7.4.4](https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">9,630 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">255 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js">[…kbji93u4/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">4,680 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">191 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,211 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">157 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,368 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">141 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css">[…m7w4lq3q/bgdqa.css](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">2,820 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">127 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js">[…rn5uia0/bgdqp.js](https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">13,920 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">123 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">958 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">117 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css">[…ur7wv8/bgdq8.css](https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">3,630 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">81 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<pre class="lh-code">Unattributable</pre>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,075 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">72 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.min.js" data-url="https://reinnovame.com/wp-content/themes/jquery.min.js">[…themes/jquery.min.js](https://reinnovame.com/wp-content/themes/jquery.min.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">8,580 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">70 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,147 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">64 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,509 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">59 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">13,671 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">55 ms</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<pre class="lh-code">Unattributable</pre>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">1,568 ms</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">50 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

</div>

<details class="lh-clump lh-audit-group lh-clump--passed"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Passed audits</span> <span class="lh-audit-group__itemcount">(13)</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--numeric lh-audit--pass" id="offscreen-images"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Defer offscreen images</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Install a [lazy-load WordPress plugin](https://wordpress.org/plugins/search/lazy+load/) that provides the ability to defer any offscreen images, or switch to a theme that provides that functionality. Also consider using [the AMP plugin](https://wordpress.org/plugins/amp/).</span></div>

</div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--numeric lh-audit--pass" id="uses-text-compression"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Enable text compression</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>You can enable text compression in your web server configuration.</span></div>

</div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--numeric lh-audit--pass" id="uses-rel-preconnect"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Preconnect to required origins</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="server-response-time"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Initial server response time was short</span></span> <span class="lh-audit__display-text">Root document took 540 ms</span></span></div>

</summary>

<div class="lh-audit__description"><span>Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Themes, plugins, and server specifications all contribute to server response time. Consider finding a more optimized theme, carefully selecting an optimization plugin, and/or upgrading your server.</span></div>

</div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--15"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--15" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--timespanMs">

<div class="lh-text">Time Spent</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/" data-url="https://reinnovame.com/">[https://reinnovame.com](https://reinnovame.com/)</div>

</td>

<td class="lh-table-column--timespanMs">

<div class="lh-text">540 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--numeric lh-audit--pass" id="redirects"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid multiple page redirects</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--numeric lh-audit--pass" id="efficient-animated-content"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Use video formats for animated content</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/?utm_source=lighthouse&utm_medium=lr)</span></div>

<div class="lh-audit__stackpacks">

<div class="lh-audit__stackpack">![WordPress](data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E)<span>Consider uploading your GIF to a service which will make it available to embed as an HTML5 video.</span></div>

</div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--numeric lh-audit--pass" id="duplicated-javascript"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Remove duplicate modules in JavaScript bundles</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity.</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--numeric lh-audit--pass" id="legacy-javascript"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid serving legacy JavaScript to modern browsers</span></span> <span class="lh-audit__display-text">Potential savings of 6 KiB</span></span></div>

</summary>

<div class="lh-audit__description"><span>Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--16"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--16" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--code"></th>

<th class="lh-table-column--bytes">

<div class="lh-text">Potential Savings</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11">[…js/wp-quiz.js?ver=2.0.11](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--code"></td>

<td class="lh-table-column--bytes">

<div class="lh-text">5.8 KB</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11" data-url="https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11">[…quiz-types/trivia.js?ver=2.0.11](https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--code"></td>

<td class="lh-table-column--bytes">

<div class="lh-text">0.1 KB</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="user-timings"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>User Timing marks and measures</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="third-party-summary"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Minimize third-party usage</span></span> <span class="lh-audit__display-text">Third-party code blocked the main thread for 0 ms</span></span></div>

</summary>

<div class="lh-audit__description"><span>Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--link">

<div class="lh-text">Third-Party</div>

</th>

<th class="lh-table-column--bytes">

<div class="lh-text">Transfer Size</div>

</th>

<th class="lh-table-column--ms">

<div class="lh-text">Main-Thread Blocking Time</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--link">[Google Fonts](https://fonts.google.com/)</td>

<td class="lh-table-column--bytes">

<div class="lh-text">30 KB</div>

</td>

<td class="lh-table-column--ms">

<div class="lh-text">0 ms</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="no-document-write"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoids `document.write()`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="non-composited-animations"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoid non-composited animations</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations?utm_source=lighthouse&utm_medium=lr)</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="large-javascript-libraries"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoids large JavaScript libraries with smaller alternatives</span></span> <span class="lh-audit__display-text">0 large libraries found</span></span></div>

</summary>

<div class="lh-audit__description"><span>Large JavaScript libraries can lead to poor performance. Prefer smaller, functionally equivalent libraries to reduce your bundle size. [Learn more](https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size?utm_source=lighthouse&utm_medium=lr#optimize_dependencies).</span></div>

<span class="lh-details"></span></details></div>

</details></div>

</div>

<div class="lh-category-wrapper">

<div class="lh-category"><span class="lh-permalink" id="accessibility"></span>

<div class="lh-category-header">

<div class="lh-score__gauge" role="heading" aria-level="2">[

<div class="lh-gauge__percentage">83</div>

<div class="lh-gauge__label">Accessibility</div>

](#accessibility)</div>

<div class="lh-category-header__description"><span>These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility?utm_source=lighthouse&utm_medium=lr). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.</span></div>

</div>

<div class="lh-clump--failed">

<div class="lh-audit-group lh-audit-group--a11y-color-contrast">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Contrast</span><span class="lh-audit-group__description">These are opportunities to improve the legibility of your content.</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="color-contrast"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Background and foreground colors do not have a sufficient contrast ratio.</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Failing Elements</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".wq_quizProgressValue" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,3,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,DIV,1,DIV,0,DIV,0,SPAN" data-selector=".wq_quizProgressValue" data-snippet="<span class=&quot;wq_quizProgressValue&quot; style=&quot;width: 0%;&quot;>0%</span>">

<div>0%</div>

<div class="lh-node__snippet"><span class="wq_quizProgressValue" style="width: 0%;">0%</span></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="#cn-accept-cookie" data-path="1,HTML,1,BODY,58,DIV,0,DIV,1,SPAN,0,A" data-selector="#cn-accept-cookie" data-snippet="<a href=&quot;#&quot; id=&quot;cn-accept-cookie&quot; data-cookie-set=&quot;accept&quot; class=&quot;cn-set-cookie cn-button bootstrap nectar-button medium regular accent-color regular-button&quot; aria-label=&quot;Accetto&quot;>Accetto</a>">

<div>Accetto</div>

<div class="lh-node__snippet"><a href="#" id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button bootstrap nectar-button medium regular accent-color regular-button" aria-label="Accetto">Accetto</a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="#cn-more-info" data-path="1,HTML,1,BODY,58,DIV,0,DIV,1,SPAN,1,A" data-selector="#cn-more-info" data-snippet="<a href=&quot;https://reinnovame.com/cookie-policy/&quot; target=&quot;_blank&quot; id=&quot;cn-more-info&quot; class=&quot;cn-more-info cn-button bootstrap nectar-button medium regular accent-color regular-button&quot; aria-label=&quot;Leggi di più&quot;>Leggi di più</a>">

<div>Leggi di più</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/cookie-policy/" target="_blank" id="cn-more-info" class="cn-more-info cn-button bootstrap nectar-button medium regular accent-color regular-button" aria-label="Leggi di più">Leggi di più</a></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

</div>

<div class="lh-audit-group lh-audit-group--a11y-navigation">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Navigation</span><span class="lh-audit-group__description">These are opportunities to improve keyboard navigation in your application.</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="heading-order"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Heading elements are not in a sequentially-descending order</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more](https://web.dev/heading-order/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Failing Elements</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".instance-6 > .vc_column-inner > .wpb_wrapper > h6" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,6,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,H6" data-selector=".instance-6 > .vc_column-inner > .wpb_wrapper > h6" data-snippet="<h6 style=&quot;font-size: 17px;color: #ffffff;text-align: center&quot; class=&quot;vc_custom_heading wpb_animate_when_almost_visible wpb_fadeIn fadeIn&quot;>

<div>VISION</div>

<div class="lh-node__snippet"><h6 style="font-size: 17px;color: #ffffff;text-align: center" class="vc_custom_heading wpb_animate_when_almost_visible wpb_fadeIn fadeIn"><strong>VISION</strong></h6></div>

<strong>VISION</strong></h6>"></span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".instance-7 > .vc_column-inner > .wpb_wrapper > h6" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,6,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,H6" data-selector=".instance-7 > .vc_column-inner > .wpb_wrapper > h6" data-snippet="<h6 style=&quot;font-size: 17px;color: #ffffff;text-align: center&quot; class=&quot;vc_custom_heading wpb_animate_when_almost_visible wpb_fadeIn fadeIn&quot;>

<div>MISSION</div>

<div class="lh-node__snippet"><h6 style="font-size: 17px;color: #ffffff;text-align: center" class="vc_custom_heading wpb_animate_when_almost_visible wpb_fadeIn fadeIn"><strong>MISSION</strong></h6></div>

<strong>MISSION</strong></h6>"></span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".wq-question-y0u4a > .wq_singleQuestionCtr > .wq_questionTextWrapper.quiz-pro-clearfix > .wq_questionTextCtr > h4" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,3,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,DIV,3,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,H4" data-selector=".wq-question-y0u4a > .wq_singleQuestionCtr > .wq_questionTextWrapper.quiz-pro-clearfix > .wq_questionTextCtr > h4" data-snippet="<h4>Qual è l’obiettivo della tua impresa?
</h4>">

<div>QUAL È L’OBIETTIVO DELLA TUA IMPRESA?</div>

<div class="lh-node__snippet"><h4>Qual è l’obiettivo della tua impresa? </h4></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

</div>

<div class="lh-audit-group lh-audit-group--a11y-names-labels">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Names and labels</span><span class="lh-audit-group__description">These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="image-alt"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Image elements do not have `[alt]` attributes</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://web.dev/image-alt/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Failing Elements</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a > img" data-path="1,HTML,1,BODY,5,DIV,0,DIV,0,DIV,0,DIV,0,UL,6,LI,0,A,0,IMG" data-selector=".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a > img" data-snippet="<img src=&quot;https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg&quot;>">

<div>img</div>

<div class="lh-node__snippet"><img src="https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg"></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="link-name"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Links do not have a discernible name</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://web.dev/link-name/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Failing Elements</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".full-link" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,A" data-selector=".full-link" data-snippet="<a href=&quot;https://reinnovame.com/wp-content/uploads/video.mp4&quot; class=&quot;full-link&quot; data-fancybox=&quot;&quot;>

<div>a</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/wp-content/uploads/video.mp4" class="full-link" data-fancybox=""></a></div>

</a>"></span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".play_button_2" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,A" data-selector=".play_button_2" data-snippet="<a href=&quot;https://reinnovame.com/wp-content/uploads/video.mp4&quot; data-style=&quot;default&quot; data-parent-hover=&quot;&quot; data-font-style=&quot;p&quot; data-color=&quot;default&quot; class=&quot;play_button_2 large nectar_video_lightbox&quot; data-fancybox=&quot;&quot;>">

<div>a</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/wp-content/uploads/video.mp4" data-style="default" data-parent-hover="" data-font-style="p" data-color="default" class="play_button_2 large nectar_video_lightbox" data-fancybox=""></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".hover-wrap[data-hover-animation=&quot;none&quot;] > .hover-wrap-inner > .center[target=&quot;_self&quot;]" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,10,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A" data-selector=".hover-wrap[data-hover-animation=&quot;none&quot;] > .hover-wrap-inner > .center[target=&quot;_self&quot;]" data-snippet="<a href=&quot;https://reinnovame.com/appuntamenti/&quot; target=&quot;_self&quot; class=&quot;center&quot;>
<img class=&quot;img-with-animation skip-lazy poligono&quot; data-delay=&quot;0&quot; height=&quot;1024&quot; width=&quot;1566&quot; data-animation=&quot;fade-in&quot; src=&quot;https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg&quot; alt=&quot;&quot;>
</a>">

<div>img</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/appuntamenti/" target="_self" class="center"> <img class="img-with-animation skip-lazy poligono" data-delay="0" height="1024" width="1566" data-animation="fade-in" src="https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg" alt=""> </a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".nectar_icon_wrap[data-draw=&quot;&quot;][data-border-thickness=&quot;\32 px&quot;]:nth-child(5) > .nectar_icon.icon_color_custom_ffffff > a[href=&quot;mailto\:info\@reinnovame\.com&quot;]" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,5,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,0,DIV,0,A" data-selector=".nectar_icon_wrap[data-draw=&quot;&quot;][data-border-thickness=&quot;\32 px&quot;]:nth-child(5) > .nectar_icon.icon_color_custom_ffffff > a[href=&quot;mailto\:info\@reinnovame\.com&quot;]" data-snippet="<a href=&quot;mailto:info@reinnovame.com&quot;>

<div>a</div>

<div class="lh-node__snippet"><a href="mailto:info@reinnovame.com"></a></div>

</a>"></span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a" data-path="1,HTML,1,BODY,5,DIV,0,DIV,0,DIV,0,DIV,0,UL,6,LI,0,A" data-selector=".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a" data-snippet="<a href=&quot;https://reinnovame.com/appuntamento-gratuito/&quot;>

<div>a</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/appuntamento-gratuito/"><img src="https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg"></a></div>

<img src=&quot;https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg&quot;></a>"></span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".slide_out_area_close" data-path="1,HTML,1,BODY,7,A" data-selector=".slide_out_area_close" data-snippet="<a class=&quot;slide_out_area_close&quot; href=&quot;#&quot;>
<span class=&quot;close-wrap&quot;> <span class=&quot;close-line close-line1&quot;>

<div>a</div>

<div class="lh-node__snippet"><a class="slide_out_area_close" href="#"> <span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span> </a></div>

</span> <span class=&quot;close-line close-line2&quot;></span> </span>				</a>"></span></td>

</tr>

</tbody>

</table>

</details></div>

</div>

<div class="lh-audit-group lh-audit-group--a11y-best-practices">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Best practices</span><span class="lh-audit-group__description">These items highlight common accessibility best practices.</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="meta-viewport"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[user-scalable="no"]` is used in the `<meta name="viewport">` element or the `[maximum-scale]` attribute is less than 5.</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://web.dev/meta-viewport/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Failing Elements</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="meta[name=&quot;viewport&quot;]" data-path="1,HTML,0,HEAD,1,META" data-selector="meta[name=&quot;viewport&quot;]" data-snippet="<meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0&quot;>">

<div>meta</div>

<div class="lh-node__snippet"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

</div>

</div>

<details class="lh-clump lh-audit-group lh-clump--manual"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Additional items to manually check</span> <span class="lh-audit-group__itemcount">(10)</span> <span class="lh-audit-group__description">These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review?utm_source=lighthouse&utm_medium=lr).</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="logical-tab-order"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>The page has a logical tab order</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://web.dev/logical-tab-order/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="focusable-controls"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Interactive controls are keyboard focusable</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://web.dev/focusable-controls/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="interactive-element-affordance"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Interactive elements indicate their purpose and state</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://web.dev/interactive-element-affordance/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="managed-focus"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>The user's focus is directed to new content added to the page</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://web.dev/managed-focus/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="focus-traps"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>User focus is not accidentally trapped in a region</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://web.dev/focus-traps/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="custom-controls-labels"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Custom controls have associated labels</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://web.dev/custom-controls-labels/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="custom-controls-roles"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Custom controls have ARIA roles</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Custom interactive controls have appropriate ARIA roles. [Learn more](https://web.dev/custom-control-roles/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="visual-order-follows-dom"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Visual order on the page follows DOM order</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://web.dev/visual-order-follows-dom/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="offscreen-content-hidden"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Offscreen content is hidden from assistive technology</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://web.dev/offscreen-content-hidden/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="use-landmarks"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>HTML5 landmark elements are used to improve navigation</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Landmark elements (<main>, <nav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://web.dev/use-landmarks/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

</details><details class="lh-clump lh-audit-group lh-clump--passed"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Passed audits</span> <span class="lh-audit-group__itemcount">(19)</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-allowed-attr"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[aria-*]` attributes match their roles</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://web.dev/aria-allowed-attr/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-hidden-body"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[aria-hidden="true"]` is not present on the document `<body>`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Assistive technologies, like screen readers, work inconsistently when `aria-hidden="true"` is set on the document `<body>`. [Learn more](https://web.dev/aria-hidden-body/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-hidden-focus"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[aria-hidden="true"]` elements do not contain focusable descendents</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn more](https://web.dev/aria-hidden-focus/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-required-attr"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[role]`s have all required `[aria-*]` attributes</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://web.dev/aria-required-attr/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-required-children"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-children/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-required-parent"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[role]`s are contained by their required parent element</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-parent/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-roles"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[role]` values are valid</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://web.dev/aria-roles/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-valid-attr-value"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[aria-*]` attributes have valid values</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://web.dev/aria-valid-attr-value/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="aria-valid-attr"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[aria-*]` attributes are valid and not misspelled</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://web.dev/aria-valid-attr/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="button-name"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Buttons have an accessible name</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>When a button doesn't have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers. [Learn more](https://web.dev/button-name/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="bypass"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>The page contains a heading, skip link, or landmark region</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://web.dev/bypass/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="document-title"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Document has a `<title>` element</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="duplicate-id-active"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[id]` attributes on active, focusable elements are unique</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn more](https://web.dev/duplicate-id-active/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="html-has-lang"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<html>` element has a `[lang]` attribute</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://web.dev/html-has-lang/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="html-lang-valid"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<html>` element has a valid value for its `[lang]` attribute</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://web.dev/html-lang-valid/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="list"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://web.dev/list/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="listitem"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Screen readers require list items (`<li>`) to be contained within a parent `<ul>` or `<ol>` to be announced properly. [Learn more](https://web.dev/listitem/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="video-caption"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<video>` elements contain a `<track>` element with `[kind="captions"]`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://web.dev/video-caption/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="video-description"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<video>` elements contain a `<track>` element with `[kind="description"]`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Audio descriptions provide relevant information for videos that dialogue cannot, such as facial expressions and scenes. [Learn more](https://web.dev/video-description/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

</details><details class="lh-clump lh-audit-group lh-clump--notapplicable"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Not applicable</span> <span class="lh-audit-group__itemcount">(17)</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="accesskeys"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[accesskey]` values are unique</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://web.dev/accesskeys/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="aria-input-field-name"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>ARIA input fields have accessible names</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-input-field-name/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="aria-toggle-field-name"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>ARIA toggle fields have accessible names</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-toggle-field-name/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="definition-list"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://web.dev/definition-list/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="dlitem"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Definition list items are wrapped in `<dl>` elements</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn more](https://web.dev/dlitem/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="duplicate-id-aria"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>ARIA IDs are unique</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://web.dev/duplicate-id-aria/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="form-field-multiple-labels"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>No form fields have multiple labels</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn more](https://web.dev/form-field-multiple-labels/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="frame-title"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<frame>` or `<iframe>` elements have a title</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://web.dev/frame-title/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="input-image-alt"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<input type="image">` elements have `[alt]` text</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://web.dev/input-image-alt/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="label"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Form elements have associated labels</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://web.dev/label/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="layout-table"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Presentational `<table>` elements avoid using `<th>`, `<caption>` or the `[summary]` attribute.</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>A table being used for layout purposes should not include data elements, such as the th or caption elements or the summary attribute, because this can create a confusing experience for screen reader users. [Learn more](https://web.dev/layout-table/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="meta-refresh"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>The document does not use `<meta http-equiv="refresh">`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://web.dev/meta-refresh/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="object-alt"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<object>` elements have `[alt]` text</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Screen readers cannot translate non-text content. Adding alt text to `<object>` elements helps screen readers convey meaning to users. [Learn more](https://web.dev/object-alt/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="tabindex"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>No element has a `[tabindex]` value greater than 0</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://web.dev/tabindex/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="td-headers-attr"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://web.dev/td-headers-attr/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="th-has-data-cells"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`<th>` elements and elements with `[role="columnheader"/"rowheader"]` have data cells they describe.</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://web.dev/th-has-data-cells/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="valid-lang"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>`[lang]` attributes have a valid value</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://web.dev/valid-lang/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

</details></div>

</div>

<div class="lh-category-wrapper">

<div class="lh-category"><span class="lh-permalink" id="best-practices"></span>

<div class="lh-category-header">

<div class="lh-score__gauge" role="heading" aria-level="2">[

<div class="lh-gauge__percentage">93</div>

<div class="lh-gauge__label">Best Practices</div>

](#best-practices)</div>

</div>

<div class="lh-clump--failed">

<div class="lh-audit-group lh-audit-group--best-practices-trust-safety">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Trust and Safety</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="no-vulnerable-libraries"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Includes front-end JavaScript libraries with known security vulnerabilities</span></span> <span class="lh-audit__display-text">9 vulnerabilities detected</span></span></div>

</summary>

<div class="lh-audit__description"><span>Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://web.dev/no-vulnerable-libraries/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--link">

<div class="lh-text">Library Version</div>

</th>

<th class="lh-table-column--text">

<div class="lh-text">Vulnerability Count</div>

</th>

<th class="lh-table-column--text">

<div class="lh-text">Highest Severity</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--link">[Bootstrap@3.2.0](https://snyk.io/vuln/npm:bootstrap?lh=3.2.0&utm_source=lighthouse&utm_medium=ref&utm_campaign=audit)</td>

<td class="lh-table-column--text">

<div class="lh-text">5</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">Medium</div>

</td>

</tr>

<tr>

<td class="lh-table-column--link">[jQuery@1.11.3](https://snyk.io/vuln/npm:jquery?lh=1.11.3&utm_source=lighthouse&utm_medium=ref&utm_campaign=audit)</td>

<td class="lh-table-column--text">

<div class="lh-text">4</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">Medium</div>

</td>

</tr>

</tbody>

</table>

</details></div>

</div>

<div class="lh-audit-group lh-audit-group--best-practices-general">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">General</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="valid-source-maps"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Missing source maps for large first-party JavaScript</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--17"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--17" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--url">

<div class="lh-text">URL</div>

</th>

<th class="lh-table-column--url">

<div class="lh-text">Map URL</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0" data-url="https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0">[…js/init.js?ver=12.1.0](https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--empty"></td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.min.js" data-url="https://reinnovame.com/wp-content/themes/jquery.min.js">[…themes/jquery.min.js](https://reinnovame.com/wp-content/themes/jquery.min.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/themes/jquery.min.map" data-url="https://reinnovame.com/wp-content/themes/jquery.min.map">[…themes/jquery.min.map](https://reinnovame.com/wp-content/themes/jquery.min.map)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

</tr>

<tr>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js">[…modx0ugk/bgdqo.js](https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--url">

<div class="lh-text__url" title="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bookly.min.js.map;" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bookly.min.js.map;">[…modx0ugk/bookly.min.js.map;](https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bookly.min.js.map;)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

</tr>

</tbody>

</table>

</details></div>

</div>

</div>

<details class="lh-clump lh-audit-group lh-clump--passed"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Passed audits</span> <span class="lh-audit-group__itemcount">(14)</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="is-on-https"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Uses HTTPS</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content?utm_source=lighthouse&utm_medium=lr), where some resources are loaded over HTTP despite the initial request being servedover HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://web.dev/is-on-https/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="external-anchors-use-rel-noopener"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Links to cross-origin destinations are safe</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Add `rel="noopener"` or `rel="noreferrer"` to any external links to improve performance and prevent security vulnerabilities. [Learn more](https://web.dev/external-anchors-use-rel-noopener/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="geolocation-on-start"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoids requesting the geolocation permission on page load</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more](https://web.dev/geolocation-on-start/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="notification-on-start"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoids requesting the notification permission on page load</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://web.dev/notification-on-start/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="password-inputs-can-be-pasted-into"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Allows users to paste into password fields</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Preventing password pasting undermines good security policy. [Learn more](https://web.dev/password-inputs-can-be-pasted-into/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="image-aspect-ratio"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Displays images with correct aspect ratio</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Image display dimensions should match natural aspect ratio. [Learn more](https://web.dev/image-aspect-ratio/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="image-size-responsive"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Serves images with appropriate resolution</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn more](https://web.dev/serve-responsive-images/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="doctype"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Page has the HTML doctype</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more](https://web.dev/doctype/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="charset"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Properly defines charset</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>A character encoding declaration is required. It can be done with a <meta> tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more](https://web.dev/charset/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="no-unload-listeners"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoids `unload` event listeners</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Consider using the `pagehide` or `visibilitychange` events instead. [Learn More](https://developers.google.com/web/updates/2018/07/page-lifecycle-api?utm_source=lighthouse&utm_medium=lr#the-unload-event)</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="appcache-manifest"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoids Application Cache</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Application Cache is deprecated. [Learn more](https://web.dev/appcache-manifest/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="js-libraries"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Detected JavaScript libraries</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>All front-end JavaScript libraries detected on the page. [Learn more](https://web.dev/js-libraries/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--text">

<div class="lh-text">Name</div>

</th>

<th class="lh-table-column--text">

<div class="lh-text">Version</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Bootstrap</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">3.2.0</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">jQuery</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">1.11.3</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Underscore</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">1.8.3</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">Hammer.js</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">2.0.6</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">WordPress</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">5.5.3</div>

</td>

</tr>

<tr>

<td class="lh-table-column--text">

<div class="lh-text">core-js</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">2.6.11: global</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="deprecations"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Avoids deprecated APIs</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Deprecated APIs will eventually be removed from the browser. [Learn more](https://web.dev/deprecations/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="errors-in-console"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>No browser errors logged to the console</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more](https://web.dev/errors-in-console/?utm_source=lighthouse&utm_medium=lr)</span></div>

<span class="lh-details"></span></details></div>

</details><details class="lh-clump lh-audit-group lh-clump--notapplicable"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Not applicable</span> <span class="lh-audit-group__itemcount">(1)</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--notapplicable lh-audit--pass" id="preload-fonts"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Fonts with `font-display: optional` are preloaded</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Preload `optional` fonts so first-time visitors may use them. [Learn More](https://web.dev/preload-optional-fonts/?utm_source=lighthouse&utm_medium=lr)</span></div>

<span class="lh-details"></span></details></div>

</details></div>

</div>

<div class="lh-category-wrapper">

<div class="lh-category"><span class="lh-permalink" id="seo"></span>

<div class="lh-category-header">

<div class="lh-score__gauge" role="heading" aria-level="2">[

<div class="lh-gauge__percentage">59</div>

<div class="lh-gauge__label">SEO</div>

](#seo)</div>

<div class="lh-category-header__description"><span>These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).</span></div>

</div>

<div class="lh-clump--failed">

<div class="lh-audit-group lh-audit-group--seo-content">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Content Best Practices</span><span class="lh-audit-group__description">Format your HTML in a way that enables crawlers to better understand your app’s content.</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="meta-description"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Document does not have a meta description</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://web.dev/meta-description/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="image-alt"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Image elements do not have `[alt]` attributes</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://web.dev/image-alt/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Failing Elements</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title=".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a > img" data-path="1,HTML,1,BODY,5,DIV,0,DIV,0,DIV,0,DIV,0,UL,6,LI,0,A,0,IMG" data-selector=".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a > img" data-snippet="<img src=&quot;https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg&quot;>">

<div>img</div>

<div class="lh-node__snippet"><img src="https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg"></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

</div>

<div class="lh-audit-group lh-audit-group--seo-crawl">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Crawling and Indexing</span><span class="lh-audit-group__description">To appear in search results, crawlers need access to your app.</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="crawlable-anchors"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Links are not crawlable</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn More](https://support.google.com/webmasters/answer/9112205)</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Uncrawlable Link</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="body.home > div.icon-bar > a.linkedin" data-path="1,HTML,1,BODY,2,DIV,0,A" data-selector="body.home > div.icon-bar > a.linkedin" data-snippet="<a href=&quot;&quot; class=&quot;linkedin&quot;>">

<div>a</div>

<div class="lh-node__snippet"><a href="" class="linkedin"></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="body.home > div.icon-bar > a.facebook" data-path="1,HTML,1,BODY,2,DIV,1,A" data-selector="body.home > div.icon-bar > a.facebook" data-snippet="<a href=&quot;&quot; class=&quot;facebook&quot;>">

<div>a</div>

<div class="lh-node__snippet"><a href="" class="facebook"></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="body.home > div.icon-bar > a.instagram" data-path="1,HTML,1,BODY,2,DIV,2,A" data-selector="body.home > div.icon-bar > a.instagram" data-snippet="<a href=&quot;&quot; class=&quot;instagram&quot;>">

<div>a</div>

<div class="lh-node__snippet"><a href="" class="instagram"></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="body.home > div.icon-bar > a.youtube" data-path="1,HTML,1,BODY,2,DIV,3,A" data-selector="body.home > div.icon-bar > a.youtube" data-snippet="<a href=&quot;&quot; class=&quot;youtube&quot;>">

<div>a</div>

<div class="lh-node__snippet"><a href="" class="youtube"></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="is-crawlable"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Page is blocked from indexing</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more](https://web.dev/is-crawable/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--code">

<div class="lh-text">Blocking Directive Source</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--code"><span class="lh-node" data-snippet="<meta name=&quot;robots&quot; content=&quot;noindex,nofollow&quot; />">

<div class="lh-node__snippet"><meta name="robots" content="noindex,nofollow" /></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

</div>

<div class="lh-audit-group lh-audit-group--seo-mobile">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Mobile Friendly</span><span class="lh-audit-group__description">Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="font-size"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Document doesn't use legible font sizes</span></span> <span class="lh-audit__display-text">34.56% legible text</span></span></div>

</summary>

<div class="lh-audit__description"><span>Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://web.dev/font-size/?utm_source=lighthouse&utm_medium=lr).</span></div>

<div class="lh-3p-filter"><label class="lh-3p-filter-label" for="lh-3p-filter-label--18"><input type="checkbox" class="lh-3p-filter-input" checked="" id="lh-3p-filter-label--18" disabled=""> <span class="lh-3p-ui-string">Show 3rd-party resources</span> (<span class="lh-3p-filter-count">0</span>)</label> </div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--source-location">

<div class="lh-text">Source</div>

</th>

<th class="lh-table-column--code">

<div class="lh-text">Selector</div>

</th>

<th class="lh-table-column--text">

<div class="lh-text">% of Page Text</div>

</th>

<th class="lh-table-column--text">

<div class="lh-text">Font Size</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--source-location">

<div class="lh-text__url lh-source-location" title="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-source-url="https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css" data-source-line="6964" data-source-column="26">[…m7w4lq3q/bgdqa.css:6965:26](https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css)

<div class="lh-text lh-text__url-host">(reinnovame.com)</div>

</div>

</td>

<td class="lh-table-column--code">

<pre class="lh-code">html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video</pre>

</td>

<td class="lh-table-column--text">

<div class="lh-text">53.87%</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">10.5px</div>

</td>

</tr>

<tr>

<td class="lh-table-column--source-location">

<pre class="lh-code">Add'l illegible text</pre>

</td>

<td class="lh-table-column--empty"></td>

<td class="lh-table-column--text">

<div class="lh-text">11.56%</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">< 12px</div>

</td>

</tr>

<tr>

<td class="lh-table-column--source-location">

<pre class="lh-code">Legible text</pre>

</td>

<td class="lh-table-column--empty"></td>

<td class="lh-table-column--text">

<div class="lh-text">34.56%</div>

</td>

<td class="lh-table-column--text">

<div class="lh-text">≥ 12px</div>

</td>

</tr>

</tbody>

</table>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--fail" id="tap-targets"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Tap targets are not sized appropriately</span></span> <span class="lh-audit__display-text">29% appropriately sized tap targets</span></span></div>

</summary>

<div class="lh-audit__description"><span>Interactive elements like buttons and links should be large enough (48x48px), and have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more](https://web.dev/tap-targets/?utm_source=lighthouse&utm_medium=lr).</span></div>

<table class="lh-table lh-details">

<thead>

<tr>

<th class="lh-table-column--node">

<div class="lh-text">Tap Target</div>

</th>

<th class="lh-table-column--text">

<div class="lh-text">Size</div>

</th>

<th class="lh-table-column--node">

<div class="lh-text">Overlapping Target</div>

</th>

</tr>

</thead>

<tbody>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/faq/&quot;>FAQ</a>">

<div>FAQ</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/faq/">FAQ</a></div>

</span></td>

<td class="lh-table-column--text">

<div class="lh-text">24x17</div>

</td>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,2,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/contatti/&quot;>CONTATTI</a>">

<div>CONTATTI</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/contatti/">CONTATTI</a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/faq/&quot;>FAQ</a>">

<div>FAQ</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/faq/">FAQ</a></div>

</span></td>

<td class="lh-table-column--text">

<div class="lh-text">24x17</div>

</td>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,6,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/privacy-policy/&quot;>PRIVACY POLICY</a>">

<div>PRIVACY POLICY</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/privacy-policy/">PRIVACY POLICY</a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,2,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/&quot;>HOME</a>">

<div>HOME</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/">HOME</a></div>

</span></td>

<td class="lh-table-column--text">

<div class="lh-text">36x17</div>

</td>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/come-funziona/&quot;>COME FUNZIONA</a>">

<div>COME FUNZIONA</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/come-funziona/">COME FUNZIONA</a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/come-funziona/&quot;>COME FUNZIONA</a>">

<div>COME FUNZIONA</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/come-funziona/">COME FUNZIONA</a></div>

</span></td>

<td class="lh-table-column--text">

<div class="lh-text">101x17</div>

</td>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,6,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/journal/&quot;>JOURNAL</a>">

<div>JOURNAL</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/journal/">JOURNAL</a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,6,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/privacy-policy/&quot;>PRIVACY POLICY</a>">

<div>PRIVACY POLICY</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/privacy-policy/">PRIVACY POLICY</a></div>

</span></td>

<td class="lh-table-column--text">

<div class="lh-text">94x17</div>

</td>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,8,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/cookie-policy/&quot;>COOKIE POLICY</a>">

<div>COOKIE POLICY</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/cookie-policy/">COOKIE POLICY</a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,8,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/cookie-policy/&quot;>COOKIE POLICY</a>">

<div>COOKIE POLICY</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/cookie-policy/">COOKIE POLICY</a></div>

</span></td>

<td class="lh-table-column--text">

<div class="lh-text">91x17</div>

</td>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,10,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/termini-e condizioni/&quot;>TERMINI E CONDIZIONI</a>">

<div>TERMINI E CONDIZIONI</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/termini-e condizioni/">TERMINI E CONDIZIONI</a></div>

</span></td>

</tr>

<tr>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,2,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/the-good-consultant/&quot;>THE GOOD CONSULTANT</a>">

<div>THE GOOD CONSULTANT</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/the-good-consultant/">THE GOOD CONSULTANT</a></div>

</span></td>

<td class="lh-table-column--text">

<div class="lh-text">147x17</div>

</td>

<td class="lh-table-column--node"><span class="lh-node" title="div.wpb_text_column > div.wpb_wrapper > p > a" data-path="1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A" data-selector="div.wpb_text_column > div.wpb_wrapper > p > a" data-snippet="<a href=&quot;https://reinnovame.com/careers/&quot;>CAREERS</a>">

<div>CAREERS</div>

<div class="lh-node__snippet"><a href="https://reinnovame.com/careers/">CAREERS</a></div>

</span></td>

</tr>

</tbody>

</table>

</details></div>

</div>

</div>

<details class="lh-clump lh-audit-group lh-clump--manual"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Additional items to manually check</span> <span class="lh-audit-group__itemcount">(1)</span> <span class="lh-audit-group__description">Run these additional validators on your site to check additional SEO best practices.</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--manual lh-audit--pass" id="structured-data"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Structured data is valid</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more](https://web.dev/structured-data/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

</details><details class="lh-clump lh-audit-group lh-clump--passed"><summary>

<div class="lh-audit-group__summary">

<div class="lh-audit-group__header"><span class="lh-audit-group__title">Passed audits</span> <span class="lh-audit-group__itemcount">(8)</span></div>

</div>

</summary>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="viewport"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Has a `<meta name="viewport">` tag with `width` or `initial-scale`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Add a `<meta name="viewport">` tag to optimize your app for mobile screens. [Learn more](https://web.dev/viewport/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="document-title"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Document has a `<title>` element</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="http-status-code"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Page has successful HTTP status code</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more](https://web.dev/http-status-code/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="link-text"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Links have descriptive text</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Descriptive link text helps search engines understand your content. [Learn more](https://web.dev/link-text/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="robots-txt"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>robots.txt is valid</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more](https://web.dev/robots-txt/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="hreflang"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Document has a valid `hreflang`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more](https://web.dev/hreflang/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="canonical"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Document has a valid `rel=canonical`</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Canonical links suggest which URL to show in search results. [Learn more](https://web.dev/canonical/?utm_source=lighthouse&utm_medium=lr).</span></div>

</details></div>

<div class="lh-audit lh-audit--binary lh-audit--pass" id="plugins"><details class="lh-expandable-details"><summary>

<div class="lh-audit__header lh-expandable-details__summary"><span class="lh-audit__score-icon"></span><span class="lh-audit__title-and-text"><span class="lh-audit__title"><span>Document avoids plugins</span></span><span class="lh-audit__display-text"></span></span></div>

</summary>

<div class="lh-audit__description"><span>Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more](https://web.dev/plugins/?utm_source=lighthouse&utm_medium=lr).</span></div>

<span class="lh-details"></span></details></div>

</details></div>

</div>

</div>

<style>.lh-footer { padding: var(--footer-padding-vertical) calc(var(--default-padding) * 2); max-width: var(--report-width); margin: 0 auto; } .lh-footer .lh-generated { text-align: center; } .lh-env__title { font-size: var(--env-item-font-size-big); line-height: var(--env-item-line-height-big); text-align: center; padding: var(--score-container-padding); } .lh-env { padding: var(--default-padding) 0; } .lh-env__items { padding-left: 16px; margin: 0 0 var(--audits-margin-bottom); padding: 0; } .lh-env__items .lh-env__item:nth-child(2n) { background-color: var(--env-item-background-color); } .lh-env__item { display: flex; padding: var(--env-item-padding); position: relative; } span.lh-env__name { font-weight: bold; min-width: var(--env-name-min-width); flex: 0.5; padding: 0 8px; } span.lh-env__description { text-align: left; flex: 1; }</style>

<footer class="lh-footer">

<div class="lh-env">

<div class="lh-env__title">Runtime Settings</div>

 <template id="tmpl-lh-env__items"></template>
*   <span class="lh-env__name">URL</span> <span class="lh-env__description">https://reinnovame.com/</span>
*   <span class="lh-env__name">Fetch Time</span> <span class="lh-env__description">Dec 20, 2020, 8:58 PM GMT+1</span>
*   <span class="lh-env__name">Device</span> <span class="lh-env__description">Emulated Moto G4</span>
*   <span class="lh-env__name">Network throttling</span> <span class="lh-env__description">Unknown</span>
*   <span class="lh-env__name">CPU throttling</span> <span class="lh-env__description">Unknown</span>
*   <span class="lh-env__name">Channel</span> <span class="lh-env__description">lr</span>
*   <span class="lh-env__name">User agent (host)</span> <span class="lh-env__description">Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/85.0.4183.140 Safari/537.36</span>
*   <span class="lh-env__name">User agent (network)</span> <span class="lh-env__description">Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Mobile Safari/537.36 Chrome-Lighthouse</span>
*   <span class="lh-env__name">CPU/Memory Power</span> <span class="lh-env__description">1075</span>

</div>

<div class="lh-generated">Generated by **Lighthouse** <span class="lh-footer__version">6.3.0</span> | [File an issue](https://github.com/GoogleChrome/Lighthouse/issues)</div>

</footer>

</div>

</div>

</main>

<script>/** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /* globals self, URL */ /** @typedef {import('./i18n')} I18n */ const ELLIPSIS = '\u2026'; const NBSP = '\xa0'; const PASS_THRESHOLD = 0.9; const SCREENSHOT_PREFIX = 'data:image/jpeg;base64,'; const RATINGS = { PASS: {label: 'pass', minScore: PASS_THRESHOLD}, AVERAGE: {label: 'average', minScore: 0.5}, FAIL: {label: 'fail'}, ERROR: {label: 'error'}, }; // 25 most used tld plus one domains (aka public suffixes) from http archive. // @see https://github.com/GoogleChrome/lighthouse/pull/5065#discussion_r191926212 // The canonical list is https://publicsuffix.org/learn/ but we're only using subset to conserve bytes const listOfTlds = [ 'com', 'co', 'gov', 'edu', 'ac', 'org', 'go', 'gob', 'or', 'net', 'in', 'ne', 'nic', 'gouv', 'web', 'spb', 'blog', 'jus', 'kiev', 'mil', 'wi', 'qc', 'ca', 'bel', 'on', ]; class Util { static get PASS_THRESHOLD() { return PASS_THRESHOLD; } static get MS_DISPLAY_VALUE() { return `%10d${NBSP}ms`; } /** * Returns a new LHR that's reshaped for slightly better ergonomics within the report rendereer. * Also, sets up the localized UI strings used within renderer and makes changes to old LHRs to be * compatible with current renderer. * The LHR passed in is not mutated. * TODO(team): we all agree the LHR shape change is technical debt we should fix * @param {LH.Result} result * @return {LH.ReportResult} */ static prepareReportResult(result) { // If any mutations happen to the report within the renderers, we want the original object untouched const clone = /** @type {LH.ReportResult} */ (JSON.parse(JSON.stringify(result))); // If LHR is older (≤3.0.3), it has no locale setting. Set default. if (!clone.configSettings.locale) { clone.configSettings.locale = 'en'; } for (const audit of Object.values(clone.audits)) { // Turn 'not-applicable' (LHR <4.0) and 'not_applicable' (older proto versions) // into 'notApplicable' (LHR ≥4.0). // @ts-ignore tsc rightly flags that these values shouldn't occur. // eslint-disable-next-line max-len if (audit.scoreDisplayMode === 'not_applicable' || audit.scoreDisplayMode === 'not-applicable') { audit.scoreDisplayMode = 'notApplicable'; } if (audit.details) { // Turn `auditDetails.type` of undefined (LHR <4.2) and 'diagnostic' (LHR <5.0) // into 'debugdata' (LHR ≥5.0). // @ts-ignore tsc rightly flags that these values shouldn't occur. if (audit.details.type === undefined || audit.details.type === 'diagnostic') { audit.details.type = 'debugdata'; } // Add the jpg data URL prefix to filmstrip screenshots without them (LHR <5.0). if (audit.details.type === 'filmstrip') { for (const screenshot of audit.details.items) { if (!screenshot.data.startsWith(SCREENSHOT_PREFIX)) { screenshot.data = SCREENSHOT_PREFIX + screenshot.data; } } } } } // For convenience, smoosh all AuditResults into their auditRef (which has just weight & group) if (typeof clone.categories !== 'object') throw new Error('No categories provided.'); for (const category of Object.values(clone.categories)) { category.auditRefs.forEach(auditRef => { const result = clone.audits[auditRef.id]; auditRef.result = result; // attach the stackpacks to the auditRef object if (clone.stackPacks) { clone.stackPacks.forEach(pack => { if (pack.descriptions[auditRef.id]) { auditRef.stackPacks = auditRef.stackPacks || []; auditRef.stackPacks.push({ title: pack.title, iconDataURL: pack.iconDataURL, description: pack.descriptions[auditRef.id], }); } }); } }); } return clone; } /** * Used to determine if the "passed" for the purposes of showing up in the "failed" or "passed" * sections of the report. * * @param {{score: (number|null), scoreDisplayMode: string}} audit * @return {boolean} */ static showAsPassed(audit) { switch (audit.scoreDisplayMode) { case 'manual': case 'notApplicable': return true; case 'error': case 'informative': return false; case 'numeric': case 'binary': default: return Number(audit.score) >= RATINGS.PASS.minScore; } } /** * Convert a score to a rating label. * @param {number|null} score * @param {string=} scoreDisplayMode * @return {string} */ static calculateRating(score, scoreDisplayMode) { // Handle edge cases first, manual and not applicable receive 'pass', errored audits receive 'error' if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') { return RATINGS.PASS.label; } else if (scoreDisplayMode === 'error') { return RATINGS.ERROR.label; } else if (score === null) { return RATINGS.FAIL.label; } // At this point, we're rating a standard binary/numeric audit let rating = RATINGS.FAIL.label; if (score >= RATINGS.PASS.minScore) { rating = RATINGS.PASS.label; } else if (score >= RATINGS.AVERAGE.minScore) { rating = RATINGS.AVERAGE.label; } return rating; } /** * Split a string by markdown code spans (enclosed in `backticks`), splitting * into segments that were enclosed in backticks (marked as `isCode === true`) * and those that outside the backticks (`isCode === false`). * @param {string} text * @return {Array<{isCode: true, text: string}|{isCode: false, text: string}>} */ static splitMarkdownCodeSpans(text) { /** @type {Array<{isCode: true, text: string}|{isCode: false, text: string}>} */ const segments = []; // Split on backticked code spans. const parts = text.split(/`(.*?)`/g); for (let i = 0; i < parts.length; i ++) { const text = parts[i]; // Empty strings are an artifact of splitting, not meaningful. if (!text) continue; // Alternates between plain text and code segments. const isCode = i % 2 !== 0; segments.push({ isCode, text, }); } return segments; } /** * Split a string on markdown links (e.g. [some link](https://...)) into * segments of plain text that weren't part of a link (marked as * `isLink === false`), and segments with text content and a URL that did make * up a link (marked as `isLink === true`). * @param {string} text * @return {Array<{isLink: true, text: string, linkHref: string}|{isLink: false, text: string}>} */ static splitMarkdownLink(text) { /** @type {Array<{isLink: true, text: string, linkHref: string}|{isLink: false, text: string}>} */ const segments = []; const parts = text.split(/\[([^\]]+?)\]\((https?:\/\/.*?)\)/g); while (parts.length) { // Shift off the same number of elements as the pre-split and capture groups. const [preambleText, linkText, linkHref] = parts.splice(0, 3); if (preambleText) { // Skip empty text as it's an artifact of splitting, not meaningful. segments.push({ isLink: false, text: preambleText, }); } // Append link if there are any. if (linkText && linkHref) { segments.push({ isLink: true, text: linkText, linkHref, }); } } return segments; } /** * @param {URL} parsedUrl * @param {{numPathParts?: number, preserveQuery?: boolean, preserveHost?: boolean}=} options * @return {string} */ static getURLDisplayName(parsedUrl, options) { // Closure optional properties aren't optional in tsc, so fallback needs undefined values. options = options || {numPathParts: undefined, preserveQuery: undefined, preserveHost: undefined}; const numPathParts = options.numPathParts !== undefined ? options.numPathParts : 2; const preserveQuery = options.preserveQuery !== undefined ? options.preserveQuery : true; const preserveHost = options.preserveHost || false; let name; if (parsedUrl.protocol === 'about:' || parsedUrl.protocol === 'data:') { // Handle 'about:*' and 'data:*' URLs specially since they have no path. name = parsedUrl.href; } else { name = parsedUrl.pathname; const parts = name.split('/').filter(part => part.length); if (numPathParts && parts.length > numPathParts) { name = ELLIPSIS + parts.slice(-1 * numPathParts).join('/'); } if (preserveHost) { name = `${parsedUrl.host}/${name.replace(/^\//, '')}`; } if (preserveQuery) { name = `${name}${parsedUrl.search}`; } } const MAX_LENGTH = 64; // Always elide hexadecimal hash name = name.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g, `$1${ELLIPSIS}`); // Also elide other hash-like mixed-case strings name = name.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g, `$1${ELLIPSIS}`); // Also elide long number sequences name = name.replace(/(\d{3})\d{6,}/g, `$1${ELLIPSIS}`); // Merge any adjacent ellipses name = name.replace(/\u2026+/g, ELLIPSIS); // Elide query params first if (name.length > MAX_LENGTH && name.includes('?')) { // Try to leave the first query parameter intact name = name.replace(/\?([^=]*)(=)?.*/, `?$1$2${ELLIPSIS}`); // Remove it all if it's still too long if (name.length > MAX_LENGTH) { name = name.replace(/\?.*/, `?${ELLIPSIS}`); } } // Elide too long names next if (name.length > MAX_LENGTH) { const dotIndex = name.lastIndexOf('.'); if (dotIndex >= 0) { name = name.slice(0, MAX_LENGTH - 1 - (name.length - dotIndex)) + // Show file extension `${ELLIPSIS}${name.slice(dotIndex)}`; } else { name = name.slice(0, MAX_LENGTH - 1) + ELLIPSIS; } } return name; } /** * Split a URL into a file, hostname and origin for easy display. * @param {string} url * @return {{file: string, hostname: string, origin: string}} */ static parseURL(url) { const parsedUrl = new URL(url); return { file: Util.getURLDisplayName(parsedUrl), hostname: parsedUrl.hostname, origin: parsedUrl.origin, }; } /** * @param {string|URL} value * @return {!URL} */ static createOrReturnURL(value) { if (value instanceof URL) { return value; } return new URL(value); } /** * Gets the tld of a domain * * @param {string} hostname * @return {string} tld */ static getTld(hostname) { const tlds = hostname.split('.').slice(-2); if (!listOfTlds.includes(tlds[0])) { return `.${tlds[tlds.length - 1]}`; } return `.${tlds.join('.')}`; } /** * Returns a primary domain for provided hostname (e.g. www.example.com -> example.com). * @param {string|URL} url hostname or URL object * @returns {string} */ static getRootDomain(url) { const hostname = Util.createOrReturnURL(url).hostname; const tld = Util.getTld(hostname); // tld is .com or .co.uk which means we means that length is 1 to big // .com => 2 & .co.uk => 3 const splitTld = tld.split('.'); // get TLD + root domain return hostname.split('.').slice(-splitTld.length).join('.'); } /** * @param {LH.Config.Settings} settings * @return {!Array<{name: string, description: string}>} */ static getEnvironmentDisplayValues(settings) { const emulationDesc = Util.getEmulationDescriptions(settings); return [ { name: Util.i18n.strings.runtimeSettingsDevice, description: emulationDesc.deviceEmulation, }, { name: Util.i18n.strings.runtimeSettingsNetworkThrottling, description: emulationDesc.networkThrottling, }, { name: Util.i18n.strings.runtimeSettingsCPUThrottling, description: emulationDesc.cpuThrottling, }, ]; } /** * @param {LH.Config.Settings} settings * @return {{deviceEmulation: string, networkThrottling: string, cpuThrottling: string}} */ static getEmulationDescriptions(settings) { let cpuThrottling; let networkThrottling; const throttling = settings.throttling; switch (settings.throttlingMethod) { case 'provided': cpuThrottling = Util.i18n.strings.throttlingProvided; networkThrottling = Util.i18n.strings.throttlingProvided; break; case 'devtools': { const {cpuSlowdownMultiplier, requestLatencyMs} = throttling; cpuThrottling = `${Util.i18n.formatNumber(cpuSlowdownMultiplier)}x slowdown (DevTools)`; networkThrottling = `${Util.i18n.formatNumber(requestLatencyMs)}${NBSP}ms HTTP RTT, ` + `${Util.i18n.formatNumber(throttling.downloadThroughputKbps)}${NBSP}Kbps down, ` + `${Util.i18n.formatNumber(throttling.uploadThroughputKbps)}${NBSP}Kbps up (DevTools)`; break; } case 'simulate': { const {cpuSlowdownMultiplier, rttMs, throughputKbps} = throttling; cpuThrottling = `${Util.i18n.formatNumber(cpuSlowdownMultiplier)}x slowdown (Simulated)`; networkThrottling = `${Util.i18n.formatNumber(rttMs)}${NBSP}ms TCP RTT, ` + `${Util.i18n.formatNumber(throughputKbps)}${NBSP}Kbps throughput (Simulated)`; break; } default: cpuThrottling = Util.i18n.strings.runtimeUnknown; networkThrottling = Util.i18n.strings.runtimeUnknown; } let deviceEmulation = Util.i18n.strings.runtimeNoEmulation; if (settings.emulatedFormFactor === 'mobile') { deviceEmulation = Util.i18n.strings.runtimeMobileEmulation; } else if (settings.emulatedFormFactor === 'desktop') { deviceEmulation = Util.i18n.strings.runtimeDesktopEmulation; } return { deviceEmulation, cpuThrottling, networkThrottling, }; } /** * Returns only lines that are near a message, or the first few lines if there are * no line messages. * @param {LH.Audit.Details.SnippetValue['lines']} lines * @param {LH.Audit.Details.SnippetValue['lineMessages']} lineMessages * @param {number} surroundingLineCount Number of lines to include before and after * the message. If this is e.g. 2 this function might return 5 lines. */ static filterRelevantLines(lines, lineMessages, surroundingLineCount) { if (lineMessages.length === 0) { // no lines with messages, just return the first bunch of lines return lines.slice(0, surroundingLineCount * 2 + 1); } const minGapSize = 3; const lineNumbersToKeep = new Set(); // Sort messages so we can check lineNumbersToKeep to see how big the gap to // the previous line is. lineMessages = lineMessages.sort((a, b) => (a.lineNumber || 0) - (b.lineNumber || 0)); lineMessages.forEach(({lineNumber}) => { let firstSurroundingLineNumber = lineNumber - surroundingLineCount; let lastSurroundingLineNumber = lineNumber + surroundingLineCount; while (firstSurroundingLineNumber < 1) { // make sure we still show (surroundingLineCount * 2 + 1) lines in total firstSurroundingLineNumber++; lastSurroundingLineNumber++; } // If only a few lines would be omitted normally then we prefer to include // extra lines to avoid the tiny gap if (lineNumbersToKeep.has(firstSurroundingLineNumber - minGapSize - 1)) { firstSurroundingLineNumber -= minGapSize; } for (let i = firstSurroundingLineNumber; i <= lastSurroundingLineNumber; i++) { const surroundingLineNumber = i; lineNumbersToKeep.add(surroundingLineNumber); } }); return lines.filter(line => lineNumbersToKeep.has(line.lineNumber)); } /** * @param {string} categoryId */ static isPluginCategory(categoryId) { return categoryId.startsWith('lighthouse-plugin-'); } } /** * Some parts of the report renderer require data found on the LHR. Instead of wiring it * through, we have this global. * @type {LH.ReportResult | null} */ Util.reportJson = null; /** @type {I18n} */ // @ts-ignore: Is set in report renderer. Util.i18n = null; /** * Report-renderer-specific strings. */ Util.UIStrings = { /** Disclaimer shown to users below the metric values (First Contentful Paint, Time to Interactive, etc) to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. */ varianceDisclaimer: 'Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.', /** Text link pointing to an interactive calculator that explains Lighthouse scoring. The link text should be fairly short. */ calculatorLink: 'See calculator.', /** Column heading label for the listing of opportunity audits. Each audit title represents an opportunity. There are only 2 columns, so no strict character limit. */ opportunityResourceColumnLabel: 'Opportunity', /** Column heading label for the estimated page load savings of opportunity audits. Estimated Savings is the total amount of time (in seconds) that Lighthouse computed could be reduced from the total page load time, if the suggested action is taken. There are only 2 columns, so no strict character limit. */ opportunitySavingsColumnLabel: 'Estimated Savings', /** An error string displayed next to a particular audit when it has errored, but not provided any specific error message. */ errorMissingAuditInfo: 'Report error: no audit information', /** A label, shown next to an audit title or metric title, indicating that there was an error computing it. The user can hover on the label to reveal a tooltip with the extended error message. Translation should be short (< 20 characters). */ errorLabel: 'Error!', /** This label is shown above a bulleted list of warnings. It is shown directly below an audit that produced warnings. Warnings describe situations the user should be aware of, as Lighthouse was unable to complete all the work required on this audit. For example, The 'Unable to decode image (biglogo.jpg)' warning may show up below an image encoding audit. */ warningHeader: 'Warnings: ', /** The tooltip text on an expandable chevron icon. Clicking the icon expands a section to reveal a list of audit results that was hidden by default. */ auditGroupExpandTooltip: 'Show audits', /** Section heading shown above a list of passed audits that contain warnings. Audits under this section do not negatively impact the score, but Lighthouse has generated some potentially actionable suggestions that should be reviewed. This section is expanded by default and displays after the failing audits. */ warningAuditsGroupTitle: 'Passed audits but with warnings', /** Section heading shown above a list of audits that are passing. 'Passed' here refers to a passing grade. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */ passedAuditsGroupTitle: 'Passed audits', /** Section heading shown above a list of audits that do not apply to the page. For example, if an audit is 'Are images optimized?', but the page has no images on it, the audit will be marked as not applicable. This is neither passing or failing. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */ notApplicableAuditsGroupTitle: 'Not applicable', /** Section heading shown above a list of audits that were not computed by Lighthouse. They serve as a list of suggestions for the user to go and manually check. For example, Lighthouse can't automate testing cross-browser compatibility, so that is listed within this section, so the user is reminded to test it themselves. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */ manualAuditsGroupTitle: 'Additional items to manually check', /** Label shown preceding any important warnings that may have invalidated the entire report. For example, if the user has Chrome extensions installed, they may add enough performance overhead that Lighthouse's performance metrics are unreliable. If shown, this will be displayed at the top of the report UI. */ toplevelWarningsMessage: 'There were issues affecting this run of Lighthouse:', /** String of text shown in a graphical representation of the flow of network requests for the web page. This label represents the initial network request that fetches an HTML page. This navigation may be redirected (eg. Initial navigation to http://example.com redirects to https://www.example.com). */ crcInitialNavigation: 'Initial Navigation', /** Label of value shown in the summary of critical request chains. Refers to the total amount of time (milliseconds) of the longest critical path chain/sequence of network requests. Example value: 2310 ms */ crcLongestDurationLabel: 'Maximum critical path latency:', /** Label for button that shows all lines of the snippet when clicked */ snippetExpandButtonLabel: 'Expand snippet', /** Label for button that only shows a few lines of the snippet when clicked */ snippetCollapseButtonLabel: 'Collapse snippet', /** Explanation shown to users below performance results to inform them that the test was done with a 4G network connection and to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. 'Lighthouse' becomes link text to additional documentation. */ lsPerformanceCategoryDescription: '[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.', /** Title of the lab data section of the Performance category. Within this section are various speed metrics which quantify the pageload performance into values presented in seconds and milliseconds. "Lab" is an abbreviated form of "laboratory", and refers to the fact that the data is from a controlled test of a website, not measurements from real users visiting that site. */ labDataTitle: 'Lab Data', /** This label is for a checkbox above a table of items loaded by a web page. The checkbox is used to show or hide third-party (or "3rd-party") resources in the table, where "third-party resources" refers to items loaded by a web page from URLs that aren't controlled by the owner of the web page. */ thirdPartyResourcesLabel: 'Show 3rd-party resources', /** Option in a dropdown menu that opens a small, summary report in a print dialog. */ dropdownPrintSummary: 'Print Summary', /** Option in a dropdown menu that opens a full Lighthouse report in a print dialog. */ dropdownPrintExpanded: 'Print Expanded', /** Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard. */ dropdownCopyJSON: 'Copy JSON', /** Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a '.html' file. */ dropdownSaveHTML: 'Save as HTML', /** Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a '.json' file. */ dropdownSaveJSON: 'Save as JSON', /** Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application. */ dropdownViewer: 'Open in Viewer', /** Option in a dropdown menu that saves the current report as a new Github Gist. */ dropdownSaveGist: 'Save as Gist', /** Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes. */ dropdownDarkTheme: 'Toggle Dark Theme', /** Title of the Runtime settings table in a Lighthouse report. Runtime settings are the environment configurations that a specific report used at auditing time. */ runtimeSettingsTitle: 'Runtime Settings', /** Label for a row in a table that shows the URL that was audited during a Lighthouse run. */ runtimeSettingsUrl: 'URL', /** Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC. */ runtimeSettingsFetchTime: 'Fetch Time', /** Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run. Example values for row elements: 'No Emulation', 'Emulated Desktop', etc. */ runtimeSettingsDevice: 'Device', /** Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any. */ runtimeSettingsNetworkThrottling: 'Network throttling', /** Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any.*/ runtimeSettingsCPUThrottling: 'CPU throttling', /** Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc). */ runtimeSettingsChannel: 'Channel', /** Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse. */ runtimeSettingsUA: 'User agent (host)', /** Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run. */ runtimeSettingsUANetwork: 'User agent (network)', /** Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783\. */ runtimeSettingsBenchmark: 'CPU/Memory Power', /** Label for button to create an issue against the Lighthouse Github project. */ footerIssue: 'File an issue', /** Descriptive explanation for emulation setting when no device emulation is set. */ runtimeNoEmulation: 'No emulation', /** Descriptive explanation for emulation setting when emulating a Moto G4 mobile device. */ runtimeMobileEmulation: 'Emulated Moto G4', /** Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor. */ runtimeDesktopEmulation: 'Emulated Desktop', /** Descriptive explanation for a runtime setting that is set to an unknown value. */ runtimeUnknown: 'Unknown', /** Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling. */ throttlingProvided: 'Provided by environment', }; if (typeof module !== 'undefined' && module.exports) { module.exports = Util; } else { self.Util = Util; } ; /** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /* globals URL self Util */ /** @typedef {HTMLElementTagNameMap & {[id: string]: HTMLElement}} HTMLElementByTagName */ class DOM { /** * @param {Document} document */ constructor(document) { /** @type {Document} */ this._document = document; /** @type {string} */ this._lighthouseChannel = 'unknown'; } /** * @template {string} T * @param {T} name * @param {string=} className * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs. * Note: if an attribute key has an undefined value, this method does not * set the attribute on the node. * @return {HTMLElementByTagName[T]} */ createElement(name, className, attrs = {}) { const element = this._document.createElement(name); if (className) { element.className = className; } Object.keys(attrs).forEach(key => { const value = attrs[key]; if (typeof value !== 'undefined') { element.setAttribute(key, value); } }); return element; } /** * @return {!DocumentFragment} */ createFragment() { return this._document.createDocumentFragment(); } /** * @template {string} T * @param {Element} parentElem * @param {T} elementName * @param {string=} className * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs. * Note: if an attribute key has an undefined value, this method does not * set the attribute on the node. * @return {HTMLElementByTagName[T]} */ createChildOf(parentElem, elementName, className, attrs) { const element = this.createElement(elementName, className, attrs); parentElem.appendChild(element); return element; } /** * @param {string} selector * @param {ParentNode} context * @return {!DocumentFragment} A clone of the template content. * @throws {Error} */ cloneTemplate(selector, context) { const template = /** @type {?HTMLTemplateElement} */ (context.querySelector(selector)); if (!template) { throw new Error(`Template not found: template${selector}`); } const clone = this._document.importNode(template.content, true); // Prevent duplicate styles in the DOM. After a template has been stamped // for the first time, remove the clone's styles so they're not re-added. if (template.hasAttribute('data-stamped')) { this.findAll('style', clone).forEach(style => style.remove()); } template.setAttribute('data-stamped', 'true'); return clone; } /** * Resets the "stamped" state of the templates. */ resetTemplates() { this.findAll('template[data-stamped]', this._document).forEach(t => { t.removeAttribute('data-stamped'); }); } /** * @param {string} text * @return {Element} */ convertMarkdownLinkSnippets(text) { const element = this.createElement('span'); for (const segment of Util.splitMarkdownLink(text)) { if (!segment.isLink) { // Plain text segment. element.appendChild(this._document.createTextNode(segment.text)); continue; } // Otherwise, append any links found. const url = new URL(segment.linkHref); const DOCS_ORIGINS = ['https://developers.google.com', 'https://web.dev']; if (DOCS_ORIGINS.includes(url.origin)) { url.searchParams.set('utm_source', 'lighthouse'); url.searchParams.set('utm_medium', this._lighthouseChannel); } const a = this.createElement('a'); a.rel = 'noopener'; a.target = '_blank'; a.textContent = segment.text; a.href = url.href; element.appendChild(a); } return element; } /** * @param {string} markdownText * @return {Element} */ convertMarkdownCodeSnippets(markdownText) { const element = this.createElement('span'); for (const segment of Util.splitMarkdownCodeSpans(markdownText)) { if (segment.isCode) { const pre = this.createElement('code'); pre.textContent = segment.text; element.appendChild(pre); } else { element.appendChild(this._document.createTextNode(segment.text)); } } return element; } /** * The channel to use for UTM data when rendering links to the documentation. * @param {string} lighthouseChannel */ setLighthouseChannel(lighthouseChannel) { this._lighthouseChannel = lighthouseChannel; } /** * @return {Document} */ document() { return this._document; } /** * TODO(paulirish): import and conditionally apply the DevTools frontend subclasses instead of this * @return {boolean} */ isDevTools() { return !!this._document.querySelector('.lh-devtools'); } /** * Guaranteed context.querySelector. Always returns an element or throws if * nothing matches query. * @param {string} query * @param {ParentNode} context * @return {!HTMLElement} */ find(query, context) { /** @type {?HTMLElement} */ const result = context.querySelector(query); if (result === null) { throw new Error(`query ${query} not found`); } return result; } /** * Helper for context.querySelectorAll. Returns an Array instead of a NodeList. * @param {string} query * @param {ParentNode} context * @return {!Array<HTMLElement>} */ findAll(query, context) { return Array.from(context.querySelectorAll(query)); } } if (typeof module !== 'undefined' && module.exports) { module.exports = DOM; } else { self.DOM = DOM; } ; /* Details Element Polyfill 2.4.0 Copyright © 2019 Javan Makhmali */ (function() { "use strict"; var element = document.createElement("details"); var elementIsNative = typeof HTMLDetailsElement != "undefined" && element instanceof HTMLDetailsElement; var support = { open: "open" in element || elementIsNative, toggle: "ontoggle" in element }; var styles = '\ndetails, summary {\n display: block;\n}\ndetails:not([open]) > *:not(summary) {\n display: none;\n}\nsummary::before {\n content: "►";\n padding-right: 0.3rem;\n font-size: 0.6rem;\n cursor: default;\n}\n[open] > summary::before {\n content: "▼";\n}\n'; var _ref = [], forEach = _ref.forEach, slice = _ref.slice; if (!support.open) { polyfillStyles(); polyfillProperties(); polyfillToggle(); polyfillAccessibility(); } if (support.open && !support.toggle) { polyfillToggleEvent(); } function polyfillStyles() { document.head.insertAdjacentHTML("afterbegin", "<style>" + styles + "\u003c/style>"); } function polyfillProperties() { var prototype = document.createElement("details").constructor.prototype; var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute; var open = Object.getOwnPropertyDescriptor(prototype, "open"); Object.defineProperties(prototype, { open: { get: function get() { if (this.tagName == "DETAILS") { return this.hasAttribute("open"); } else { if (open && open.get) { return open.get.call(this); } } }, set: function set(value) { if (this.tagName == "DETAILS") { return value ? this.setAttribute("open", "") : this.removeAttribute("open"); } else { if (open && open.set) { return open.set.call(this, value); } } } }, setAttribute: { value: function value(name, _value) { var _this = this; var call = function call() { return setAttribute.call(_this, name, _value); }; if (name == "open" && this.tagName == "DETAILS") { var wasOpen = this.hasAttribute("open"); var result = call(); if (!wasOpen) { var summary = this.querySelector("summary"); if (summary) summary.setAttribute("aria-expanded", true); triggerToggle(this); } return result; } return call(); } }, removeAttribute: { value: function value(name) { var _this2 = this; var call = function call() { return removeAttribute.call(_this2, name); }; if (name == "open" && this.tagName == "DETAILS") { var wasOpen = this.hasAttribute("open"); var result = call(); if (wasOpen) { var summary = this.querySelector("summary"); if (summary) summary.setAttribute("aria-expanded", false); triggerToggle(this); } return result; } return call(); } } }); } function polyfillToggle() { onTogglingTrigger(function(element) { element.hasAttribute("open") ? element.removeAttribute("open") : element.setAttribute("open", ""); }); } function polyfillToggleEvent() { if (window.MutationObserver) { new MutationObserver(function(mutations) { forEach.call(mutations, function(mutation) { var target = mutation.target, attributeName = mutation.attributeName; if (target.tagName == "DETAILS" && attributeName == "open") { triggerToggle(target); } }); }).observe(document.documentElement, { attributes: true, subtree: true }); } else { onTogglingTrigger(function(element) { var wasOpen = element.getAttribute("open"); setTimeout(function() { var isOpen = element.getAttribute("open"); if (wasOpen != isOpen) { triggerToggle(element); } }, 1); }); } } function polyfillAccessibility() { setAccessibilityAttributes(document); if (window.MutationObserver) { new MutationObserver(function(mutations) { forEach.call(mutations, function(mutation) { forEach.call(mutation.addedNodes, setAccessibilityAttributes); }); }).observe(document.documentElement, { subtree: true, childList: true }); } else { document.addEventListener("DOMNodeInserted", function(event) { setAccessibilityAttributes(event.target); }); } } function setAccessibilityAttributes(root) { findElementsWithTagName(root, "SUMMARY").forEach(function(summary) { var details = findClosestElementWithTagName(summary, "DETAILS"); summary.setAttribute("aria-expanded", details.hasAttribute("open")); if (!summary.hasAttribute("tabindex")) summary.setAttribute("tabindex", "0"); if (!summary.hasAttribute("role")) summary.setAttribute("role", "button"); }); } function eventIsSignificant(event) { return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable); } function onTogglingTrigger(callback) { addEventListener("click", function(event) { if (eventIsSignificant(event)) { if (event.which <= 1) { var element = findClosestElementWithTagName(event.target, "SUMMARY"); if (element && element.parentNode && element.parentNode.tagName == "DETAILS") { callback(element.parentNode); } } } }, false); addEventListener("keydown", function(event) { if (eventIsSignificant(event)) { if (event.keyCode == 13 || event.keyCode == 32) { var element = findClosestElementWithTagName(event.target, "SUMMARY"); if (element && element.parentNode && element.parentNode.tagName == "DETAILS") { callback(element.parentNode); event.preventDefault(); } } } }, false); } function triggerToggle(element) { var event = document.createEvent("Event"); event.initEvent("toggle", false, false); element.dispatchEvent(event); } function findElementsWithTagName(root, tagName) { return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == "function" ? slice.call(root.getElementsByTagName(tagName)) : []); } function findClosestElementWithTagName(element, tagName) { if (typeof element.closest == "function") { return element.closest(tagName); } else { while (element) { if (element.tagName == tagName) { return element; } else { element = element.parentNode; } } } } })(); ; /** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /* globals self CriticalRequestChainRenderer SnippetRenderer Util URL */ /** @typedef {import('./dom.js')} DOM */ const URL_PREFIXES = ['http://', 'https://', 'data:']; class DetailsRenderer { /** * @param {DOM} dom */ constructor(dom) { this._dom = dom; /** @type {ParentNode} */ this._templateContext; // eslint-disable-line no-unused-expressions } /** * @param {ParentNode} context */ setTemplateContext(context) { this._templateContext = context; } /** * @param {LH.Audit.Details} details * @return {Element|null} */ render(details) { switch (details.type) { case 'filmstrip': return this._renderFilmstrip(details); case 'list': return this._renderList(details); case 'table': return this._renderTable(details); case 'criticalrequestchain': return CriticalRequestChainRenderer.render(this._dom, this._templateContext, details, this); case 'opportunity': return this._renderTable(details); // Internal-only details, not for rendering. case 'screenshot': case 'debugdata': return null; default: { // @ts-ignore tsc thinks this is unreachable, but be forward compatible // with new unexpected detail types. return this._renderUnknown(details.type, details); } } } /** * @param {{value: number, granularity?: number}} details * @return {Element} */ _renderBytes(details) { // TODO: handle displayUnit once we have something other than 'kb' const value = Util.i18n.formatBytesToKB(details.value, details.granularity); return this._renderText(value); } /** * @param {{value: number, granularity?: number, displayUnit?: string}} details * @return {Element} */ _renderMilliseconds(details) { let value = Util.i18n.formatMilliseconds(details.value, details.granularity); if (details.displayUnit === 'duration') { value = Util.i18n.formatDuration(details.value); } return this._renderText(value); } /** * @param {string} text * @return {HTMLElement} */ renderTextURL(text) { const url = text; let displayedPath; let displayedHost; let title; try { const parsed = Util.parseURL(url); displayedPath = parsed.file === '/' ? parsed.origin : parsed.file; displayedHost = parsed.file === '/' ? '' : `(${parsed.hostname})`; title = url; } catch (e) { displayedPath = url; } const element = this._dom.createElement('div', 'lh-text__url'); element.appendChild(this._renderLink({text: displayedPath, url})); if (displayedHost) { const hostElem = this._renderText(displayedHost); hostElem.classList.add('lh-text__url-host'); element.appendChild(hostElem); } if (title) { element.title = url; // set the url on the element's dataset which we use to check 3rd party origins element.dataset.url = url; } return element; } /** * @param {{text: string, url: string}} details * @return {Element} */ _renderLink(details) { const allowedProtocols = ['https:', 'http:']; let url; try { url = new URL(details.url); } catch (_) {} if (!url || !allowedProtocols.includes(url.protocol)) { // Fall back to just the link text if invalid or protocol not allowed. return this._renderText(details.text); } const a = this._dom.createElement('a'); a.rel = 'noopener'; a.target = '_blank'; a.textContent = details.text; a.href = url.href; return a; } /** * @param {string} text * @return {Element} */ _renderText(text) { const element = this._dom.createElement('div', 'lh-text'); element.textContent = text; return element; } /** * @param {string} text * @return {Element} */ _renderNumeric(text) { // TODO: this should probably accept a number and call `formatNumber` instead of being identical // to _renderText. const element = this._dom.createElement('div', 'lh-numeric'); element.textContent = text; return element; } /** * Create small thumbnail with scaled down image asset. * @param {string} details * @return {Element} */ _renderThumbnail(details) { const element = this._dom.createElement('img', 'lh-thumbnail'); const strValue = details; element.src = strValue; element.title = strValue; element.alt = ''; return element; } /** * @param {string} type * @param {*} value */ _renderUnknown(type, value) { // eslint-disable-next-line no-console console.error(`Unknown details type: ${type}`, value); const element = this._dom.createElement('details', 'lh-unknown'); this._dom.createChildOf(element, 'summary').textContent = `We don't know how to render audit details of type \`${type}\`. ` + 'The Lighthouse version that collected this data is likely newer than the Lighthouse ' + 'version of the report renderer. Expand for the raw JSON.'; this._dom.createChildOf(element, 'pre').textContent = JSON.stringify(value, null, 2); return element; } /** * Render a details item value for embedding in a table. Renders the value * based on the heading's valueType, unless the value itself has a `type` * property to override it. * @param {LH.Audit.Details.ItemValue} value * @param {LH.Audit.Details.OpportunityColumnHeading} heading * @return {Element|null} */ _renderTableValue(value, heading) { if (typeof value === 'undefined' || value === null) { return null; } // First deal with the possible object forms of value. if (typeof value === 'object') { // The value's type overrides the heading's for this column. switch (value.type) { case 'code': { return this._renderCode(value.value); } case 'link': { return this._renderLink(value); } case 'node': { return this.renderNode(value); } case 'source-location': { return this.renderSourceLocation(value); } case 'url': { return this.renderTextURL(value.value); } default: { return this._renderUnknown(value.type, value); } } } // Next, deal with primitives. switch (heading.valueType) { case 'bytes': { const numValue = Number(value); return this._renderBytes({value: numValue, granularity: heading.granularity}); } case 'code': { const strValue = String(value); return this._renderCode(strValue); } case 'ms': { const msValue = { value: Number(value), granularity: heading.granularity, displayUnit: heading.displayUnit, }; return this._renderMilliseconds(msValue); } case 'numeric': { const strValue = String(value); return this._renderNumeric(strValue); } case 'text': { const strValue = String(value); return this._renderText(strValue); } case 'thumbnail': { const strValue = String(value); return this._renderThumbnail(strValue); } case 'timespanMs': { const numValue = Number(value); return this._renderMilliseconds({value: numValue}); } case 'url': { const strValue = String(value); if (URL_PREFIXES.some(prefix => strValue.startsWith(prefix))) { return this.renderTextURL(strValue); } else { // Fall back to <pre> rendering if not actually a URL. return this._renderCode(strValue); } } default: { return this._renderUnknown(heading.valueType, value); } } } /** * Get the headings of a table-like details object, converted into the * OpportunityColumnHeading type until we have all details use the same * heading format. * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} tableLike * @return {Array<LH.Audit.Details.OpportunityColumnHeading>} */ _getCanonicalizedHeadingsFromTable(tableLike) { if (tableLike.type === 'opportunity') { return tableLike.headings; } return tableLike.headings.map(heading => this._getCanonicalizedHeading(heading)); } /** * Get the headings of a table-like details object, converted into the * OpportunityColumnHeading type until we have all details use the same * heading format. * @param {LH.Audit.Details.TableColumnHeading} heading * @return {LH.Audit.Details.OpportunityColumnHeading} */ _getCanonicalizedHeading(heading) { let subRows; if (heading.subRows) { // @ts-ignore: It's ok that there is no text. subRows = this._getCanonicalizedHeading(heading.subRows); if (!subRows.key) { // eslint-disable-next-line no-console console.warn('key should not be null'); } subRows = {...subRows, key: subRows.key || ''}; } return { key: heading.key, valueType: heading.itemType, subRows, label: heading.text, displayUnit: heading.displayUnit, granularity: heading.granularity, }; } /** * @param {LH.Audit.Details.ItemValue[]} values * @param {LH.Audit.Details.OpportunityColumnHeading} heading * @return {Element} */ _renderSubRows(values, heading) { const subRowsElement = this._dom.createElement('div', 'lh-sub-rows'); for (const childValue of values) { const subRowElement = this._renderTableValue(childValue, heading); if (!subRowElement) continue; subRowElement.classList.add('lh-sub-row'); subRowsElement.appendChild(subRowElement); } return subRowsElement; } /** * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} details * @return {Element} */ _renderTable(details) { if (!details.items.length) return this._dom.createElement('span'); const tableElem = this._dom.createElement('table', 'lh-table'); const theadElem = this._dom.createChildOf(tableElem, 'thead'); const theadTrElem = this._dom.createChildOf(theadElem, 'tr'); const headings = this._getCanonicalizedHeadingsFromTable(details); for (const heading of headings) { const valueType = heading.valueType || 'text'; const classes = `lh-table-column--${valueType}`; const labelEl = this._dom.createElement('div', 'lh-text'); labelEl.textContent = heading.label; this._dom.createChildOf(theadTrElem, 'th', classes).appendChild(labelEl); } const tbodyElem = this._dom.createChildOf(tableElem, 'tbody'); for (const row of details.items) { const rowElem = this._dom.createChildOf(tbodyElem, 'tr'); for (const heading of headings) { const valueFragment = this._dom.createFragment(); if (heading.key === null && !heading.subRows) { // eslint-disable-next-line no-console console.warn('A header with a null `key` should define `subRows`.'); } if (heading.key === null) { const emptyElement = this._dom.createElement('div'); emptyElement.innerHTML = '&nbsp;'; valueFragment.appendChild(emptyElement); } else { const value = row[heading.key]; const valueElement = value !== undefined && !Array.isArray(value) && this._renderTableValue(value, heading); if (valueElement) valueFragment.appendChild(valueElement); } if (heading.subRows) { const subRowsHeading = { key: heading.subRows.key, valueType: heading.subRows.valueType || heading.valueType, granularity: heading.subRows.granularity || heading.granularity, displayUnit: heading.subRows.displayUnit || heading.displayUnit, label: '', }; const values = row[subRowsHeading.key]; if (Array.isArray(values)) { const subRowsElement = this._renderSubRows(values, subRowsHeading); valueFragment.appendChild(subRowsElement); } } if (valueFragment.childElementCount) { const classes = `lh-table-column--${heading.valueType}`; this._dom.createChildOf(rowElem, 'td', classes).appendChild(valueFragment); } else { this._dom.createChildOf(rowElem, 'td', 'lh-table-column--empty'); } } } return tableElem; } /** * @param {LH.Audit.Details.List} details * @return {Element} */ _renderList(details) { const listContainer = this._dom.createElement('div', 'lh-list'); details.items.forEach(item => { const snippetEl = SnippetRenderer.render(this._dom, this._templateContext, item, this); listContainer.appendChild(snippetEl); }); return listContainer; } /** * @param {LH.Audit.Details.NodeValue} item * @return {Element} */ renderNode(item) { const element = this._dom.createElement('span', 'lh-node'); if (item.nodeLabel) { const nodeLabelEl = this._dom.createElement('div'); nodeLabelEl.textContent = item.nodeLabel; element.appendChild(nodeLabelEl); } if (item.snippet) { const snippetEl = this._dom.createElement('div'); snippetEl.classList.add('lh-node__snippet'); snippetEl.textContent = item.snippet; element.appendChild(snippetEl); } if (item.selector) { element.title = item.selector; } if (item.path) element.setAttribute('data-path', item.path); if (item.selector) element.setAttribute('data-selector', item.selector); if (item.snippet) element.setAttribute('data-snippet', item.snippet); return element; } /** * @param {LH.Audit.Details.SourceLocationValue} item * @return {Element|null} * @protected */ renderSourceLocation(item) { if (!item.url) { return null; } // Lines are shown as one-indexed. const line = item.line + 1; const column = item.column; let element; if (item.urlProvider === 'network') { element = this.renderTextURL(item.url); this._dom.find('a', element).textContent += `:${line}:${column}`; } else { element = this._renderText(`${item.url}:${line}:${column} (from sourceURL)`); } element.classList.add('lh-source-location'); element.setAttribute('data-source-url', item.url); // DevTools expects zero-indexed lines. element.setAttribute('data-source-line', String(item.line)); element.setAttribute('data-source-column', String(item.column)); return element; } /** * @param {LH.Audit.Details.Filmstrip} details * @return {Element} */ _renderFilmstrip(details) { const filmstripEl = this._dom.createElement('div', 'lh-filmstrip'); for (const thumbnail of details.items) { const frameEl = this._dom.createChildOf(filmstripEl, 'div', 'lh-filmstrip__frame'); this._dom.createChildOf(frameEl, 'img', 'lh-filmstrip__thumbnail', { src: thumbnail.data, alt: `Screenshot`, }); } return filmstripEl; } /** * @param {string} text * @return {Element} */ _renderCode(text) { const pre = this._dom.createElement('pre', 'lh-code'); pre.textContent = text; return pre; } } if (typeof module !== 'undefined' && module.exports) { module.exports = DetailsRenderer; } else { self.DetailsRenderer = DetailsRenderer; } ; /** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /** * @fileoverview This file contains helpers for constructing and rendering the * critical request chains network tree. */ /* globals self Util */ /** @typedef {import('./dom.js')} DOM */ /** @typedef {import('./details-renderer.js')} DetailsRenderer */ class CriticalRequestChainRenderer { /** * Create render context for critical-request-chain tree display. * @param {LH.Audit.SimpleCriticalRequestNode} tree * @return {{tree: LH.Audit.SimpleCriticalRequestNode, startTime: number, transferSize: number}} */ static initTree(tree) { let startTime = 0; const rootNodes = Object.keys(tree); if (rootNodes.length > 0) { const node = tree[rootNodes[0]]; startTime = node.request.startTime; } return {tree, startTime, transferSize: 0}; } /** * Helper to create context for each critical-request-chain node based on its * parent. Calculates if this node is the last child, whether it has any * children itself and what the tree looks like all the way back up to the root, * so the tree markers can be drawn correctly. * @param {LH.Audit.SimpleCriticalRequestNode} parent * @param {string} id * @param {number} startTime * @param {number} transferSize * @param {Array<boolean>=} treeMarkers * @param {boolean=} parentIsLastChild * @return {CRCSegment} */ static createSegment(parent, id, startTime, transferSize, treeMarkers, parentIsLastChild) { const node = parent[id]; const siblings = Object.keys(parent); const isLastChild = siblings.indexOf(id) === (siblings.length - 1); const hasChildren = !!node.children && Object.keys(node.children).length > 0; // Copy the tree markers so that we don't change by reference. const newTreeMarkers = Array.isArray(treeMarkers) ? treeMarkers.slice(0) : []; // Add on the new entry. if (typeof parentIsLastChild !== 'undefined') { newTreeMarkers.push(!parentIsLastChild); } return { node, isLastChild, hasChildren, startTime, transferSize: transferSize + node.request.transferSize, treeMarkers: newTreeMarkers, }; } /** * Creates the DOM for a tree segment. * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {CRCSegment} segment * @param {DetailsRenderer} detailsRenderer * @return {Node} */ static createChainNode(dom, tmpl, segment, detailsRenderer) { const chainsEl = dom.cloneTemplate('#tmpl-lh-crc__chains', tmpl); // Hovering over request shows full URL. dom.find('.crc-node', chainsEl).setAttribute('title', segment.node.request.url); const treeMarkeEl = dom.find('.crc-node__tree-marker', chainsEl); // Construct lines and add spacers for sub requests. segment.treeMarkers.forEach(separator => { if (separator) { treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert')); treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker')); } else { treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker')); treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker')); } }); if (segment.isLastChild) { treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker up-right')); treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right')); } else { treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert-right')); treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right')); } if (segment.hasChildren) { treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker horiz-down')); } else { treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right')); } // Fill in url, host, and request size information. const url = segment.node.request.url; const linkEl = detailsRenderer.renderTextURL(url); const treevalEl = dom.find('.crc-node__tree-value', chainsEl); treevalEl.appendChild(linkEl); if (!segment.hasChildren) { const {startTime, endTime, transferSize} = segment.node.request; const span = dom.createElement('span', 'crc-node__chain-duration'); span.textContent = ' - ' + Util.i18n.formatMilliseconds((endTime - startTime) * 1000) + ', '; const span2 = dom.createElement('span', 'crc-node__chain-duration'); span2.textContent = Util.i18n.formatBytesToKB(transferSize, 0.01); treevalEl.appendChild(span); treevalEl.appendChild(span2); } return chainsEl; } /** * Recursively builds a tree from segments. * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {CRCSegment} segment * @param {Element} elem Parent element. * @param {LH.Audit.Details.CriticalRequestChain} details * @param {DetailsRenderer} detailsRenderer */ static buildTree(dom, tmpl, segment, elem, details, detailsRenderer) { elem.appendChild(CRCRenderer.createChainNode(dom, tmpl, segment, detailsRenderer)); if (segment.node.children) { for (const key of Object.keys(segment.node.children)) { const childSegment = CRCRenderer.createSegment(segment.node.children, key, segment.startTime, segment.transferSize, segment.treeMarkers, segment.isLastChild); CRCRenderer.buildTree(dom, tmpl, childSegment, elem, details, detailsRenderer); } } } /** * @param {DOM} dom * @param {ParentNode} templateContext * @param {LH.Audit.Details.CriticalRequestChain} details * @param {DetailsRenderer} detailsRenderer * @return {Element} */ static render(dom, templateContext, details, detailsRenderer) { const tmpl = dom.cloneTemplate('#tmpl-lh-crc', templateContext); const containerEl = dom.find('.lh-crc', tmpl); // Fill in top summary. dom.find('.crc-initial-nav', tmpl).textContent = Util.i18n.strings.crcInitialNavigation; dom.find('.lh-crc__longest_duration_label', tmpl).textContent = Util.i18n.strings.crcLongestDurationLabel; dom.find('.lh-crc__longest_duration', tmpl).textContent = Util.i18n.formatMilliseconds(details.longestChain.duration); // Construct visual tree. const root = CRCRenderer.initTree(details.chains); for (const key of Object.keys(root.tree)) { const segment = CRCRenderer.createSegment(root.tree, key, root.startTime, root.transferSize); CRCRenderer.buildTree(dom, tmpl, segment, containerEl, details, detailsRenderer); } return dom.find('.lh-crc-container', tmpl); } } // Alias b/c the name is really long. const CRCRenderer = CriticalRequestChainRenderer; // Allow Node require()'ing. if (typeof module !== 'undefined' && module.exports) { module.exports = CriticalRequestChainRenderer; } else { self.CriticalRequestChainRenderer = CriticalRequestChainRenderer; } /** @typedef {{ node: LH.Audit.SimpleCriticalRequestNode[string], isLastChild: boolean, hasChildren: boolean, startTime: number, transferSize: number, treeMarkers: Array<boolean> }} CRCSegment */ ; /** * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved. * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. */ 'use strict'; /* globals self, Util */ /** @typedef {import('./details-renderer')} DetailsRenderer */ /** @typedef {import('./dom')} DOM */ /** @enum {number} */ const LineVisibility = { /** Show regardless of whether the snippet is collapsed or expanded */ ALWAYS: 0, WHEN_COLLAPSED: 1, WHEN_EXPANDED: 2, }; /** @enum {number} */ const LineContentType = { /** A line of content */ CONTENT_NORMAL: 0, /** A line of content that's emphasized by setting the CSS background color */ CONTENT_HIGHLIGHTED: 1, /** Use when some lines are hidden, shows the "..." placeholder */ PLACEHOLDER: 2, /** A message about a line of content or the snippet in general */ MESSAGE: 3, }; /** @typedef {{ content: string; lineNumber: string | number; contentType: LineContentType; truncated?: boolean; visibility?: LineVisibility; }} LineDetails */ const classNamesByContentType = { [LineContentType.CONTENT_NORMAL]: ['lh-snippet__line--content'], [LineContentType.CONTENT_HIGHLIGHTED]: [ 'lh-snippet__line--content', 'lh-snippet__line--content-highlighted', ], [LineContentType.PLACEHOLDER]: ['lh-snippet__line--placeholder'], [LineContentType.MESSAGE]: ['lh-snippet__line--message'], }; /** * @param {LH.Audit.Details.SnippetValue['lines']} lines * @param {number} lineNumber * @return {{line?: LH.Audit.Details.SnippetValue['lines'][0], previousLine?: LH.Audit.Details.SnippetValue['lines'][0]}} */ function getLineAndPreviousLine(lines, lineNumber) { return { line: lines.find(l => l.lineNumber === lineNumber), previousLine: lines.find(l => l.lineNumber === lineNumber - 1), }; } /** * @param {LH.Audit.Details.SnippetValue["lineMessages"]} messages * @param {number} lineNumber */ function getMessagesForLineNumber(messages, lineNumber) { return messages.filter(h => h.lineNumber === lineNumber); } /** * @param {LH.Audit.Details.SnippetValue} details * @return {LH.Audit.Details.SnippetValue['lines']} */ function getLinesWhenCollapsed(details) { const SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED = 2; return Util.filterRelevantLines( details.lines, details.lineMessages, SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED ); } /** * Render snippet of text with line numbers and annotations. * By default we only show a few lines around each annotation and the user * can click "Expand snippet" to show more. * Content lines with annotations are highlighted. */ class SnippetRenderer { /** * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {LH.Audit.Details.SnippetValue} details * @param {DetailsRenderer} detailsRenderer * @param {function} toggleExpandedFn * @return {DocumentFragment} */ static renderHeader(dom, tmpl, details, detailsRenderer, toggleExpandedFn) { const linesWhenCollapsed = getLinesWhenCollapsed(details); const canExpand = linesWhenCollapsed.length < details.lines.length; const header = dom.cloneTemplate('#tmpl-lh-snippet__header', tmpl); dom.find('.lh-snippet__title', header).textContent = details.title; const { snippetCollapseButtonLabel, snippetExpandButtonLabel, } = Util.i18n.strings; dom.find( '.lh-snippet__btn-label-collapse', header ).textContent = snippetCollapseButtonLabel; dom.find( '.lh-snippet__btn-label-expand', header ).textContent = snippetExpandButtonLabel; const toggleExpandButton = dom.find('.lh-snippet__toggle-expand', header); // If we're already showing all the available lines of the snippet, we don't need an // expand/collapse button and can remove it from the DOM. // If we leave the button in though, wire up the click listener to toggle visibility! if (!canExpand) { toggleExpandButton.remove(); } else { toggleExpandButton.addEventListener('click', () => toggleExpandedFn()); } // We only show the source node of the snippet in DevTools because then the user can // access the full element detail. Just being able to see the outer HTML isn't very useful. if (details.node && dom.isDevTools()) { const nodeContainer = dom.find('.lh-snippet__node', header); nodeContainer.appendChild(detailsRenderer.renderNode(details.node)); } return header; } /** * Renders a line (text content, message, or placeholder) as a DOM element. * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {LineDetails} lineDetails * @return {Element} */ static renderSnippetLine( dom, tmpl, {content, lineNumber, truncated, contentType, visibility} ) { const clonedTemplate = dom.cloneTemplate('#tmpl-lh-snippet__line', tmpl); const contentLine = dom.find('.lh-snippet__line', clonedTemplate); const {classList} = contentLine; classNamesByContentType[contentType].forEach(typeClass => classList.add(typeClass) ); if (visibility === LineVisibility.WHEN_COLLAPSED) { classList.add('lh-snippet__show-if-collapsed'); } else if (visibility === LineVisibility.WHEN_EXPANDED) { classList.add('lh-snippet__show-if-expanded'); } const lineContent = content + (truncated ? '…' : ''); const lineContentEl = dom.find('.lh-snippet__line code', contentLine); if (contentType === LineContentType.MESSAGE) { lineContentEl.appendChild(dom.convertMarkdownLinkSnippets(lineContent)); } else { lineContentEl.textContent = lineContent; } dom.find( '.lh-snippet__line-number', contentLine ).textContent = lineNumber.toString(); return contentLine; } /** * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {{message: string}} message * @return {Element} */ static renderMessage(dom, tmpl, message) { return SnippetRenderer.renderSnippetLine(dom, tmpl, { lineNumber: ' ', content: message.message, contentType: LineContentType.MESSAGE, }); } /** * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {LineVisibility} visibility * @return {Element} */ static renderOmittedLinesPlaceholder(dom, tmpl, visibility) { return SnippetRenderer.renderSnippetLine(dom, tmpl, { lineNumber: '…', content: '', visibility, contentType: LineContentType.PLACEHOLDER, }); } /** * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {LH.Audit.Details.SnippetValue} details * @return {DocumentFragment} */ static renderSnippetContent(dom, tmpl, details) { const template = dom.cloneTemplate('#tmpl-lh-snippet__content', tmpl); const snippetEl = dom.find('.lh-snippet__snippet-inner', template); // First render messages that don't belong to specific lines details.generalMessages.forEach(m => snippetEl.append(SnippetRenderer.renderMessage(dom, tmpl, m)) ); // Then render the lines and their messages, as well as placeholders where lines are omitted snippetEl.append(SnippetRenderer.renderSnippetLines(dom, tmpl, details)); return template; } /** * @param {DOM} dom * @param {DocumentFragment} tmpl * @param {LH.Audit.Details.SnippetValue} details * @return {DocumentFragment} */ static renderSnippetLines(dom, tmpl, details) { const {lineMessages, generalMessages, lineCount, lines} = details; const linesWhenCollapsed = getLinesWhenCollapsed(details); const hasOnlyGeneralMessages = generalMessages.length > 0 && lineMessages.length === 0; const lineContainer = dom.createFragment(); // When a line is not shown in the collapsed state we try to see if we also need an // omitted lines placeholder for the expanded state, rather than rendering two separate // placeholders. let hasPendingOmittedLinesPlaceholderForCollapsedState = false; for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) { const {line, previousLine} = getLineAndPreviousLine(lines, lineNumber); const { line: lineWhenCollapsed, previousLine: previousLineWhenCollapsed, } = getLineAndPreviousLine(linesWhenCollapsed, lineNumber); const showLineWhenCollapsed = !!lineWhenCollapsed; const showPreviousLineWhenCollapsed = !!previousLineWhenCollapsed; // If we went from showing lines in the collapsed state to not showing them // we need to render a placeholder if (showPreviousLineWhenCollapsed && !showLineWhenCollapsed) { hasPendingOmittedLinesPlaceholderForCollapsedState = true; } // If we are back to lines being visible in the collapsed and the placeholder // hasn't been rendered yet then render it now if ( showLineWhenCollapsed && hasPendingOmittedLinesPlaceholderForCollapsedState ) { lineContainer.append( SnippetRenderer.renderOmittedLinesPlaceholder( dom, tmpl, LineVisibility.WHEN_COLLAPSED ) ); hasPendingOmittedLinesPlaceholderForCollapsedState = false; } // Render omitted lines placeholder if we have not already rendered one for this gap const isFirstOmittedLineWhenExpanded = !line && !!previousLine; const isFirstLineOverallAndIsOmittedWhenExpanded = !line && lineNumber === 1; if ( isFirstOmittedLineWhenExpanded || isFirstLineOverallAndIsOmittedWhenExpanded ) { // In the collapsed state we don't show omitted lines placeholders around // the edges of the snippet const hasRenderedAllLinesVisibleWhenCollapsed = !linesWhenCollapsed.some( l => l.lineNumber > lineNumber ); const onlyShowWhenExpanded = hasRenderedAllLinesVisibleWhenCollapsed || lineNumber === 1; lineContainer.append( SnippetRenderer.renderOmittedLinesPlaceholder( dom, tmpl, onlyShowWhenExpanded ? LineVisibility.WHEN_EXPANDED : LineVisibility.ALWAYS ) ); hasPendingOmittedLinesPlaceholderForCollapsedState = false; } if (!line) { // Can't render the line if we don't know its content (instead we've rendered a placeholder) continue; } // Now render the line and any messages const messages = getMessagesForLineNumber(lineMessages, lineNumber); const highlightLine = messages.length > 0 || hasOnlyGeneralMessages; const contentLineDetails = Object.assign({}, line, { contentType: highlightLine ? LineContentType.CONTENT_HIGHLIGHTED : LineContentType.CONTENT_NORMAL, visibility: lineWhenCollapsed ? LineVisibility.ALWAYS : LineVisibility.WHEN_EXPANDED, }); lineContainer.append( SnippetRenderer.renderSnippetLine(dom, tmpl, contentLineDetails) ); messages.forEach(message => { lineContainer.append(SnippetRenderer.renderMessage(dom, tmpl, message)); }); } return lineContainer; } /** * @param {DOM} dom * @param {ParentNode} templateContext * @param {LH.Audit.Details.SnippetValue} details * @param {DetailsRenderer} detailsRenderer * @return {!Element} */ static render(dom, templateContext, details, detailsRenderer) { const tmpl = dom.cloneTemplate('#tmpl-lh-snippet', templateContext); const snippetEl = dom.find('.lh-snippet', tmpl); const header = SnippetRenderer.renderHeader( dom, tmpl, details, detailsRenderer, () => snippetEl.classList.toggle('lh-snippet--expanded') ); const content = SnippetRenderer.renderSnippetContent(dom, tmpl, details); snippetEl.append(header, content); return snippetEl; } } // Allow Node require()'ing. if (typeof module !== 'undefined' && module.exports) { module.exports = SnippetRenderer; } else { self.SnippetRenderer = SnippetRenderer; } ; /** * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved. * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. */ 'use strict'; /* global URL */ /** * @fileoverview * @suppress {reportUnknownTypes} */ /** * Generate a filenamePrefix of hostname_YYYY-MM-DD_HH-MM-SS * Date/time uses the local timezone, however Node has unreliable ICU * support, so we must construct a YYYY-MM-DD date format manually. :/ * @param {{finalUrl: string, fetchTime: string}} lhr * @return {string} */ function getFilenamePrefix(lhr) { const hostname = new URL(lhr.finalUrl).hostname; const date = (lhr.fetchTime && new Date(lhr.fetchTime)) || new Date(); const timeStr = date.toLocaleTimeString('en-US', {hour12: false}); const dateParts = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', }).split('/'); // @ts-ignore - parts exists dateParts.unshift(dateParts.pop()); const dateStr = dateParts.join('-'); const filenamePrefix = `${hostname}_${dateStr}_${timeStr}`; // replace characters that are unfriendly to filenames return filenamePrefix.replace(/[/?<>\\:*|"]/g, '-'); } // don't attempt to export in the browser. if (typeof module !== 'undefined' && module.exports) { module.exports = {getFilenamePrefix}; } ; /** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /** * Logs messages via a UI butter. */ class Logger { /** * @param {Element} element */ constructor(element) { /** @type {Element} */ this.el = element; this._id = undefined; } /** * Shows a butter bar. * @param {string} msg The message to show. * @param {boolean=} autoHide True to hide the message after a duration. * Default is true. */ log(msg, autoHide = true) { this._id && clearTimeout(this._id); this.el.textContent = msg; this.el.classList.add('show'); if (autoHide) { this._id = setTimeout(_ => { this.el.classList.remove('show'); }, 7000); } } /** * @param {string} msg */ warn(msg) { this.log('Warning: ' + msg); } /** * @param {string} msg */ error(msg) { this.log(msg); // Rethrow to make sure it's auditable as an error, but in a setTimeout so page // recovers gracefully and user can try loading a report again. setTimeout(_ => { throw new Error(msg); }, 0); } /** * Explicitly hides the butter bar. */ hide() { this._id && clearTimeout(this._id); this.el.classList.remove('show'); } } if (typeof module !== 'undefined' && module.exports) { module.exports = Logger; } ; /** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /* eslint-env browser */ /** * @fileoverview Adds tools button, print, and other dynamic functionality to * the report. */ /* globals getFilenamePrefix Util */ /** @typedef {import('./dom')} DOM */ /** * @param {HTMLTableElement} tableEl * @return {Array<HTMLTableRowElement>} */ function getTableRows(tableEl) { return Array.from(tableEl.tBodies[0].rows); } class ReportUIFeatures { /** * @param {DOM} dom */ constructor(dom) { /** @type {LH.Result} */ this.json; // eslint-disable-line no-unused-expressions /** @type {DOM} */ this._dom = dom; /** @type {Document} */ this._document = this._dom.document(); /** @type {ParentNode} */ this._templateContext = this._dom.document(); /** @type {DropDown} */ this._dropDown = new DropDown(this._dom); /** @type {boolean} */ this._copyAttempt = false; /** @type {HTMLElement} */ this.topbarEl; // eslint-disable-line no-unused-expressions /** @type {HTMLElement} */ this.scoreScaleEl; // eslint-disable-line no-unused-expressions /** @type {HTMLElement} */ this.stickyHeaderEl; // eslint-disable-line no-unused-expressions /** @type {HTMLElement} */ this.highlightEl; // eslint-disable-line no-unused-expressions this.onMediaQueryChange = this.onMediaQueryChange.bind(this); this.onCopy = this.onCopy.bind(this); this.onDropDownMenuClick = this.onDropDownMenuClick.bind(this); this.onKeyUp = this.onKeyUp.bind(this); this.collapseAllDetails = this.collapseAllDetails.bind(this); this.expandAllDetails = this.expandAllDetails.bind(this); this._toggleDarkTheme = this._toggleDarkTheme.bind(this); this._updateStickyHeaderOnScroll = this._updateStickyHeaderOnScroll.bind(this); } /** * Adds tools button, print, and other functionality to the report. The method * should be called whenever the report needs to be re-rendered. * @param {LH.Result} report */ initFeatures(report) { this.json = report; this._setupMediaQueryListeners(); this._dropDown.setup(this.onDropDownMenuClick); this._setupThirdPartyFilter(); this._setUpCollapseDetailsAfterPrinting(); this._resetUIState(); this._document.addEventListener('keyup', this.onKeyUp); this._document.addEventListener('copy', this.onCopy); const topbarLogo = this._dom.find('.lh-topbar__logo', this._document); topbarLogo.addEventListener('click', () => this._toggleDarkTheme()); let turnOffTheLights = false; // Do not query the system preferences for DevTools - DevTools should only apply dark theme // if dark is selected in the settings panel. if (!this._dom.isDevTools() && window.matchMedia('(prefers-color-scheme: dark)').matches) { turnOffTheLights = true; } // Fireworks. const scoresAll100 = Object.values(report.categories).every(cat => cat.score === 1); const hasAllCoreCategories = Object.keys(report.categories).filter(id => !Util.isPluginCategory(id)).length >= 5; if (scoresAll100 && hasAllCoreCategories) { turnOffTheLights = true; this._enableFireworks(); } if (turnOffTheLights) { this._toggleDarkTheme(true); } // There is only a sticky header when at least 2 categories are present. if (Object.keys(this.json.categories).length >= 2) { this._setupStickyHeaderElements(); const containerEl = this._dom.find('.lh-container', this._document); const elToAddScrollListener = this._getScrollParent(containerEl); elToAddScrollListener.addEventListener('scroll', this._updateStickyHeaderOnScroll); // Use ResizeObserver where available. // TODO: there is an issue with incorrect position numbers and, as a result, performance // issues due to layout thrashing. // See https://github.com/GoogleChrome/lighthouse/pull/9023/files#r288822287 for details. // For now, limit to DevTools. if (this._dom.isDevTools()) { const resizeObserver = new window.ResizeObserver(this._updateStickyHeaderOnScroll); resizeObserver.observe(containerEl); } else { window.addEventListener('resize', this._updateStickyHeaderOnScroll); } } // Show the metric descriptions by default when there is an error. const hasMetricError = report.categories.performance && report.categories.performance.auditRefs .some(audit => Boolean(audit.group === 'metrics' && report.audits[audit.id].errorMessage)); if (hasMetricError) { const toggleInputEl = /** @type {HTMLInputElement} */ ( this._dom.find('.lh-metrics-toggle__input', this._document)); toggleInputEl.checked = true; } // Fill in all i18n data. for (const node of this._dom.findAll('[data-i18n]', this._dom.document())) { // These strings are guaranteed to (at least) have a default English string in Util.UIStrings, // so this cannot be undefined as long as `report-ui-features.data-i18n` test passes. const i18nAttr = /** @type {keyof LH.I18NRendererStrings} */ (node.getAttribute('data-i18n')); node.textContent = Util.i18n.strings[i18nAttr]; } } /** * Define a custom element for <templates> to be extracted from. For example: * this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html')) * @param {ParentNode} context */ setTemplateContext(context) { this._templateContext = context; } /** * Finds the first scrollable ancestor of `element`. Falls back to the document. * @param {HTMLElement} element * @return {Node} */ _getScrollParent(element) { const {overflowY} = window.getComputedStyle(element); const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden'; if (isScrollable) { return element; } if (element.parentElement) { return this._getScrollParent(element.parentElement); } return document; } _enableFireworks() { const scoresContainer = this._dom.find('.lh-scores-container', this._document); scoresContainer.classList.add('score100'); scoresContainer.addEventListener('click', _ => { scoresContainer.classList.toggle('fireworks-paused'); }); } /** * Fires a custom DOM event on target. * @param {string} name Name of the event. * @param {Node=} target DOM node to fire the event on. * @param {*=} detail Custom data to include. */ _fireEventOn(name, target = this._document, detail) { const event = new CustomEvent(name, detail ? {detail} : undefined); target.dispatchEvent(event); } _setupMediaQueryListeners() { const mediaQuery = self.matchMedia('(max-width: 500px)'); mediaQuery.addListener(this.onMediaQueryChange); // Ensure the handler is called on init this.onMediaQueryChange(mediaQuery); } /** * Handle media query change events. * @param {MediaQueryList|MediaQueryListEvent} mql */ onMediaQueryChange(mql) { const root = this._dom.find('.lh-root', this._document); root.classList.toggle('lh-narrow', mql.matches); } _setupThirdPartyFilter() { // Some audits should not display the third party filter option. const thirdPartyFilterAuditExclusions = [ // This audit deals explicitly with third party resources. 'uses-rel-preconnect', ]; // Some audits should hide third party by default. const thirdPartyFilterAuditHideByDefault = [ // Only first party resources are actionable. 'legacy-javascript', ]; // Get all tables with a text url column. /** @type {Array<HTMLTableElement>} */ const tables = Array.from(this._document.querySelectorAll('.lh-table')); const tablesWithUrls = tables .filter(el => el.querySelector('td.lh-table-column--url, td.lh-table-column--source-location')) .filter(el => { const containingAudit = el.closest('.lh-audit'); if (!containingAudit) throw new Error('.lh-table not within audit'); return !thirdPartyFilterAuditExclusions.includes(containingAudit.id); }); tablesWithUrls.forEach((tableEl, index) => { const rowEls = getTableRows(tableEl); const thirdPartyRows = this._getThirdPartyRows(rowEls, this.json.finalUrl); // create input box const filterTemplate = this._dom.cloneTemplate('#tmpl-lh-3p-filter', this._templateContext); const filterInput = /** @type {HTMLInputElement} */ (this._dom.find('input', filterTemplate)); const id = `lh-3p-filter-label--${index}`; filterInput.id = id; filterInput.addEventListener('change', e => { // Remove rows from the dom and keep track of them to re-add on uncheck. // Why removing instead of hiding? To keep nth-child(even) background-colors working. if (e.target instanceof HTMLInputElement && !e.target.checked) { for (const row of thirdPartyRows.values()) { row.remove(); } } else { // Add row elements back to original positions. for (const [position, row] of thirdPartyRows.entries()) { const childrenArr = getTableRows(tableEl); tableEl.tBodies[0].insertBefore(row, childrenArr[position]); } } }); this._dom.find('label', filterTemplate).setAttribute('for', id); this._dom.find('.lh-3p-filter-count', filterTemplate).textContent = `${thirdPartyRows.size}`; this._dom.find('.lh-3p-ui-string', filterTemplate).textContent = Util.i18n.strings.thirdPartyResourcesLabel; const allThirdParty = thirdPartyRows.size === rowEls.length; const allFirstParty = !thirdPartyRows.size; // If all or none of the rows are 3rd party, disable the checkbox. if (allThirdParty || allFirstParty) { filterInput.disabled = true; filterInput.checked = allThirdParty; } // Add checkbox to the DOM. if (!tableEl.parentNode) return; // Keep tsc happy. tableEl.parentNode.insertBefore(filterTemplate, tableEl); // Hide third-party rows for some audits by default. const containingAudit = tableEl.closest('.lh-audit'); if (!containingAudit) throw new Error('.lh-table not within audit'); if (thirdPartyFilterAuditHideByDefault.includes(containingAudit.id) && !allThirdParty) { filterInput.click(); } }); } /** * From a table with URL entries, finds the rows containing third-party URLs * and returns a Map of those rows, mapping from row index to row Element. * @param {HTMLElement[]} rowEls * @param {string} finalUrl * @return {Map<number, HTMLElement>} */ _getThirdPartyRows(rowEls, finalUrl) { /** @type {Map<number, HTMLElement>} */ const thirdPartyRows = new Map(); const finalUrlRootDomain = Util.getRootDomain(finalUrl); rowEls.forEach((rowEl, rowPosition) => { /** @type {HTMLElement|null} */ const urlItem = rowEl.querySelector('.lh-text__url'); if (!urlItem) return; const datasetUrl = urlItem.dataset.url; if (!datasetUrl) return; const isThirdParty = Util.getRootDomain(datasetUrl) !== finalUrlRootDomain; if (!isThirdParty) return; thirdPartyRows.set(Number(rowPosition), rowEl); }); return thirdPartyRows; } /** * From a table, finds and returns URL items. * @param {HTMLTableElement} tableEl * @return {Array<HTMLElement>} */ _getUrlItems(tableEl) { return this._dom.findAll('.lh-text__url', tableEl); } _setupStickyHeaderElements() { this.topbarEl = this._dom.find('.lh-topbar', this._document); this.scoreScaleEl = this._dom.find('.lh-scorescale', this._document); this.stickyHeaderEl = this._dom.find('.lh-sticky-header', this._document); // Highlighter will be absolutely positioned at first gauge, then transformed on scroll. this.highlightEl = this._dom.createChildOf(this.stickyHeaderEl, 'div', 'lh-highlighter'); } /** * Handle copy events. * @param {ClipboardEvent} e */ onCopy(e) { // Only handle copy button presses (e.g. ignore the user copying page text). if (this._copyAttempt && e.clipboardData) { // We want to write our own data to the clipboard, not the user's text selection. e.preventDefault(); e.clipboardData.setData('text/plain', JSON.stringify(this.json, null, 2)); this._fireEventOn('lh-log', this._document, { cmd: 'log', msg: 'Report JSON copied to clipboard', }); } this._copyAttempt = false; } /** * Copies the report JSON to the clipboard (if supported by the browser). */ onCopyButtonClick() { this._fireEventOn('lh-analytics', this._document, { cmd: 'send', fields: {hitType: 'event', eventCategory: 'report', eventAction: 'copy'}, }); try { if (this._document.queryCommandSupported('copy')) { this._copyAttempt = true; // Note: In Safari 10.0.1, execCommand('copy') returns true if there's // a valid text selection on the page. See http://caniuse.com/#feat=clipboard. if (!this._document.execCommand('copy')) { this._copyAttempt = false; // Prevent event handler from seeing this as a copy attempt. this._fireEventOn('lh-log', this._document, { cmd: 'warn', msg: 'Your browser does not support copy to clipboard.', }); } } } catch (/** @type {Error} */ e) { this._copyAttempt = false; this._fireEventOn('lh-log', this._document, {cmd: 'log', msg: e.message}); } } /** * Resets the state of page before capturing the page for export. * When the user opens the exported HTML page, certain UI elements should * be in their closed state (not opened) and the templates should be unstamped. */ _resetUIState() { this._dropDown.close(); this._dom.resetTemplates(); } /** * Handler for tool button. * @param {Event} e */ onDropDownMenuClick(e) { e.preventDefault(); const el = /** @type {?Element} */ (e.target); if (!el || !el.hasAttribute('data-action')) { return; } switch (el.getAttribute('data-action')) { case 'copy': this.onCopyButtonClick(); break; case 'print-summary': this.collapseAllDetails(); this._print(); break; case 'print-expanded': this.expandAllDetails(); this._print(); break; case 'save-json': { const jsonStr = JSON.stringify(this.json, null, 2); this._saveFile(new Blob([jsonStr], {type: 'application/json'})); break; } case 'save-html': { const htmlStr = this.getReportHtml(); try { this._saveFile(new Blob([htmlStr], {type: 'text/html'})); } catch (/** @type {Error} */ e) { this._fireEventOn('lh-log', this._document, { cmd: 'error', msg: 'Could not export as HTML. ' + e.message, }); } break; } case 'open-viewer': { const viewerPath = '/lighthouse/viewer/'; ReportUIFeatures.openTabAndSendJsonReport(this.json, viewerPath); break; } case 'save-gist': { this.saveAsGist(); break; } case 'toggle-dark': { this._toggleDarkTheme(); break; } } this._dropDown.close(); } _print() { self.print(); } /** * Keyup handler for the document. * @param {KeyboardEvent} e */ onKeyUp(e) { // Ctrl+P - Expands audit details when user prints via keyboard shortcut. if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) { this._dropDown.close(); } } /** * Opens a new tab to the online viewer and sends the local page's JSON results * to the online viewer using postMessage. * @param {LH.Result} reportJson * @param {string} viewerPath * @protected */ static openTabAndSendJsonReport(reportJson, viewerPath) { const VIEWER_ORIGIN = 'https://googlechrome.github.io'; // Chrome doesn't allow us to immediately postMessage to a popup right // after it's created. Normally, we could also listen for the popup window's // load event, however it is cross-domain and won't fire. Instead, listen // for a message from the target app saying "I'm open". const json = reportJson; window.addEventListener('message', function msgHandler(messageEvent) { if (messageEvent.origin !== VIEWER_ORIGIN) { return; } if (popup && messageEvent.data.opened) { popup.postMessage({lhresults: json}, VIEWER_ORIGIN); window.removeEventListener('message', msgHandler); } }); // The popup's window.name is keyed by version+url+fetchTime, so we reuse/select tabs correctly // @ts-ignore - If this is a v2 LHR, use old `generatedTime`. const fallbackFetchTime = /** @type {string} */ (json.generatedTime); const fetchTime = json.fetchTime || fallbackFetchTime; const windowName = `${json.lighthouseVersion}-${json.requestedUrl}-${fetchTime}`; const popup = window.open(`${VIEWER_ORIGIN}${viewerPath}`, windowName); } /** * Expands all audit `<details>`. * Ideally, a print stylesheet could take care of this, but CSS has no way to * open a `<details>` element. */ expandAllDetails() { const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll( '.lh-categories details', this._document)); details.map(detail => detail.open = true); } /** * Collapses all audit `<details>`. * open a `<details>` element. */ collapseAllDetails() { const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll( '.lh-categories details', this._document)); details.map(detail => detail.open = false); } /** * Sets up listeners to collapse audit `<details>` when the user closes the * print dialog, all `<details>` are collapsed. */ _setUpCollapseDetailsAfterPrinting() { // FF and IE implement these old events. if ('onbeforeprint' in self) { self.addEventListener('afterprint', this.collapseAllDetails); } else { const win = /** @type {Window} */ (self); // Note: FF implements both window.onbeforeprint and media listeners. However, // it doesn't matchMedia doesn't fire when matching 'print'. win.matchMedia('print').addListener(mql => { if (mql.matches) { this.expandAllDetails(); } else { this.collapseAllDetails(); } }); } } /** * Returns the html that recreates this report. * @return {string} * @protected */ getReportHtml() { this._resetUIState(); return this._document.documentElement.outerHTML; } /** * Save json as a gist. Unimplemented in base UI features. * @protected */ saveAsGist() { throw new Error('Cannot save as gist from base report'); } /** * Downloads a file (blob) using a[download]. * @param {Blob|File} blob The file to save. * @private */ _saveFile(blob) { const filename = getFilenamePrefix({ finalUrl: this.json.finalUrl, fetchTime: this.json.fetchTime, }); const ext = blob.type.match('json') ? '.json' : '.html'; const href = URL.createObjectURL(blob); const a = this._dom.createElement('a'); a.download = `${filename}${ext}`; a.href = href; this._document.body.appendChild(a); // Firefox requires anchor to be in the DOM. a.click(); // cleanup. this._document.body.removeChild(a); setTimeout(_ => URL.revokeObjectURL(href), 500); } /** * @private * @param {boolean} [force] */ _toggleDarkTheme(force) { const el = this._dom.find('.lh-vars', this._document); // This seems unnecessary, but in DevTools, passing "undefined" as the second // parameter acts like passing "false". // https://github.com/ChromeDevTools/devtools-frontend/blob/dd6a6d4153647c2a4203c327c595692c5e0a4256/front_end/dom_extension/DOMExtension.js#L809-L819 if (typeof force === 'undefined') { el.classList.toggle('dark'); } else { el.classList.toggle('dark', force); } } _updateStickyHeaderOnScroll() { // Show sticky header when the score scale begins to go underneath the topbar. const topbarBottom = this.topbarEl.getBoundingClientRect().bottom; const scoreScaleTop = this.scoreScaleEl.getBoundingClientRect().top; const showStickyHeader = topbarBottom >= scoreScaleTop; // Highlight mini gauge when section is in view. // In view = the last category that starts above the middle of the window. const categoryEls = Array.from(this._document.querySelectorAll('.lh-category')); const categoriesAboveTheMiddle = categoryEls.filter(el => el.getBoundingClientRect().top - window.innerHeight / 2 < 0); const highlightIndex = categoriesAboveTheMiddle.length > 0 ? categoriesAboveTheMiddle.length - 1 : 0; // Category order matches gauge order in sticky header. const gaugeWrapperEls = this.stickyHeaderEl.querySelectorAll('.lh-gauge__wrapper'); const gaugeToHighlight = gaugeWrapperEls[highlightIndex]; const origin = gaugeWrapperEls[0].getBoundingClientRect().left; const offset = gaugeToHighlight.getBoundingClientRect().left - origin; // Mutate at end to avoid layout thrashing. this.highlightEl.style.transform = `translate(${offset}px)`; this.stickyHeaderEl.classList.toggle('lh-sticky-header--visible', showStickyHeader); } } class DropDown { /** * @param {DOM} dom */ constructor(dom) { /** @type {DOM} */ this._dom = dom; /** @type {HTMLElement} */ this._toggleEl; // eslint-disable-line no-unused-expressions /** @type {HTMLElement} */ this._menuEl; // eslint-disable-line no-unused-expressions this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this); this.onToggleClick = this.onToggleClick.bind(this); this.onToggleKeydown = this.onToggleKeydown.bind(this); this.onMenuFocusOut = this.onMenuFocusOut.bind(this); this.onMenuKeydown = this.onMenuKeydown.bind(this); this._getNextMenuItem = this._getNextMenuItem.bind(this); this._getNextSelectableNode = this._getNextSelectableNode.bind(this); this._getPreviousMenuItem = this._getPreviousMenuItem.bind(this); } /** * @param {function(MouseEvent): any} menuClickHandler */ setup(menuClickHandler) { this._toggleEl = this._dom.find('.lh-tools__button', this._dom.document()); this._toggleEl.addEventListener('click', this.onToggleClick); this._toggleEl.addEventListener('keydown', this.onToggleKeydown); this._menuEl = this._dom.find('.lh-tools__dropdown', this._dom.document()); this._menuEl.addEventListener('keydown', this.onMenuKeydown); this._menuEl.addEventListener('click', menuClickHandler); } close() { this._toggleEl.classList.remove('active'); this._toggleEl.setAttribute('aria-expanded', 'false'); if (this._menuEl.contains(this._dom.document().activeElement)) { // Refocus on the tools button if the drop down last had focus this._toggleEl.focus(); } this._menuEl.removeEventListener('focusout', this.onMenuFocusOut); this._dom.document().removeEventListener('keydown', this.onDocumentKeyDown); } /** * @param {HTMLElement} firstFocusElement */ open(firstFocusElement) { if (this._toggleEl.classList.contains('active')) { // If the drop down is already open focus on the element firstFocusElement.focus(); } else { // Wait for drop down transition to complete so options are focusable. this._menuEl.addEventListener('transitionend', () => { firstFocusElement.focus(); }, {once: true}); } this._toggleEl.classList.add('active'); this._toggleEl.setAttribute('aria-expanded', 'true'); this._menuEl.addEventListener('focusout', this.onMenuFocusOut); this._dom.document().addEventListener('keydown', this.onDocumentKeyDown); } /** * Click handler for tools button. * @param {Event} e */ onToggleClick(e) { e.preventDefault(); e.stopImmediatePropagation(); if (this._toggleEl.classList.contains('active')) { this.close(); } else { this.open(this._getNextMenuItem()); } } /** * Handler for tool button. * @param {KeyboardEvent} e */ onToggleKeydown(e) { switch (e.code) { case 'ArrowUp': e.preventDefault(); this.open(this._getPreviousMenuItem()); break; case 'ArrowDown': case 'Enter': case ' ': e.preventDefault(); this.open(this._getNextMenuItem()); break; default: // no op } } /** * Handler for tool DropDown. * @param {KeyboardEvent} e */ onMenuKeydown(e) { const el = /** @type {?HTMLElement} */ (e.target); switch (e.code) { case 'ArrowUp': e.preventDefault(); this._getPreviousMenuItem(el).focus(); break; case 'ArrowDown': e.preventDefault(); this._getNextMenuItem(el).focus(); break; case 'Home': e.preventDefault(); this._getNextMenuItem().focus(); break; case 'End': e.preventDefault(); this._getPreviousMenuItem().focus(); break; default: // no op } } /** * Keydown handler for the document. * @param {KeyboardEvent} e */ onDocumentKeyDown(e) { if (e.keyCode === 27) { // ESC this.close(); } } /** * Focus out handler for the drop down menu. * @param {Event} e */ onMenuFocusOut(e) { // TODO: The focusout event is not supported in our current version of typescript (3.5.3) // https://github.com/microsoft/TypeScript/issues/30716 const focusEvent = /** @type {FocusEvent} */ (e); const focusedEl = /** @type {?HTMLElement} */ (focusEvent.relatedTarget); if (!this._menuEl.contains(focusedEl)) { this.close(); } } /** * @param {Array<Node>} allNodes * @param {?Node=} startNode * @returns {Node} */ _getNextSelectableNode(allNodes, startNode) { const nodes = allNodes.filter((node) => { if (!(node instanceof HTMLElement)) { return false; } // 'Save as Gist' option may be disabled. if (node.hasAttribute('disabled')) { return false; } // 'Save as Gist' option may have display none. if (window.getComputedStyle(node).display === 'none') { return false; } return true; }); let nextIndex = startNode ? (nodes.indexOf(startNode) + 1) : 0; if (nextIndex >= nodes.length) { nextIndex = 0; } return nodes[nextIndex]; } /** * @param {?Element=} startEl * @returns {HTMLElement} */ _getNextMenuItem(startEl) { const nodes = Array.from(this._menuEl.childNodes); return /** @type {HTMLElement} */ (this._getNextSelectableNode(nodes, startEl)); } /** * @param {?Element=} startEl * @returns {HTMLElement} */ _getPreviousMenuItem(startEl) { const nodes = Array.from(this._menuEl.childNodes).reverse(); return /** @type {HTMLElement} */ (this._getNextSelectableNode(nodes, startEl)); } } if (typeof module !== 'undefined' && module.exports) { module.exports = ReportUIFeatures; } else { self.ReportUIFeatures = ReportUIFeatures; } ; /** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /* globals self, Util */ /** @typedef {import('./dom.js')} DOM */ /** @typedef {import('./report-renderer.js')} ReportRenderer */ /** @typedef {import('./details-renderer.js')} DetailsRenderer */ /** @typedef {import('./util.js')} Util */ /** @typedef {'failed'|'warning'|'manual'|'passed'|'notApplicable'} TopLevelClumpId */ class CategoryRenderer { /** * @param {DOM} dom * @param {DetailsRenderer} detailsRenderer */ constructor(dom, detailsRenderer) { /** @type {DOM} */ this.dom = dom; /** @type {DetailsRenderer} */ this.detailsRenderer = detailsRenderer; /** @type {ParentNode} */ this.templateContext = this.dom.document(); this.detailsRenderer.setTemplateContext(this.templateContext); } /** * Display info per top-level clump. Define on class to avoid race with Util init. */ get _clumpTitles() { return { warning: Util.i18n.strings.warningAuditsGroupTitle, manual: Util.i18n.strings.manualAuditsGroupTitle, passed: Util.i18n.strings.passedAuditsGroupTitle, notApplicable: Util.i18n.strings.notApplicableAuditsGroupTitle, }; } /** * @param {LH.ReportResult.AuditRef} audit * @return {Element} */ renderAudit(audit) { const tmpl = this.dom.cloneTemplate('#tmpl-lh-audit', this.templateContext); return this.populateAuditValues(audit, tmpl); } /** * Populate an DOM tree with audit details. Used by renderAudit and renderOpportunity * @param {LH.ReportResult.AuditRef} audit * @param {DocumentFragment} tmpl * @return {!Element} */ populateAuditValues(audit, tmpl) { const strings = Util.i18n.strings; const auditEl = this.dom.find('.lh-audit', tmpl); auditEl.id = audit.result.id; const scoreDisplayMode = audit.result.scoreDisplayMode; if (audit.result.displayValue) { this.dom.find('.lh-audit__display-text', auditEl).textContent = audit.result.displayValue; } const titleEl = this.dom.find('.lh-audit__title', auditEl); titleEl.appendChild(this.dom.convertMarkdownCodeSnippets(audit.result.title)); this.dom.find('.lh-audit__description', auditEl) .appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description)); if (audit.stackPacks) { audit.stackPacks.forEach(pack => { const packElm = this.dom.createElement('div'); packElm.classList.add('lh-audit__stackpack'); const packElmImg = this.dom.createElement('img'); packElmImg.classList.add('lh-audit__stackpack__img'); packElmImg.src = pack.iconDataURL; packElmImg.alt = pack.title; packElm.appendChild(packElmImg); packElm.appendChild(this.dom.convertMarkdownLinkSnippets(pack.description)); this.dom.find('.lh-audit__stackpacks', auditEl) .appendChild(packElm); }); } const header = /** @type {HTMLDetailsElement} */ (this.dom.find('details', auditEl)); if (audit.result.details) { const elem = this.detailsRenderer.render(audit.result.details); if (elem) { elem.classList.add('lh-details'); header.appendChild(elem); } } // Add chevron SVG to the end of the summary this.dom.find('.lh-chevron-container', auditEl).appendChild(this._createChevron()); this._setRatingClass(auditEl, audit.result.score, scoreDisplayMode); if (audit.result.scoreDisplayMode === 'error') { auditEl.classList.add(`lh-audit--error`); const textEl = this.dom.find('.lh-audit__display-text', auditEl); textEl.textContent = strings.errorLabel; textEl.classList.add('tooltip-boundary'); const tooltip = this.dom.createChildOf(textEl, 'div', 'tooltip tooltip--error'); tooltip.textContent = audit.result.errorMessage || strings.errorMissingAuditInfo; } else if (audit.result.explanation) { const explEl = this.dom.createChildOf(titleEl, 'div', 'lh-audit-explanation'); explEl.textContent = audit.result.explanation; } const warnings = audit.result.warnings; if (!warnings || warnings.length === 0) return auditEl; // Add list of warnings or singular warning const summaryEl = this.dom.find('summary', header); const warningsEl = this.dom.createChildOf(summaryEl, 'div', 'lh-warnings'); this.dom.createChildOf(warningsEl, 'span').textContent = strings.warningHeader; if (warnings.length === 1) { warningsEl.appendChild(this.dom.document().createTextNode(warnings.join(''))); } else { const warningsUl = this.dom.createChildOf(warningsEl, 'ul'); for (const warning of warnings) { const item = this.dom.createChildOf(warningsUl, 'li'); item.textContent = warning; } } return auditEl; } /** * @return {HTMLElement} */ _createChevron() { const chevronTmpl = this.dom.cloneTemplate('#tmpl-lh-chevron', this.templateContext); const chevronEl = this.dom.find('.lh-chevron', chevronTmpl); return chevronEl; } /** * @param {Element} element DOM node to populate with values. * @param {number|null} score * @param {string} scoreDisplayMode * @return {!Element} */ _setRatingClass(element, score, scoreDisplayMode) { const rating = Util.calculateRating(score, scoreDisplayMode); element.classList.add(`lh-audit--${scoreDisplayMode.toLowerCase()}`); if (scoreDisplayMode !== 'informative') { element.classList.add(`lh-audit--${rating}`); } return element; } /** * @param {LH.ReportResult.Category} category * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions * @return {Element} */ renderCategoryHeader(category, groupDefinitions) { const tmpl = this.dom.cloneTemplate('#tmpl-lh-category-header', this.templateContext); const gaugeContainerEl = this.dom.find('.lh-score__gauge', tmpl); const gaugeEl = this.renderScoreGauge(category, groupDefinitions); gaugeContainerEl.appendChild(gaugeEl); if (category.description) { const descEl = this.dom.convertMarkdownLinkSnippets(category.description); this.dom.find('.lh-category-header__description', tmpl).appendChild(descEl); } return /** @type {Element} */ (tmpl.firstElementChild); } /** * Renders the group container for a group of audits. Individual audit elements can be added * directly to the returned element. * @param {LH.Result.ReportGroup} group * @return {Element} */ renderAuditGroup(group) { const groupEl = this.dom.createElement('div', 'lh-audit-group'); const auditGroupHeader = this.dom.createElement('div', 'lh-audit-group__header'); this.dom.createChildOf(auditGroupHeader, 'span', 'lh-audit-group__title') .textContent = group.title; if (group.description) { const descriptionEl = this.dom.convertMarkdownLinkSnippets(group.description); descriptionEl.classList.add('lh-audit-group__description'); auditGroupHeader.appendChild(descriptionEl); } groupEl.appendChild(auditGroupHeader); return groupEl; } /** * Takes an array of auditRefs, groups them if requested, then returns an * array of audit and audit-group elements. * @param {Array<LH.ReportResult.AuditRef>} auditRefs * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions * @return {Array<Element>} */ _renderGroupedAudits(auditRefs, groupDefinitions) { // Audits grouped by their group (or under notAGroup). /** @type {Map<string, Array<LH.ReportResult.AuditRef>>} */ const grouped = new Map(); // Add audits without a group first so they will appear first. const notAGroup = 'NotAGroup'; grouped.set(notAGroup, []); for (const auditRef of auditRefs) { const groupId = auditRef.group || notAGroup; const groupAuditRefs = grouped.get(groupId) || []; groupAuditRefs.push(auditRef); grouped.set(groupId, groupAuditRefs); } /** @type {Array<Element>} */ const auditElements = []; for (const [groupId, groupAuditRefs] of grouped) { if (groupId === notAGroup) { // Push not-grouped audits individually. for (const auditRef of groupAuditRefs) { auditElements.push(this.renderAudit(auditRef)); } continue; } // Push grouped audits as a group. const groupDef = groupDefinitions[groupId]; const auditGroupElem = this.renderAuditGroup(groupDef); for (const auditRef of groupAuditRefs) { auditGroupElem.appendChild(this.renderAudit(auditRef)); } auditGroupElem.classList.add(`lh-audit-group--${groupId}`); auditElements.push(auditGroupElem); } return auditElements; } /** * Take a set of audits, group them if they have groups, then render in a top-level * clump that can't be expanded/collapsed. * @param {Array<LH.ReportResult.AuditRef>} auditRefs * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions * @return {Element} */ renderUnexpandableClump(auditRefs, groupDefinitions) { const clumpElement = this.dom.createElement('div'); const elements = this._renderGroupedAudits(auditRefs, groupDefinitions); elements.forEach(elem => clumpElement.appendChild(elem)); return clumpElement; } /** * Take a set of audits and render in a top-level, expandable clump that starts * in a collapsed state. * @param {Exclude<TopLevelClumpId, 'failed'>} clumpId * @param {{auditRefs: Array<LH.ReportResult.AuditRef>, description?: string}} clumpOpts * @return {!Element} */ renderClump(clumpId, {auditRefs, description}) { const clumpTmpl = this.dom.cloneTemplate('#tmpl-lh-clump', this.templateContext); const clumpElement = this.dom.find('.lh-clump', clumpTmpl); if (clumpId === 'warning') { clumpElement.setAttribute('open', ''); } const summaryInnerEl = this.dom.find('.lh-audit-group__summary', clumpElement); const chevronEl = summaryInnerEl.appendChild(this._createChevron()); chevronEl.title = Util.i18n.strings.auditGroupExpandTooltip; const headerEl = this.dom.find('.lh-audit-group__header', clumpElement); const title = this._clumpTitles[clumpId]; this.dom.find('.lh-audit-group__title', headerEl).textContent = title; if (description) { const descriptionEl = this.dom.convertMarkdownLinkSnippets(description); descriptionEl.classList.add('lh-audit-group__description'); headerEl.appendChild(descriptionEl); } const itemCountEl = this.dom.find('.lh-audit-group__itemcount', clumpElement); itemCountEl.textContent = `(${auditRefs.length})`; // Add all audit results to the clump. const auditElements = auditRefs.map(this.renderAudit.bind(this)); clumpElement.append(...auditElements); clumpElement.classList.add(`lh-clump--${clumpId.toLowerCase()}`); return clumpElement; } /** * @param {ParentNode} context */ setTemplateContext(context) { this.templateContext = context; this.detailsRenderer.setTemplateContext(context); } /** * @param {LH.ReportResult.Category} category * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions * @return {DocumentFragment} */ renderScoreGauge(category, groupDefinitions) { // eslint-disable-line no-unused-vars const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge', this.templateContext); const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge__wrapper', tmpl)); wrapper.href = `#${category.id}`; wrapper.classList.add(`lh-gauge__wrapper--${Util.calculateRating(category.score)}`); if (Util.isPluginCategory(category.id)) { wrapper.classList.add('lh-gauge__wrapper--plugin'); } // Cast `null` to 0 const numericScore = Number(category.score); const gauge = this.dom.find('.lh-gauge', tmpl); /** @type {?SVGCircleElement} */ const gaugeArc = gauge.querySelector('.lh-gauge-arc'); if (gaugeArc) this._setGaugeArc(gaugeArc, numericScore); const scoreOutOf100 = Math.round(numericScore * 100); const percentageEl = this.dom.find('.lh-gauge__percentage', tmpl); percentageEl.textContent = scoreOutOf100.toString(); if (category.score === null) { percentageEl.textContent = '?'; percentageEl.title = Util.i18n.strings.errorLabel; } this.dom.find('.lh-gauge__label', tmpl).textContent = category.title; return tmpl; } /** * Define the score arc of the gauge * Credit to xgad for the original technique: https://codepen.io/xgad/post/svg-radial-progress-meters * @param {SVGCircleElement} arcElem * @param {number} percent */ _setGaugeArc(arcElem, percent) { const circumferencePx = 2 * Math.PI * Number(arcElem.getAttribute('r')); // The rounded linecap of the stroke extends the arc past its start and end. // First, we tweak the -90deg rotation to start exactly at the top of the circle. const strokeWidthPx = Number(arcElem.getAttribute('stroke-width')); const rotationalAdjustmentPercent = 0.25 * strokeWidthPx / circumferencePx; arcElem.style.transform = `rotate(${-90 + rotationalAdjustmentPercent * 360}deg)`; // Then, we terminate the line a little early as well. let arcLengthPx = percent * circumferencePx - strokeWidthPx / 2; // Special cases. No dot for 0, and full ring if 100 if (percent === 0) arcElem.style.opacity = '0'; if (percent === 1) arcLengthPx = circumferencePx; arcElem.style.strokeDasharray = `${Math.max(arcLengthPx, 0)} ${circumferencePx}`; } /** * @param {LH.ReportResult.AuditRef} audit * @return {boolean} */ _auditHasWarning(audit) { return Boolean(audit.result.warnings && audit.result.warnings.length); } /** * Returns the id of the top-level clump to put this audit in. * @param {LH.ReportResult.AuditRef} auditRef * @return {TopLevelClumpId} */ _getClumpIdForAuditRef(auditRef) { const scoreDisplayMode = auditRef.result.scoreDisplayMode; if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') { return scoreDisplayMode; } if (Util.showAsPassed(auditRef.result)) { if (this._auditHasWarning(auditRef)) { return 'warning'; } else { return 'passed'; } } else { return 'failed'; } } /** * Renders a set of top level sections (clumps), under a status of failed, warning, * manual, passed, or notApplicable. The result ends up something like: * * failed clump * ├── audit 1 (w/o group) * ├── audit 2 (w/o group) * ├── audit group * | ├── audit 3 * | └── audit 4 * └── audit group * ├── audit 5 * └── audit 6 * other clump (e.g. 'manual') * ├── audit 1 * ├── audit 2 * ├── … * ⋮ * @param {LH.ReportResult.Category} category * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions] * @return {Element} */ render(category, groupDefinitions = {}) { const element = this.dom.createElement('div', 'lh-category'); this.createPermalinkSpan(element, category.id); element.appendChild(this.renderCategoryHeader(category, groupDefinitions)); // Top level clumps for audits, in order they will appear in the report. /** @type {Map<TopLevelClumpId, Array<LH.ReportResult.AuditRef>>} */ const clumps = new Map(); clumps.set('failed', []); clumps.set('warning', []); clumps.set('manual', []); clumps.set('passed', []); clumps.set('notApplicable', []); // Sort audits into clumps. for (const auditRef of category.auditRefs) { const clumpId = this._getClumpIdForAuditRef(auditRef); const clump = /** @type {Array<LH.ReportResult.AuditRef>} */ (clumps.get(clumpId)); // already defined clump.push(auditRef); clumps.set(clumpId, clump); } // Render each clump. for (const [clumpId, auditRefs] of clumps) { if (auditRefs.length === 0) continue; if (clumpId === 'failed') { const clumpElem = this.renderUnexpandableClump(auditRefs, groupDefinitions); clumpElem.classList.add(`lh-clump--failed`); element.appendChild(clumpElem); continue; } const description = clumpId === 'manual' ? category.manualDescription : undefined; const clumpElem = this.renderClump(clumpId, {auditRefs, description}); element.appendChild(clumpElem); } return element; } /** * Create a non-semantic span used for hash navigation of categories * @param {Element} element * @param {string} id */ createPermalinkSpan(element, id) { const permalinkEl = this.dom.createChildOf(element, 'span', 'lh-permalink'); permalinkEl.id = id; } } if (typeof module !== 'undefined' && module.exports) { module.exports = CategoryRenderer; } else { self.CategoryRenderer = CategoryRenderer; } ; /** * @license * Copyright 2018 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /* globals self, Util, CategoryRenderer */ /** @typedef {import('./dom.js')} DOM */ class PerformanceCategoryRenderer extends CategoryRenderer { /** * @param {LH.ReportResult.AuditRef} audit * @return {!Element} */ _renderMetric(audit) { const tmpl = this.dom.cloneTemplate('#tmpl-lh-metric', this.templateContext); const element = this.dom.find('.lh-metric', tmpl); element.id = audit.result.id; const rating = Util.calculateRating(audit.result.score, audit.result.scoreDisplayMode); element.classList.add(`lh-metric--${rating}`); const titleEl = this.dom.find('.lh-metric__title', tmpl); titleEl.textContent = audit.result.title; const valueEl = this.dom.find('.lh-metric__value', tmpl); valueEl.textContent = audit.result.displayValue || ''; const descriptionEl = this.dom.find('.lh-metric__description', tmpl); descriptionEl.appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description)); if (audit.result.scoreDisplayMode === 'error') { descriptionEl.textContent = ''; valueEl.textContent = 'Error!'; const tooltip = this.dom.createChildOf(descriptionEl, 'span'); tooltip.textContent = audit.result.errorMessage || 'Report error: no metric information'; } return element; } /** * @param {LH.ReportResult.AuditRef} audit * @param {number} scale * @return {!Element} */ _renderOpportunity(audit, scale) { const oppTmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity', this.templateContext); const element = this.populateAuditValues(audit, oppTmpl); element.id = audit.result.id; if (!audit.result.details || audit.result.scoreDisplayMode === 'error') { return element; } const details = audit.result.details; if (details.type !== 'opportunity') { return element; } // Overwrite the displayValue with opportunity's wastedMs const displayEl = this.dom.find('.lh-audit__display-text', element); const sparklineWidthPct = `${details.overallSavingsMs / scale * 100}%`; this.dom.find('.lh-sparkline__bar', element).style.width = sparklineWidthPct; displayEl.textContent = Util.i18n.formatSeconds(details.overallSavingsMs, 0.01); // Set [title] tooltips if (audit.result.displayValue) { const displayValue = audit.result.displayValue; this.dom.find('.lh-load-opportunity__sparkline', element).title = displayValue; displayEl.title = displayValue; } return element; } /** * Get an audit's wastedMs to sort the opportunity by, and scale the sparkline width * Opportunities with an error won't have a details object, so MIN_VALUE is returned to keep any * erroring opportunities last in sort order. * @param {LH.ReportResult.AuditRef} audit * @return {number} */ _getWastedMs(audit) { if (audit.result.details && audit.result.details.type === 'opportunity') { const details = audit.result.details; if (typeof details.overallSavingsMs !== 'number') { throw new Error('non-opportunity details passed to _getWastedMs'); } return details.overallSavingsMs; } else { return Number.MIN_VALUE; } } /** * Get a link to the interactive scoring calculator with the metric values. * @param {LH.ReportResult.AuditRef[]} auditRefs * @return {string} */ _getScoringCalculatorHref(auditRefs) { const v5andv6metrics = auditRefs.filter(audit => audit.group === 'metrics'); const fci = auditRefs.find(audit => audit.id === 'first-cpu-idle'); const fmp = auditRefs.find(audit => audit.id === 'first-meaningful-paint'); if (fci) v5andv6metrics.push(fci); if (fmp) v5andv6metrics.push(fmp); const metricPairs = v5andv6metrics.map(audit => { const value = typeof audit.result.numericValue !== 'undefined' ? audit.result.numericValue.toString() : 'null'; return [audit.id, value]; }); const paramPairs = [...metricPairs]; if (Util.reportJson) { paramPairs.push(['device', Util.reportJson.configSettings.emulatedFormFactor]); paramPairs.push(['version', Util.reportJson.lighthouseVersion]); } const params = new URLSearchParams(paramPairs); const url = new URL('https://googlechrome.github.io/lighthouse/scorecalc/'); url.hash = params.toString(); return url.href; } /** * @param {LH.ReportResult.Category} category * @param {Object<string, LH.Result.ReportGroup>} groups * @param {'PSI'=} environment 'PSI' and undefined are the only valid values * @return {Element} * @override */ render(category, groups, environment) { const strings = Util.i18n.strings; const element = this.dom.createElement('div', 'lh-category'); if (environment === 'PSI') { const gaugeEl = this.dom.createElement('div', 'lh-score__gauge'); gaugeEl.appendChild(this.renderScoreGauge(category, groups)); element.appendChild(gaugeEl); } else { this.createPermalinkSpan(element, category.id); element.appendChild(this.renderCategoryHeader(category, groups)); } // Metrics. const metricAuditsEl = this.renderAuditGroup(groups.metrics); // Metric descriptions toggle. const toggleTmpl = this.dom.cloneTemplate('#tmpl-lh-metrics-toggle', this.templateContext); const _toggleEl = this.dom.find('.lh-metrics-toggle', toggleTmpl); metricAuditsEl.append(..._toggleEl.childNodes); const metricAudits = category.auditRefs.filter(audit => audit.group === 'metrics'); const keyMetrics = metricAudits.slice(0, 3); const otherMetrics = metricAudits.slice(3); const metricsBoxesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-columns'); const metricsColumn1El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column'); const metricsColumn2El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column'); keyMetrics.forEach(item => { metricsColumn1El.appendChild(this._renderMetric(item)); }); otherMetrics.forEach(item => { metricsColumn2El.appendChild(this._renderMetric(item)); }); // 'Values are estimated and may vary' is used as the category description for PSI if (environment !== 'PSI') { const estValuesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-metrics__disclaimer'); const disclaimerEl = this.dom.convertMarkdownLinkSnippets(strings.varianceDisclaimer); estValuesEl.appendChild(disclaimerEl); // Add link to score calculator. const calculatorLink = this.dom.createChildOf(estValuesEl, 'a', 'lh-calclink'); calculatorLink.target = '_blank'; calculatorLink.textContent = strings.calculatorLink; calculatorLink.href = this._getScoringCalculatorHref(category.auditRefs); } metricAuditsEl.classList.add('lh-audit-group--metrics'); element.appendChild(metricAuditsEl); // Filmstrip const timelineEl = this.dom.createChildOf(element, 'div', 'lh-filmstrip-container'); const thumbnailAudit = category.auditRefs.find(audit => audit.id === 'screenshot-thumbnails'); const thumbnailResult = thumbnailAudit && thumbnailAudit.result; if (thumbnailResult && thumbnailResult.details) { timelineEl.id = thumbnailResult.id; const filmstripEl = this.detailsRenderer.render(thumbnailResult.details); filmstripEl && timelineEl.appendChild(filmstripEl); } // Budgets /** @type {Array<Element>} */ const budgetTableEls = []; ['performance-budget', 'timing-budget'].forEach((id) => { const audit = category.auditRefs.find(audit => audit.id === id); if (audit && audit.result.details) { const table = this.detailsRenderer.render(audit.result.details); if (table) { table.id = id; table.classList.add('lh-audit'); budgetTableEls.push(table); } } }); if (budgetTableEls.length > 0) { const budgetsGroupEl = this.renderAuditGroup(groups.budgets); budgetTableEls.forEach(table => budgetsGroupEl.appendChild(table)); budgetsGroupEl.classList.add('lh-audit-group--budgets'); element.appendChild(budgetsGroupEl); } // Opportunities const opportunityAudits = category.auditRefs .filter(audit => audit.group === 'load-opportunities' && !Util.showAsPassed(audit.result)) .sort((auditA, auditB) => this._getWastedMs(auditB) - this._getWastedMs(auditA)); if (opportunityAudits.length) { // Scale the sparklines relative to savings, minimum 2s to not overstate small savings const minimumScale = 2000; const wastedMsValues = opportunityAudits.map(audit => this._getWastedMs(audit)); const maxWaste = Math.max(...wastedMsValues); const scale = Math.max(Math.ceil(maxWaste / 1000) * 1000, minimumScale); const groupEl = this.renderAuditGroup(groups['load-opportunities']); const tmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity-header', this.templateContext); this.dom.find('.lh-load-opportunity__col--one', tmpl).textContent = strings.opportunityResourceColumnLabel; this.dom.find('.lh-load-opportunity__col--two', tmpl).textContent = strings.opportunitySavingsColumnLabel; const headerEl = this.dom.find('.lh-load-opportunity__header', tmpl); groupEl.appendChild(headerEl); opportunityAudits.forEach(item => groupEl.appendChild(this._renderOpportunity(item, scale))); groupEl.classList.add('lh-audit-group--load-opportunities'); element.appendChild(groupEl); } // Diagnostics const diagnosticAudits = category.auditRefs .filter(audit => audit.group === 'diagnostics' && !Util.showAsPassed(audit.result)) .sort((a, b) => { const scoreA = a.result.scoreDisplayMode === 'informative' ? 100 : Number(a.result.score); const scoreB = b.result.scoreDisplayMode === 'informative' ? 100 : Number(b.result.score); return scoreA - scoreB; }); if (diagnosticAudits.length) { const groupEl = this.renderAuditGroup(groups['diagnostics']); diagnosticAudits.forEach(item => groupEl.appendChild(this.renderAudit(item))); groupEl.classList.add('lh-audit-group--diagnostics'); element.appendChild(groupEl); } // Passed audits const passedAudits = category.auditRefs .filter(audit => (audit.group === 'load-opportunities' || audit.group === 'diagnostics') && Util.showAsPassed(audit.result)); if (!passedAudits.length) return element; const clumpOpts = { auditRefs: passedAudits, groupDefinitions: groups, }; const passedElem = this.renderClump('passed', clumpOpts); element.appendChild(passedElem); return element; } } if (typeof module !== 'undefined' && module.exports) { module.exports = PerformanceCategoryRenderer; } else { self.PerformanceCategoryRenderer = PerformanceCategoryRenderer; } ; /** * @license * Copyright 2018 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /* globals self, Util, CategoryRenderer */ /** * An always-increasing counter for making unique SVG ID suffixes. */ const getUniqueSuffix = (() => { let svgSuffix = 0; return function() { return svgSuffix++; }; })(); class PwaCategoryRenderer extends CategoryRenderer { /** * @param {LH.ReportResult.Category} category * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions] * @return {Element} */ render(category, groupDefinitions = {}) { const categoryElem = this.dom.createElement('div', 'lh-category'); this.createPermalinkSpan(categoryElem, category.id); categoryElem.appendChild(this.renderCategoryHeader(category, groupDefinitions)); const auditRefs = category.auditRefs; // Regular audits aren't split up into pass/fail/notApplicable clumps, they're // all put in a top-level clump that isn't expandable/collapsible. const regularAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode !== 'manual'); const auditsElem = this._renderAudits(regularAuditRefs, groupDefinitions); categoryElem.appendChild(auditsElem); // Manual audits are still in a manual clump. const manualAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode === 'manual'); const manualElem = this.renderClump('manual', {auditRefs: manualAuditRefs, description: category.manualDescription}); categoryElem.appendChild(manualElem); return categoryElem; } /** * @param {LH.ReportResult.Category} category * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions * @return {DocumentFragment} */ renderScoreGauge(category, groupDefinitions) { // Defer to parent-gauge style if category error. if (category.score === null) { return super.renderScoreGauge(category, groupDefinitions); } const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge--pwa', this.templateContext); const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge--pwa__wrapper', tmpl)); wrapper.href = `#${category.id}`; // Correct IDs in case multiple instances end up in the page. const svgRoot = tmpl.querySelector('svg'); if (!svgRoot) throw new Error('no SVG element found in PWA score gauge template'); PwaCategoryRenderer._makeSvgReferencesUnique(svgRoot); const allGroups = this._getGroupIds(category.auditRefs); const passingGroupIds = this._getPassingGroupIds(category.auditRefs); if (passingGroupIds.size === allGroups.size) { wrapper.classList.add('lh-badged--all'); } else { for (const passingGroupId of passingGroupIds) { wrapper.classList.add(`lh-badged--${passingGroupId}`); } } this.dom.find('.lh-gauge__label', tmpl).textContent = category.title; wrapper.title = this._getGaugeTooltip(category.auditRefs, groupDefinitions); return tmpl; } /** * Returns the group IDs found in auditRefs. * @param {Array<LH.ReportResult.AuditRef>} auditRefs * @return {!Set<string>} */ _getGroupIds(auditRefs) { const groupIds = auditRefs.map(ref => ref.group).filter(/** @return {g is string} */ g => !!g); return new Set(groupIds); } /** * Returns the group IDs whose audits are all considered passing. * @param {Array<LH.ReportResult.AuditRef>} auditRefs * @return {Set<string>} */ _getPassingGroupIds(auditRefs) { const uniqueGroupIds = this._getGroupIds(auditRefs); // Remove any that have a failing audit. for (const auditRef of auditRefs) { if (!Util.showAsPassed(auditRef.result) && auditRef.group) { uniqueGroupIds.delete(auditRef.group); } } return uniqueGroupIds; } /** * Returns a tooltip string summarizing group pass rates. * @param {Array<LH.ReportResult.AuditRef>} auditRefs * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions * @return {string} */ _getGaugeTooltip(auditRefs, groupDefinitions) { const groupIds = this._getGroupIds(auditRefs); const tips = []; for (const groupId of groupIds) { const groupAuditRefs = auditRefs.filter(ref => ref.group === groupId); const auditCount = groupAuditRefs.length; const passedCount = groupAuditRefs.filter(ref => Util.showAsPassed(ref.result)).length; const title = groupDefinitions[groupId].title; tips.push(`${title}: ${passedCount}/${auditCount}`); } return tips.join(', '); } /** * Render non-manual audits in groups, giving a badge to any group that has * all passing audits. * @param {Array<LH.ReportResult.AuditRef>} auditRefs * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions * @return {Element} */ _renderAudits(auditRefs, groupDefinitions) { const auditsElem = this.renderUnexpandableClump(auditRefs, groupDefinitions); // Add a 'badged' class to group if all audits in that group pass. const passsingGroupIds = this._getPassingGroupIds(auditRefs); for (const groupId of passsingGroupIds) { const groupElem = this.dom.find(`.lh-audit-group--${groupId}`, auditsElem); groupElem.classList.add('lh-badged'); } return auditsElem; } /** * Alters SVG id references so multiple instances of an SVG element can coexist * in a single page. If `svgRoot` has a `<defs>` block, gives all elements defined * in it unique ids, then updates id references (`<use xlink:href="...">`, * `fill="url(#...)"`) to the altered ids in all descendents of `svgRoot`. * @param {SVGElement} svgRoot */ static _makeSvgReferencesUnique(svgRoot) { const defsEl = svgRoot.querySelector('defs'); if (!defsEl) return; const idSuffix = getUniqueSuffix(); const elementsToUpdate = defsEl.querySelectorAll('[id]'); for (const el of elementsToUpdate) { const oldId = el.id; const newId = `${oldId}-${idSuffix}`; el.id = newId; // Update all <use>s. const useEls = svgRoot.querySelectorAll(`use[href="#${oldId}"]`); for (const useEl of useEls) { useEl.setAttribute('href', `#${newId}`); } // Update all fill="url(#...)"s. const fillEls = svgRoot.querySelectorAll(`[fill="url(#${oldId})"]`); for (const fillEl of fillEls) { fillEl.setAttribute('fill', `url(#${newId})`); } } } } if (typeof module !== 'undefined' && module.exports) { module.exports = PwaCategoryRenderer; } else { self.PwaCategoryRenderer = PwaCategoryRenderer; } ; /** * @license * Copyright 2017 The Lighthouse Authors. All Rights Reserved. * * Licensed under the Apache License, Version 2.0 (the "License"); * you may not use this file except in compliance with the License. * You may obtain a copy of the License at * * http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by applicable law or agreed to in writing, software * distributed under the License is distributed on an "AS-IS" BASIS, * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. * See the License for the specific language governing permissions and * limitations under the License. */ 'use strict'; /** * @fileoverview The entry point for rendering the Lighthouse report based on the JSON output. * This file is injected into the report HTML along with the JSON report. * * Dummy text for ensuring report robustness: \u003c/script> pre<scriptpost %%LIGHTHOUSE_JSON%% */ /** @typedef {import('./category-renderer')} CategoryRenderer */ /** @typedef {import('./dom.js')} DOM */ /* globals self, Util, DetailsRenderer, CategoryRenderer, I18n, PerformanceCategoryRenderer, PwaCategoryRenderer */ class ReportRenderer { /** * @param {DOM} dom */ constructor(dom) { /** @type {DOM} */ this._dom = dom; /** @type {ParentNode} */ this._templateContext = this._dom.document(); } /** * @param {LH.Result} result * @param {Element} container Parent element to render the report into. * @return {!Element} */ renderReport(result, container) { this._dom.setLighthouseChannel(result.configSettings.channel || 'unknown'); const report = Util.prepareReportResult(result); container.textContent = ''; // Remove previous report. container.appendChild(this._renderReport(report)); return container; } /** * Define a custom element for <templates> to be extracted from. For example: * this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html')) * @param {ParentNode} context */ setTemplateContext(context) { this._templateContext = context; } /** * @param {LH.ReportResult} report * @return {DocumentFragment} */ _renderReportTopbar(report) { const el = this._dom.cloneTemplate('#tmpl-lh-topbar', this._templateContext); const metadataUrl = /** @type {HTMLAnchorElement} */ (this._dom.find('.lh-topbar__url', el)); metadataUrl.href = metadataUrl.textContent = report.finalUrl; metadataUrl.title = report.finalUrl; return el; } /** * @return {DocumentFragment} */ _renderReportHeader() { const el = this._dom.cloneTemplate('#tmpl-lh-heading', this._templateContext); const domFragment = this._dom.cloneTemplate('#tmpl-lh-scores-wrapper', this._templateContext); const placeholder = this._dom.find('.lh-scores-wrapper-placeholder', el); /** @type {HTMLDivElement} */ (placeholder.parentNode).replaceChild(domFragment, placeholder); return el; } /** * @param {LH.ReportResult} report * @return {DocumentFragment} */ _renderReportFooter(report) { const footer = this._dom.cloneTemplate('#tmpl-lh-footer', this._templateContext); const env = this._dom.find('.lh-env__items', footer); env.id = 'runtime-settings'; this._dom.find('.lh-env__title', footer).textContent = Util.i18n.strings.runtimeSettingsTitle; const envValues = Util.getEnvironmentDisplayValues(report.configSettings || {}); [ {name: Util.i18n.strings.runtimeSettingsUrl, description: report.finalUrl}, {name: Util.i18n.strings.runtimeSettingsFetchTime, description: Util.i18n.formatDateTime(report.fetchTime)}, ...envValues, {name: Util.i18n.strings.runtimeSettingsChannel, description: report.configSettings.channel}, {name: Util.i18n.strings.runtimeSettingsUA, description: report.userAgent}, {name: Util.i18n.strings.runtimeSettingsUANetwork, description: report.environment && report.environment.networkUserAgent}, {name: Util.i18n.strings.runtimeSettingsBenchmark, description: report.environment && report.environment.benchmarkIndex.toFixed(0)}, ].forEach(runtime => { if (!runtime.description) return; const item = this._dom.cloneTemplate('#tmpl-lh-env__items', env); this._dom.find('.lh-env__name', item).textContent = runtime.name; this._dom.find('.lh-env__description', item).textContent = runtime.description; env.appendChild(item); }); this._dom.find('.lh-footer__version_issue', footer).textContent = Util.i18n.strings.footerIssue; this._dom.find('.lh-footer__version', footer).textContent = report.lighthouseVersion; return footer; } /** * Returns a div with a list of top-level warnings, or an empty div if no warnings. * @param {LH.ReportResult} report * @return {Node} */ _renderReportWarnings(report) { if (!report.runWarnings || report.runWarnings.length === 0) { return this._dom.createElement('div'); } const container = this._dom.cloneTemplate('#tmpl-lh-warnings--toplevel', this._templateContext); const message = this._dom.find('.lh-warnings__msg', container); message.textContent = Util.i18n.strings.toplevelWarningsMessage; const warnings = this._dom.find('ul', container); for (const warningString of report.runWarnings) { const warning = warnings.appendChild(this._dom.createElement('li')); warning.textContent = warningString; } return container; } /** * @param {LH.ReportResult} report * @param {CategoryRenderer} categoryRenderer * @param {Record<string, CategoryRenderer>} specificCategoryRenderers * @return {!DocumentFragment[]} */ _renderScoreGauges(report, categoryRenderer, specificCategoryRenderers) { // Group gauges in this order: default, pwa, plugins. const defaultGauges = []; const customGauges = []; // PWA. const pluginGauges = []; for (const category of Object.values(report.categories)) { const renderer = specificCategoryRenderers[category.id] || categoryRenderer; const categoryGauge = renderer.renderScoreGauge(category, report.categoryGroups || {}); if (Util.isPluginCategory(category.id)) { pluginGauges.push(categoryGauge); } else if (renderer.renderScoreGauge === categoryRenderer.renderScoreGauge) { // The renderer for default categories is just the default CategoryRenderer. // If the functions are equal, then renderer is an instance of CategoryRenderer. // For example, the PWA category uses PwaCategoryRenderer, which overrides // CategoryRenderer.renderScoreGauge, so it would fail this check and be placed // in the customGauges bucket. defaultGauges.push(categoryGauge); } else { customGauges.push(categoryGauge); } } return [...defaultGauges, ...customGauges, ...pluginGauges]; } /** * @param {LH.ReportResult} report * @return {!DocumentFragment} */ _renderReport(report) { const i18n = new I18n(report.configSettings.locale, { // Set missing renderer strings to default (english) values. ...Util.UIStrings, ...report.i18n.rendererFormattedStrings, }); Util.i18n = i18n; Util.reportJson = report; const detailsRenderer = new DetailsRenderer(this._dom); const categoryRenderer = new CategoryRenderer(this._dom, detailsRenderer); categoryRenderer.setTemplateContext(this._templateContext); /** @type {Record<string, CategoryRenderer>} */ const specificCategoryRenderers = { performance: new PerformanceCategoryRenderer(this._dom, detailsRenderer), pwa: new PwaCategoryRenderer(this._dom, detailsRenderer), }; Object.values(specificCategoryRenderers).forEach(renderer => { renderer.setTemplateContext(this._templateContext); }); const headerContainer = this._dom.createElement('div'); headerContainer.appendChild(this._renderReportHeader()); const reportContainer = this._dom.createElement('div', 'lh-container'); const reportSection = this._dom.createElement('div', 'lh-report'); reportSection.appendChild(this._renderReportWarnings(report)); let scoreHeader; const isSoloCategory = Object.keys(report.categories).length === 1; if (!isSoloCategory) { scoreHeader = this._dom.createElement('div', 'lh-scores-header'); } else { headerContainer.classList.add('lh-header--solo-category'); } if (scoreHeader) { const scoreScale = this._dom.cloneTemplate('#tmpl-lh-scorescale', this._templateContext); const scoresContainer = this._dom.find('.lh-scores-container', headerContainer); scoreHeader.append( ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers)); scoresContainer.appendChild(scoreHeader); scoresContainer.appendChild(scoreScale); const stickyHeader = this._dom.createElement('div', 'lh-sticky-header'); stickyHeader.append( ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers)); reportContainer.appendChild(stickyHeader); } const categories = reportSection.appendChild(this._dom.createElement('div', 'lh-categories')); for (const category of Object.values(report.categories)) { const renderer = specificCategoryRenderers[category.id] || categoryRenderer; // .lh-category-wrapper is full-width and provides horizontal rules between categories. // .lh-category within has the max-width: var(--report-width); const wrapper = renderer.dom.createChildOf(categories, 'div', 'lh-category-wrapper'); wrapper.appendChild(renderer.render(category, report.categoryGroups)); } const reportFragment = this._dom.createFragment(); const topbarDocumentFragment = this._renderReportTopbar(report); reportFragment.appendChild(topbarDocumentFragment); reportFragment.appendChild(reportContainer); reportContainer.appendChild(headerContainer); reportContainer.appendChild(reportSection); reportSection.appendChild(this._renderReportFooter(report)); return reportFragment; } } if (typeof module !== 'undefined' && module.exports) { module.exports = ReportRenderer; } else { self.ReportRenderer = ReportRenderer; } ; /** * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved. * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. */ 'use strict'; /* globals self, URL */ // Not named `NBSP` because that creates a duplicate identifier (util.js). const NBSP2 = '\xa0'; class I18n { /** * @param {LH.Locale} locale * @param {LH.I18NRendererStrings=} strings */ constructor(locale, strings) { // When testing, use a locale with more exciting numeric formatting. if (locale === 'en-XA') locale = 'de'; this._numberDateLocale = locale; this._numberFormatter = new Intl.NumberFormat(locale); this._strings = /** @type {LH.I18NRendererStrings} */ (strings || {}); } get strings() { return this._strings; } /** * Format number. * @param {number} number * @param {number=} granularity Number of decimal places to include. Defaults to 0.1. * @return {string} */ formatNumber(number, granularity = 0.1) { const coarseValue = Math.round(number / granularity) * granularity; return this._numberFormatter.format(coarseValue); } /** * @param {number} size * @param {number=} granularity Controls how coarse the displayed value is, defaults to 0.1 * @return {string} */ formatBytesToKB(size, granularity = 0.1) { const kbs = this._numberFormatter.format(Math.round(size / 1024 / granularity) * granularity); return `${kbs}${NBSP2}KB`; } /** * @param {number} ms * @param {number=} granularity Controls how coarse the displayed value is, defaults to 10 * @return {string} */ formatMilliseconds(ms, granularity = 10) { const coarseTime = Math.round(ms / granularity) * granularity; return `${this._numberFormatter.format(coarseTime)}${NBSP2}ms`; } /** * @param {number} ms * @param {number=} granularity Controls how coarse the displayed value is, defaults to 0.1 * @return {string} */ formatSeconds(ms, granularity = 0.1) { const coarseTime = Math.round(ms / 1000 / granularity) * granularity; return `${this._numberFormatter.format(coarseTime)}${NBSP2}s`; } /** * Format time. * @param {string} date * @return {string} */ formatDateTime(date) { /** @type {Intl.DateTimeFormatOptions} */ const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short', }; let formatter = new Intl.DateTimeFormat(this._numberDateLocale, options); // Force UTC if runtime timezone could not be detected. // See https://github.com/GoogleChrome/lighthouse/issues/1056 const tz = formatter.resolvedOptions().timeZone; if (!tz || tz.toLowerCase() === 'etc/unknown') { options.timeZone = 'UTC'; formatter = new Intl.DateTimeFormat(this._numberDateLocale, options); } return formatter.format(new Date(date)); } /** * Converts a time in milliseconds into a duration string, i.e. `1d 2h 13m 52s` * @param {number} timeInMilliseconds * @return {string} */ formatDuration(timeInMilliseconds) { let timeInSeconds = timeInMilliseconds / 1000; if (Math.round(timeInSeconds) === 0) { return 'None'; } /** @type {Array<string>} */ const parts = []; const unitLabels = /** @type {Object<string, number>} */ ({ d: 60 * 60 * 24, h: 60 * 60, m: 60, s: 1, }); Object.keys(unitLabels).forEach(label => { const unit = unitLabels[label]; const numberOfUnits = Math.floor(timeInSeconds / unit); if (numberOfUnits > 0) { timeInSeconds -= numberOfUnits * unit; parts.push(`${numberOfUnits}\xa0${label}`); } }); return parts.join(' '); } } if (typeof module !== 'undefined' && module.exports) { module.exports = I18n; } else { self.I18n = I18n; } //# sourceURL=compiled-reportrenderer.js</script> <script>window.__LIGHTHOUSE_JSON__ = {"requestedUrl":"https://reinnovame.com/","finalUrl":"https://reinnovame.com/","lighthouseVersion":"6.3.0","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/85.0.4183.140 Safari/537.36","fetchTime":"2020-12-20T19:58:03.035Z","environment":{"networkUserAgent":"Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Mobile Safari/537.36 Chrome-Lighthouse","hostUserAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/85.0.4183.140 Safari/537.36","benchmarkIndex":1074.5},"runWarnings":[],"configSettings":{"emulatedFormFactor":"mobile","locale":"en-US","onlyCategories":["performance","accessibility","best-practices","seo"],"channel":"lr"},"audits":{"canonical":{"id":"canonical","title":"Document has a valid `rel=canonical`","description":"Canonical links suggest which URL to show in search results. [Learn more](https://web.dev/canonical/).","score":1,"scoreDisplayMode":"binary"},"managed-focus":{"id":"managed-focus","title":"The user's focus is directed to new content added to the page","description":"If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://web.dev/managed-focus/).","score":null,"scoreDisplayMode":"manual"},"notification-on-start":{"id":"notification-on-start","title":"Avoids requesting the notification permission on page load","description":"Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://web.dev/notification-on-start/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","items":[],"headings":[]}},"redirects":{"id":"redirects","title":"Avoid multiple page redirects","description":"Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).","score":1,"scoreDisplayMode":"numeric","details":{"items":[],"overallSavingsMs":0,"type":"opportunity","headings":[]},"numericValue":0},"image-size-responsive":{"id":"image-size-responsive","title":"Serves images with appropriate resolution","description":"Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn more](https://web.dev/serve-responsive-images/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"type":"table","headings":[]}},"offscreen-content-hidden":{"id":"offscreen-content-hidden","title":"Offscreen content is hidden from assistive technology","description":"Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://web.dev/offscreen-content-hidden/).","score":null,"scoreDisplayMode":"manual"},"custom-controls-labels":{"id":"custom-controls-labels","title":"Custom controls have associated labels","description":"Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://web.dev/custom-controls-labels/).","score":null,"scoreDisplayMode":"manual"},"aria-toggle-field-name":{"id":"aria-toggle-field-name","title":"ARIA toggle fields have accessible names","description":"When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-toggle-field-name/).","score":null,"scoreDisplayMode":"notApplicable"},"uses-text-compression":{"id":"uses-text-compression","title":"Enable text compression","description":"Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).","score":1,"scoreDisplayMode":"numeric","details":{"overallSavingsMs":0,"items":[],"overallSavingsBytes":0,"type":"opportunity","headings":[]},"numericValue":0},"main-thread-tasks":{"id":"main-thread-tasks","title":"Tasks","description":"Lists the toplevel main thread tasks that executed during page load.","score":null,"scoreDisplayMode":"informative","details":{"items":[{"duration":9.454,"startTime":585.089},{"startTime":598.802,"duration":7.122},{"startTime":1276.829,"duration":20.169},{"startTime":1298.732,"duration":31.862},{"duration":47.74,"startTime":1330.694},{"startTime":1378.453,"duration":58.535},{"duration":18.006,"startTime":1438.942},{"duration":16.108,"startTime":1457.039},{"startTime":1479.635,"duration":78.658},{"duration":70.359,"startTime":1567.724},{"duration":17.53,"startTime":1638.539},{"startTime":1658.384,"duration":8.448},{"startTime":1667.589,"duration":63.689},{"duration":5.927,"startTime":1731.423},{"startTime":1753.828,"duration":6.857},{"startTime":1815.277,"duration":9.136},{"startTime":1835.392,"duration":5.957},{"duration":29.258,"startTime":1857.967},{"startTime":1913.463,"duration":8.166},{"duration":349.237,"startTime":2031.605},{"duration":14.457,"startTime":2380.905},{"duration":5.549,"startTime":2396.032},{"startTime":2413.306,"duration":21.452},{"duration":17.074,"startTime":2443.104},{"duration":9.956,"startTime":2465.939},{"duration":10.876,"startTime":2480.672},{"startTime":2509.959,"duration":83.469},{"duration":9.491,"startTime":2602.559},{"startTime":2612.094,"duration":27.634},{"duration":10.257,"startTime":2650.292},{"startTime":2661.559,"duration":11.013},{"duration":8.304,"startTime":2672.611},{"duration":61.648,"startTime":2688.103},{"startTime":2750.669,"duration":7.212},{"startTime":2763.999,"duration":5.33},{"duration":12.422,"startTime":2771.545},{"duration":7.939,"startTime":2790.546},{"duration":5.728,"startTime":2942.477}],"headings":[{"itemType":"ms","key":"startTime","granularity":1,"text":"Start Time"},{"itemType":"ms","text":"End Time","key":"duration","granularity":1}],"type":"table"}},"aria-hidden-focus":{"id":"aria-hidden-focus","title":"`[aria-hidden=\"true\"]` elements do not contain focusable descendents","description":"Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn more](https://web.dev/aria-hidden-focus/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"headings":[],"type":"table"}},"interactive-element-affordance":{"id":"interactive-element-affordance","title":"Interactive elements indicate their purpose and state","description":"Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://web.dev/interactive-element-affordance/).","score":null,"scoreDisplayMode":"manual"},"user-timings":{"id":"user-timings","title":"User Timing marks and measures","description":"Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).","score":null,"scoreDisplayMode":"notApplicable","details":{"headings":[],"items":[],"type":"table"}},"visual-order-follows-dom":{"id":"visual-order-follows-dom","title":"Visual order on the page follows DOM order","description":"DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://web.dev/visual-order-follows-dom/).","score":null,"scoreDisplayMode":"manual"},"render-blocking-resources":{"id":"render-blocking-resources","title":"Eliminate render-blocking resources","description":"Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).","score":0.19,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 3,350 ms","details":{"headings":[{"valueType":"url","key":"url","label":"URL"},{"valueType":"bytes","key":"totalBytes","label":"Transfer Size"},{"key":"wastedMs","valueType":"timespanMs","label":"Potential Savings"}],"overallSavingsMs":3346,"type":"opportunity","items":[{"totalBytes":8834,"wastedMs":480,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css"},{"totalBytes":11337,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css","wastedMs":780},{"wastedMs":2580,"totalBytes":119196,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css"},{"totalBytes":3994,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css","wastedMs":630},{"url":"https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext","wastedMs":780,"totalBytes":1698},{"totalBytes":67216,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css","wastedMs":2130},{"totalBytes":34216,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js","wastedMs":1230},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js","totalBytes":29104,"wastedMs":1080},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js","wastedMs":630,"totalBytes":14591},{"wastedMs":180,"totalBytes":948,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js"},{"totalBytes":1775,"wastedMs":480,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css"}]},"numericValue":3346},"use-landmarks":{"id":"use-landmarks","title":"HTML5 landmark elements are used to improve navigation","description":"Landmark elements (\u003cmain>, \u003cnav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://web.dev/use-landmarks/).","score":null,"scoreDisplayMode":"manual"},"doctype":{"id":"doctype","title":"Page has the HTML doctype","description":"Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more](https://web.dev/doctype/).","score":1,"scoreDisplayMode":"binary"},"aria-input-field-name":{"id":"aria-input-field-name","title":"ARIA input fields have accessible names","description":"When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-input-field-name/).","score":null,"scoreDisplayMode":"notApplicable"},"link-name":{"id":"link-name","title":"Links do not have a discernible name","description":"Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://web.dev/link-name/).","score":0,"scoreDisplayMode":"binary","details":{"items":[{"node":{"snippet":"\u003ca href=\"https://reinnovame.com/wp-content/uploads/video.mp4\" class=\"full-link\" data-fancybox=\"\">\u003c/a>","explanation":"Fix all of the following:\n Element is in tab order and does not have accessible text\n\nFix any of the following:\n Element does not have text that is visible to screen readers\n aria-label attribute does not exist or is empty\n aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n Element's default semantics were not overridden with role=\"presentation\"\n Element's default semantics were not overridden with role=\"none\"","selector":".full-link","nodeLabel":"a","type":"node","boundingRect":{"right":329,"left":21,"top":1592,"height":173,"width":308,"bottom":1764},"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,A"}},{"node":{"explanation":"Fix all of the following:\n Element is in tab order and does not have accessible text\n\nFix any of the following:\n Element does not have text that is visible to screen readers\n aria-label attribute does not exist or is empty\n aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n Element's default semantics were not overridden with role=\"presentation\"\n Element's default semantics were not overridden with role=\"none\"","type":"node","snippet":"\u003ca href=\"https://reinnovame.com/wp-content/uploads/video.mp4\" data-style=\"default\" data-parent-hover=\"\" data-font-style=\"p\" data-color=\"default\" class=\"play_button_2 large nectar_video_lightbox\" data-fancybox=\"\">","nodeLabel":"a","boundingRect":{"left":140,"right":210,"height":70,"width":70,"bottom":1713,"top":1643},"selector":".play_button_2","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,A"}},{"node":{"snippet":"\u003ca href=\"https://reinnovame.com/appuntamenti/\" target=\"_self\" class=\"center\">\n\u003cimg class=\"img-with-animation skip-lazy poligono\" data-delay=\"0\" height=\"1024\" width=\"1566\" data-animation=\"fade-in\" src=\"https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg\" alt=\"\">\n\u003c/a>","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,10,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,2,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A","nodeLabel":"img","explanation":"Fix all of the following:\n Element is in tab order and does not have accessible text\n\nFix any of the following:\n Element does not have text that is visible to screen readers\n aria-label attribute does not exist or is empty\n aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n Element's default semantics were not overridden with role=\"presentation\"\n Element's default semantics were not overridden with role=\"none\"","selector":".hover-wrap[data-hover-animation=\"none\"] > .hover-wrap-inner > .center[target=\"_self\"]","boundingRect":{"width":320,"left":20,"bottom":3636,"right":340,"top":3427,"height":209},"type":"node"}},{"node":{"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,5,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,0,DIV,0,A","type":"node","explanation":"Fix all of the following:\n Element is in tab order and does not have accessible text\n\nFix any of the following:\n Element does not have text that is visible to screen readers\n aria-label attribute does not exist or is empty\n aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n Element's default semantics were not overridden with role=\"presentation\"\n Element's default semantics were not overridden with role=\"none\"","selector":".nectar_icon_wrap[data-draw=\"\"][data-border-thickness=\"\\32 px\"]:nth-child(5) > .nectar_icon.icon_color_custom_ffffff > a[href=\"mailto\\:info\\@reinnovame\\.com\"]","boundingRect":{"width":51,"top":6756,"right":296,"left":245,"height":45,"bottom":6801},"snippet":"\u003ca href=\"mailto:info@reinnovame.com\">\u003c/a>","nodeLabel":"a"}},{"node":{"nodeLabel":"a","explanation":"Fix all of the following:\n Element is in tab order and does not have accessible text\n\nFix any of the following:\n Element does not have text that is visible to screen readers\n aria-label attribute does not exist or is empty\n aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n Element's default semantics were not overridden with role=\"presentation\"\n Element's default semantics were not overridden with role=\"none\"","path":"1,HTML,1,BODY,5,DIV,0,DIV,0,DIV,0,DIV,0,UL,6,LI,0,A","snippet":"\u003ca href=\"https://reinnovame.com/appuntamento-gratuito/\">\u003cimg src=\"https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg\">\u003c/a>","type":"node","boundingRect":{"left":239,"width":120,"bottom":451,"height":27,"right":359,"top":424},"selector":".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a"}},{"node":{"selector":".slide_out_area_close","explanation":"Fix all of the following:\n Element is in tab order and does not have accessible text\n\nFix any of the following:\n Element does not have text that is visible to screen readers\n aria-label attribute does not exist or is empty\n aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n Element's default semantics were not overridden with role=\"presentation\"\n Element's default semantics were not overridden with role=\"none\"","type":"node","snippet":"\u003ca class=\"slide_out_area_close\" href=\"#\">\n\u003cspan class=\"close-wrap\"> \u003cspan class=\"close-line close-line1\">\u003c/span> \u003cspan class=\"close-line close-line2\">\u003c/span> \u003c/span>\t\t\t\t\u003c/a>","path":"1,HTML,1,BODY,7,A","nodeLabel":"a"}}],"headings":[{"text":"Failing Elements","key":"node","itemType":"node"}],"debugData":{"tags":["cat.name-role-value","wcag2a","wcag412","wcag244","section508","section508.22.a"],"impact":"serious","type":"debugdata"},"type":"table"}},"meta-refresh":{"id":"meta-refresh","title":"The document does not use `\u003cmeta http-equiv=\"refresh\">`","description":"Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://web.dev/meta-refresh/).","score":null,"scoreDisplayMode":"notApplicable"},"network-requests":{"id":"network-requests","title":"Network Requests","description":"Lists the network requests that were made during page load.","score":null,"scoreDisplayMode":"informative","details":{"items":[{"url":"https://reinnovame.com/","startTime":0,"statusCode":200,"transferSize":26263,"resourceType":"Document","finished":true,"endTime":539.1580001451075,"resourceSize":147982,"mimeType":"text/html"},{"finished":true,"transferSize":8834,"resourceSize":55524,"statusCode":200,"resourceType":"Stylesheet","url":"https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css","startTime":558.4760000929236,"mimeType":"text/css","endTime":891.4479999803007},{"resourceSize":81199,"transferSize":11337,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css","endTime":1110.8140000142157,"startTime":558.6850000545382,"resourceType":"Stylesheet","finished":true,"mimeType":"text/css","statusCode":200},{"finished":true,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css","mimeType":"text/css","endTime":1248.5250001773238,"transferSize":119196,"resourceType":"Stylesheet","statusCode":200,"startTime":559.7960003651679,"resourceSize":857034},{"finished":true,"mimeType":"text/css","endTime":979.3370002880692,"startTime":560.382999945432,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css","statusCode":200,"transferSize":3994,"resourceSize":16594,"resourceType":"Stylesheet"},{"transferSize":1698,"startTime":560.5870001018047,"mimeType":"text/css","finished":true,"endTime":571.9800000078976,"url":"https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext","statusCode":200,"resourceSize":8424,"resourceType":"Stylesheet"},{"finished":true,"resourceType":"Stylesheet","endTime":1233.2990001887083,"transferSize":67216,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css","startTime":560.7600002549589,"statusCode":200,"resourceSize":502682,"mimeType":"text/css"},{"mimeType":"application/javascript","transferSize":34216,"resourceType":"Script","resourceSize":96957,"startTime":560.903999954462,"endTime":1091.1810002289712,"statusCode":200,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js","finished":true},{"endTime":679.9370003864169,"statusCode":200,"resourceType":"Script","transferSize":29104,"finished":true,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js","mimeType":"application/javascript","startTime":561.0700002871454,"resourceSize":83369},{"statusCode":200,"resourceSize":58601,"startTime":561.4100000821054,"finished":true,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js","transferSize":14591,"resourceType":"Script","mimeType":"application/javascript","endTime":1098.800000268966},{"endTime":888.7559999711812,"startTime":561.6650003939867,"statusCode":200,"mimeType":"application/javascript","transferSize":948,"resourceSize":1473,"resourceType":"Script","finished":true,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js"},{"startTime":561.9320003315806,"endTime":978.9570001885295,"mimeType":"text/css","url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css","resourceType":"Stylesheet","finished":true,"transferSize":1775,"statusCode":200,"resourceSize":7655},{"statusCode":200,"mimeType":"image/svg+xml","startTime":1330.236000008881,"finished":true,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Reinnovame-Logo-Def-02.svg","transferSize":3553,"endTime":1672.5469999946654,"resourceType":"Image","resourceSize":10397},{"transferSize":1177,"resourceType":"Image","resourceSize":1798,"finished":true,"statusCode":200,"mimeType":"image/svg+xml","endTime":1663.1010002456605,"url":"https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg","startTime":1330.3610002622008},{"transferSize":16396,"mimeType":"image/svg+xml","resourceSize":35350,"resourceType":"Image","startTime":1330.5669999681413,"url":"https://reinnovame.com/wp-content/uploads/2020/09/SATELLITE_SATELLITE-BIANCO-senza-dati.svg","endTime":1773.2790000736713,"finished":true,"statusCode":200},{"url":"https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_1100694782.png","resourceSize":67992,"resourceType":"Image","endTime":1878.4650000743568,"transferSize":68299,"mimeType":"image/png","startTime":1330.7540002278984,"finished":true,"statusCode":200},{"statusCode":200,"finished":true,"startTime":1330.8690004050732,"endTime":1879.0070000104606,"transferSize":69005,"mimeType":"image/png","resourceType":"Image","resourceSize":68698,"url":"https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_568133044.png"},{"startTime":1330.9770002961159,"url":"https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg","resourceSize":57460,"mimeType":"image/svg+xml","finished":true,"transferSize":20846,"statusCode":200,"endTime":1772.9020002298057,"resourceType":"Image"},{"resourceType":"Image","transferSize":1462,"url":"https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.png","statusCode":200,"mimeType":"image/png","endTime":1665.710000321269,"startTime":1331.0680002905428,"finished":true,"resourceSize":1158},{"mimeType":"application/javascript","endTime":1356.8380000069737,"statusCode":200,"resourceSize":95992,"url":"https://reinnovame.com/wp-content/themes/jquery.min.js","resourceType":"Script","finished":true,"transferSize":33660,"startTime":1235.6720003299415},{"resourceSize":7411,"finished":true,"statusCode":200,"mimeType":"application/javascript","url":"https://reinnovame.com/wp-content/themes/jquery.flipster.min.js","endTime":1369.7020001709461,"startTime":1257.5159999541938,"transferSize":3346,"resourceType":"Script"},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css","statusCode":200,"transferSize":3885,"startTime":1323.8570000976324,"resourceSize":51736,"mimeType":"text/css","endTime":1438.8439999893308,"resourceType":"Stylesheet","finished":true},{"statusCode":200,"transferSize":34598,"resourceSize":99310,"endTime":1548.9529999904335,"finished":true,"mimeType":"application/javascript","startTime":1324.084000196308,"url":"https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4","resourceType":"Script"},{"finished":true,"startTime":1324.2730000056326,"url":"https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4","resourceType":"Script","mimeType":"application/javascript","transferSize":2516,"statusCode":200,"endTime":1437.2300002723932,"resourceSize":6174},{"url":"https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1","startTime":1324.4660003110766,"finished":true,"resourceSize":47047,"resourceType":"Script","endTime":1444.5060002617538,"mimeType":"application/javascript","transferSize":11471,"statusCode":200},{"startTime":1324.6410000137985,"endTime":1440.875000320375,"statusCode":200,"finished":true,"mimeType":"application/javascript","resourceSize":14280,"transferSize":4306,"url":"https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1","resourceType":"Script"},{"mimeType":"application/javascript","transferSize":6421,"url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6","resourceType":"Script","endTime":1438.2680002599955,"resourceSize":14433,"finished":true,"startTime":1324.94099996984,"statusCode":200},{"startTime":1325.223000254482,"resourceType":"Script","endTime":1566.3580000400543,"url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6","transferSize":37659,"resourceSize":218731,"finished":true,"statusCode":200,"mimeType":"application/javascript"},{"transferSize":2451,"statusCode":200,"endTime":1439.2099999822676,"startTime":1325.4590001888573,"mimeType":"application/javascript","finished":true,"url":"https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1","resourceSize":10492,"resourceType":"Script"},{"resourceSize":8164,"transferSize":1999,"mimeType":"application/javascript","startTime":1325.7340001873672,"statusCode":200,"url":"https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1","finished":true,"endTime":1657.3390001431108,"resourceType":"Script"},{"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3","endTime":1656.9560002535582,"finished":true,"startTime":1325.8820003829896,"mimeType":"application/javascript","statusCode":200,"resourceSize":6429,"resourceType":"Script","transferSize":2303},{"finished":true,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13","transferSize":1620,"resourceSize":2768,"endTime":1656.4190001226962,"startTime":1326.035000383854,"resourceType":"Script","mimeType":"application/javascript","statusCode":200},{"mimeType":"application/javascript","resourceType":"Script","startTime":1326.2849999591708,"url":"https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0","resourceSize":7402,"endTime":1659.8209999501705,"statusCode":200,"finished":true,"transferSize":2315},{"url":"https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9","transferSize":3070,"finished":true,"endTime":1661.0890002921224,"mimeType":"application/javascript","statusCode":200,"resourceSize":7416,"startTime":1326.5080000273883,"resourceType":"Script"},{"url":"https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1","resourceSize":17907,"statusCode":200,"finished":true,"endTime":1659.4230001792312,"startTime":1326.9030000083148,"resourceType":"Script","transferSize":4067,"mimeType":"application/javascript"},{"startTime":1327.171000186354,"transferSize":2191,"resourceSize":5594,"finished":true,"endTime":1658.3450003527105,"resourceType":"Script","statusCode":200,"url":"https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4","mimeType":"application/javascript"},{"url":"https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9","finished":true,"endTime":1664.482000283897,"resourceSize":2245,"resourceType":"Script","startTime":1327.3150003515184,"statusCode":200,"transferSize":1319,"mimeType":"application/javascript"},{"resourceType":"Script","endTime":1772.3350003361702,"startTime":1327.4530000053346,"resourceSize":68253,"finished":true,"transferSize":22396,"mimeType":"application/javascript","statusCode":200,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1"},{"statusCode":200,"endTime":1866.3180000148714,"finished":true,"startTime":1327.7720003388822,"transferSize":37727,"resourceSize":180713,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0","mimeType":"application/javascript","resourceType":"Script"},{"resourceSize":39360,"endTime":1666.6149999946356,"resourceType":"Script","mimeType":"application/javascript","startTime":1327.8910000808537,"url":"https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0","statusCode":200,"finished":true,"transferSize":7822},{"resourceType":"Script","startTime":1328.127000015229,"url":"https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8","statusCode":200,"finished":true,"mimeType":"application/javascript","transferSize":3322,"resourceSize":9470,"endTime":1661.4749999716878},{"statusCode":200,"endTime":1975.6860001944005,"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","transferSize":100955,"resourceType":"Script","startTime":1328.2280000858009,"resourceSize":543419,"finished":true,"mimeType":"application/javascript"},{"url":"https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0","statusCode":200,"startTime":1328.3440000377595,"endTime":1667.6110001280904,"resourceSize":9375,"finished":true,"mimeType":"application/javascript","transferSize":3671,"resourceType":"Script"},{"transferSize":19408,"statusCode":200,"url":"https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2","finished":true,"startTime":1328.5880000330508,"endTime":1778.8260001689196,"mimeType":"application/javascript","resourceType":"Script","resourceSize":66520},{"mimeType":"application/javascript","resourceType":"Script","resourceSize":1434,"startTime":1328.7260001525283,"statusCode":200,"endTime":1658.9390002191067,"finished":true,"url":"https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3","transferSize":1148},{"resourceType":"Script","url":"https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0","transferSize":6801,"mimeType":"application/javascript","startTime":1328.8950002752244,"endTime":1666.0939999856055,"resourceSize":29200,"statusCode":200,"finished":true},{"statusCode":200,"url":"https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3","resourceType":"Script","resourceSize":16154,"finished":true,"mimeType":"application/javascript","transferSize":6086,"startTime":1329.0490000508726,"endTime":1664.7320003248751},{"startTime":1329.2480004020035,"url":"https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3","statusCode":200,"resourceSize":1079,"endTime":1663.508000317961,"resourceType":"Script","mimeType":"application/javascript","finished":true,"transferSize":970},{"resourceSize":3390,"endTime":1657.848000060767,"mimeType":"application/javascript","transferSize":1576,"resourceType":"Script","statusCode":200,"startTime":1329.5800001360476,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0","finished":true},{"startTime":1329.729000106454,"transferSize":5008,"finished":true,"resourceType":"Script","endTime":1664.113000035286,"resourceSize":17723,"statusCode":200,"mimeType":"application/javascript","url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11"},{"transferSize":2793,"startTime":1329.894000198692,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11","mimeType":"application/javascript","resourceType":"Script","resourceSize":6849,"endTime":1663.3120002225041,"statusCode":200,"finished":true},{"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0","resourceType":"Script","startTime":1330.0570002757013,"statusCode":200,"endTime":1662.8539999946952,"finished":true,"mimeType":"application/javascript","transferSize":598,"resourceSize":364},{"endTime":1385.7610002160072,"startTime":1382.082000374794,"resourceType":"Font","finished":true,"url":"https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2","transferSize":9700,"mimeType":"font/woff2","resourceSize":9132,"statusCode":200},{"endTime":2179.416000377387,"resourceSize":65536,"url":"https://reinnovame.com/wp-content/uploads/2020/11/audio_new.mp3","statusCode":200,"resourceType":"Media","transferSize":412,"finished":false,"mimeType":"audio/mpeg","startTime":1415.3280002065003},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/01-SFONDO-HOME-NUOVO-1-scaled.jpg","transferSize":185842,"statusCode":200,"resourceType":"Image","endTime":1876.6439999453723,"startTime":1445.3810001723468,"resourceSize":185559,"mimeType":"image/jpeg","finished":true},{"url":"https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg","resourceSize":406863,"startTime":1450.5170001648366,"endTime":1987.2240000404418,"statusCode":200,"mimeType":"image/jpeg","finished":true,"transferSize":407146,"resourceType":"Image"},{"resourceSize":480199,"endTime":2094.6880001574755,"mimeType":"image/jpeg","url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg","startTime":1451.548000331968,"resourceType":"Image","finished":true,"transferSize":480482,"statusCode":200},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg","endTime":2208.509000018239,"resourceType":"Image","resourceSize":388433,"statusCode":200,"finished":true,"startTime":1452.240000013262,"transferSize":388742,"mimeType":"image/jpeg"},{"resourceType":"Image","startTime":1454.89800022915,"endTime":2206.9850000552833,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg","transferSize":380191,"mimeType":"image/jpeg","resourceSize":379882,"finished":true,"statusCode":200},{"endTime":2211.0220002941787,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg","transferSize":351357,"statusCode":200,"resourceSize":351048,"finished":true,"mimeType":"image/jpeg","resourceType":"Image","startTime":1455.149000044912},{"transferSize":311241,"resourceSize":310932,"statusCode":200,"finished":true,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg","startTime":1455.3550002165139,"endTime":2209.7869999706745,"resourceType":"Image","mimeType":"image/jpeg"},{"statusCode":200,"resourceType":"Image","endTime":2212.139000184834,"transferSize":292148,"url":"https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg","startTime":1460.6990003958344,"resourceSize":291839,"mimeType":"image/jpeg","finished":true},{"resourceSize":229118,"startTime":1463.1580002605915,"resourceType":"Image","mimeType":"image/jpeg","transferSize":229401,"endTime":1998.9300002343953,"finished":true,"statusCode":200,"url":"https://reinnovame.com/wp-content/uploads/2020/10/SFONDO-STELLATO-con-sfumatura-1.jpg"},{"transferSize":246887,"resourceType":"Image","resourceSize":246578,"statusCode":200,"url":"https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg","finished":true,"mimeType":"image/jpeg","endTime":2213.9690001495183,"startTime":1466.1850002594292},{"transferSize":344005,"endTime":2219.2370002157986,"mimeType":"image/jpeg","resourceType":"Image","startTime":1467.624000273645,"url":"https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg","statusCode":200,"resourceSize":343696,"finished":true},{"statusCode":200,"endTime":1474.499000236392,"startTime":1472.0140001736581,"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2","transferSize":9646,"mimeType":"font/woff2","finished":true,"resourceSize":9080,"resourceType":"Font"},{"mimeType":"font/woff2","statusCode":200,"transferSize":43310,"finished":true,"startTime":1472.9349999688566,"resourceSize":42912,"endTime":2012.6040000468493,"resourceType":"Font","url":"https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2"},{"url":"https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2","endTime":1797.4800001829863,"resourceType":"Font","mimeType":"font/woff2","transferSize":52024,"resourceSize":51652,"statusCode":200,"finished":true,"startTime":1473.2130002230406},{"startTime":1474.412000272423,"resourceSize":46424,"endTime":2008.659000042826,"transferSize":46822,"mimeType":"font/woff2","url":"https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2","resourceType":"Font","statusCode":200,"finished":true},{"resourceSize":9180,"startTime":1498.167000245303,"finished":true,"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2","transferSize":9746,"resourceType":"Font","statusCode":200,"mimeType":"font/woff2","endTime":1500.975000206381},{"statusCode":200,"transferSize":1791476,"endTime":2588.5050003416836,"url":"https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4","finished":true,"resourceSize":1792317,"mimeType":"video/mp4","resourceType":"Media","startTime":1518.2150001637638},{"transferSize":2620061,"finished":true,"resourceSize":2971011,"statusCode":200,"resourceType":"Media","startTime":1519.0320000983775,"endTime":2187.3810002580285,"mimeType":"video/mp4","url":"https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4"},{"startTime":1567.8870002739131,"url":"https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2","endTime":1785.933000035584,"transferSize":98309,"mimeType":"x-font/woff","statusCode":200,"resourceSize":98024,"resourceType":"Font","finished":true},{"startTime":2356.4380002208054,"finished":true,"endTime":2468.6390003189445,"mimeType":"image/svg+xml","transferSize":1187,"statusCode":200,"resourceType":"Image","resourceSize":2155,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Game__01-GUADAGNO.svg"},{"transferSize":1461,"mimeType":"image/svg+xml","startTime":2356.8590003997087,"resourceType":"Image","resourceSize":2710,"statusCode":200,"endTime":2469.033000059426,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Game__01-CASHFLOW.svg","finished":true},{"statusCode":200,"finished":true,"transferSize":1233,"mimeType":"image/svg+xml","resourceType":"Image","resourceSize":2233,"endTime":2468.1939999572933,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Game__01-FATTURATI.svg","startTime":2356.9670002907515},{"endTime":2510.3770000860095,"url":"https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg","startTime":2394.1320003941655,"resourceSize":142031,"mimeType":"image/jpeg","resourceType":"Image","transferSize":142314,"finished":true,"statusCode":200}],"type":"table","headings":[{"key":"url","text":"URL","itemType":"url"},{"granularity":1,"text":"Start Time","itemType":"ms","key":"startTime"},{"granularity":1,"text":"End Time","itemType":"ms","key":"endTime"},{"granularity":1,"displayUnit":"kb","text":"Transfer Size","itemType":"bytes","key":"transferSize"},{"text":"Resource Size","key":"resourceSize","displayUnit":"kb","granularity":1,"itemType":"bytes"},{"key":"statusCode","text":"Status Code","itemType":"text"},{"itemType":"text","text":"MIME Type","key":"mimeType"},{"itemType":"text","key":"resourceType","text":"Resource Type"}]}},"definition-list":{"id":"definition-list","title":"`\u003cdl>`'s contain only properly-ordered `\u003cdt>` and `\u003cdd>` groups, `\u003cscript>`, `\u003ctemplate>` or `\u003cdiv>` elements.","description":"When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://web.dev/definition-list/).","score":null,"scoreDisplayMode":"notApplicable"},"object-alt":{"id":"object-alt","title":"`\u003cobject>` elements have `[alt]` text","description":"Screen readers cannot translate non-text content. Adding alt text to `\u003cobject>` elements helps screen readers convey meaning to users. [Learn more](https://web.dev/object-alt/).","score":null,"scoreDisplayMode":"notApplicable"},"th-has-data-cells":{"id":"th-has-data-cells","title":"`\u003cth>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.","description":"Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://web.dev/th-has-data-cells/).","score":null,"scoreDisplayMode":"notApplicable"},"first-cpu-idle":{"id":"first-cpu-idle","title":"First CPU Idle","description":"First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input. [Learn more](https://web.dev/first-cpu-idle/).","score":0.25,"scoreDisplayMode":"numeric","displayValue":"8.9 s","numericValue":8870},"legacy-javascript":{"id":"legacy-javascript","title":"Avoid serving legacy JavaScript to modern browsers","description":"Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)","score":1,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 6 KiB","details":{"headings":[{"valueType":"url","label":"URL","key":"url","subItemsHeading":{"valueType":"source-location","key":"location"}},{"valueType":"code","subItemsHeading":{"key":"signal"},"key":null},{"valueType":"bytes","key":"wastedBytes","label":"Potential Savings"}],"items":[{"subItems":{"type":"subitems","items":[{"location":{"urlProvider":"network","line":0,"column":345,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11","type":"source-location"},"signal":"@babel/plugin-transform-classes"},{"signal":"Object.values","location":{"type":"source-location","column":445,"urlProvider":"network","url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11","line":0}}]},"totalBytes":0,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11","wastedBytes":5913},{"wastedBytes":68,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11","totalBytes":0,"subItems":{"type":"subitems","items":[{"signal":"@babel/plugin-transform-classes","location":{"type":"source-location","line":0,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11","urlProvider":"network","column":600}}]}}],"overallSavingsMs":0,"type":"opportunity","overallSavingsBytes":5981},"numericValue":0},"speed-index":{"id":"speed-index","title":"Speed Index","description":"Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).","score":0.09,"scoreDisplayMode":"numeric","displayValue":"10.1 s","numericValue":10084.46610884092},"font-display":{"id":"font-display","title":"Ensure text remains visible during webfont load","description":"Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).","score":0,"scoreDisplayMode":"binary","details":{"items":[{"url":"https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2","wastedMs":3.6789998412132263},{"wastedMs":2.4850000627338886,"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2"},{"wastedMs":2.807999961078167,"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2"},{"url":"https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2","wastedMs":218.04599976167083}],"headings":[{"key":"url","text":"URL","itemType":"url"},{"text":"Potential Savings","key":"wastedMs","itemType":"ms"}],"type":"table"},"warnings":[]},"uses-webp-images":{"id":"uses-webp-images","title":"Serve images in next-gen formats","description":"Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).","score":0,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 2,241 KiB","details":{"items":[{"totalBytes":406863,"fromProtocol":true,"wastedBytes":334003,"isCrossOrigin":false,"url":"https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg"},{"wastedBytes":274844,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg","fromProtocol":true,"totalBytes":379882,"isCrossOrigin":false},{"wastedBytes":264840,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg","totalBytes":351048,"fromProtocol":true,"isCrossOrigin":false},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg","isCrossOrigin":false,"totalBytes":388433,"fromProtocol":true,"wastedBytes":262617},{"fromProtocol":true,"totalBytes":310932,"wastedBytes":244378,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg","isCrossOrigin":false},{"isCrossOrigin":false,"totalBytes":480199,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg","wastedBytes":240543,"fromProtocol":true},{"isCrossOrigin":false,"totalBytes":343696,"fromProtocol":true,"url":"https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg","wastedBytes":225904},{"fromProtocol":true,"isCrossOrigin":false,"totalBytes":291839,"wastedBytes":213949,"url":"https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg"},{"isCrossOrigin":false,"totalBytes":246578,"wastedBytes":204098,"fromProtocol":true,"url":"https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg"},{"isCrossOrigin":false,"fromProtocol":false,"wastedBytes":30031,"url":"https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg","totalBytes":142031}],"headings":[{"valueType":"thumbnail","key":"url"},{"key":"url","label":"URL","valueType":"url"},{"label":"Resource Size","valueType":"bytes","key":"totalBytes"},{"label":"Potential Savings","valueType":"bytes","key":"wastedBytes"}],"type":"opportunity","overallSavingsMs":11400,"overallSavingsBytes":2295207},"warnings":[],"numericValue":11400},"uses-passive-event-listeners":{"id":"uses-passive-event-listeners","title":"Does not use passive listeners to improve scrolling performance","description":"Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).","score":0,"scoreDisplayMode":"binary","details":{"headings":[{"text":"URL","itemType":"url","key":"url"},{"itemType":"text","key":"label","text":"Location"}],"type":"table","items":[{"label":"line: 2529","url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6"},{"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13","label":"line: 8"}]}},"diagnostics":{"id":"diagnostics","title":"Diagnostics","description":"Collection of useful page vitals.","score":null,"scoreDisplayMode":"informative","details":{"type":"debugdata","items":[{"totalByteWeight":9324531,"totalTaskTime":1593.5580000000036,"numScripts":36,"numTasksOver50ms":7,"numStylesheets":8,"maxRtt":0.000687028812987599,"maxServerLatency":null,"throughput":632156310136.816,"numRequests":77,"numTasksOver500ms":0,"numTasks":1716,"numFonts":7,"numTasksOver10ms":22,"numTasksOver25ms":11,"mainDocumentTransferSize":26263,"numTasksOver100ms":1,"rtt":0.000687028812987599}]}},"image-alt":{"id":"image-alt","title":"Image elements do not have `[alt]` attributes","description":"Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://web.dev/image-alt/).","score":0,"scoreDisplayMode":"binary","details":{"items":[{"node":{"path":"1,HTML,1,BODY,5,DIV,0,DIV,0,DIV,0,DIV,0,UL,6,LI,0,A,0,IMG","explanation":"Fix any of the following:\n Element does not have an alt attribute\n aria-label attribute does not exist or is empty\n aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n Element has no title attribute or the title attribute is empty\n Element's default semantics were not overridden with role=\"presentation\"\n Element's default semantics were not overridden with role=\"none\"","snippet":"\u003cimg src=\"https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg\">","type":"node","nodeLabel":"img","selector":".menu:nth-child(1) > .starthere.menu-item-type-custom.menu-item-object-custom > a > img","boundingRect":{"left":239,"top":403,"height":40,"right":359,"bottom":444,"width":120}}}],"headings":[{"key":"node","itemType":"node","text":"Failing Elements"}],"type":"table","debugData":{"type":"debugdata","impact":"critical","tags":["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a"]}}},"performance-budget":{"id":"performance-budget","title":"Performance budget","description":"Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).","score":null,"scoreDisplayMode":"notApplicable"},"meta-description":{"id":"meta-description","title":"Document does not have a meta description","description":"Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://web.dev/meta-description/).","score":0,"scoreDisplayMode":"binary"},"geolocation-on-start":{"id":"geolocation-on-start","title":"Avoids requesting the geolocation permission on page load","description":"Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more](https://web.dev/geolocation-on-start/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","items":[],"headings":[]}},"html-lang-valid":{"id":"html-lang-valid","title":"`\u003chtml>` element has a valid value for its `[lang]` attribute","description":"Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://web.dev/html-lang-valid/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"type":"table","headings":[]}},"td-headers-attr":{"id":"td-headers-attr","title":"Cells in a `\u003ctable>` element that use the `[headers]` attribute refer to table cells within the same table.","description":"Screen readers have features to make navigating tables easier. Ensuring `\u003ctd>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://web.dev/td-headers-attr/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-required-parent":{"id":"aria-required-parent","title":"`[role]`s are contained by their required parent element","description":"Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-parent/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"aria-roles":{"id":"aria-roles","title":"`[role]` values are valid","description":"ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://web.dev/aria-roles/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","items":[],"headings":[]}},"largest-contentful-paint":{"id":"largest-contentful-paint","title":"Largest Contentful Paint","description":"Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)","score":0.01,"scoreDisplayMode":"numeric","displayValue":"9.5 s","numericValue":9540},"aria-allowed-attr":{"id":"aria-allowed-attr","title":"`[aria-*]` attributes match their roles","description":"Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://web.dev/aria-allowed-attr/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"robots-txt":{"id":"robots-txt","title":"robots.txt is valid","description":"If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more](https://web.dev/robots-txt/).","score":1,"scoreDisplayMode":"binary","details":{"summary":{},"headings":[],"items":[],"type":"table"}},"no-unload-listeners":{"id":"no-unload-listeners","title":"Avoids `unload` event listeners","description":"The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Consider using the `pagehide` or `visibilitychange` events instead. [Learn More](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-unload-event)","score":1,"scoreDisplayMode":"binary"},"external-anchors-use-rel-noopener":{"id":"external-anchors-use-rel-noopener","title":"Links to cross-origin destinations are safe","description":"Add `rel=\"noopener\"` or `rel=\"noreferrer\"` to any external links to improve performance and prevent security vulnerabilities. [Learn more](https://web.dev/external-anchors-use-rel-noopener/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"headings":[],"type":"table"},"warnings":[]},"cumulative-layout-shift":{"id":"cumulative-layout-shift","title":"Cumulative Layout Shift","description":"Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).","score":0.99,"scoreDisplayMode":"numeric","displayValue":"0.049","details":{"items":[{"finalLayoutShiftTraceEventFound":true}],"type":"debugdata"},"numericValue":0.04914469401041667},"aria-valid-attr-value":{"id":"aria-valid-attr-value","title":"`[aria-*]` attributes have valid values","description":"Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://web.dev/aria-valid-attr-value/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"type":"table","items":[]}},"third-party-summary":{"id":"third-party-summary","title":"Minimize third-party usage","description":"Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).","score":1,"scoreDisplayMode":"binary","displayValue":"Third-party code blocked the main thread for 0 ms","details":{"items":[{"transferSize":30790,"blockingTime":0,"mainThreadTime":9.636,"subItems":{"items":[{"blockingTime":0,"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2","mainThreadTime":0,"transferSize":9746},{"mainThreadTime":0,"url":"https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2","transferSize":9700,"blockingTime":0},{"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2","blockingTime":0,"mainThreadTime":0,"transferSize":9646}],"type":"subitems"},"entity":{"text":"Google Fonts","type":"link","url":"https://fonts.google.com/"}}],"summary":{"wastedMs":0,"wastedBytes":30790},"headings":[{"text":"Third-Party","key":"entity","subItemsHeading":{"itemType":"url","key":"url"},"itemType":"link"},{"itemType":"bytes","text":"Transfer Size","subItemsHeading":{"key":"transferSize"},"key":"transferSize","granularity":1},{"granularity":1,"subItemsHeading":{"key":"blockingTime"},"itemType":"ms","text":"Main-Thread Blocking Time","key":"blockingTime"}],"type":"table"}},"bypass":{"id":"bypass","title":"The page contains a heading, skip link, or landmark region","description":"Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://web.dev/bypass/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"type":"table","items":[]}},"bootup-time":{"id":"bootup-time","title":"Reduce JavaScript execution time","description":"Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).","score":0.79,"scoreDisplayMode":"numeric","displayValue":"1.9 s","details":{"type":"table","summary":{"wastedMs":1852.0319999999974},"headings":[{"itemType":"url","text":"URL","key":"url"},{"granularity":1,"key":"total","text":"Total CPU Time","itemType":"ms"},{"granularity":1,"itemType":"ms","key":"scripting","text":"Script Evaluation"},{"itemType":"ms","key":"scriptParseCompile","text":"Script Parse","granularity":1}],"items":[{"scriptParseCompile":6.52,"url":"https://reinnovame.com/wp-content/themes/jquery.min.js","scripting":1190.4879999999973,"total":1759.1119999999971},{"url":"https://reinnovame.com/","total":1496.952,"scripting":24.76399999999998,"scriptParseCompile":15.135999999999994},{"scripting":214.52400000000006,"total":1404.3799999999997,"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","scriptParseCompile":37.94},{"total":753.8720000000002,"scriptParseCompile":0.5,"url":"Unattributable","scripting":15.995999999999992},{"scripting":84.41600000000007,"scriptParseCompile":6.46,"total":243.76400000000007,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js"},{"scripting":203.66799999999998,"url":"https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4","total":219.79199999999997,"scriptParseCompile":10.972},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css","total":127.44800000000001,"scriptParseCompile":0,"scripting":0},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css","scriptParseCompile":0,"total":80.676,"scripting":0},{"scriptParseCompile":6.644,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js","total":50.94399999999999,"scripting":34.004000000000005}]},"numericValue":1852.0319999999974},"listitem":{"id":"listitem","title":"List items (`\u003cli>`) are contained within `\u003cul>` or `\u003col>` parent elements","description":"Screen readers require list items (`\u003cli>`) to be contained within a parent `\u003cul>` or `\u003col>` to be announced properly. [Learn more](https://web.dev/listitem/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"network-rtt":{"id":"network-rtt","title":"Network Round Trip Times","description":"Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).","score":null,"scoreDisplayMode":"informative","displayValue":"0 ms","details":{"items":[],"type":"table","headings":[]},"numericValue":0},"max-potential-fid":{"id":"max-potential-fid","title":"Max Potential First Input Delay","description":"The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).","score":0.02,"scoreDisplayMode":"numeric","displayValue":"700 ms","numericValue":698},"http-status-code":{"id":"http-status-code","title":"Page has successful HTTP status code","description":"Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more](https://web.dev/http-status-code/).","score":1,"scoreDisplayMode":"binary"},"list":{"id":"list","title":"Lists contain only `\u003cli>` elements and script supporting elements (`\u003cscript>` and `\u003ctemplate>`).","description":"Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://web.dev/list/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","items":[],"headings":[]}},"aria-required-attr":{"id":"aria-required-attr","title":"`[role]`s have all required `[aria-*]` attributes","description":"Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://web.dev/aria-required-attr/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"type":"table","headings":[]}},"js-libraries":{"id":"js-libraries","title":"Detected JavaScript libraries","description":"All front-end JavaScript libraries detected on the page. [Learn more](https://web.dev/js-libraries/).","score":1,"scoreDisplayMode":"binary","details":{"summary":{},"type":"table","items":[{"name":"Bootstrap","npm":"bootstrap","version":"3.2.0"},{"version":"1.11.3","name":"jQuery","npm":"jquery"},{"name":"Underscore","npm":"underscore","version":"1.8.3"},{"name":"Hammer.js","npm":"hammerjs","version":"2.0.6"},{"version":"5.5.3","name":"WordPress"},{"name":"core-js","npm":"core-js","version":"2.6.11: global"}],"debugData":{"type":"debugdata","stacks":[{"id":"bootstrap","version":"3.2.0"},{"id":"jquery","version":"1.11.3"},{"id":"jquery-fast"},{"id":"underscore","version":"1.8.3"},{"id":"hammerjs","version":"2.0.6"},{"id":"wordpress","version":"5.5.3"},{"id":"corejs","version":"2.6.11: global"}]},"headings":[{"key":"name","text":"Name","itemType":"text"},{"itemType":"text","key":"version","text":"Version"}]}},"mainthread-work-breakdown":{"id":"mainthread-work-breakdown","title":"Minimize main-thread work","description":"Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)","score":0.19,"scoreDisplayMode":"numeric","displayValue":"6.4 s","details":{"type":"table","items":[{"duration":1846.431999999993,"group":"scriptEvaluation","groupLabel":"Script Evaluation"},{"group":"styleLayout","duration":1599.672,"groupLabel":"Style & Layout"},{"duration":1556.3399999999897,"groupLabel":"Other","group":"other"},{"group":"paintCompositeRender","groupLabel":"Rendering","duration":746.252000000024},{"duration":434.46000000000043,"groupLabel":"Parse HTML & CSS","group":"parseHTML"},{"group":"scriptParseCompile","groupLabel":"Script Parsing & Compilation","duration":191.076}],"headings":[{"text":"Category","key":"groupLabel","itemType":"text"},{"key":"duration","text":"Time Spent","itemType":"ms","granularity":1}]},"numericValue":6374.232000000007},"largest-contentful-paint-element":{"id":"largest-contentful-paint-element","title":"Largest Contentful Paint element","description":"This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)","score":null,"scoreDisplayMode":"informative","displayValue":"1 element found","details":{"headings":[{"text":"Element","itemType":"node","key":"node"}],"type":"table","items":[{"node":{"selector":"div.full-page-inner > div.row-bg-wrap > div.inner-wrap > div.row-bg","boundingRect":{"height":640,"left":0,"width":360,"bottom":640,"top":0,"right":360},"snippet":"\u003cdiv class=\"row-bg using-image\" style=\"background-image: url(https://reinnovame.com/wp-content/uploads/2020/09/01…\">","nodeLabel":"div","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV","type":"node"}}]}},"uses-rel-preconnect":{"id":"uses-rel-preconnect","title":"Preconnect to required origins","description":"Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).","score":1,"scoreDisplayMode":"numeric","details":{"headings":[],"overallSavingsMs":0,"items":[],"type":"opportunity"},"warnings":[],"numericValue":0},"focus-traps":{"id":"focus-traps","title":"User focus is not accidentally trapped in a region","description":"A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://web.dev/focus-traps/).","score":null,"scoreDisplayMode":"manual"},"font-size":{"id":"font-size","title":"Document doesn't use legible font sizes","description":"Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://web.dev/font-size/).","score":0,"scoreDisplayMode":"binary","displayValue":"34.56% legible text","details":{"headings":[{"itemType":"source-location","text":"Source","key":"source"},{"text":"Selector","key":"selector","itemType":"code"},{"itemType":"text","key":"coverage","text":"% of Page Text"},{"itemType":"text","key":"fontSize","text":"Font Size"}],"type":"table","items":[{"coverage":"53.87%","fontSize":"10.5px","selector":"html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video","source":{"type":"source-location","url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css","urlProvider":"network","column":26,"line":6964}},{"fontSize":"\u003c 12px","source":{"type":"code","value":"Add'l illegible text"},"coverage":"11.56%"},{"coverage":"34.56%","source":{"type":"code","value":"Legible text"},"fontSize":"≥ 12px"}]}},"uses-rel-preload":{"id":"uses-rel-preload","title":"Preload key requests","description":"Consider using `\u003clink rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).","score":0.27,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 2,670 ms","details":{"overallSavingsMs":2670,"headings":[{"valueType":"url","label":"URL","key":"url"},{"key":"wastedMs","label":"Potential Savings","valueType":"timespanMs"}],"items":[{"url":"https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2","wastedMs":2670},{"wastedMs":1920,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2"},{"wastedMs":1770,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2"},{"url":"https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2","wastedMs":1410}],"type":"opportunity"},"numericValue":2670},"aria-required-children":{"id":"aria-required-children","title":"Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.","description":"Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-children/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"type":"table","headings":[]}},"plugins":{"id":"plugins","title":"Document avoids plugins","description":"Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more](https://web.dev/plugins/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"headings":[],"type":"table"}},"viewport":{"id":"viewport","title":"Has a `\u003cmeta name=\"viewport\">` tag with `width` or `initial-scale`","description":"Add a `\u003cmeta name=\"viewport\">` tag to optimize your app for mobile screens. [Learn more](https://web.dev/viewport/).","score":1,"scoreDisplayMode":"binary","warnings":[]},"efficient-animated-content":{"id":"efficient-animated-content","title":"Use video formats for animated content","description":"Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)","score":1,"scoreDisplayMode":"numeric","details":{"overallSavingsBytes":0,"type":"opportunity","headings":[],"overallSavingsMs":0,"items":[]},"numericValue":0},"structured-data":{"id":"structured-data","title":"Structured data is valid","description":"Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more](https://web.dev/structured-data/).","score":null,"scoreDisplayMode":"manual"},"estimated-input-latency":{"id":"estimated-input-latency","title":"Estimated Input Latency","description":"Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://web.dev/estimated-input-latency/).","score":0.03,"scoreDisplayMode":"numeric","displayValue":"230 ms","numericValue":225.60000000000002},"document-title":{"id":"document-title","title":"Document has a `\u003ctitle>` element","description":"The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"items":[],"type":"table"}},"custom-controls-roles":{"id":"custom-controls-roles","title":"Custom controls have ARIA roles","description":"Custom interactive controls have appropriate ARIA roles. [Learn more](https://web.dev/custom-control-roles/).","score":null,"scoreDisplayMode":"manual"},"frame-title":{"id":"frame-title","title":"`\u003cframe>` or `\u003ciframe>` elements have a title","description":"Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://web.dev/frame-title/).","score":null,"scoreDisplayMode":"notApplicable"},"first-meaningful-paint":{"id":"first-meaningful-paint","title":"First Meaningful Paint","description":"First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).","score":0.44,"scoreDisplayMode":"numeric","displayValue":"4.3 s","numericValue":4265.5},"hreflang":{"id":"hreflang","title":"Document has a valid `hreflang`","description":"hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more](https://web.dev/hreflang/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"items":[],"type":"table"}},"unused-css-rules":{"id":"unused-css-rules","title":"Remove unused CSS","description":"Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).","score":0.45,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 163 KiB","details":{"overallSavingsBytes":167103,"headings":[{"valueType":"url","key":"url","label":"URL"},{"valueType":"bytes","label":"Transfer Size","key":"totalBytes"},{"label":"Potential Savings","valueType":"bytes","key":"wastedBytes"}],"items":[{"wastedPercent":94.9073198962935,"wastedBytes":113126,"totalBytes":119196,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css"},{"wastedPercent":80.30444694657855,"totalBytes":67216,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css","wastedBytes":53977}],"type":"opportunity","overallSavingsMs":1200},"numericValue":1200},"network-server-latency":{"id":"network-server-latency","title":"Server Backend Latencies","description":"Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).","score":null,"scoreDisplayMode":"informative","displayValue":"0 ms","details":{"items":[],"type":"table","headings":[]},"numericValue":0},"deprecations":{"id":"deprecations","title":"Avoids deprecated APIs","description":"Deprecated APIs will eventually be removed from the browser. [Learn more](https://web.dev/deprecations/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"type":"table","headings":[]}},"critical-request-chains":{"id":"critical-request-chains","title":"Avoid chaining critical requests","description":"The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).","score":null,"scoreDisplayMode":"informative","displayValue":"48 chains found","details":{"longestChain":{"transferSize":43310,"duration":2012.6040000468493,"length":3},"chains":{"DE665EB12990364A28D1E27FCAA916C3":{"children":{"23.35":{"request":{"responseReceivedTime":2108571.1233469998,"url":"https://reinnovame.com/wp-content/themes/jquery.flipster.min.js","transferSize":3346,"endTime":2108571.123348,"startTime":2108571.011162}},"23.50":{"request":{"responseReceivedTime":2108571.41199,"endTime":2108571.411991,"url":"https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4","startTime":2108571.080817,"transferSize":2191}},"23.47":{"request":{"endTime":2108571.413467,"transferSize":2315,"startTime":2108571.079931,"url":"https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0","responseReceivedTime":2108571.413466}},"23.36":{"request":{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css","responseReceivedTime":2108571.192489,"endTime":2108571.19249,"startTime":2108571.077503,"transferSize":3885}},"23.61":{"request":{"startTime":2108571.082695,"endTime":2108571.418378,"responseReceivedTime":2108571.418377,"url":"https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3","transferSize":6086}},"23.11":{"request":{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js","transferSize":948,"endTime":2108570.642402,"responseReceivedTime":2108570.6424000002,"startTime":2108570.315311}},"23.62":{"request":{"startTime":2108571.082894,"responseReceivedTime":2108571.4171530004,"url":"https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3","transferSize":970,"endTime":2108571.417154}},"23.5":{"request":{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css","startTime":2108570.314029,"transferSize":3994,"responseReceivedTime":2108570.732982,"endTime":2108570.732983}},"23.43":{"request":{"responseReceivedTime":2108571.192855,"url":"https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1","endTime":2108571.192856,"startTime":2108571.079105,"transferSize":2451}},"23.55":{"request":{"endTime":2108571.415121,"startTime":2108571.081773,"responseReceivedTime":2108571.41512,"url":"https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8","transferSize":3322}},"23.42":{"request":{"url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6","transferSize":37659,"responseReceivedTime":2108571.320002,"endTime":2108571.320004,"startTime":2108571.078869}},"23.39":{"request":{"responseReceivedTime":2108571.19815,"url":"https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1","startTime":2108571.078112,"transferSize":11471,"endTime":2108571.198152}},"23.60":{"request":{"responseReceivedTime":2108571.419739,"endTime":2108571.41974,"transferSize":6801,"url":"https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0","startTime":2108571.082541}},"23.64":{"request":{"startTime":2108571.083375,"responseReceivedTime":2108571.417758,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11","endTime":2108571.417759,"transferSize":5008}},"23.58":{"request":{"transferSize":19408,"endTime":2108571.532472,"startTime":2108571.082234,"url":"https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2","responseReceivedTime":2108571.53247}},"23.40":{"request":{"endTime":2108571.194521,"url":"https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1","responseReceivedTime":2108571.19452,"startTime":2108571.078287,"transferSize":4306}},"23.54":{"request":{"startTime":2108571.081537,"responseReceivedTime":2108571.420259,"url":"https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0","endTime":2108571.420261,"transferSize":7822}},"23.66":{"request":{"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0","endTime":2108571.4165,"startTime":2108571.083703,"responseReceivedTime":2108571.4164980003,"transferSize":598}},"23.9":{"request":{"endTime":2108570.433583,"responseReceivedTime":2108570.43358,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js","startTime":2108570.314716,"transferSize":29104}},"23.7":{"request":{"responseReceivedTime":2108570.986943,"endTime":2108570.986945,"transferSize":67216,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css","startTime":2108570.314406},"children":{"23.113":{"request":{"responseReceivedTime":2108571.7662489996,"startTime":2108571.226581,"endTime":2108571.76625,"transferSize":43310,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2"}},"23.116":{"request":{"transferSize":46822,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2","responseReceivedTime":2108571.7623030003,"startTime":2108571.228058,"endTime":2108571.762305}},"23.110":{"request":{"endTime":2108571.551126,"transferSize":52024,"startTime":2108571.226859,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2","responseReceivedTime":2108571.551124}}}},"23.48":{"request":{"url":"https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9","endTime":2108571.414735,"startTime":2108571.080154,"transferSize":3070,"responseReceivedTime":2108571.4147329996}},"23.2":{"request":{"endTime":2108570.645094,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css","transferSize":8834,"startTime":2108570.312122,"responseReceivedTime":2108570.645092}},"23.8":{"request":{"responseReceivedTime":2108570.8448249996,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js","transferSize":34216,"endTime":2108570.844827,"startTime":2108570.31455}},"23.57":{"request":{"startTime":2108571.08199,"endTime":2108571.421257,"url":"https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0","transferSize":3671,"responseReceivedTime":2108571.4212559997}},"23.34":{"request":{"transferSize":33660,"url":"https://reinnovame.com/wp-content/themes/jquery.min.js","responseReceivedTime":2108571.110483,"startTime":2108570.989318,"endTime":2108571.110484}},"23.52":{"request":{"startTime":2108571.081099,"endTime":2108571.525981,"transferSize":22396,"responseReceivedTime":2108571.5259789997,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1"}},"23.4":{"children":{"23.74":{"request":{"startTime":2108571.321533,"endTime":2108571.539579,"responseReceivedTime":2108571.5395770003,"transferSize":98309,"url":"https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2"}}},"request":{"transferSize":119196,"endTime":2108571.002171,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css","responseReceivedTime":2108571.00217,"startTime":2108570.313442}},"23.59":{"request":{"endTime":2108571.412585,"responseReceivedTime":2108571.412583,"transferSize":1148,"startTime":2108571.082372,"url":"https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3"}},"23.53":{"request":{"startTime":2108571.081418,"responseReceivedTime":2108571.619963,"endTime":2108571.619964,"transferSize":37727,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0"}},"23.10":{"request":{"endTime":2108570.852446,"transferSize":14591,"startTime":2108570.315056,"responseReceivedTime":2108570.852445,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js"}},"23.41":{"request":{"url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6","endTime":2108571.191914,"transferSize":6421,"startTime":2108571.078587,"responseReceivedTime":2108571.191913}},"23.56":{"request":{"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","startTime":2108571.081874,"endTime":2108571.729332,"responseReceivedTime":2108571.72933,"transferSize":100955}},"23.46":{"request":{"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13","endTime":2108571.410065,"responseReceivedTime":2108571.4100630004,"startTime":2108571.079681,"transferSize":1620}},"23.49":{"request":{"url":"https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1","responseReceivedTime":2108571.413067,"endTime":2108571.413069,"startTime":2108571.080549,"transferSize":4067}},"23.63":{"request":{"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0","startTime":2108571.083226,"endTime":2108571.411494,"responseReceivedTime":2108571.411493,"transferSize":1576}},"23.65":{"request":{"responseReceivedTime":2108571.416957,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11","startTime":2108571.08354,"endTime":2108571.416958,"transferSize":2793}},"23.12":{"request":{"startTime":2108570.315578,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css","endTime":2108570.732603,"responseReceivedTime":2108570.7326020002,"transferSize":1775}},"23.51":{"request":{"url":"https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9","transferSize":1319,"startTime":2108571.080961,"responseReceivedTime":2108571.4181270003,"endTime":2108571.418128}},"23.38":{"request":{"responseReceivedTime":2108571.1908739996,"startTime":2108571.077919,"transferSize":2516,"url":"https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4","endTime":2108571.190876}},"23.6":{"children":{"23.102":{"request":{"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2","responseReceivedTime":2108571.254619,"startTime":2108571.251813,"transferSize":9746,"endTime":2108571.254621}},"23.95":{"request":{"url":"https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2","transferSize":9700,"responseReceivedTime":2108571.139405,"startTime":2108571.135728,"endTime":2108571.139407}},"23.109":{"request":{"startTime":2108571.22566,"responseReceivedTime":2108571.228144,"url":"https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2","transferSize":9646,"endTime":2108571.228145}}},"request":{"transferSize":1698,"url":"https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&subset=latin%2Clatin-ext","startTime":2108570.314233,"responseReceivedTime":2108570.325624,"endTime":2108570.325626}},"23.44":{"request":{"responseReceivedTime":2108571.410984,"startTime":2108571.07938,"transferSize":1999,"endTime":2108571.410985,"url":"https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1"}},"23.45":{"request":{"startTime":2108571.079528,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3","transferSize":2303,"endTime":2108571.410602,"responseReceivedTime":2108571.4106010003}},"23.3":{"request":{"endTime":2108570.86446,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css","responseReceivedTime":2108570.864458,"startTime":2108570.312331,"transferSize":11337}},"23.37":{"request":{"url":"https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4","responseReceivedTime":2108571.302597,"transferSize":34598,"startTime":2108571.07773,"endTime":2108571.302599}}},"request":{"transferSize":26263,"url":"https://reinnovame.com/","endTime":2108570.292804,"startTime":2108569.753646,"responseReceivedTime":2108570.292802}}},"type":"criticalrequestchain"}},"tabindex":{"id":"tabindex","title":"No element has a `[tabindex]` value greater than 0","description":"A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://web.dev/tabindex/).","score":null,"scoreDisplayMode":"notApplicable"},"resource-summary":{"id":"resource-summary","title":"Keep request counts low and transfer sizes small","description":"To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).","score":null,"scoreDisplayMode":"informative","displayValue":"77 requests • 9,106 KiB","details":{"type":"table","headings":[{"text":"Resource Type","key":"label","itemType":"text"},{"key":"requestCount","itemType":"numeric","text":"Requests"},{"text":"Transfer Size","key":"transferSize","itemType":"bytes"}],"items":[{"requestCount":77,"label":"Total","resourceType":"total","transferSize":9324531},{"requestCount":3,"resourceType":"media","label":"Media","transferSize":4411949},{"transferSize":3944375,"resourceType":"image","requestCount":22,"label":"Image"},{"label":"Script","transferSize":454452,"requestCount":36,"resourceType":"script"},{"label":"Font","requestCount":7,"transferSize":269557,"resourceType":"font"},{"transferSize":217935,"requestCount":8,"resourceType":"stylesheet","label":"Stylesheet"},{"resourceType":"document","requestCount":1,"transferSize":26263,"label":"Document"},{"label":"Other","requestCount":0,"transferSize":0,"resourceType":"other"},{"label":"Third-party","requestCount":4,"transferSize":30790,"resourceType":"third-party"}]}},"meta-viewport":{"id":"meta-viewport","title":"`[user-scalable=\"no\"]` is used in the `\u003cmeta name=\"viewport\">` element or the `[maximum-scale]` attribute is less than 5.","description":"Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://web.dev/meta-viewport/).","score":0,"scoreDisplayMode":"binary","details":{"debugData":{"tags":["cat.sensory-and-visual-cues","best-practice"],"type":"debugdata","impact":"critical"},"items":[{"node":{"explanation":"Fix any of the following:\n maximum-scale on \u003cmeta> tag disables zooming on mobile devices","path":"1,HTML,0,HEAD,1,META","type":"node","snippet":"\u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">","selector":"meta[name=\"viewport\"]","nodeLabel":"meta"}}],"headings":[{"key":"node","text":"Failing Elements","itemType":"node"}],"type":"table"}},"interactive":{"id":"interactive","title":"Time to Interactive","description":"Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).","score":0.15,"scoreDisplayMode":"numeric","displayValue":"12.4 s","numericValue":12374},"link-text":{"id":"link-text","title":"Links have descriptive text","description":"Descriptive link text helps search engines understand your content. [Learn more](https://web.dev/link-text/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"summary":{},"type":"table","headings":[]}},"final-screenshot":{"id":"final-screenshot","title":"Final Screenshot","description":"The last screenshot captured of the pageload.","score":null,"scoreDisplayMode":"informative","details":{"type":"screenshot","timestamp":2108573553683,"data":"data:image/jpeg;base64,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","timing":3801}},"video-caption":{"id":"video-caption","title":"`\u003cvideo>` elements contain a `\u003ctrack>` element with `[kind=\"captions\"]`","description":"When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://web.dev/video-caption/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"items":[],"type":"table"}},"crawlable-anchors":{"id":"crawlable-anchors","title":"Links are not crawlable","description":"Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn More](https://support.google.com/webmasters/answer/9112205)","score":0,"scoreDisplayMode":"binary","details":{"items":[{"node":{"path":"1,HTML,1,BODY,2,DIV,0,A","selector":"body.home > div.icon-bar > a.linkedin","nodeLabel":"a","type":"node","snippet":"\u003ca href=\"\" class=\"linkedin\">"}},{"node":{"nodeLabel":"a","selector":"body.home > div.icon-bar > a.facebook","path":"1,HTML,1,BODY,2,DIV,1,A","snippet":"\u003ca href=\"\" class=\"facebook\">","type":"node"}},{"node":{"path":"1,HTML,1,BODY,2,DIV,2,A","type":"node","snippet":"\u003ca href=\"\" class=\"instagram\">","nodeLabel":"a","selector":"body.home > div.icon-bar > a.instagram"}},{"node":{"nodeLabel":"a","snippet":"\u003ca href=\"\" class=\"youtube\">","selector":"body.home > div.icon-bar > a.youtube","type":"node","path":"1,HTML,1,BODY,2,DIV,3,A"}}],"headings":[{"key":"node","itemType":"node","text":"Uncrawlable Link"}],"type":"table"}},"no-document-write":{"id":"no-document-write","title":"Avoids `document.write()`","description":"For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"headings":[],"type":"table"}},"is-crawlable":{"id":"is-crawlable","title":"Page is blocked from indexing","description":"Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more](https://web.dev/is-crawable/).","score":0,"scoreDisplayMode":"binary","details":{"items":[{"source":{"type":"node","snippet":"\u003cmeta name=\"robots\" content=\"noindex,nofollow\" />"}}],"type":"table","headings":[{"text":"Blocking Directive Source","itemType":"code","key":"source"}]}},"accesskeys":{"id":"accesskeys","title":"`[accesskey]` values are unique","description":"Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://web.dev/accesskeys/).","score":null,"scoreDisplayMode":"notApplicable"},"duplicated-javascript":{"id":"duplicated-javascript","title":"Remove duplicate modules in JavaScript bundles","description":"Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ","score":1,"scoreDisplayMode":"numeric","details":{"overallSavingsBytes":0,"headings":[],"items":[],"type":"opportunity","overallSavingsMs":0},"numericValue":0},"screenshot-thumbnails":{"id":"screenshot-thumbnails","title":"Screenshot Thumbnails","description":"This is what the load of your site looked like.","score":null,"scoreDisplayMode":"informative","details":{"items":[{"timing":325,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z","timestamp":2108570077360},{"timestamp":2108570402460,"timing":650,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z"},{"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z","timing":975,"timestamp":2108570727560},{"timestamp":2108571052660,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//Z","timing":1300},{"timing":1626,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAQkDHPXpQAAgkjPI60ALQAUAFABQAUAFABQAUAFABQAUAFABQB4p8aYPinN4usv+EGuhb6WtkvmA6qloDMXfd8raJfZ+XZz5q/7gxucA9D+G9p4ks/B2nR+LpY5/EKiT7VJHeLdqcyMUxKtrahvk29IEx0+YjewB1FABQAUAFABQAUAFABQAUAFABQAUAFACFQSMjpQAAYGKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/AP/Z","timestamp":2108571377760},{"timestamp":2108571702860,"data":"data:image/jpeg;base64,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","timing":1951},{"timing":2276,"data":"data:image/jpeg;base64,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","timestamp":2108572027960},{"timing":2601,"data":"data:image/jpeg;base64,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","timestamp":2108572353060},{"data":"data:image/jpeg;base64,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","timing":2926,"timestamp":2108572678160},{"timing":3251,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APzKJJzQSKnzNgdaARNgKcd6Chwwg5OOcc0AP2MM/KeOTx0oAbQAooAUdKAFoAKAF6daAFALdelADsZGDQA4LwfYUAKOVHoe9AGfs6gd/fFAH1Hb+DvhJL8EJr640i/Tx3NZW9vZ2tpbaj+8m+3yB5C5j8rP2VoCNrfMWYEBsMQD0J/BP7Ot5dXf2PRNbgtlub/7PJdWOosjxxvFHp8LulplWvczyiUIfJVAjRSPywBn2/gj4EtDej+wdYu501HSjpynTNTgW7h89Bfw3CJExRmhSWWPy5STHOgJDo2QDkPjV4X+D2n/AAeafw1o02m+MLKS3tXdn1Z1dshZhIbi1jiE42BjgorGeUBQIo9wB8wAZoAUDFAC0AGM0APVR3oAdsFADtooAAKAPYfhBL8MoPC12/jWz+0al9rby2/s57rbDsTbyus2WPm3/wDLJuv3znaoBwfxDuPD954w1CXwrC9voLeX9mje0a1IxGof9211ckfPu6zPnqNoO1QDj+pFAC84IHygjBC8UAC/KMDp3B5B+vrQAJGoKYH3M7fbPXFADgPmZgANxycDGTQAtABQA5V3H2oAkAyKAHDigBCKAHKuR6UAO25IoAUqHXBGRkH8un86AHbevqTmgDNUYFACjpQAUAO3GgBaACgAxk4oAmHNADqACgBQvTNADwMe1ADutACheaAHbaAMugAoAcM+lAC0AFAD1GQOKAHhQO2KAHUAA5NAEm0elACgDsKAHBeaAH4HoKADAHYCgBaAMplKYzjkZ4oAOtADhwKACgBVAJoAlAoAdQAdaQx6ihAx2MkUwQ8AA0Axe/FAgHXigByjJqblEgGKLj0sYxyxGST9aogXGKAFoAUDNAEiJgUALj3oAeq55zigY4KB3zQUPx70CY4DA60EiEZqWUhQvFIZKI8DrQCBVOaBjtuTQDMl/L3AoCBjnPrVXIsJ1FACAY70kUSKOM07hYfu6UXDlF4NFxco9eFouMUc1IDwM0AOIzQA5VBxQBKEUfWgqwd8UAOAxQIdQIwwtAC9qAHBQaBofgCgYUAPCjrQFx460EkgHFACgCgB6IM0ASAY6daCkKo5PegB2KAFAzQTYeoxQBg0AA5OKAJAMCgqx0vhr4f6v4uS6fTBZzfZ2SNopL6GGaV33bEhikdXmY7WAWNWOcDGWGQBNM+H+t6t9oNrbRutvexafNJJOkUcU0glZQ7uQqLtgmYuxCKEJZgKBXL1t8L9fu9U0ywggt5pdS1RtItJI7uJopbgGIYEgYpt/fxEPu2kOCCRkgEPn+FuvWYu3mOlBLWFJ2aPWbNxMrBv+PcrKRckFWUiEuQwwcHigC/pXwc1/WLCC7t77wuEniWZI5vFelxShSm8lke4VkwOoYArg5AxQBSk+GusxaZPfo2mXkULThorHV7S6mUQ+YZHMUUrOEAidt+3aV2sCQykgFPw94Q1LxPbXM+nLbSm3KA273kMdxMWOFWGF2WSZsjG2NWIyPUUFG3pXwl8Q6zHby2r6K0U1p9tLv4gsEEEO6Jczbpx5Lbpo1CSbWLEgDKnAFypqnw61rRPDVjrd+NPgs7wt5MX9qWxuXVZXhZxbiTztokikXdsA+QnOOaBXOfEBMBlyNoOMZ5/zzQMRBxyKA6WHj0xxQKxzwFAiUD2oKsFAGrofiK78PES2En2a8W4iuIrkAFoXQOFZeOGBcMGHKlQRzQB0Wm/E2XSvCHjHw+LC2Nj4nmtrm7llP7yBrd5XRYz05aQEnHRSBy2QEsm8JfEiDw23gvNobj/AIR7XX1xz5gHn7xZ5j6Hbzakg8/f6ccgFCz8cX+n6fJZNb6e9u22ORm0+3+0RBTkeTMYy8TfeJZWBbI3bgAAAR3fi651BbCG5t7HZYWklpEbLToLNirReXmVoo1aVsAHdIWbOefmJoAsW3jTUoNEstPt2s7ZLCTzoLq0sIILxXDGQMbpEEzYzkBnIGFwBsWgqxXTVrH+3Fuf7OeGwhvRP9gtp3iKqSpMaO251X5cKx3MAQSWIJIB1nhn4yaj4c0q6tBY6LdyPp32GB20HTyoUXFtLm4UwEXRxbqAZdxUtuDZzkE0V/GfxKbxf4X0DQ4tJsdNsNHhnjiWO1ieYmS8urjaLhlMwjC3AQI0jD5N3JPCuFjjNg+tFxu6HDFMOo9QB9aVyXc59gGYELtH1plWDHFABQBZZ0YIGhORgZ3dcD6UCZreDby307XY57neCsFwLd432NHcmFxbvv3pt2zGNt2QFxk5AwQR1qeINNm0+w/4S4ahr2ppqc7S3MOqpuVPLtsGSQxzeZ90gcgja4+gBo3nii1uLnwMsl7cHSrW409p45dUSW2QpFEJStqFDREEOGYk55/vUAYeiTS+H/DmtWH22dJJ0y6afr8MMMiEFcSxjd9oByw2AgjJB+8KCix/bMnl6etrqqWmhRWqJb291dB44L77HtklEJZ/KZphJtkIUBnDAqDwAdFDr5n8H3Olan4j08Oba/mvJ4Mz3FxOyF4Y7oMhW8DOipE6uxt2leQsoVBQBjfGTX/+Ei8bXt3DeXl5YvJIbY3erJf4jMjY2FVXy1xjCEZHrzQUjiRwOlSxp6k8a7ocJEWcsAG/pQA0x4bGQe/FAroeYtoUgg5Hr09jQPRmD9nlChii4HBPBqiBRaytghR2HUf40AOFo7uyjG5OSKACSJrd9rgA+lAmIq453UCNjStEu9QurK0W2Di7IkinnZoYkQsEZ3kI2rErA5YkYIPPGKAOxbwX4efwxpmqx38+nC+uJXWW6lhOIYUh8+MRDAaUPJKU3SR70jAxulQUAWNb8A6ZaeCo9Xs7pp7wWD3b6e7yS3MCDUJLVZpX8pYTHtVF+Vt5eQHaF3YCivqHgK20/VdRe1jl1HSreS8t1hhuB50E0UU7KJ/3Y4IgEvyja8YdVfekmwA5jVtPS0stGnW0ntXu7MzSNI+6OUieaPfGMZC4jCnJJ3K5zzgBSM5fWky0SDpSAVeMjjnvQMei/MKEJk/SqEjAcpuwHYgDOc4z+tBmCxq2My46cls49aBjooUaRgZtoHQ/3uaAseqfEn4Fv4F8Q6xpKt4haewgaWM6voX2GS7ZZJAzRxedITB5UE8vn52/umUheGoCxLoHwW0bWvEdxoEGta7qGs6fHKdRs9H0JL2QSRukbLaql1/pCbmbLkxEKobackACxnpo2oWWk6rpem+LNRGjWrG+fTz5kIEjypZMs0O8qkphn+bazjaxQk5IoFYY3gzSLnQodY/tnWG+H0d+9ibyTT7f7Wt0YhIypYi7IwyeVmQyKPlPUqAZAr6b/aHiXwZqFhdeJ9XvoNLlkuLHSbZZLmxADgSXEoaQfZ1Zp/kfym3O7htmSaoZ0HjH4Zaj4d1K6SyfxZNr0V9ZxxWur6EbC9uJJnugJUUTSlvniCq3VmlfAG35lsNFvRtCuPGWtvod1408RatqmrapbxSzWthJc2ksE1zbwm6kkedJC5ZYMI8Y3FIQWU4AGMsXXwC+xWnia8ceLBHo1tb3D2h8MYu7fzVuGzfRfaP9DTFuGD5kBSVGwM7Qikcx4G+Gr+MPEXhvS/Pvt2sWF1fLHpen/bbkCH7SdkcPmJ5jOLbgblxu9uQRz/iHSIdD1rUrBft0b2k7Q+VqdqLS5XBIIkh3PsYEHK7jigZQXHFArDwM0NoRzDFeMGqIANlup/CgaJMk4GW/Ggo6QfEDxCzSsL8gy3s1/KEgjUTyy7d/m4X94h2L+7YFFy2F+ZsgF3TpvFPjGXxDcWym8uNUk/4mFw6qrXU0jGVY9zYzJJIjssUfzOU4U7TgA1NL0DxTZW+o2tleaatneQwPeRRaxYtFsiljMTMTLxhigBJBO7GcMwouK5WtNN8XX/hqPRbaYyeHXY6u1i+oRC0hlx5azSbnxAzAqil9hfcgU/MAZFYjuvDnibRntLOazii1OaUiCyhSE34lnjQbGgQmUbgV2oy4XPygFzmgRYttL8RQG+gt7y0t0ugstxImqWyQyErIpQzeYELFZWBiDZwxyvBwmyg03SPFGlalo+tJHDb3ELwzWk9xNBEsJA86IyeYwEe8Dcnmbd4Hy7uaQy14lsvFmleGLaw1eAHSLQwwRlDDIsQPnz25YoSVEnnTyIW4kRyyblUEA0YNt4kv4HtSsqhbW0msojsBIil83zF5Hfz5Oeo3deBQMzgC4BOAcYIHTvQBMoxii1xD1GagFqc+97NvG9VyO3J6/jWpkRC4czo/Rlxjr2/GgaJ0u5VXAx0wD3xSuWPhuniTYoXGcjNFwsdd4H8ZWHh8PHq9pc6lp5uYZ59MSRRbXcSJKrxupG5JGEpVJ0O+INJtViw2lwsQeBPFVv4bfWkuFCLfWAtEkawhvVQi4hlyYpjtORERnJwTxSFymvpvjm1s7RY2mvfOe3MIl+y27hQGiIjmViReRHYCEkx5RSMoSFIYHYl8eeM9D8XarZXVpp8um6XCsMK6THHCssEEcaR7Be4aSU4QBWlQ49CBgjZNjIsdU0u30S90ITXqWNxcQXb3Bt0LCSJZEVFiEu3aRPIS+4nhflUbqm4zqvFPxOtfFupz6zeRy/2zf3q3stzcW0N6LYeU6SwASczI7mMoJeYEiCqz5LGho5TVPEclzYyaZbyKlg87XMixWiWwml3vsd1QlSVRyqqPlQMwX7zFlcoxQKALEbskBi42Mc9Oe3+FK9mAo4p3Exy81IrHKDG7HStSB6jvQykiTnGKkqw5QTQJ36D1TJ5NAXY/aM9aBXZIMnAySAcgU7DuSADafWpYhVxu/CptcaJV5A4xVjHrUsY4cE00BLj9KmSAUAntS1ESA4Ax1pgc4LcdRzV3FZDhDjrQMesQz0NAMkFsB2oFcesA9KBDvJGfu0FIcIhkGi4WHrGDSCxKluM9KV+wDxABjOaVxj1hHUA0XuA8QfxYoAkWLrgY+tAD0iK/XGKdwHpDnseKQHNv4s0qRwzSjjsY2/wrTlMOYa3ibSJTzc7OMYWFv8KfKHMNHiTSM/8AHzx7xt/hS5RqQ4eJdI/5+f8AyG/+FPlHzijxLo+P+Pr/AMhv/hRyhzkg8U6N0+1Ef9s2/wAKOUfNHqPPizRjGF+0rxznyXz/ACqbSDmiA8V6KP8Al7P/AH7f/CnyhzRHDxZouP8Aj7P/AH6f/CjlDmiPHi7RB/y9n/v0/wDhRyhzRHjxhofX7YT/ANsn/wAKOUOaI7/hM9D/AOfs/wDfp/8AClZ9ClOKHDxrof8Az94/7Yv/AIUWkTzRFHjXQh/y+N/36f8AwqeWXUOaI5fG+g/8/bfjE/8AhT5X0K54o8orY5jpPBHg6LxleT20muaZoRiEJEurTiGJ/MuYYOG5yU84ysMcRxSN/DQB1en/AAUstRsfEtwPiL4OtG0G4khkS61BkN+qoW32YCEzjKuOAM/Jt3bxQBT1f4Qw6Zb21xF458I6hbzSQxs9rqTFoRJbxTh2jaMSbVEpjbCkrJFIhGQAQDT1L4BppnixNDPxH8BXSNC0/wDa1prLSWQAink2lxFu3H7OyYCk7pIR/wAtFJAFX4KaHcfEDUNBt/iV4bGl2+oXNrFq1zKYkuLeJbhhcDrGA/2cKqGXLNPBtJVy4AMLQPhbDruqQ2D+NfC2lyTW8E8ct/eSrCXliWRYS6xMFkBZY23YVHyGYBWKgEes/De203QrLVIPFnh+9N3ffYlsIrw/aoh5aSedKpQKkWJVXduPzBxj5G2gEHiTwDb+HEH/ABU2h6jNtQmHT7wz7SbdJz84Xacb/K4J/eKw6DNAHofir9nDQtC8JWur2PxZ8F6rdvcx202nR6kgmTfaxyhlCliVErSQlmCqpVGYgM/lAHPp8CoZNbh09fiN4G8uaRES+bVmEGHNmFdj5e5FxehjuAKi2utwBiIIBteDv2bLPxd4fa9PxT8A6RftexW0VpqWtxwgxtZG5M0jNgxqGaGDG1v3rSKxQxnIBz/w8+EWj+M7LW77UfH/AIf8PWmnX1jYxpdzhbi8+0XKRNPDFIY2aGKMySuxwRhAVAZmQAydb+Gttovhl9XPjDw9dvx5Wn2s8slzKTHayFQBHtUgXWDvZRut51BLIAQDiaACgDuPh7p3hC60jxDceJNTW0vYbSUafbFZmM03kStHgRxkY8xI0JaRNplU7ZF3mMA7rxj4X+CieJfFP9g+Nb/+yY4JJtDU2c5Mri4ljSCYtGCp8tY5Nw4ZWzlGYxRAGNqvgn4Ytq+gw6X8QJRYXF3ex6rPf6ZOBZW8MgEEqlIy0jXCAsqBP3bOiuQMuAC5qngH4TR/EHVNPs/iTcnwjHPEtrrculXCzSxNZSSSstv5Y3lLlY4cM8edwIyrM8YBqeHvAnwZl8VatHffEIW2g216i2V3c2d7uurdZ5I3LiO2Yq7RRicR8DE8SearJJgApXPw7+FNss9xB8Q4LhBqkFpaiW2unili2WhnlcLAkogVprkeaVSRhbrshYyN5IBP8MvDHwWHisWPjLxZPNosx1GBtQt7a6U2jROptJkjWHdNHMo6HY/zSKyQlEkcAt+JfAvwMtZ/CS6Z8SbjUbWe5W01eWLTbuOS1haWUfaQJIMSMsZiZ4l2hDtRDcFmlQAwPFfg34T23jPxJa+HvH95ceGLfS7y70fUJtMmee7u0lcQWcqmOPy98YU+byuCGIjLNDEAX9I8BfBs6El1qfxIni1Uz2lu2lRWE5jVZDEJ5/tSwNlYleR2TyskxsiGQbZJACK38C/B4X3g61b4kXMsd+JJNfvzp9zDHpKrGDsjUW7vOzuzBSAAdg3eX5mYwDs/FXw2/Z4udT1SfQfi7DbaaAsun29za6oJSd8OY5B/Z7BDt8/MivJyqME+YogB5P8AFbwh4J8NQ6a3g/xtb+LS+8XO2C6gkQDb5bbJbeNQGXkgSOQxZeiCSQA87oABQB7To/j34QSeH9Ji1nwBeHUbOCK0na0u3/0kqjMbneHTDPLI++Mo3yJAqSR7XMgBp33xF+Cv/CH+IdMsPh1LbXt3LHJp99cyTzTW+yFkxvF2u3JdWJ2spdJHKFZIoLYAxfE3j/4Yat8Io9I03wB/Y3jUXVzctqkcksluFlmhIhQNMXxHHEURpDIArSAo0knnoAbfi/4hfBDU9fhbRPh1qWmaLbWltBFDd3TTs7i7mmneUJLG8hZJIYwTNny4njG1njuIACxqHxF+BMn9jRWXwsvrCztY7f7c9xqFxdXl4wljM4Ey3EUcZMaSDPkkHzThYiFIAOY1Dxj8LTJ4qlsfBd5Al9Eh0eNriRhpsgjmRhv8/MsbExvhhuDEclYmScA0dT+InwsvfB3hrTE8BGDV9L0S7trq+hLIl3fyGExTyATGR9oWdcmQLudXEQQG3IA5fHPwZ03U9De38BXOoWdnaQw3ZvnuFku7hZ7QyXBC3m0Bo47sCMABTPgl/leMAxpfF3wxg1TVp4fBr3MM13bPY29zLcCG3iEDJcZVbreVMjeYkZlLAqgM5VXEoAP4o+FTeJ9ZnHhPVV0GeZZLO1e7LXUKi0kRkEocKFM7rJ8ySNiOMbvlfzQDptH+IvwZ0rxd4d1AfDlbnTbPzG1C0kjuW+0PujMewSX7qMKrj5wyhmdmSRWSOEAqWvxS+GskWly33w/t3u7Gx03TgsMYiRhBATd3MhEmJp5526umEjQcljlQConjT4RSWelLc+CpWkhgjjvmtPtEU07CCVJGWVr541ZpHicMINqmPPllcxkA8Ydi7Fj1JzQAlAHQeGPh74p8ax3Enh7w3q+ux26PJM+m2MtwIkXbuZiinAG9Mk9Nwz1FAHcaR4b8d6vonhmGz+GF3e2Ojzwb5bXQrh/7SaeRLiBbllB8wyJcwKmMFo3hAyCCQDrvGXxB1uTxFrni5PgboXh/w9qEQvFsJPDjCxi0+Q2iIVfYmxWEduvnxGMlrqYoUM67QCr4g8R/ETWfiqmta58KkudfaDTJBoV3oFwbaSCIWtpbZt3y7JK8MEfXDNK6L98AAEWv+JPG2qDwzPc/CaxtrSyuPO0yOLw3KIp/t10bmCEbgRJC8iOsMYyChlVclnagCPSbj4yWngOb4bweDdZuPC0l8dej0R/DrytHdCGHFyrtH5nEFzAD823ZcIcZkVqAKvgfx7rWm+M9N161+EfhjxN/aQn06x0i88PTT2V3cG6W8PlRow8ySPzoowqk/uWjQqQ2SAdZ4L1jxsdL+IkugfAn+1LHxYpt7iWLQJ7mPS7W6KTxpb7IwqNmW0lhY5UfuWCNlSADOh1z4pXPgfUfh+3wrN7BHDBpMjSeHLma5spIJL29GwciKfy724ydoPlLnA+ZiAR6T8QPG8/jXSvEFx8JdE8V6jZXMn2mLVvDc94ur3Oo+dPEbzJzNI3mM0OSGKouN2CSAcxpeneKfFl++p6H8LIrzT3ludZW107RZp7cQO5j2q53MYEeCVE+Y4KSZZmDEAGjca746sNQ8VahD8OY9HTxbb3mgNZ2OiXFvbwtLcpdvDboMASRhokVPm2xmMFTwaAOKufg34y0OG2vfEXhfW/Dmiy3YspNV1PTZoLeGTeUIZ2UAFWVgRnPyMOoNAHO+JNHTQNZuLBLyC/EJA+0Wrb4nO0E7G/iUEkBu+M96AMygDvvBfx28a/D7wrN4c0HV0sdJlvV1FovsNtI/nq8EisJXjZwu+1t2KBtpMS5B5oA1tM/af8AiVpD+JXt/Ejeb4iUrqU81jbTTygsWwkrxs0WCcr5ZXaVUjBUEAGVrvx38beJvhlpHw81PW2uvBuk3TXtlpptoFMUzGTLeaEEh/10nBYjDYxwMAGp43/ab+IvxGlnbxFr8epCS2gtCp0y0iQxQxXUUS7EiAG1L66AI5/eZzlVwAaXib9sL4ueMNb0bVtX8XyXd/o80NxZubG1VVkikSSJnRYgshRkUguGx83945APQ/Amo/tEfF648HaloUsUw08F9Nvk0+yjMELNHYPdTKkW+WMfLF5jq5/cybc+S5QA4LQvB/xYuIdF8OaXDbzLc28N5Z6fFcWRkkS4t5TGxXfu8x4rgrhvnImtlxl7cUAenfG+z/aT+Afg+9tfFuq7vCWsi80e4nhhhltpGubm5M0YLxBleY2jzlkw210LFWYqADyHTP2rPidouoWmpWPiV4NWtjDt1EW0TTMsS2AiV9ykMB/ZdlnIy/lneX3tkAXSP2pfiB4b8bz+LdD1G00jW7iNUnkj063uEkbMDvMyTpIDK8trFMz9fMBK7ckUAUPhr+0h8QvhHouqaT4U8QnSrDU7f7LdRmxtrgvFlj5YaWNmRdzu2FIGWJxkkkAzLn40+K7uw0axmvreay0hdlnbyadbGNR5EcBDr5eJcxRRqd+7OOckkkApX3xU8T6lbapBdaq9xHqVoLG58yCIl4ftS3ZUNtyhM6CRmUgs2SSdxyAclmgAoAKAHRrubGccUB6H0r/ww/4ibH/FRaZn/rnJ/hXiLN6P8rP0yPAeOm2o1Ifj/kH/AAw94hAz/wAJHpmMZ+5J/hT/ALXor7L/AAKXAOPdmqsNfN/5Cf8ADD3iEnH/AAkemZ/3JP8ACj+16P8AK/wD/UHH3t7WH3v/ACKPiT9kTxH4S8L6tq0niKxkt9PtJbp4YlkBdUXeVHGOdo/ECrhmdKpJQSeunQ48XwXjcJhp4mdSLUE20m76K/Yy/hh+zZ4g+Jfgu01yy8Q29lazs8awTeZldjMvbjHLf99H1NbYjH08PPkknc87KeGcTm9D29KcUr21v+aTOmP7EviUoY/+En07YTuKbZME884x7n9a5v7XpLo/vR7q4Bx7dlVh97/yGH9h3xEDg+ItMB9PLk/woWb0XtF/gL/ULH/8/Yfe/wDIU/sOeIwAT4i0wA9D5cnpn0o/tal/K/wF/qHjv+fsPvf+Qn/DDviE/wDMx6Z/37k/wo/tej/K/wAB/wCoWO/5+w+9/wCR8/8AijQH8MeI9W0eWZJ5NOuprR5E4VzG7KSM84OK9iE+eKl3PzuvRdCtOjL7La+4yKo5goAKACgB8SliQPQ0XsNb2P0yPxV8FDJ/4S/QD7f2nB/8VXwKoVotPkf3M/qX+1MDyq2Ign/iXZrv5m/d/H/wPf3Jll1bwTEM5EdvdxKAAIgqgmQnAEXfk73OfmNdXNV/59P7n/kfNU6ODppQhmCsv7y0310e+vppsyOT4+eB5EkX+2PCAaQ3JLi8t12+cipwFYABNu5AAArMxxg4ocqslb2T+5/5GijhIzjJY6OnLf39Hy3v9r7V7a3+e5598UviV4R1H4ZeLbS18VaJc3U+k3UcUMOows8jGJgFUBskkkACs8LRqqvBuDtddH3OvN8xwVTLsRCFeDbjKy5lro/M4/8AZg8eeGdA+D2l2Wp+ItJ068Sacvb3d9FFIoMrEZVmBGRXbmVKpKtzRi3ofO8H47CYfLuStVjF3lo5Jb2t18j2vSPjl4I0tZI38Q+FroOpj82bUIHZFZlLFQzEBvlwGxxuPfpw0lVppXpN/Jn0uIrYLES5vrsY6xekl0W26NW+/aM8Bz6Ulla6n4StFLyPMTf27K5ZJlUgBg2U89tu5mA8uPjIbd0OdTTlov7n/keK8NhppqeYrVJX5lppZ/ae9rkt7+0x4OutN1CNdf8ACcOpXt8b2TU476ETxjdG6xxv5m5AGjzyT97PBHKVSqr/ALl6+T/yLlh8E/ZpY5csVa3Mtfi1fvW2kl5pNdTmL74weCb69nuR4q8OWwmkaTyYdRgWOPJztUb+FHQD0rilRqyd+R/cz6elmOBp04wliYSaSV+Za+erPzs+KFzDefEjxZcW80dxbz6rdyRTQuHSRDM5DKw4II5BFfdUValFPokfzbmElPGVZx2cpNejdzla1POCgAoAKAHR9T9KaV3YL2HFz09KWxWwbjTu+4XDcaLvuFw3nIHrT5roSl1FBIU4pK9gWuom40Xfcdw3Gi77hcNxou+4XDcaLvuFxCM5JNLqJ72GUCCgD//Z","timestamp":2108573003260}],"type":"filmstrip","scale":3251}},"uses-long-cache-ttl":{"id":"uses-long-cache-ttl","title":"Serve static assets with an efficient cache policy","description":"A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).","score":0,"scoreDisplayMode":"numeric","displayValue":"72 resources found","details":{"items":[{"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4","totalBytes":2620061,"wastedBytes":2620061,"cacheLifetimeMs":0},{"cacheHitProbability":0,"wastedBytes":1791476,"totalBytes":1791476,"url":"https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4","cacheLifetimeMs":0},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg","totalBytes":480482,"cacheLifetimeMs":0,"cacheHitProbability":0,"wastedBytes":480482},{"url":"https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg","wastedBytes":407146,"cacheLifetimeMs":0,"cacheHitProbability":0,"totalBytes":407146},{"cacheHitProbability":0,"totalBytes":388742,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg","cacheLifetimeMs":0,"wastedBytes":388742},{"wastedBytes":380191,"cacheLifetimeMs":0,"totalBytes":380191,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg","cacheHitProbability":0},{"wastedBytes":351357,"totalBytes":351357,"cacheLifetimeMs":0,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg"},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg","cacheHitProbability":0,"cacheLifetimeMs":0,"totalBytes":344005,"wastedBytes":344005},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg","cacheHitProbability":0,"wastedBytes":311241,"totalBytes":311241,"cacheLifetimeMs":0},{"wastedBytes":292148,"cacheLifetimeMs":0,"url":"https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg","cacheHitProbability":0,"totalBytes":292148},{"totalBytes":246887,"cacheLifetimeMs":0,"wastedBytes":246887,"url":"https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg","cacheHitProbability":0},{"url":"https://reinnovame.com/wp-content/uploads/2020/10/SFONDO-STELLATO-con-sfumatura-1.jpg","wastedBytes":229401,"cacheLifetimeMs":0,"cacheHitProbability":0,"totalBytes":229401},{"totalBytes":185842,"cacheHitProbability":0,"cacheLifetimeMs":0,"url":"https://reinnovame.com/wp-content/uploads/2020/09/01-SFONDO-HOME-NUOVO-1-scaled.jpg","wastedBytes":185842},{"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg","totalBytes":142314,"cacheLifetimeMs":0,"wastedBytes":142314},{"wastedBytes":119196,"totalBytes":119196,"cacheLifetimeMs":0,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css","cacheHitProbability":0},{"wastedBytes":100955,"cacheHitProbability":0,"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","totalBytes":100955,"cacheLifetimeMs":0},{"cacheLifetimeMs":0,"url":"https://reinnovame.com/r3innovame/css/fonts/fontawesome-webfont.woff?v=4.2","totalBytes":98309,"cacheHitProbability":0,"wastedBytes":98309},{"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_568133044.png","wastedBytes":69005,"totalBytes":69005,"cacheLifetimeMs":0},{"cacheLifetimeMs":0,"totalBytes":68299,"wastedBytes":68299,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/10/shutterstock_1100694782.png"},{"totalBytes":67216,"cacheLifetimeMs":0,"wastedBytes":67216,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css"},{"wastedBytes":52024,"cacheHitProbability":0,"cacheLifetimeMs":0,"totalBytes":52024,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Light.woff2"},{"cacheLifetimeMs":0,"totalBytes":46822,"cacheHitProbability":0,"wastedBytes":46822,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Semibold.woff2"},{"totalBytes":43310,"cacheHitProbability":0,"cacheLifetimeMs":0,"wastedBytes":43310,"url":"https://reinnovame.com/r3innovame-child/fonts/National-Thin.woff2"},{"cacheHitProbability":0,"wastedBytes":37727,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0","cacheLifetimeMs":0,"totalBytes":37727},{"cacheHitProbability":0,"cacheLifetimeMs":0,"wastedBytes":37659,"url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6","totalBytes":37659},{"wastedBytes":34598,"totalBytes":34598,"url":"https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4","cacheLifetimeMs":0,"cacheHitProbability":0},{"wastedBytes":34216,"cacheLifetimeMs":0,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js","totalBytes":34216},{"url":"https://reinnovame.com/wp-content/themes/jquery.min.js","cacheLifetimeMs":0,"totalBytes":33660,"wastedBytes":33660,"cacheHitProbability":0},{"wastedBytes":29104,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js","cacheLifetimeMs":0,"totalBytes":29104,"cacheHitProbability":0},{"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fancybox.min.js?ver=3.3.1","totalBytes":22396,"cacheHitProbability":0,"cacheLifetimeMs":0,"wastedBytes":22396},{"cacheLifetimeMs":0,"totalBytes":20846,"cacheHitProbability":0,"wastedBytes":20846,"url":"https://reinnovame.com/wp-content/uploads/2020/12/POLIEDRO-DEF-02.svg"},{"wastedBytes":19408,"totalBytes":19408,"cacheLifetimeMs":0,"url":"https://reinnovame.com/r3innovame/js/third-party/select2.min.js?ver=3.5.2","cacheHitProbability":0},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/SATELLITE_SATELLITE-BIANCO-senza-dati.svg","wastedBytes":16396,"cacheHitProbability":0,"cacheLifetimeMs":0,"totalBytes":16396},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js","cacheHitProbability":0,"wastedBytes":14591,"cacheLifetimeMs":0,"totalBytes":14591},{"cacheLifetimeMs":0,"cacheHitProbability":0,"totalBytes":11471,"wastedBytes":11471,"url":"https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1"},{"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/7v245qy2/bgdqo.css","totalBytes":11337,"cacheLifetimeMs":0,"wastedBytes":11337},{"wastedBytes":8834,"cacheLifetimeMs":0,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/dfg6v4h9/bgdqo.css","totalBytes":8834,"cacheHitProbability":0},{"url":"https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0","cacheLifetimeMs":0,"cacheHitProbability":0,"wastedBytes":7822,"totalBytes":7822},{"cacheLifetimeMs":0,"wastedBytes":6801,"url":"https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0","cacheHitProbability":0,"totalBytes":6801},{"totalBytes":6421,"cacheLifetimeMs":0,"url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/anime.js?ver=1.6","cacheHitProbability":0,"wastedBytes":6421},{"url":"https://reinnovame.com/wp-includes/js/underscore.min.js?ver=1.8.3","cacheHitProbability":0,"totalBytes":6086,"cacheLifetimeMs":0,"wastedBytes":6086},{"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/wp-quiz.js?ver=2.0.11","cacheLifetimeMs":0,"cacheHitProbability":0,"totalBytes":5008,"wastedBytes":5008},{"wastedBytes":4306,"cacheLifetimeMs":0,"url":"https://reinnovame.com/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.3.1","totalBytes":4306,"cacheHitProbability":0},{"url":"https://reinnovame.com/r3innovame/js/third-party/waypoints.js?ver=4.0.1","cacheHitProbability":0,"totalBytes":4067,"cacheLifetimeMs":0,"wastedBytes":4067},{"totalBytes":3994,"cacheLifetimeMs":0,"wastedBytes":3994,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/qgljwuxf/bgdq8.css"},{"totalBytes":3885,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/d4v7biqm/bgdq7.css","wastedBytes":3885,"cacheLifetimeMs":0,"cacheHitProbability":0},{"wastedBytes":3671,"cacheLifetimeMs":0,"cacheHitProbability":0,"totalBytes":3671,"url":"https://reinnovame.com/wp-content/plugins/salient-core/js/third-party/touchswipe.min.js?ver=1.0"},{"cacheHitProbability":0,"wastedBytes":3553,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Reinnovame-Logo-Def-02.svg","cacheLifetimeMs":0,"totalBytes":3553},{"cacheHitProbability":0,"totalBytes":3346,"url":"https://reinnovame.com/wp-content/themes/jquery.flipster.min.js","cacheLifetimeMs":0,"wastedBytes":3346},{"url":"https://reinnovame.com/r3innovame/js/third-party/superfish.js?ver=1.4.8","cacheHitProbability":0,"wastedBytes":3322,"cacheLifetimeMs":0,"totalBytes":3322},{"wastedBytes":3070,"url":"https://reinnovame.com/r3innovame/js/third-party/transit.js?ver=0.9.9","totalBytes":3070,"cacheHitProbability":0,"cacheLifetimeMs":0},{"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/quiz-types/trivia.js?ver=2.0.11","wastedBytes":2793,"cacheHitProbability":0,"cacheLifetimeMs":0,"totalBytes":2793},{"url":"https://reinnovame.com/wp-includes/js/dist/hooks.min.js?ver=b4778690e29d8a2b7518413652ba30c4","totalBytes":2516,"wastedBytes":2516,"cacheLifetimeMs":0,"cacheHitProbability":0},{"wastedBytes":2451,"totalBytes":2451,"cacheLifetimeMs":0,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/plugins/salient-social/js/salient-social.js?ver=1.1"},{"url":"https://reinnovame.com/r3innovame/js/priority.js?ver=12.1.0","totalBytes":2315,"cacheLifetimeMs":0,"wastedBytes":2315,"cacheHitProbability":0},{"cacheLifetimeMs":0,"totalBytes":2303,"cacheHitProbability":0,"wastedBytes":2303,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.easing.js?ver=1.3"},{"cacheHitProbability":0,"url":"https://reinnovame.com/r3innovame/js/third-party/imagesLoaded.min.js?ver=4.1.4","wastedBytes":2191,"totalBytes":2191,"cacheLifetimeMs":0},{"url":"https://reinnovame.com/wp-content/plugins/wpcf7-redirect/build/js/wpcf7-redirect-frontend-script.js?ver=1.1","wastedBytes":1999,"cacheLifetimeMs":0,"cacheHitProbability":0,"totalBytes":1999},{"wastedBytes":1775,"totalBytes":1775,"cacheHitProbability":0,"cacheLifetimeMs":0,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ln74dogz/bgdq7.css"},{"totalBytes":1620,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.mousewheel.js?ver=3.1.13","cacheHitProbability":0,"wastedBytes":1620,"cacheLifetimeMs":0},{"totalBytes":1576,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/admin/js/jquery.serialize-object.js?ver=2.5.0","wastedBytes":1576,"cacheLifetimeMs":0},{"totalBytes":1462,"wastedBytes":1462,"url":"https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.png","cacheLifetimeMs":0,"cacheHitProbability":0},{"cacheHitProbability":0,"cacheLifetimeMs":0,"totalBytes":1461,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Game__01-CASHFLOW.svg","wastedBytes":1461},{"url":"https://reinnovame.com/r3innovame/js/third-party/hoverintent.js?ver=1.9","wastedBytes":1319,"totalBytes":1319,"cacheHitProbability":0,"cacheLifetimeMs":0},{"totalBytes":1233,"cacheLifetimeMs":0,"wastedBytes":1233,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Game__01-FATTURATI.svg"},{"cacheLifetimeMs":0,"totalBytes":1187,"wastedBytes":1187,"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/09/Game__01-GUADAGNO.svg"},{"wastedBytes":1177,"cacheLifetimeMs":0,"cacheHitProbability":0,"totalBytes":1177,"url":"https://reinnovame.com/wp-content/uploads/2020/10/LINK-Inizia-Qui.svg"},{"totalBytes":1148,"wastedBytes":1148,"url":"https://reinnovame.com/wp-includes/js/wp-embed.min.js?ver=5.5.3","cacheLifetimeMs":0,"cacheHitProbability":0},{"url":"https://reinnovame.com/wp-includes/js/wp-util.min.js?ver=5.5.3","totalBytes":970,"wastedBytes":970,"cacheHitProbability":0,"cacheLifetimeMs":0},{"totalBytes":948,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/zefh2ss/bgdqo.js","cacheLifetimeMs":0,"cacheHitProbability":0,"wastedBytes":948},{"totalBytes":598,"cacheHitProbability":0,"cacheLifetimeMs":0,"wastedBytes":598,"url":"https://reinnovame.com/wp-content/plugins/wp-quiz-pro/assets/frontend/js/force-actions/redirect.js?ver=2.0.0"},{"cacheHitProbability":0,"url":"https://reinnovame.com/wp-content/uploads/2020/11/audio_new.mp3","totalBytes":412,"cacheLifetimeMs":0,"wastedBytes":412}],"type":"table","summary":{"wastedBytes":9267478},"headings":[{"itemType":"url","key":"url","text":"URL"},{"key":"cacheLifetimeMs","displayUnit":"duration","itemType":"ms","text":"Cache TTL"},{"key":"totalBytes","displayUnit":"kb","granularity":1,"itemType":"bytes","text":"Transfer Size"}]},"numericValue":9267478},"tap-targets":{"id":"tap-targets","title":"Tap targets are not sized appropriately","description":"Interactive elements like buttons and links should be large enough (48x48px), and have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more](https://web.dev/tap-targets/).","score":0.25,"scoreDisplayMode":"binary","displayValue":"29% appropriately sized tap targets","details":{"headings":[{"text":"Tap Target","key":"tapTarget","itemType":"node"},{"itemType":"text","text":"Size","key":"size"},{"key":"overlappingTarget","itemType":"node","text":"Overlapping Target"}],"items":[{"tapTarget":{"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A","nodeLabel":"FAQ","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","type":"node","boundingRect":{"top":6579.078125,"right":192,"bottom":6596.078125,"left":168,"height":17,"width":24},"snippet":"\u003ca href=\"https://reinnovame.com/faq/\">FAQ\u003c/a>"},"overlappingTarget":{"snippet":"\u003ca href=\"https://reinnovame.com/contatti/\">CONTATTI\u003c/a>","nodeLabel":"CONTATTI","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,2,A","type":"node","boundingRect":{"width":58,"height":17,"right":209,"bottom":6576.078125,"top":6559.078125,"left":151},"selector":"div.wpb_text_column > div.wpb_wrapper > p > a"},"size":"24x17","tapTargetScore":408,"width":24,"overlappingTargetScore":600,"overlapScoreRatio":1.4705882352941178,"height":17},{"tapTarget":{"selector":"div.wpb_text_column > div.wpb_wrapper > p > a","boundingRect":{"width":24,"bottom":6596.078125,"left":168,"height":17,"right":192,"top":6579.078125},"nodeLabel":"FAQ","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A","type":"node","snippet":"\u003ca href=\"https://reinnovame.com/faq/\">FAQ\u003c/a>"},"width":24,"overlappingTargetScore":600,"height":17,"size":"24x17","tapTargetScore":408,"overlappingTarget":{"snippet":"\u003ca href=\"https://reinnovame.com/privacy-policy/\">PRIVACY POLICY\u003c/a>","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,6,A","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","type":"node","boundingRect":{"right":227,"left":133,"top":6599.078125,"width":94,"height":17,"bottom":6616.078125},"nodeLabel":"PRIVACY POLICY"},"overlapScoreRatio":1.4705882352941178},{"overlappingTargetScore":600,"tapTargetScore":612,"overlappingTarget":{"selector":"div.wpb_text_column > div.wpb_wrapper > p > a","nodeLabel":"COME FUNZIONA","snippet":"\u003ca href=\"https://reinnovame.com/come-funziona/\">COME FUNZIONA\u003c/a>","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A","type":"node","boundingRect":{"bottom":6508.890625,"left":129.5,"height":17,"width":101,"right":230.5,"top":6491.890625}},"tapTarget":{"nodeLabel":"HOME","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,2,A","snippet":"\u003ca href=\"https://reinnovame.com/\">HOME\u003c/a>","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","boundingRect":{"left":162,"right":198,"height":17,"width":36,"bottom":6488.890625,"top":6471.890625},"type":"node"},"height":17,"size":"36x17","width":36,"overlapScoreRatio":0.9803921568627451},{"size":"101x17","overlappingTargetScore":600,"height":17,"overlapScoreRatio":0.7352941176470589,"width":101,"tapTarget":{"type":"node","boundingRect":{"width":101,"height":17,"left":129.5,"top":6491.890625,"right":230.5,"bottom":6508.890625},"snippet":"\u003ca href=\"https://reinnovame.com/come-funziona/\">COME FUNZIONA\u003c/a>","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","nodeLabel":"COME FUNZIONA","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A"},"overlappingTarget":{"snippet":"\u003ca href=\"https://reinnovame.com/journal/\">JOURNAL\u003c/a>","nodeLabel":"JOURNAL","type":"node","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,6,A","boundingRect":{"bottom":6528.890625,"right":208,"height":17,"width":56,"top":6511.890625,"left":152},"selector":"div.wpb_text_column > div.wpb_wrapper > p > a"},"tapTargetScore":816},{"overlapScoreRatio":0.7352941176470589,"height":17,"tapTargetScore":816,"size":"94x17","overlappingTargetScore":600,"tapTarget":{"nodeLabel":"PRIVACY POLICY","boundingRect":{"height":17,"width":94,"left":133,"right":227,"bottom":6616.078125,"top":6599.078125},"selector":"div.wpb_text_column > div.wpb_wrapper > p > a","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,6,A","snippet":"\u003ca href=\"https://reinnovame.com/privacy-policy/\">PRIVACY POLICY\u003c/a>","type":"node"},"width":94,"overlappingTarget":{"type":"node","boundingRect":{"height":17,"left":134.5,"top":6619.078125,"bottom":6636.078125,"width":91,"right":225.5},"nodeLabel":"COOKIE POLICY","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,8,A","snippet":"\u003ca href=\"https://reinnovame.com/cookie-policy/\">COOKIE POLICY\u003c/a>"}},{"width":91,"overlapScoreRatio":0.7352941176470589,"height":17,"overlappingTargetScore":600,"size":"91x17","tapTargetScore":816,"tapTarget":{"boundingRect":{"bottom":6636.078125,"height":17,"right":225.5,"left":134.5,"width":91,"top":6619.078125},"type":"node","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,8,A","snippet":"\u003ca href=\"https://reinnovame.com/cookie-policy/\">COOKIE POLICY\u003c/a>","nodeLabel":"COOKIE POLICY","selector":"div.wpb_text_column > div.wpb_wrapper > p > a"},"overlappingTarget":{"nodeLabel":"TERMINI E CONDIZIONI","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","snippet":"\u003ca href=\"https://reinnovame.com/termini-e condizioni/\">TERMINI E CONDIZIONI\u003c/a>","type":"node","boundingRect":{"right":246.5,"top":6639.078125,"height":17,"bottom":6656.078125,"width":133,"left":113.5},"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,10,A"}},{"overlapScoreRatio":0.7352941176470589,"size":"147x17","tapTargetScore":816,"tapTarget":{"nodeLabel":"THE GOOD CONSULTANT","snippet":"\u003ca href=\"https://reinnovame.com/the-good-consultant/\">THE GOOD CONSULTANT\u003c/a>","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,2,A","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","boundingRect":{"width":147,"top":6686.265625,"left":106.5,"bottom":6703.265625,"right":253.5,"height":17},"type":"node"},"overlappingTarget":{"type":"node","selector":"div.wpb_text_column > div.wpb_wrapper > p > a","nodeLabel":"CAREERS","snippet":"\u003ca href=\"https://reinnovame.com/careers/\">CAREERS\u003c/a>","boundingRect":{"right":207.5,"top":6706.265625,"height":17,"bottom":6723.265625,"left":152.5,"width":55},"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,16,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,4,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,P,4,A"},"overlappingTargetScore":600,"height":17,"width":147}],"type":"table"}},"preload-fonts":{"id":"preload-fonts","title":"Fonts with `font-display: optional` are preloaded","description":"Preload `optional` fonts so first-time visitors may use them. [Learn More](https://web.dev/preload-optional-fonts/)","score":null,"scoreDisplayMode":"notApplicable","details":{"items":[],"headings":[],"type":"table"}},"dom-size":{"id":"dom-size","title":"Avoid an excessive DOM size","description":"A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).","score":0.61,"scoreDisplayMode":"numeric","displayValue":"1,250 elements","details":{"headings":[{"text":"Statistic","itemType":"text","key":"statistic"},{"text":"Element","key":"element","itemType":"code"},{"text":"Value","key":"value","itemType":"numeric"}],"type":"table","items":[{"statistic":"Total DOM Elements","value":"1,250"},{"statistic":"Maximum DOM Depth","value":"35","element":{"value":"\u003cimg src=\"https://reinnovame.com/wp-content/uploads/2020/09/Game__01-GUADAGNO.svg\" class=\"attachment-full size-full\" alt=\"\" loading=\"lazy\" height=\"200\" width=\"200\">","type":"code"}},{"statistic":"Maximum Child Elements","element":{"type":"code","value":"\u003cbody data-rsssl=\"1\" class=\"home page-template-default page page-id-7 material nectar_using_pfsr necta…\" data-footer-reveal=\"false\" data-footer-reveal-shadow=\"none\" data-header-format=\"default\" data-body-border=\"off\" data-boxed-style=\"\" data-header-breakpoint=\"1000\" data-dropdown-style=\"minimal\" data-cae=\"easeOutCubic\" data-cad=\"750\" data-megamenu-width=\"contained\" data-aie=\"none\" data-ls=\"fancybox\" data-apte=\"standard\" data-hhun=\"0\" data-fancy-form-rcs=\"1\" data-form-style=\"default\" data-form-submit=\"regular\" data-is=\"minimal\" data-button-style=\"default\" data-user-account-button=\"false\" data-flex-cols=\"true\" …>"},"value":"56"}]},"numericValue":1250},"color-contrast":{"id":"color-contrast","title":"Background and foreground colors do not have a sufficient contrast ratio.","description":"Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).","score":0,"scoreDisplayMode":"binary","details":{"type":"table","headings":[{"text":"Failing Elements","key":"node","itemType":"node"}],"items":[{"node":{"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,3,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,DIV,1,DIV,0,DIV,0,SPAN","snippet":"\u003cspan class=\"wq_quizProgressValue\" style=\"width: 0%;\">0%\u003c/span>","selector":".wq_quizProgressValue","boundingRect":{"top":3163,"height":13,"left":31,"right":61,"width":30,"bottom":3176},"type":"node","explanation":"Fix any of the following:\n Element has insufficient color contrast of 4.05 (foreground color: #ffffff, background color: #db4c55, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1","nodeLabel":"0%"}},{"node":{"explanation":"Fix any of the following:\n Element has insufficient color contrast of 4.05 (foreground color: #ffffff, background color: #db4c55, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1","snippet":"\u003ca href=\"#\" id=\"cn-accept-cookie\" data-cookie-set=\"accept\" class=\"cn-set-cookie cn-button bootstrap nectar-button medium regular accent-color regular-button\" aria-label=\"Accetto\">Accetto\u003c/a>","path":"1,HTML,1,BODY,58,DIV,0,DIV,1,SPAN,0,A","nodeLabel":"Accetto","type":"node","boundingRect":{"left":70,"right":164,"bottom":620,"top":588,"height":32,"width":94},"selector":"#cn-accept-cookie"}},{"node":{"nodeLabel":"Leggi di più","selector":"#cn-more-info","type":"node","path":"1,HTML,1,BODY,58,DIV,0,DIV,1,SPAN,1,A","explanation":"Fix any of the following:\n Element has insufficient color contrast of 4.05 (foreground color: #ffffff, background color: #db4c55, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1","boundingRect":{"right":290,"width":116,"left":174,"top":588,"bottom":620,"height":32},"snippet":"\u003ca href=\"https://reinnovame.com/cookie-policy/\" target=\"_blank\" id=\"cn-more-info\" class=\"cn-more-info cn-button bootstrap nectar-button medium regular accent-color regular-button\" aria-label=\"Leggi di più\">Leggi di più\u003c/a>"}}],"debugData":{"tags":["cat.color","wcag2aa","wcag143"],"type":"debugdata","impact":"serious"}}},"server-response-time":{"id":"server-response-time","title":"Initial server response time was short","description":"Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).","score":1,"scoreDisplayMode":"binary","displayValue":"Root document took 540 ms","details":{"items":[{"responseTime":540.156,"url":"https://reinnovame.com/"}],"overallSavingsMs":440.15599999999995,"type":"opportunity","headings":[{"valueType":"url","label":"URL","key":"url"},{"valueType":"timespanMs","key":"responseTime","label":"Time Spent"}]},"numericValue":540.156},"duplicate-id-aria":{"id":"duplicate-id-aria","title":"ARIA IDs are unique","description":"The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://web.dev/duplicate-id-aria/).","score":null,"scoreDisplayMode":"notApplicable"},"first-contentful-paint-3g":{"id":"first-contentful-paint-3g","title":"First Contentful Paint (3G)","description":"First Contentful Paint 3G marks the time at which the first text or image is painted while on a 3G network. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).","score":0.21,"scoreDisplayMode":"numeric","displayValue":"8390.5 ms","numericValue":8390.5},"form-field-multiple-labels":{"id":"form-field-multiple-labels","title":"No form fields have multiple labels","description":"Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn more](https://web.dev/form-field-multiple-labels/).","score":null,"scoreDisplayMode":"notApplicable"},"long-tasks":{"id":"long-tasks","title":"Avoid long main-thread tasks","description":"Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)","score":null,"scoreDisplayMode":"informative","displayValue":"16 long tasks found","details":{"type":"table","items":[{"startTime":15180,"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","duration":698},{"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","startTime":13337,"duration":334},{"startTime":9630,"url":"https://reinnovame.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=7.4.4","duration":255},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js","startTime":4680,"duration":191},{"duration":157,"startTime":1211,"url":"https://reinnovame.com/"},{"startTime":1368,"url":"https://reinnovame.com/","duration":141},{"duration":127,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css","startTime":2820},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js","startTime":13920,"duration":123},{"url":"https://reinnovame.com/","startTime":958,"duration":117},{"duration":81,"startTime":3630,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css"},{"startTime":1075,"duration":72,"url":"Unattributable"},{"url":"https://reinnovame.com/wp-content/themes/jquery.min.js","duration":70,"startTime":8580},{"duration":64,"startTime":1147,"url":"https://reinnovame.com/"},{"startTime":1509,"url":"https://reinnovame.com/","duration":59},{"duration":55,"startTime":13671,"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0"},{"duration":50,"url":"Unattributable","startTime":1568}],"headings":[{"text":"URL","key":"url","itemType":"url"},{"granularity":1,"itemType":"ms","text":"Start Time","key":"startTime"},{"key":"duration","granularity":1,"text":"Duration","itemType":"ms"}]}},"logical-tab-order":{"id":"logical-tab-order","title":"The page has a logical tab order","description":"Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://web.dev/logical-tab-order/).","score":null,"scoreDisplayMode":"manual"},"video-description":{"id":"video-description","title":"`\u003cvideo>` elements contain a `\u003ctrack>` element with `[kind=\"description\"]`","description":"Audio descriptions provide relevant information for videos that dialogue cannot, such as facial expressions and scenes. [Learn more](https://web.dev/video-description/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"headings":[],"type":"table"}},"total-byte-weight":{"id":"total-byte-weight","title":"Avoid enormous network payloads","description":"Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).","score":0,"scoreDisplayMode":"numeric","displayValue":"Total size was 9,106 KiB","details":{"type":"table","items":[{"url":"https://reinnovame.com/wp-content/uploads/2020/09/1025688356-1080p-rid-compresso.mp4","totalBytes":2620061},{"totalBytes":1791476,"url":"https://reinnovame.com/wp-content/uploads/2020/09/10410458-hd_OP17.mp4"},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-2.jpg","totalBytes":480482},{"totalBytes":407146,"url":"https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg"},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-3.jpg","totalBytes":388742},{"totalBytes":380191,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-4.jpg"},{"totalBytes":351357,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-5.jpg"},{"url":"https://reinnovame.com/wp-content/uploads/2020/09/09_SFONDO-con-sfumatura-3.jpg","totalBytes":344005},{"totalBytes":311241,"url":"https://reinnovame.com/wp-content/uploads/2020/09/PROBLEMA-6.jpg"},{"totalBytes":292148,"url":"https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg"}],"headings":[{"key":"url","text":"URL","itemType":"url"},{"itemType":"bytes","text":"Transfer Size","key":"totalBytes"}]},"numericValue":9324119},"password-inputs-can-be-pasted-into":{"id":"password-inputs-can-be-pasted-into","title":"Allows users to paste into password fields","description":"Preventing password pasting undermines good security policy. [Learn more](https://web.dev/password-inputs-can-be-pasted-into/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"items":[],"type":"table"}},"total-blocking-time":{"id":"total-blocking-time","title":"Total Blocking Time","description":"Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).","score":0.25,"scoreDisplayMode":"numeric","displayValue":"880 ms","numericValue":881},"button-name":{"id":"button-name","title":"Buttons have an accessible name","description":"When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://web.dev/button-name/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","items":[],"headings":[]}},"html-has-lang":{"id":"html-has-lang","title":"`\u003chtml>` element has a `[lang]` attribute","description":"If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://web.dev/html-has-lang/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"type":"table","items":[]}},"uses-responsive-images":{"id":"uses-responsive-images","title":"Properly size images","description":"Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).","score":0.88,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 48 KiB","details":{"headings":[{"valueType":"thumbnail","key":"url"},{"label":"URL","valueType":"url","key":"url"},{"valueType":"bytes","label":"Resource Size","key":"totalBytes"},{"label":"Potential Savings","key":"wastedBytes","valueType":"bytes"}],"overallSavingsMs":150,"type":"opportunity","items":[{"wastedPercent":34.435703124999996,"totalBytes":142031,"wastedBytes":48909,"url":"https://reinnovame.com/wp-content/uploads/2020/12/Copertina.jpg"}],"overallSavingsBytes":48909},"warnings":[],"numericValue":150},"errors-in-console":{"id":"errors-in-console","title":"No browser errors logged to the console","description":"Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more](https://web.dev/errors-in-console/)","score":1,"scoreDisplayMode":"binary","details":{"items":[],"type":"table","headings":[]}},"valid-source-maps":{"id":"valid-source-maps","title":"Missing source maps for large first-party JavaScript","description":"Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps).","score":0,"scoreDisplayMode":"binary","details":{"items":[{"scriptUrl":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","subItems":{"type":"subitems","items":[{"error":"Large JavaScript file is missing a source map"}]}},{"sourceMapUrl":"https://reinnovame.com/wp-content/themes/jquery.min.map","scriptUrl":"https://reinnovame.com/wp-content/themes/jquery.min.js","subItems":{"type":"subitems","items":[{"error":"Error: Timed out fetching resource."}]}},{"scriptUrl":"https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bgdqo.js","subItems":{"type":"subitems","items":[{"error":"SyntaxError: Unexpected token / in JSON at position 0"}]},"sourceMapUrl":"https://reinnovame.com/wp-content/cache/wpfc-minified/modx0ugk/bookly.min.js.map;"}],"headings":[{"text":"URL","key":"scriptUrl","subItemsHeading":{"key":"error"},"itemType":"url"},{"text":"Map URL","key":"sourceMapUrl","itemType":"url"}],"type":"table"}},"non-composited-animations":{"id":"non-composited-animations","title":"Avoid non-composited animations","description":"Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations)","score":null,"scoreDisplayMode":"notApplicable"},"valid-lang":{"id":"valid-lang","title":"`[lang]` attributes have a valid value","description":"Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://web.dev/valid-lang/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-valid-attr":{"id":"aria-valid-attr","title":"`[aria-*]` attributes are valid and not misspelled","description":"Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://web.dev/aria-valid-attr/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"items":[],"type":"table"}},"layout-table":{"id":"layout-table","title":"Presentational `\u003ctable>` elements avoid using `\u003cth>`, `\u003ccaption>` or the `[summary]` attribute.","description":"A table being used for layout purposes should not include data elements, such as the th or caption elements or the summary attribute, because this can create a confusing experience for screen reader users. [Learn more](https://web.dev/layout-table/).","score":null,"scoreDisplayMode":"notApplicable"},"large-javascript-libraries":{"id":"large-javascript-libraries","title":"Avoids large JavaScript libraries with smaller alternatives","description":"Large JavaScript libraries can lead to poor performance. Prefer smaller, functionally equivalent libraries to reduce your bundle size. [Learn more](https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size#optimize_dependencies).","score":1,"scoreDisplayMode":"binary","displayValue":"0 large libraries found","details":{"summary":{},"headings":[],"type":"table","items":[]}},"charset":{"id":"charset","title":"Properly defines charset","description":"A character encoding declaration is required. It can be done with a \u003cmeta> tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more](https://web.dev/charset/).","score":1,"scoreDisplayMode":"binary"},"no-vulnerable-libraries":{"id":"no-vulnerable-libraries","title":"Includes front-end JavaScript libraries with known security vulnerabilities","description":"Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://web.dev/no-vulnerable-libraries/).","score":0,"scoreDisplayMode":"binary","displayValue":"9 vulnerabilities detected","details":{"headings":[{"text":"Library Version","itemType":"link","key":"detectedLib"},{"text":"Vulnerability Count","itemType":"text","key":"vulnCount"},{"itemType":"text","key":"highestSeverity","text":"Highest Severity"}],"items":[{"vulnCount":5,"highestSeverity":"Medium","detectedLib":{"text":"Bootstrap@3.2.0","type":"link","url":"https://snyk.io/vuln/npm:bootstrap?lh=3.2.0&utm_source=lighthouse&utm_medium=ref&utm_campaign=audit"}},{"detectedLib":{"text":"jQuery@1.11.3","type":"link","url":"https://snyk.io/vuln/npm:jquery?lh=1.11.3&utm_source=lighthouse&utm_medium=ref&utm_campaign=audit"},"highestSeverity":"Medium","vulnCount":4}],"type":"table","summary":{}}},"first-contentful-paint":{"id":"first-contentful-paint","title":"First Contentful Paint","description":"First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).","score":0.49,"scoreDisplayMode":"numeric","displayValue":"4.0 s","numericValue":4040.5},"heading-order":{"id":"heading-order","title":"Heading elements are not in a sequentially-descending order","description":"Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more](https://web.dev/heading-order/).","score":0,"scoreDisplayMode":"binary","details":{"debugData":{"type":"debugdata","impact":"moderate","tags":["cat.semantics","best-practice"]},"type":"table","headings":[{"itemType":"node","text":"Failing Elements","key":"node"}],"items":[{"node":{"snippet":"\u003ch6 style=\"font-size: 17px;color: #ffffff;text-align: center\" class=\"vc_custom_heading wpb_animate_when_almost_visible wpb_fadeIn fadeIn\">\u003cstrong>VISION\u003c/strong>\u003c/h6>","explanation":"Fix any of the following:\n Heading order invalid","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,6,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,H6","nodeLabel":"VISION","boundingRect":{"left":41,"height":3,"bottom":1854,"right":319,"top":1851,"width":278},"selector":".instance-6 > .vc_column-inner > .wpb_wrapper > h6","type":"node"}},{"node":{"boundingRect":{"left":41,"width":278,"top":2173,"bottom":2176,"right":319,"height":3},"type":"node","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,6,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,2,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,H6","explanation":"Fix any of the following:\n Heading order invalid","nodeLabel":"MISSION","selector":".instance-7 > .vc_column-inner > .wpb_wrapper > h6","snippet":"\u003ch6 style=\"font-size: 17px;color: #ffffff;text-align: center\" class=\"vc_custom_heading wpb_animate_when_almost_visible wpb_fadeIn fadeIn\">\u003cstrong>MISSION\u003c/strong>\u003c/h6>"}},{"node":{"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,3,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,DIV,3,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,H4","snippet":"\u003ch4>Qual è l’obiettivo della tua impresa? \n\u003c/h4>","selector":".wq-question-y0u4a > .wq_singleQuestionCtr > .wq_questionTextWrapper.quiz-pro-clearfix > .wq_questionTextCtr > h4","explanation":"Fix any of the following:\n Heading order invalid","boundingRect":{"right":303,"width":246,"bottom":2760,"top":2716,"left":57,"height":44},"nodeLabel":"QUAL È L’OBIETTIVO DELLA TUA IMPRESA?","type":"node"}}]}},"duplicate-id-active":{"id":"duplicate-id-active","title":"`[id]` attributes on active, focusable elements are unique","description":"All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn more](https://web.dev/duplicate-id-active/).","score":1,"scoreDisplayMode":"binary","details":{"headings":[],"items":[],"type":"table"}},"is-on-https":{"id":"is-on-https","title":"Uses HTTPS","description":"All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being servedover HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://web.dev/is-on-https/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"headings":[],"type":"table"}},"dlitem":{"id":"dlitem","title":"Definition list items are wrapped in `\u003cdl>` elements","description":"Definition list items (`\u003cdt>` and `\u003cdd>`) must be wrapped in a parent `\u003cdl>` element to ensure that screen readers can properly announce them. [Learn more](https://web.dev/dlitem/).","score":null,"scoreDisplayMode":"notApplicable"},"timing-budget":{"id":"timing-budget","title":"Timing budget","description":"Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).","score":null,"scoreDisplayMode":"notApplicable"},"uses-optimized-images":{"id":"uses-optimized-images","title":"Efficiently encode images","description":"Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).","score":0.46,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 176 KiB","details":{"type":"opportunity","items":[{"fromProtocol":true,"totalBytes":291839,"isCrossOrigin":false,"wastedBytes":90429,"url":"https://reinnovame.com/wp-content/uploads/2020/07/06_SFONDO.jpg"},{"isCrossOrigin":false,"fromProtocol":true,"totalBytes":406863,"wastedBytes":49976,"url":"https://reinnovame.com/wp-content/uploads/2020/07/02_SFONDO.jpg"},{"totalBytes":246578,"fromProtocol":true,"isCrossOrigin":false,"url":"https://reinnovame.com/wp-content/uploads/2020/07/07_SFONDO.jpg","wastedBytes":39451}],"overallSavingsBytes":179856,"headings":[{"key":"url","valueType":"thumbnail"},{"valueType":"url","label":"URL","key":"url"},{"label":"Resource Size","key":"totalBytes","valueType":"bytes"},{"label":"Potential Savings","valueType":"bytes","key":"wastedBytes"}],"overallSavingsMs":1050},"warnings":[],"numericValue":1050},"metrics":{"id":"metrics","title":"Metrics","description":"Collects all available metrics.","score":null,"scoreDisplayMode":"informative","details":{"items":[{"observedFirstPaintTs":2108571157156,"largestContentfulPaint":9540,"observedSpeedIndexTs":2108572018244,"observedFirstPaint":1405,"observedCumulativeLayoutShift":0.04914469401041667,"observedFirstContentfulPaintTs":2108571157156,"observedDomContentLoadedTs":2108572087096,"maxPotentialFID":698,"estimatedInputLatency":226,"observedNavigationStart":0,"observedLoadTs":2108572460993,"observedDomContentLoaded":2335,"observedLargestContentfulPaintTs":2108571685920,"observedTimeOriginTs":2108569752260,"cumulativeLayoutShift":0.04914469401041667,"observedTraceEndTs":2108573557698,"speedIndex":10084,"observedLastVisualChangeTs":2108573003260,"interactive":12374,"observedTraceEnd":3805,"totalBlockingTime":881,"firstCPUIdle":8870,"observedFirstContentfulPaint":1405,"observedSpeedIndex":2266,"observedTimeOrigin":0,"observedLargestContentfulPaint":1934,"firstContentfulPaint":4041,"observedLoad":2709,"observedFirstVisualChange":1934,"observedFirstMeaningfulPaint":1540,"observedFirstVisualChangeTs":2108571686260,"observedFirstMeaningfulPaintTs":2108571291817,"observedNavigationStartTs":2108569752260,"firstMeaningfulPaint":4266,"observedLastVisualChange":3251},{"lcpInvalidated":false}],"type":"debugdata"},"numericValue":12374},"offscreen-images":{"id":"offscreen-images","title":"Defer offscreen images","description":"Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).","score":1,"scoreDisplayMode":"numeric","details":{"items":[],"overallSavingsMs":0,"overallSavingsBytes":0,"headings":[],"type":"opportunity"},"warnings":[],"numericValue":0},"appcache-manifest":{"id":"appcache-manifest","title":"Avoids Application Cache","description":"Application Cache is deprecated. [Learn more](https://web.dev/appcache-manifest/).","score":1,"scoreDisplayMode":"binary"},"aria-hidden-body":{"id":"aria-hidden-body","title":"`[aria-hidden=\"true\"]` is not present on the document `\u003cbody>`","description":"Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `\u003cbody>`. [Learn more](https://web.dev/aria-hidden-body/).","score":1,"scoreDisplayMode":"binary","details":{"items":[],"headings":[],"type":"table"}},"unused-javascript":{"id":"unused-javascript","title":"Remove unused JavaScript","description":"Remove unused JavaScript to reduce bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).","score":0.5,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 147 KiB","details":{"items":[{"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","totalBytes":100955,"wastedPercent":71.33111894224487,"wastedBytes":72012},{"wastedBytes":35058,"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0","wastedPercent":92.92579947209111,"totalBytes":37727},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/kbji93u4/bgdqp.js","totalBytes":34216,"wastedPercent":65.12990294666709,"wastedBytes":22285},{"wastedBytes":21004,"wastedPercent":72.17042170058895,"totalBytes":29104,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/rn5uia0/bgdqp.js"}],"overallSavingsMs":750,"overallSavingsBytes":150359,"type":"opportunity","headings":[{"key":"url","label":"URL","valueType":"url","subItemsHeading":{"valueType":"code","key":"source"}},{"key":"totalBytes","label":"Transfer Size","valueType":"bytes","subItemsHeading":{"key":"sourceBytes"}},{"valueType":"bytes","key":"wastedBytes","subItemsHeading":{"key":"sourceWastedBytes"},"label":"Potential Savings"}]},"numericValue":750},"image-aspect-ratio":{"id":"image-aspect-ratio","title":"Displays images with correct aspect ratio","description":"Image display dimensions should match natural aspect ratio. [Learn more](https://web.dev/image-aspect-ratio/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]},"warnings":[]},"unminified-css":{"id":"unminified-css","title":"Minify CSS","description":"Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).","score":0.88,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 13 KiB","details":{"type":"opportunity","overallSavingsMs":150,"headings":[{"valueType":"url","label":"URL","key":"url"},{"key":"totalBytes","label":"Transfer Size","valueType":"bytes"},{"valueType":"bytes","key":"wastedBytes","label":"Potential Savings"}],"items":[{"totalBytes":119196,"wastedBytes":8239,"wastedPercent":6.9122111841537155,"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/m7w4lq3q/bgdqa.css"},{"url":"https://reinnovame.com/wp-content/cache/wpfc-minified/ur7wv8/bgdq8.css","totalBytes":67216,"wastedBytes":5121,"wastedPercent":7.619130981415689}],"overallSavingsBytes":13360},"numericValue":150},"label":{"id":"label","title":"Form elements have associated labels","description":"Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://web.dev/label/).","score":null,"scoreDisplayMode":"notApplicable"},"focusable-controls":{"id":"focusable-controls","title":"Interactive controls are keyboard focusable","description":"Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://web.dev/focusable-controls/).","score":null,"scoreDisplayMode":"manual"},"input-image-alt":{"id":"input-image-alt","title":"`\u003cinput type=\"image\">` elements have `[alt]` text","description":"When an image is being used as an `\u003cinput>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://web.dev/input-image-alt/).","score":null,"scoreDisplayMode":"notApplicable"},"unminified-javascript":{"id":"unminified-javascript","title":"Minify JavaScript","description":"Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).","score":0.75,"scoreDisplayMode":"numeric","displayValue":"Potential savings of 72 KiB","details":{"overallSavingsMs":300,"type":"opportunity","headings":[{"label":"URL","key":"url","valueType":"url"},{"key":"totalBytes","valueType":"bytes","label":"Transfer Size"},{"valueType":"bytes","key":"wastedBytes","label":"Potential Savings"}],"items":[{"url":"https://reinnovame.com/r3innovame/js/init.js?ver=12.1.0","wastedBytes":33706,"totalBytes":100955,"wastedPercent":33.386822226107114},{"url":"https://reinnovame.com/r3innovame/js/third-party/jquery.fullPage.min.js?ver=12.1.0","totalBytes":37727,"wastedPercent":49.31078561033241,"wastedBytes":18603},{"url":"https://reinnovame.com/wp-content/plugins/salient-nectar-slider/js/nectar-slider.js?ver=1.6","totalBytes":37659,"wastedPercent":33.088131083385534,"wastedBytes":12461},{"wastedPercent":44.15584415584416,"url":"https://reinnovame.com/wp-content/plugins/wp-popups-lite/src/assets/js/wppopups.js?ver=2.1.1","wastedBytes":5065,"totalBytes":11471},{"wastedBytes":2214,"wastedPercent":28.300304878048777,"totalBytes":7822,"url":"https://reinnovame.com/r3innovame/js/elements/nectar-full-page-rows.js?ver=12.1.0"},{"wastedBytes":2126,"totalBytes":6801,"url":"https://reinnovame.com/wp-content/plugins/js_composer_salient/assets/js/dist/js_composer_front.min.js?ver=6.2.0","wastedPercent":31.26712328767123}],"overallSavingsBytes":74175},"warnings":[],"numericValue":300},"layout-shift-elements":{"id":"layout-shift-elements","title":"Avoid large layout shifts","description":"These DOM elements contribute most to the CLS of the page.","score":null,"scoreDisplayMode":"informative","displayValue":"4 elements found","details":{"type":"table","headings":[{"itemType":"node","key":"node","text":"Element"},{"itemType":"numeric","granularity":0.001,"text":"CLS Contribution","key":"score"}],"items":[{"score":0.01893033806272814,"node":{"selector":"body.home > div#slide-out-widget-area > div.inner-wrap","snippet":"\u003cdiv class=\"inner-wrap\">","boundingRect":{"right":310,"height":403,"bottom":522,"top":118,"left":129,"width":181},"nodeLabel":"HOME\nCOME FUNZIONA\nJOURNAL\nTHE GOOD CONSULTANT\nCAREERS\nCONTATTI","type":"node","path":"1,HTML,1,BODY,5,DIV,0,DIV"}},{"node":{"snippet":"\u003cdiv class=\"container\">","type":"node","boundingRect":{"left":20,"width":320,"right":340,"top":142,"height":356,"bottom":498},"selector":"div.full-page-inner-wrap-outer > div.full-page-inner-wrap > div.full-page-inner > div.container","path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV","nodeLabel":"PUOI PRETENDERE CHE LE COSE CAMBINO...\nFACENDO SEMPRE LE STESSE COSE?"},"score":0.015693846880308508},{"node":{"path":"1,HTML,1,BODY,4,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,0,DIV","type":"node","boundingRect":{"height":274,"bottom":444,"width":326,"right":343,"left":17,"top":171},"selector":"div.full-page-inner-wrap > div.full-page-inner > div.container > div.row_col_wrap_12","snippet":"\u003cdiv class=\"row_col_wrap_12 col span_12 light left\">","nodeLabel":"PUOI PRETENDERE CHE LE COSE CAMBINO...\nFACENDO SEMPRE LE STESSE COSE?"},"score":0.012922960845385934},{"score":0.0015975482219940833,"node":{"selector":"div.off-canvas-menu-container > ul.menu > li.starthere > a","snippet":"\u003ca href=\"https://reinnovame.com/appuntamento-gratuito/\">","nodeLabel":"a","type":"node","path":"1,HTML,1,BODY,5,DIV,0,DIV,0,DIV,0,DIV,0,UL,6,LI,0,A","boundingRect":{"height":27,"bottom":451,"width":120,"left":239,"right":359,"top":424}}}]}}},"categories":{"performance":{"id":"performance","title":"Performance","score":0.22,"auditRefs":[{"id":"first-contentful-paint","weight":15,"group":"metrics"},{"id":"speed-index","weight":15,"group":"metrics"},{"id":"largest-contentful-paint","weight":25,"group":"metrics"},{"id":"interactive","weight":15,"group":"metrics"},{"id":"total-blocking-time","weight":25,"group":"metrics"},{"id":"cumulative-layout-shift","weight":5,"group":"metrics"},{"id":"first-cpu-idle","weight":0},{"id":"max-potential-fid","weight":0},{"id":"first-meaningful-paint","weight":0},{"id":"estimated-input-latency","weight":0},{"id":"render-blocking-resources","weight":0,"group":"load-opportunities"},{"id":"uses-responsive-images","weight":0,"group":"load-opportunities"},{"id":"offscreen-images","weight":0,"group":"load-opportunities"},{"id":"unminified-css","weight":0,"group":"load-opportunities"},{"id":"unminified-javascript","weight":0,"group":"load-opportunities"},{"id":"unused-css-rules","weight":0,"group":"load-opportunities"},{"id":"unused-javascript","weight":0,"group":"load-opportunities"},{"id":"uses-optimized-images","weight":0,"group":"load-opportunities"},{"id":"uses-webp-images","weight":0,"group":"load-opportunities"},{"id":"uses-text-compression","weight":0,"group":"load-opportunities"},{"id":"uses-rel-preconnect","weight":0,"group":"load-opportunities"},{"id":"server-response-time","weight":0,"group":"load-opportunities"},{"id":"redirects","weight":0,"group":"load-opportunities"},{"id":"uses-rel-preload","weight":0,"group":"load-opportunities"},{"id":"efficient-animated-content","weight":0,"group":"load-opportunities"},{"id":"duplicated-javascript","weight":0,"group":"load-opportunities"},{"id":"legacy-javascript","weight":0,"group":"load-opportunities"},{"id":"total-byte-weight","weight":0,"group":"diagnostics"},{"id":"uses-long-cache-ttl","weight":0,"group":"diagnostics"},{"id":"dom-size","weight":0,"group":"diagnostics"},{"id":"critical-request-chains","weight":0,"group":"diagnostics"},{"id":"user-timings","weight":0,"group":"diagnostics"},{"id":"bootup-time","weight":0,"group":"diagnostics"},{"id":"mainthread-work-breakdown","weight":0,"group":"diagnostics"},{"id":"font-display","weight":0,"group":"diagnostics"},{"id":"performance-budget","weight":0,"group":"budgets"},{"id":"timing-budget","weight":0,"group":"budgets"},{"id":"resource-summary","weight":0,"group":"diagnostics"},{"id":"third-party-summary","weight":0,"group":"diagnostics"},{"id":"largest-contentful-paint-element","weight":0,"group":"diagnostics"},{"id":"layout-shift-elements","weight":0,"group":"diagnostics"},{"id":"uses-passive-event-listeners","weight":0,"group":"diagnostics"},{"id":"no-document-write","weight":0,"group":"diagnostics"},{"id":"long-tasks","weight":0,"group":"diagnostics"},{"id":"non-composited-animations","weight":0,"group":"diagnostics"},{"id":"large-javascript-libraries","weight":0,"group":"diagnostics"},{"id":"network-requests","weight":0},{"id":"network-rtt","weight":0},{"id":"network-server-latency","weight":0},{"id":"main-thread-tasks","weight":0},{"id":"diagnostics","weight":0},{"id":"metrics","weight":0},{"id":"screenshot-thumbnails","weight":0},{"id":"final-screenshot","weight":0},{"id":"first-contentful-paint-3g","weight":0}]},"accessibility":{"id":"accessibility","title":"Accessibility","description":"These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.","score":0.83,"manualDescription":"These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).","auditRefs":[{"id":"accesskeys","weight":0,"group":"a11y-navigation"},{"id":"aria-allowed-attr","weight":10,"group":"a11y-aria"},{"id":"aria-hidden-body","weight":10,"group":"a11y-aria"},{"id":"aria-hidden-focus","weight":3,"group":"a11y-aria"},{"id":"aria-input-field-name","weight":0,"group":"a11y-aria"},{"id":"aria-required-attr","weight":10,"group":"a11y-aria"},{"id":"aria-required-children","weight":10,"group":"a11y-aria"},{"id":"aria-required-parent","weight":10,"group":"a11y-aria"},{"id":"aria-roles","weight":10,"group":"a11y-aria"},{"id":"aria-toggle-field-name","weight":0,"group":"a11y-aria"},{"id":"aria-valid-attr-value","weight":10,"group":"a11y-aria"},{"id":"aria-valid-attr","weight":10,"group":"a11y-aria"},{"id":"button-name","weight":10,"group":"a11y-names-labels"},{"id":"bypass","weight":3,"group":"a11y-navigation"},{"id":"color-contrast","weight":3,"group":"a11y-color-contrast"},{"id":"definition-list","weight":0,"group":"a11y-tables-lists"},{"id":"dlitem","weight":0,"group":"a11y-tables-lists"},{"id":"document-title","weight":3,"group":"a11y-names-labels"},{"id":"duplicate-id-active","weight":3,"group":"a11y-navigation"},{"id":"duplicate-id-aria","weight":0,"group":"a11y-aria"},{"id":"form-field-multiple-labels","weight":0,"group":"a11y-names-labels"},{"id":"frame-title","weight":0,"group":"a11y-names-labels"},{"id":"heading-order","weight":2,"group":"a11y-navigation"},{"id":"html-has-lang","weight":3,"group":"a11y-language"},{"id":"html-lang-valid","weight":3,"group":"a11y-language"},{"id":"image-alt","weight":10,"group":"a11y-names-labels"},{"id":"input-image-alt","weight":0,"group":"a11y-names-labels"},{"id":"label","weight":0,"group":"a11y-names-labels"},{"id":"layout-table","weight":0,"group":"a11y-tables-lists"},{"id":"link-name","weight":3,"group":"a11y-names-labels"},{"id":"list","weight":3,"group":"a11y-tables-lists"},{"id":"listitem","weight":3,"group":"a11y-tables-lists"},{"id":"meta-refresh","weight":0,"group":"a11y-best-practices"},{"id":"meta-viewport","weight":10,"group":"a11y-best-practices"},{"id":"object-alt","weight":0,"group":"a11y-names-labels"},{"id":"tabindex","weight":0,"group":"a11y-navigation"},{"id":"td-headers-attr","weight":0,"group":"a11y-tables-lists"},{"id":"th-has-data-cells","weight":0,"group":"a11y-tables-lists"},{"id":"valid-lang","weight":0,"group":"a11y-language"},{"id":"video-caption","weight":10,"group":"a11y-audio-video"},{"id":"video-description","weight":10,"group":"a11y-audio-video"},{"id":"logical-tab-order","weight":0},{"id":"focusable-controls","weight":0},{"id":"interactive-element-affordance","weight":0},{"id":"managed-focus","weight":0},{"id":"focus-traps","weight":0},{"id":"custom-controls-labels","weight":0},{"id":"custom-controls-roles","weight":0},{"id":"visual-order-follows-dom","weight":0},{"id":"offscreen-content-hidden","weight":0},{"id":"use-landmarks","weight":0}]},"best-practices":{"id":"best-practices","title":"Best Practices","score":0.93,"auditRefs":[{"id":"is-on-https","weight":1,"group":"best-practices-trust-safety"},{"id":"external-anchors-use-rel-noopener","weight":1,"group":"best-practices-trust-safety"},{"id":"geolocation-on-start","weight":1,"group":"best-practices-trust-safety"},{"id":"notification-on-start","weight":1,"group":"best-practices-trust-safety"},{"id":"no-vulnerable-libraries","weight":1,"group":"best-practices-trust-safety"},{"id":"password-inputs-can-be-pasted-into","weight":1,"group":"best-practices-ux"},{"id":"image-aspect-ratio","weight":1,"group":"best-practices-ux"},{"id":"image-size-responsive","weight":1,"group":"best-practices-ux"},{"id":"preload-fonts","weight":0,"group":"best-practices-ux"},{"id":"doctype","weight":1,"group":"best-practices-browser-compat"},{"id":"charset","weight":1,"group":"best-practices-browser-compat"},{"id":"no-unload-listeners","weight":1,"group":"best-practices-general"},{"id":"appcache-manifest","weight":1,"group":"best-practices-general"},{"id":"js-libraries","weight":0,"group":"best-practices-general"},{"id":"deprecations","weight":1,"group":"best-practices-general"},{"id":"errors-in-console","weight":1,"group":"best-practices-general"},{"id":"valid-source-maps","weight":0,"group":"best-practices-general"}]},"seo":{"id":"seo","title":"SEO","description":"These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).","score":0.59,"manualDescription":"Run these additional validators on your site to check additional SEO best practices.","auditRefs":[{"id":"viewport","weight":1,"group":"seo-mobile"},{"id":"document-title","weight":1,"group":"seo-content"},{"id":"meta-description","weight":1,"group":"seo-content"},{"id":"http-status-code","weight":1,"group":"seo-crawl"},{"id":"link-text","weight":1,"group":"seo-content"},{"id":"crawlable-anchors","weight":1,"group":"seo-crawl"},{"id":"is-crawlable","weight":1,"group":"seo-crawl"},{"id":"robots-txt","weight":1,"group":"seo-crawl"},{"id":"image-alt","weight":1,"group":"seo-content"},{"id":"hreflang","weight":1,"group":"seo-content"},{"id":"canonical","weight":1,"group":"seo-content"},{"id":"font-size","weight":1,"group":"seo-mobile"},{"id":"plugins","weight":1,"group":"seo-content"},{"id":"tap-targets","weight":1,"group":"seo-mobile"},{"id":"structured-data","weight":0}]}},"categoryGroups":{"a11y-best-practices":{"title":"Best practices","description":"These items highlight common accessibility best practices."},"best-practices-trust-safety":{"title":"Trust and Safety"},"best-practices-ux":{"title":"User Experience"},"a11y-aria":{"title":"ARIA","description":"These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."},"pwa-installable":{"title":"Installable"},"a11y-color-contrast":{"title":"Contrast","description":"These are opportunities to improve the legibility of your content."},"diagnostics":{"title":"Diagnostics","description":"More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score."},"a11y-tables-lists":{"title":"Tables and lists","description":"These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."},"pwa-optimized":{"title":"PWA Optimized"},"metrics":{"title":"Metrics"},"pwa-fast-reliable":{"title":"Fast and reliable"},"best-practices-general":{"title":"General"},"seo-crawl":{"title":"Crawling and Indexing","description":"To appear in search results, crawlers need access to your app."},"a11y-audio-video":{"title":"Audio and video","description":"These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."},"a11y-navigation":{"title":"Navigation","description":"These are opportunities to improve keyboard navigation in your application."},"a11y-language":{"title":"Internationalization and localization","description":"These are opportunities to improve the interpretation of your content by users in different locales."},"budgets":{"title":"Budgets","description":"Performance budgets set standards for the performance of your site."},"seo-content":{"title":"Content Best Practices","description":"Format your HTML in a way that enables crawlers to better understand your app’s content."},"load-opportunities":{"title":"Opportunities","description":"These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score."},"best-practices-browser-compat":{"title":"Browser Compatibility"},"a11y-names-labels":{"title":"Names and labels","description":"These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."},"seo-mobile":{"title":"Mobile Friendly","description":"Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/)."}},"timing":{"total":29386.11},"i18n":{"rendererFormattedStrings":{"varianceDisclaimer":"Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.","opportunityResourceColumnLabel":"Opportunity","opportunitySavingsColumnLabel":"Estimated Savings","errorMissingAuditInfo":"Report error: no audit information","errorLabel":"Error!","warningHeader":"Warnings: ","auditGroupExpandTooltip":"Show audits","passedAuditsGroupTitle":"Passed audits","notApplicableAuditsGroupTitle":"Not applicable","manualAuditsGroupTitle":"Additional items to manually check","toplevelWarningsMessage":"There were issues affecting this run of Lighthouse:","crcLongestDurationLabel":"Maximum critical path latency:","crcInitialNavigation":"Initial Navigation","lsPerformanceCategoryDescription":"[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.","labDataTitle":"Lab Data"}},"stackPacks":[{"id":"wordpress","title":"WordPress","iconDataURL":"data:image/svg+xml,%3Csvg viewBox='0 0 122.5 122.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f3439'%3E%3Cpath d='M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zM96.7 58.6c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z'/%3E%3Cpath d='M62.2 65.9l-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z'/%3E%3Cpath d='M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z'/%3E%3C/g%3E%3C/svg%3E","descriptions":{"unused-javascript":"Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused JavaScript in your page. To identify plugins that are adding extraneous JS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the script. Look out for plugins that have many scripts in the list which have a lot of red in code coverage. A plugin should only enqueue a script if it is actually used on the page.","uses-webp-images":"Consider using a [plugin](https://wordpress.org/plugins/search/convert+webp/) or service that will automatically convert your uploaded images to the optimal formats.","unused-css-rules":"Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused CSS in your page. To identify plugins that are adding extraneous CSS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the stylesheet. Look out for plugins that have many stylesheets in the list which have a lot of red in code coverage. A plugin should only enqueue a stylesheet if it is actually used on the page.","unminified-css":"A number of [WordPress plugins](https://wordpress.org/plugins/search/minify+css/) can speed up your site by concatenating, minifying, and compressing your styles. You may also want to use a build process to do this minification up-front if possible.","offscreen-images":"Install a [lazy-load WordPress plugin](https://wordpress.org/plugins/search/lazy+load/) that provides the ability to defer any offscreen images, or switch to a theme that provides that functionality. Also consider using [the AMP plugin](https://wordpress.org/plugins/amp/).","uses-optimized-images":"Consider using an [image optimization WordPress plugin](https://wordpress.org/plugins/search/optimize+images/) that compresses your images while retaining quality.","unminified-javascript":"A number of [WordPress plugins](https://wordpress.org/plugins/search/minify+javascript/) can speed up your site by concatenating, minifying, and compressing your scripts. You may also want to use a build process to do this minification up front if possible.","total-byte-weight":"Consider showing excerpts in your post lists (e.g. via the more tag), reducing the number of posts shown on a given page, breaking your long posts into multiple pages, or using a plugin to lazy-load comments.","server-response-time":"Themes, plugins, and server specifications all contribute to server response time. Consider finding a more optimized theme, carefully selecting an optimization plugin, and/or upgrading your server.","uses-long-cache-ttl":"Read about [Browser Caching in WordPress](https://wordpress.org/support/article/optimization/#browser-caching).","render-blocking-resources":"There are a number of WordPress plugins that can help you [inline critical assets](https://wordpress.org/plugins/search/critical+css/) or [defer less important resources](https://wordpress.org/plugins/search/defer+css+javascript/). Beware that optimizations provided by these plugins may break features of your theme or plugins, so you will likely need to make code changes.","uses-responsive-images":"Upload images directly through the [media library](https://wordpress.org/support/article/media-library-screen/) to ensure that the required image sizes are available, and then insert them from the media library or use the image widget to ensure the optimal image sizes are used (including those for the responsive breakpoints). Avoid using `Full Size` images unless the dimensions are adequate for their usage. [Learn More](https://wordpress.org/support/article/inserting-images-into-posts-and-pages/).","uses-text-compression":"You can enable text compression in your web server configuration.","efficient-animated-content":"Consider uploading your GIF to a service which will make it available to embed as an HTML5 video."}}]};</script> <script>function __initLighthouseReport__() { const dom = new DOM(document); const renderer = new ReportRenderer(dom); const container = document.querySelector('main'); renderer.renderReport(window.__LIGHTHOUSE_JSON__, container); // Hook in JS features and page-level event listeners after the report // is in the document. const features = new ReportUIFeatures(dom); features.initFeatures(window.__LIGHTHOUSE_JSON__); } window.addEventListener('DOMContentLoaded', __initLighthouseReport__); document.addEventListener('lh-analytics', e => { if (window.ga) { ga(e.detail.cmd, e.detail.fields); } }); document.addEventListener('lh-log', e => { const logger = new Logger(document.querySelector('#lh-log')); switch (e.detail.cmd) { case 'log': logger.log(e.detail.msg); break; case 'warn': logger.warn(e.detail.msg); break; case 'error': logger.error(e.detail.msg); break; case 'hide': logger.hide(); break; } });</script>