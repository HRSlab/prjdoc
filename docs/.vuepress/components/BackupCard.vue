<template>
  <div
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark"
    class="Box p-4 color-bg-secondary my-2"
  >
    <div class="Subhead p-2">
      <div class="Subhead-heading">Backup</div>
      <div class="Subhead-actions color-shadow-medium anim-hover-grow">
        <span
          class="
            text-small
            rounded-1
            px-2
            py-1
            color-bg-success-inverse color-text-white
          "
          >{{ $frontmatter.Backup.latest }}</span
        >
      </div>
      <p class="Subhead-description text-small">
        Prossimo backup tra
        <span class="color-text-link">
          {{
            Math.abs(
              new Date(
                new Date($frontmatter.Backup.next) - Date.now()
              ).getDate()
            )
          }}
          giorni
        </span>
      </p>
    </div>

    <ul class="Box Box--condensed p-0 color-shadow-medium anim-hover-grow">
      <li
        class="Box-row text-small"
        v-for="detail in $frontmatter.Backup.details"
        :key="detail"
      >
        {{ detail }}
      </li>
    </ul>

    <div class="Subhead mt-4">
      <div class="Subhead-heading f3">Dimensioni</div>
    </div>

    <div class="Box my-2 color-bg-info anim-hover-grow">
      <p class="f5 p-2 m-0">
        <svg
          class="octicon archive mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill-rule="evenodd"
            d="M2.75 2A1.75 1.75 0 001 3.75v3.5C1 8.216 1.784 9 2.75 9h18.5A1.75 1.75 0 0023 7.25v-3.5A1.75 1.75 0 0021.25 2H2.75zm18.5 1.5H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h18.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25z"
          ></path>
          <path
            d="M2.75 10a.75.75 0 01.75.75v9.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25v-9.5a.75.75 0 011.5 0v9.5A1.75 1.75 0 0120.25 22H3.75A1.75 1.75 0 012 20.25v-9.5a.75.75 0 01.75-.75z"
          ></path>
          <path
            d="M9.75 11.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
          ></path></svg
        >Totale
        <span class="float-right">{{ $frontmatter.Backup.total }}MB</span>
      </p>
    </div>
    <div class="Box my-2 anim-hover-grow">
      <p class="f5 p-2 m-0">
        <svg
          class="octicon file-directory mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill-rule="evenodd"
            d="M3.75 4.5a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25V7.687a.25.25 0 00-.25-.25h-8.471a1.75 1.75 0 01-1.447-.765L8.928 4.61a.25.25 0 00-.208-.11H3.75zM2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063a.25.25 0 00.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V4.75z"
          ></path></svg
        >Files<span class="float-right">{{ $frontmatter.Backup.files }}MB</span>
      </p>
    </div>
    <div class="Box my-2 anim-hover-grow">
      <p class="f5 p-2 m-0">
        <svg
          class="octicon database mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 3.5c0-.133.058-.318.282-.55.227-.237.592-.484 1.1-.708C4.899 1.795 6.354 1.5 8 1.5c1.647 0 3.102.295 4.117.742.51.224.874.47 1.101.707.224.233.282.418.282.551 0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 5.205 9.646 5.5 8 5.5c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707-.224-.233-.282-.418-.282-.551zM1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591v-9zM2.5 8V5.724c.241.15.503.286.779.407C4.525 6.68 6.195 7 8 7c1.805 0 3.475-.32 4.722-.869.275-.121.537-.257.778-.407V8c0 .133-.058.318-.282.55-.227.237-.592.484-1.1.708C11.101 9.705 9.646 10 8 10c-1.647 0-3.102-.295-4.117-.742-.51-.224-.874-.47-1.101-.707C2.558 8.318 2.5 8.133 2.5 8zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.236 6.236 0 01-.779-.406z"
          ></path></svg
        >Database<span class="float-right">{{ $frontmatter.Backup.db }}MB</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>