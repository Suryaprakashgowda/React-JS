# React `useEffect()` Hook Notes

## What is `useEffect()`?

`useEffect()` is a React Hook used to perform **side effects** in a functional component.

A side effect is any operation that interacts with something outside the component, such as:
- Fetching API data
- Updating the DOM
- Setting timers
- Adding event listeners
- Local Storage operations

---

# Syntax

```jsx
useEffect(() => {
    // Side Effect Code
}, []);
```

---

# Import

```jsx
import { useEffect } from "react";
```

---

# Syntax Breakdown

```jsx
useEffect(() => {

    // Code to execute

}, [dependencies]);
```

- First Argument → Callback Function
- Second Argument → Dependency Array

---

# Why useEffect?

Before React Hooks, lifecycle methods were used in class components.

Now in functional components, `useEffect()` performs the same work.

---

# Types of useEffect

## 1. Without Dependency Array

```jsx
useEffect(() => {
    console.log("Executed");
});
```

### Output

Runs after **every render**.

---

## 2. Empty Dependency Array

```jsx
useEffect(() => {
    console.log("Executed");
}, []);
```

### Output

Runs **only once** after the component mounts.

Most commonly used for API calls.

---

## 3. With Dependency Array

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
    console.log("Count Changed");
}, [count]);
```

### Output

Runs only when `count` changes.

---

# API Example

```jsx
import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));

    }, []);

    return (
        <>
            {users.map((user) => (
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </>
    );
}
```

---

# Axios Example

```jsx
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:3000/users")
            .then((res) => {
                setUsers(res.data);
            });

    }, []);

}
```

---

# Timer Example

```jsx
useEffect(() => {

    const timer = setInterval(() => {
        console.log("Running...");
    }, 1000);

    return () => clearInterval(timer);

}, []);
```

---

# Cleanup Function

A cleanup function runs before the component unmounts or before the effect runs again.

```jsx
useEffect(() => {

    console.log("Component Mounted");

    return () => {
        console.log("Component Unmounted");
    };

}, []);
```

---

# Dependency Array

| Dependency | Runs When |
|------------|-----------|
| No Array | Every render |
| `[]` | Only once (on mount) |
| `[count]` | Whenever `count` changes |
| `[count, name]` | Whenever `count` or `name` changes |

---

# Rules of useEffect

- Use only inside React functional components.
- Always import it from React.
- Never call `useEffect()` inside loops, conditions, or nested functions.
- API calls are usually placed inside `useEffect()`.
- Cleanup functions help prevent memory leaks.

---

# Common Mistakes

## Wrong

```jsx
function login() {

    useEffect(() => {

    }, []);

}
```

❌ Hooks cannot be called inside another function.

---

## Correct

```jsx
function App() {

    useEffect(() => {

    }, []);

}
```

---

# Real-Time Uses

- Fetch API data
- Axios API calls
- Timers (`setInterval`, `setTimeout`)
- Event listeners
- Local Storage
- Authentication check
- Theme switching

---

# Interview Questions

## What is useEffect?

`useEffect` is a React Hook used to perform side effects such as API calls, timers, DOM manipulation, and event listeners in functional components.

---

## Why do we use useEffect?

To execute side effects after a component renders.

---

## Can we call useEffect inside a function?

No. Hooks must be called only at the top level of a React functional component or a custom hook.

---

## When does useEffect execute?

- After every render (without dependency array)
- Once after initial render (`[]`)
- Whenever specified dependencies change (`[dependency]`)

---

# Easy Memory Trick

- **No dependency array** → Every render 🔄
- **Empty dependency array (`[]`)** → Only once 🚀
- **With dependencies (`[count]`)** → When dependency changes 🔁

---

# Summary

- `useEffect()` is used for side effects.
- API calls are commonly written inside `useEffect()`.
- The dependency array controls when the effect runs.
- Cleanup functions prevent memory leaks.
- Never call Hooks inside loops, conditions, or nested functions.