<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="blog-header" v-if="frontmatter.layout !== 'home' && frontmatter.layout !== 'page'">
    <h1>{{ frontmatter.title }}</h1>
    <div class="meta">
      <div class="author" v-if="frontmatter.authors">
        <div v-for="author in frontmatter.authors" :key="author.name" class="author-item">
          <img :src="author.image" :alt="author.name" class="author-image" />
          <a :href="author.link" target="_blank" rel="noopener noreferrer">{{ author.name }}</a>
        </div>
      </div>
      <div class="date" v-if="frontmatter.date">
        {{ new Date(frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-header {
  margin-bottom: 2rem;
  text-align: center;
}

.blog-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.author {
  display: flex;
  gap: 1rem;
}

.author-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-image {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.author-item a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.author-item a:hover {
  color: var(--vp-c-brand);
}
</style>
