# Week 1 — Core Control (DOM + Logic)

---

## Day 1 — Counter App

### Objective
Build a simple counter with increment and decrement.

### Features
- Display count (start at 0)
- Increment button (+)
- Decrement button (-)

### Constraints
- Use querySelector
- Use addEventListener
- Use a single state variable: count
- Use a render() function

### Pseudocode
- Initialize count = 0
- Select DOM elements
- Create render() → update display
- Add event listeners for buttons
- Update count → call render()

### Done When
- Counter updates correctly
- You can explain render()

---

## Day 2 — Counter v2

### Objective
Rebuild Day 1 from memory, then enhance it.

### New Features
- Reset button
- Prevent negative values

### Constraints
- Must rebuild without looking first
- Use if condition to guard state

### Pseudocode Additions
- If count > 0 → allow decrement
- Reset sets count = 0

### Done When
- Cannot go below 0
- Reset works
- You understand state validation

---

## Day 3 — To-Do App v1

### Objective
Build a basic to-do list (add + delete)

### Features
- Input field
- Add button
- Task list
- Delete button per item

### Constraints
- Use array as source of truth
- Re-render entire list on change

### Data Model
todos = []

### Pseudocode
- On add → push to array
- On delete → remove by index
- render() → loop and display

### Done When
- Add + delete works
- You understand array-driven UI

---

## Day 4 — To-Do v2

### Objective
Add task completion + filtering

### Features
- Mark complete
- Filter: all / active / complete

### Data Model Upgrade
[{ text: "", completed: false }]

### Constraints
- Do not mutate UI directly
- Always re-render from state

### Done When
- Filters work
- State reflects UI

---

## Day 5 — 20 Questions (Animal Theme)

### Objective
Build a simple decision tree game

### Features
- Yes / No buttons only
- Hardcoded questions
- Final guess output

### Constraints
- No free text input
- Use branching logic

### Pseudocode
- Track current question node
- On answer → move to next node
- Render question or result

### Done When
- Game flows correctly
- Logic is understandable

---

## Day 6 — Refactor Day

### Objective
Improve structure of previous apps

### Focus
- Separate state vs render
- Extract reusable functions
- Clean naming

### Tasks
- Refactor To-Do app
- Refactor Counter

### Done When
- Code is cleaner
- Functions are reusable

---

## Day 7 — Rebuild Challenge

### Objective
Rebuild To-Do app from scratch

### Rules
- No looking at previous code
- No AI help
- Start from blank files

### Focus
- Recreate logic from memory
- Rebuild render system

### Done When
- App works fully
- You feel friction → then clarity

---

# Daily Habit

- Build
- Struggle
- Debug
- Rebuild
