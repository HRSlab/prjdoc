<template>
<div
data-color-mode="auto"
data-light-theme="light"
data-dark-theme="dark"
class="Box p-4 color-bg-secondary my-2">
    <div class="Subhead p-2">
        <h1 class="Subhead-heading">Sicurezza</h1>

            <div class="Subhead-actions color-bg-success-inverse color-text-white p-2 CircleBadge anim-hover-grow ">
            <svg class="octicon shield-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16.53 9.78a.75.75 0 00-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5-5z"></path><path fill-rule="evenodd" d="M12.54.637a1.75 1.75 0 00-1.08 0L3.21 3.312A1.75 1.75 0 002 4.976V10c0 6.19 3.77 10.705 9.401 12.83.386.145.812.145 1.198 0C18.229 20.704 22 16.19 22 10V4.976c0-.759-.49-1.43-1.21-1.664L12.54.637zm-.617 1.426a.25.25 0 01.154 0l8.25 2.676a.25.25 0 01.173.237V10c0 5.461-3.28 9.483-8.43 11.426a.2.2 0 01-.14 0C6.78 19.483 3.5 15.46 3.5 10V4.976c0-.108.069-.203.173-.237l8.25-2.676z"></path></svg>
            </div>

            <p class="Subhead-description text-small">Ultima Scansione:
                <span class="color-text-link" > {{ Math.abs(new Date(new Date($frontmatter.Security.latest) - Date.now()).getHours().toLocaleString("it-IT", { hours: 'numeric' })) }} ore fa </span>
            </p>
    </div>

<ul class="Box Box--condensed color-shadow-medium anim-hover-grow ">
    <li class="Box-row text-small" v-for="check in $frontmatter.Security.Checks" :key="check">
    <svg class="octicon shield-check color-text-success mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.533.133a1.75 1.75 0 00-1.066 0l-5.25 1.68A1.75 1.75 0 001 3.48V7c0 1.566.32 3.182 1.303 4.682.983 1.498 2.585 2.813 5.032 3.855a1.7 1.7 0 001.33 0c2.447-1.042 4.049-2.357 5.032-3.855C14.68 10.182 15 8.566 15 7V3.48a1.75 1.75 0 00-1.217-1.667L8.533.133zm-.61 1.429a.25.25 0 01.153 0l5.25 1.68a.25.25 0 01.174.238V7c0 1.358-.275 2.666-1.057 3.86-.784 1.194-2.121 2.34-4.366 3.297a.2.2 0 01-.154 0c-2.245-.956-3.582-2.104-4.366-3.298C2.775 9.666 2.5 8.36 2.5 7V3.48a.25.25 0 01.174-.237l5.25-1.68zM11.28 6.28a.75.75 0 00-1.06-1.06L7.25 8.19l-.97-.97a.75.75 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0l3.5-3.5z"></path></svg>        {{  check }}

    </li>
</ul>
</div>
</template>

<script>
export default {
};

</script>

<style>


</style>