# W7D3 - Side Effects & Other Data Fetching

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Dependencies
- [x] Cleanup
- [x] _useEffect_ Flow

### 2 Rules For Using Hooks
1. don't call inside of loops, conditionals, nested functions
2. don't use them outside of React functions

### Pure Functions
- Given the same arguments, always returns the same value
- Produces no side effects

```js
const b = 15;
let total = 0;
const add = (a) => {
  total = a + b;
  return a + b;
};
add(2) // 17
```

### Side Effects
- Whenever we use external state (update the state of the application) or we interact with something external to our application
- Example Side Effects:
  - Mutate and/or rely upon external state (`useState`)
  - Writing to standard out (`console.log`)
  - Establishing a socket connection (`ws` or `Socket.io`)
  - Data fetching from an API
  - Setting intervals and timers

### Concurrent Servers
- API back-end (node/express, Rails, django)
- Webpack front-end (React, Angular, Vue)
- Storybook

### useEffect Flow
1. React renders the UI (client-side rendering)
2. Browser paints the DOM
3. useEffect cleanup (if any) from a previous render
4. useEffect fires




#
