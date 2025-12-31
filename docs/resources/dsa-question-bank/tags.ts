export const allowedTags = [
    'Array',
    'String',
    'Hash Table',
    'Dynamic Programming',
    'Math',
    'Sorting',
    'Greedy',
    'Depth-First Search',
    'Binary Search',
    'Tree',
    'Matrix',
    'Two Pointers',
    'Breadth-First Search',
    'Bit Manipulation',
    'Heap (Priority Queue)',
    'Stack',
    'Graph',
    'Linked List',
    'Sliding Window',
    'Backtracking',
    'Union Find',
    'Recursion'
] as const

export type Tag = typeof allowedTags[number]
