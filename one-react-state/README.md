# @one-react-state

> **Powerful, Simple, and Scalable State Management for React**

Welcome to `@one-react-state`! This package empowers React developers with an intuitive, minimal, and high-performance state management solution. Whether you’re building your first React app or architecting massive frontends, `@one-react-state` has you covered.

---

## 🚀 Features

- **Zero Setup:** Start managing state instantly—no boilerplate or configuration.
- **Hooks First:** Built with modern React hooks for concise, easy-to-read code.
- **TypeScript Ready:** Full type safety out-of-the-box for seamless development.
- **Tiny & Fast:** Blazing fast performance with a lightweight bundle size.
- **Global & Local State:** Handle complex app-wide or component state with the same simple API.
- **Devtools Friendly:** Out-of-the-box support for Redux DevTools for advanced debugging.
- **SSR Compatible:** Works with Next.js and SSR frameworks.

---

## 📦 Installation

```bash
npm install @one-react-state
# or
yarn add @one-react-state
```

---

## ⚡️ Quick Start

```jsx
import React from 'react';
import { useOneState } from '@one-react-state';

function Counter() {
  // Create or access a shared state atom
  const [count, setCount] = useOneState('count', 0);

  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}
```

---

## 💡 Why One React State?

- **For beginners:** There’s no easier way to understand state than with an API designed to explain itself.
- **For experts:** Scale to any complexity—supporting selectors, computed state, middleware, and fine-tuned performance needs.
- **For teams:** Consistent, predictable, and testable state logic fosters collaborative development.

---

## 📚 API Reference

### `useOneState(key, initialValue)`

- `key` _(string)_: Unique identifier for your state atom.
- `initialValue` _(any)_: Initial value (used once, on first mount).

Returns a tuple:
- `state` _(any)_: Current value.
- `setState` _(function)_: Updates value.

---

## 🧩 Advanced Usage

<details>
<summary>Selectors</summary>

```jsx
const userFullName = useOneSelector('user', user => `${user.first} ${user.last}`);
```
</details>

<details>
<summary>Persistence</summary>

```jsx
import { persist } from '@one-react-state/middleware';
// Add the persist middleware to sync with localStorage/sessionStorage
```
</details>

---

## 🛠️ Examples

- [Counter Example](./examples/Counter.js)
- [Todo List Example](./examples/TodoList.js)
- [More in `/examples`](./examples)

---

## 🤝 Contributing

Contributions are welcome! Please check out [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © [BesuHosiso](https://github.com/BesuHosiso)

---

_If you enjoy using `@one-react-state`, consider starring ⭐ the project and sharing your feedback. Every contribution strengthens the community!_
