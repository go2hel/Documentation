<script setup lang="ts">
import { data as questions, type Question } from '../../../resources/dsa-question-bank/questions.data'
import { allowedTags } from '../../../resources/dsa-question-bank/tags'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const searchQuery = ref('')
const selectedDifficulty = ref('')
const selectedTags = ref<string[]>([])
const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
}

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = (e: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isDropdownOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown)
})

const filteredQuestions = computed(() => {
  return questions.filter((q: Question) => {
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
    const matchesDifficulty = selectedDifficulty.value ? q.difficulty === selectedDifficulty.value : true
    const matchesTags = selectedTags.value.length === 0 ? true : selectedTags.value.every(tag => q.tags.includes(tag))
    
    return matchesSearch && matchesDifficulty && matchesTags
  })
})

const navigateTo = (url: string) => {
  router.go(url)
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy': return 'diff-easy'
    case 'Medium': return 'diff-medium'
    case 'Hard': return 'diff-hard'
    default: return 'diff-default'
  }
}
</script>

<template>
  <div class="qb-container">
    <div class="qb-controls">
      <div class="qb-search-wrapper">
        <span class="qb-search-icon">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </span>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search questions..." 
          class="qb-input qb-search"
        />
      </div>
      
      <div class="qb-filter-group">
        <div class="qb-select-wrapper">
             <select v-model="selectedDifficulty" class="qb-input qb-select">
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <span class="qb-select-arrow">▼</span>
        </div>

        <div class="qb-multiselect-wrapper" ref="dropdownRef">
          <div 
            class="qb-input qb-multiselect-trigger" 
            @click="toggleDropdown"
            :class="{ 'is-active': isDropdownOpen }"
          >
             <span>{{ selectedTags.length ? `${selectedTags.length} Tags Selected` : 'Filter Tags' }}</span>
             <span class="qb-select-arrow">▼</span>
          </div>
          
          <div v-show="isDropdownOpen" class="qb-multiselect-dropdown">
            <label v-for="tag in allowedTags" :key="tag" class="qb-checkbox-item">
              <input 
                type="checkbox" 
                :value="tag" 
                :checked="selectedTags.includes(tag)" 
                @change="toggleTag(tag)"
              >
              <span class="qb-checkbox-label">{{ tag }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="qb-table-container">
      <table class="qb-table">
        <thead>
          <tr>
            <th class="col-title">Problem Title</th>
            <th class="col-diff">Difficulty</th>
            <th class="col-tags">Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="question in filteredQuestions" 
            :key="question.url" 
            @click="navigateTo(question.url)" 
            class="qb-row"
          >
            <td class="col-title cell-title">
              <span class="qb-link">{{ question.title }}</span>
            </td>
            <td class="col-diff">
              <span class="badge" :class="getDifficultyColor(question.difficulty)">
                {{ question.difficulty }}
              </span>
            </td>
            <td class="col-tags">
              <div class="tag-list">
                <span v-for="tag in question.tags" :key="tag" class="tag-badge">
                  {{ tag }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div v-if="filteredQuestions.length === 0" class="qb-empty">
        <p>No questions found matching your criteria.</p>
        <button @click="{ searchQuery = ''; selectedDifficulty = ''; selectedTags = [] }" class="qb-reset-btn">
            Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qb-container {
  margin-top: 1.5rem;
}

.qb-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .qb-controls {
    flex-direction: row;
    align-items: center;
  }
}

.qb-search-wrapper {
  position: relative;
  flex: 1;
}

.qb-search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2);
  pointer-events: none;
  display: flex;
}

.qb-filter-group {
    display: flex;
    gap: 0.75rem;
}

/* Unified Input Styles */
.qb-input {
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;
  height: 42px; /* Fixed height for alignment */
  display: flex;
  align-items: center;
}

.qb-input:focus, .qb-input.is-active {
  border-color: var(--vp-c-brand);
  outline: none;
}

.qb-search {
  padding-left: 2.4rem;
}

/* Select & Dropdown Base */
.qb-select-wrapper, .qb-multiselect-wrapper {
    position: relative;
    min-width: 180px;
}

.qb-select {
    appearance: none;
    padding-right: 2rem;
    cursor: pointer;
}

.qb-select-arrow {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.7rem;
    color: var(--vp-c-text-3);
    pointer-events: none;
}

/* Multi-select Trigger */
.qb-multiselect-trigger {
    cursor: pointer;
    justify-content: space-between;
    user-select: none;
}

/* Dropdown Menu */
.qb-multiselect-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    width: 240px; /* Wider than trigger for better reads */
    background-color: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
    max-height: 300px;
    overflow-y: auto;
    padding: 0.5rem;
}

.qb-checkbox-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    border-radius: 6px;
    color: var(--vp-c-text-1);
    transition: background-color 0.1s;
}

.qb-checkbox-item:hover {
    background-color: var(--vp-c-bg-soft);
}

.qb-checkbox-item input[type="checkbox"] {
    accent-color: var(--vp-c-brand);
    width: 16px;
    height: 16px;
    cursor: pointer;
    margin: 0;
}

.qb-checkbox-label {
    font-size: 0.9rem;
}

/* Table */
.qb-table-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

.qb-table {
  width: 100%;
  table-layout: fixed; /* Enforce column widths */
  border-collapse: collapse;
  margin: 0 !important;
  display: table !important; /* Override potential global Markdown table styles */
}

.qb-table th {
  background-color: var(--vp-c-bg-soft);
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-divider);
}

.qb-table td {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  vertical-align: middle;
}

.qb-row:last-child td {
  border-bottom: none;
}

.qb-row {
  cursor: pointer;
  transition: background-color 0.1s;
}

.qb-row:hover {
  background-color: var(--vp-c-bg-soft);
}

.qb-row:hover .qb-link {
    color: var(--vp-c-brand);
    text-decoration: underline;
}

/* Badges & Tags */
.badge {
  display: inline-flex;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
}

.diff-easy { background-color: rgba(16, 185, 129, 0.1); color: #10b981; }
.diff-medium { background-color: rgba(245, 158, 11, 0.1); color: #f59e0b; }
.diff-hard { background-color: rgba(239, 68, 68, 0.1); color: #ef4444; }

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-badge {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

/* Empty State */
.qb-empty {
  padding: 3rem;
  text-align: center;
  color: var(--vp-c-text-2);
}

.qb-reset-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--vp-c-brand);
    color: white;
    border-radius: 6px;
    font-weight: 600;
}
.qb-reset-btn:hover { background-color: var(--vp-c-brand-dark, var(--vp-c-brand)); }

/* Responsive adjustments */
@media (max-width: 768px) {
    .qb-filter-group {
        flex-direction: column;
    }
    .qb-select-wrapper, .qb-multiselect-wrapper, .qb-multiselect-dropdown {
        width: 100%;
        min-width: unset;
    }
    .col-tags { display: none; } /* Hide tags on mobile to save space? Or just stack */
}
</style>
