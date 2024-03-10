<template>
  <section
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark"
    class="my-3 py-4 px-2 rounded color-shadow-extra-large color-bg-secodary"
  >
    <div class="Subhead px-3">
      <h3 class="Subhead-heading">Plugin Installati</h3>
    </div>

    <div class="Box">
          JFC NOTHING WORKS!!!!!
    <ul class="Box-row" v-for="(post, index) in posts" :key="index">
      <li class="f1 color-text-danger"><h1>{{ post.title.rendered }}</h1>
      <p class="f6" v-html="post.excerpt.rendered"></p>
      <strong class="Label">Published: {{ getPostDate(post.date) }}</strong>
      </li>

    </ul>
    </div>
    <div class="text-small color-bg-info">

    </div>
  </section>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      // Wordpress Posts Endpoint
      postsUrl: "https://reinnovame.com/wp-json/wp/v2/posts",
      queryOptions: {
        per_page: 6, // Only retrieve the 10 most recent blog posts.
        page: 1, // Current page of the collection.
        _embed: true //Response should include embedded resources.
      },
      // Returned Posts in an Array
      posts: []
    };
  },
  methods: {
    // Get Recent Posts From WordPress Site
    getRecentMessages() {
      axios
        .get(this.postsUrl, { params: this.queryOptions })
        .then(response => {
          this.posts = response.data;
          console.log("Posts retrieved!");
          console.log(this.posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPostDate(date) {
      return moment(date).format("lll");
    }
  },
  mounted() {
    this.getRecentMessages();
  }
};
</script>