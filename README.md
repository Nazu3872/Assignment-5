# DevStack

A modern React and TypeScript web application for exploring developer products/tools and managing selected items in a personal stack.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Icons

## Features

1. **Browse Products** – Users can view different developer products/tools with their name, category, rating, and description.
2. **Add to Stack** – Users can add their favorite products to their personal stack.
3. **Manage Stack** – Users can view selected products and remove items from their stack when needed.

---
# demo link : https://nazu3872.github.io/Assignment-5/

# repo: 

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us describe how the UI should look.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component. When state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state in a component.

I used `useState` to manage the selected products in the stack. When a product is added or removed, the state is updated and the UI changes.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used `useEffect` to load the product data from the JSON file when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to understand which items have changed, been added, or been removed and update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty, I show an empty stack message. When products are added, I show the selected products instead.

```tsx
{selectedProducts.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedProducts.map((product) => (
    <Product key={product.id} product={product} />
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child through **props**.

If the child needs to send something back to the parent, the parent can pass a **function as a prop**. The child calls that function with the required data.

For example:

```tsx
<Product
  product={product}
  handleAddToStack={handleAddToStack}
/>
```

Here, `product` and `handleAddToStack` are passed from the parent to the child through props.

