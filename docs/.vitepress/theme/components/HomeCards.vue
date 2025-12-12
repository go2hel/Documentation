<script setup>
const cards = [
  {
    title: 'Competitive coding in Java',
    details: 'Getting started with competitive coding in Java',
    link: '/resources/comp-coding-java/',
    image: '/card-comp-coding.png',
    icon: '</>'
  },
  {
    title: 'Learning',
    details: 'Personal project learnings',
    link: '/resources/', // Placeholder or assume a link
    image: '/card-learning.png',
    icon: '📝'
  },
  {
    title: 'Blogs',
    details: 'Bits and pieces of interesting info',
    link: '/blog/',
    image: '/card-blogs.png',
    icon: '⚙️'
  }
]
</script>

<template>
  <div class="home-cards-container">
    <div class="grid-row">
      <a v-for="card in cards" :key="card.title" :href="card.link" class="card">
        <div class="card-content">
          <div class="card-header">
            <span class="card-icon">{{ card.icon }}</span>
            <h3 class="card-title">{{ card.title }}</h3>
          </div>
          <p class="card-details">{{ card.details }}</p>
        </div>
        <div class="card-image-wrapper">
          <img :src="card.image" :alt="card.title" class="card-image" />
        </div>
      </a>
    </div>
    
    <!-- Separate row or grid item for the smaller card -->
    <a href="/resources/dsa-question-bank/" class="card small-card">
      <div class="card-content">
        <div class="card-header">
          <span class="card-icon">🗃️</span> <!-- Icon for Data/Storage -->
          <h3 class="card-title">DSA Question Bank</h3>
        </div>
        <p class="card-details">Questions practiced by me</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
.home-cards-container {
  max-width: 1220px;
  margin: 0 auto;
  padding: 48px 24px 0;
}

.grid-row {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

@media (min-width: 640px) {
  .grid-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .grid-row {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid var(--vp-c-bg-soft);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px var(--vp-shadow-3);
  background-color: var(--vp-c-bg-soft-up);
}

.card-content {
  padding: 20px 20px 12px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.card-icon {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.card-details {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}

.card-image-wrapper {
  margin-top: auto;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.3s;
}

.card:hover .card-image {
  scale: 1.05;
}

.small-card {
  height: auto;
  max-width: 384px; /* Roughly 1/3 width to align if in column */
  /* If we want it to span full width on small but specific width on large? 
     The reference image has it aligned to the left column. */
}

@media (min-width: 960px) {
    .small-card {
        width: calc(33.333% - 16px);
    }
}
</style>
