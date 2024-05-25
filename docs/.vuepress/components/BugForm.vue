<template>
  <form name="bugsubmission" method="post" data-netlify="true">
    <input type="hidden" name="bugsubmission" value="issues" />
    <div class="container-lg clearfix mt-12">
      <label class="my-4" for="bugtitle">Titolo</label>
      <textarea
        id="bugtitle"
        rows="1"
        class="form-control input-monospace col-12 mb-6"
        type="text"
        placeholder="Errore 404"
        aria-label="Title"
      />

      <label class="my-4" for="bugdescription">Descrivi il Problema</label>
      <textarea
        id="bugdescription"
        rows="6"
        class="form-control input-monospace col-12 mb-6"
        type="text"
        placeholder="Descrivi Chiaramente il problema"
        aria-label="Describe the bug"
      />

      <label
        for="steps"
        class="tooltipped tooltipped-s"
        aria-label="Passi per riprodurre l'errore"
        >Riproduzione del Problema</label
      >
      <textarea
        id="steps"
        rows="8"
        class="form-control input-monospace col-12 mb-6"
        type="text"
        placeholder="Passi per riprodurre l'errore:

1 - Vai a '...'
2 - Clicca su '....'
3 - Scrolla in basso a '....'
4 - Vedi l'errore
"
        aria-label="To Reproduce"
      />

      <label
        class="my-4 tooltipped tooltipped-s"
        aria-label="Cosa sarebbe dovuto accadere?"
        for="expectedBehavior"
        >Funzionamento Previsto</label
      >
      <textarea
        id="expectedBehavior"
        rows="8"
        class="form-control input-monospace col-12 mb-6"
        type="text"
        placeholder="Descrivi cosa dovrebbe succedere se non ci fosse l'errore"
        aria-label="Expected Behavior"
      />

      <label
        class="tooltipped tooltipped-s"
        aria-label="Aggiungi degli screenshots per aiutarti a descriverer il problema"
        >Screenshots</label
      >
      <div class="col-12 mb-6 box border p-3 rounded">
        <div
          class="tooltipped tooltipped-s"
          multiple
          aria-label="Formati Supportati .jpg, .jpeg, .png"
        >
          <input name="file" id="file" accept=".jpg, .jpeg, .png" type="file" />
        </div>
      </div>
      <div class="container-lg clearfix mb-6">
        <p class="h3 text-shadow-light">Desktop</p>
        <div class="col-4 float-left">
          <label
            class="tooltipped tooltipped-s text-small"
            aria-label="Indica il Sistema Operativo in uso"
            for="os"
            >Sistema Operativo
            <input
              id="os"
              class="form-control input-monospace input-block input-sm"
              type="text"
              placeholder="[e.g. iOS]"
              aria-label="OS"
            />
          </label>
        </div>
        <div class="col-4 float-left px-2">
          <label
            class="tooltipped tooltipped-s text-small"
            aria-label="Indica il Browser usato"
            for="browser"
            >Browser
            <input
              id="browser"
              class="form-control input-monospace input-block input-sm"
              type="text"
              placeholder="[e.g. chrome, safari]"
              aria-label="Browser"
            />
          </label>
        </div>
        <div class="col-4 float-left">
          <label
            class="tooltipped tooltipped-s text-small"
            aria-label="Indica la versione"
            for="version"
            >Versione
            <input
              id="version"
              class="form-control input-monospace input-block input-sm"
              type="text"
              placeholder="[e.g. 2.2]"
              aria-label="Version"
            />
          </label>
        </div>
      </div>

      <div class="container-lg clearfix mb-6">
        <p class="h3 text-shadow-light">Mobile</p>
        <div class="col-6 float-left pr-4 border-right">
          <label class="text-small" for="mobileos"
            >Sistema Operativo
            <input
              id="mobileos"
              class="form-control input-monospace mb-2 input-sm input-block"
              type="text"
              placeholder="[e.g. iOS]"
              aria-label="OS"
            />
          </label>
          <label class="text-small" for="mobiledevice"
            >Dispositivo
            <input
              id="mobiledevice"
              class="form-control input-monospace mb-2 input-sm input-block"
              type="text"
              placeholder="[e.g. iPhone6]"
              aria-label="Device"
            />
          </label>
        </div>
        <div class="col-6 float-left pl-4">
          <label class="text-small" for="mobilebrowser"
            >Browser
            <input
              id="mobilebrowser"
              class="form-control input-monospace mb-2 input-sm input-block"
              type="text"
              placeholder="[e.g. chrome, safari]"
              aria-label="Mobile Browser"
            />
          </label>
          <label class="text-small" for="mobileversion"
            >Versione
            <input
              id="mobileversion"
              class="form-control input-monospace mb-2 input-sm input-block"
              type="text"
              placeholder="[e.g. 22]"
              aria-label="Mobile Version"
            />
          </label>
        </div>
      </div>

      <label class="my-4" for="bugextrainfo">Altre Informazioni</label>
      <textarea
        id="bugextrainfo"
        class="form-control input-monospace col-12 mb-6"
        type="text"
        placeholder="Aggiungi Altre informazioni Utili a risolvere il problema"
        aria-label="Additional context"
      />
    </div>

    <button class="btn btn-large btn-block" type="submit">Invia</button>
  </form>
</template>


