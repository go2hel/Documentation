import { createContentLoader } from 'vitepress'

export interface Question {
    title: string
    url: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    tags: string[]
}

declare const data: Question[]
export { data }

export default createContentLoader('resources/dsa-question-bank/questions/*.md', {
    transform(raw): Question[] {
        return raw
            .map(({ url, frontmatter }) => ({
                title: frontmatter.title,
                url,
                difficulty: frontmatter.difficulty ?? 'Medium',
                tags: frontmatter.tags ?? []
            }))
            .sort((a, b) => {
                // Sort by difficulty (Easy -> Medium -> Hard) or Title
                const difficultyOrder: Record<string, number> = { Easy: 1, Medium: 2, Hard: 3 }
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
            })
    }
})
