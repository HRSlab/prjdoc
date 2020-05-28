<template>
  <div class="my-6">
    <div class="container-lg clearfix">
      <div class="col-4 float-left pr-2">
        <div class="f6-light p-4 border">
          Date
          <span class="Label Label--outline float-right">{{ $frontmatter.Date }}</span>
        </div>
      </div>
      <div class="col-4 float-left px-2">
        <div class="f6-light p-4 border">
          Status
          <span
            title="Status"
            class="State State--small bg-yellow text-gray-dark float-right"
            v-if="$frontmatter.Status  === 'pending'"
          >
            <svg class="octicon" viewBox="0 0 16 16" width="16" height="16">
              <path
                fill-rule="evenodd"
                d="M2.75 1a.75.75 0 000 1.5h.75v1.25a4.75 4.75 0 001.9 3.8l.333.25c.134.1.134.3 0 .4l-.333.25a4.75 4.75 0 00-1.9 3.8v1.25h-.75a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5h-.75v-1.25a4.75 4.75 0 00-1.9-3.8l-.333-.25a.25.25 0 010-.4l.333-.25a4.75 4.75 0 001.9-3.8V2.5h.75a.75.75 0 000-1.5H2.75zM11 2.5H5v1.25a3.25 3.25 0 001.3 2.6l.333.25c.934.7.934 2.1 0 2.8l-.333.25a3.25 3.25 0 00-1.3 2.6v1.25h6v-1.25a3.25 3.25 0 00-1.3-2.6l-.333-.25a1.75 1.75 0 010-2.8l.333-.25a3.25 3.25 0 001.3-2.6V2.5z"
              />
            </svg>
            {{ $frontmatter.Status }}
          </span>
          <span
            title="Status"
            class="State State--small bg-green float-right"
            v-else-if="$frontmatter.Status  === 'running'"
          >
            <svg class="octicon" viewBox="0 0 16 16" width="16" height="16">
              <path
                fill-rule="evenodd"
                d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"
              />
            </svg>
            {{ $frontmatter.Status }}
          </span>
          <span
            title="Status"
            class="State State--small bg-red float-right"
            v-else-if="$frontmatter.Status  === 'danger'"
          >
            <svg class="octicon" viewBox="0 0 16 16" width="16" height="16">
              <path
                fill-rule="evenodd"
                d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
              />
            </svg>
            {{ $frontmatter.Status }}
          </span>
          <span
            title="Status"
            class="State State--small bg-gray-dark text-white float-right"
            v-else-if="$frontmatter.Status  === 'closed'"
          >
            <svg class="octicon" viewBox="0 0 16 16" width="16" height="16">
              <path
                fill-rule="evenodd"
                d="M1.5 8a6.5 6.5 0 0110.535-5.096l-9.131 9.131A6.472 6.472 0 011.5 8zm2.465 5.096a6.5 6.5 0 009.131-9.131l-9.131 9.131zM8 0a8 8 0 100 16A8 8 0 008 0z"
              />
            </svg>
            {{ $frontmatter.Status }}
          </span>
          <span
            title="Status"
            class="Label Label--outline float-right"
            v-else
          >
          <svg class="octicon" viewBox="0 0 14 16" width="14" height="16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 01-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 01-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"></path></svg>
            {{ $frontmatter.Status }}
          </span>
        </div>
      </div>
      <div class="col-4 float-left pl-2">
        <div class="f6-light p-4 border">
          Version
          <span class="Label Label--outline float-right">{{ $frontmatter.Version }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script> 