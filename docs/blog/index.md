---
layout: page
title: Blog
sidebar: false
---

<script setup>
import { data as posts } from './blogs.data.ts'
</script>

<ul class="blog-list">
  <li v-for="post in posts" :key="post.url" class="blog-entry">
    <a :href="post.url">{{ post.title }}</a>
    <div class="date">{{ post.date.string }}</div>
    <div v-if="post.summary" class="excerpt">{{ post.summary }}</div>
  </li>
</ul>

<style>
.blog-list {
  max-width: 1600px;
  margin: 0 auto;
  padding: 6rem 1rem 2rem;
}
.blog-entry {
  margin-bottom: 3rem;
  list-style: none;
}
.blog-entry a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
}
.date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}
.excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
