# React Meals App 🍽️

A simple **React Food Ordering Application** that allows users to browse meals, add them to a cart, and place orders. The app uses **React Context**, **useReducer**, and **React Portals** for modal rendering. Bootstrap and custom CSS are used for styling.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Components](#components)
6. [Cart Context](#cart-context)
7. [Data Flow](#data-flow)
8. [Styling](#styling)
9. [Installation & Usage](#installation--usage)
10. [Screenshots](#screenshots)
11. [Author](#author)

## Project Overview

React Meals App allows users to:

- Browse a list of available meals.
- Select quantity and add meals to a shopping cart.
- View cart items in a modal window.
- Delete items from the cart.
- Place an order (shows order summary and clears the cart).

The app demonstrates **state management with React Context and Reducer**, **dynamic calculations**, and **component-based architecture**.

## Features

- Responsive header with navigation.
- Meals listing with name, description, and price.
- Quantity selection (1–5) and Add to Cart functionality.
- Cart modal with individual items, total price, and delete button.
- Order summary alert with total amount.
- Modal uses **React Portals** for rendering outside main DOM.
- Footer with navigation links.

## Technologies Used

- **React 18**
- **React Context & useReducer**
- **React Portals** (for modal)
- **Bootstrap 5**
- **Custom CSS modules**
- **JavaScript ES6+**

---

## Folder Structure

src/
├─ components/
│ ├─ Layout/
│ │ ├─ Header.jsx
│ │ └─ Footer.jsx
│ ├─ Meals/
│ │ ├─ AvailableMeals.jsx
│ │ ├─ MealsHeading.jsx
│ │ ├─ MealsList.jsx
│ │ ├─ MealsItemForm.jsx
│ │ └─ MealsSummary.jsx
│ ├─ Cart/
│ │ ├─ Cart.jsx
│ │ ├─ CartDisplay.jsx
│ │ └─ CartItem.jsx
│ └─ UI/
│ ├─ Input.jsx
│ ├─ Container.jsx
│ └─ Modals.jsx
├─ store/
│ └─ cart-context.jsx
├─ App.jsx
├─ index.jsx
└─ App.css

## Components

### 1. **App.jsx**

- Root component.
- Manages `modalOpen` state.
- Renders `Header`, `AvailableMeals`, `MealsSummary`, `CartDisplay`, and `Footer`.
- Adds/removes `modal-open` class to `<body>` when modal is open to prevent scrolling.

### 2. **Header.jsx**

- Displays app name and navigation links.
- Contains **Cart Button** which toggles cart modal.

### 3. **AvailableMeals.jsx**

- Maps **DUMMY_MEALS** array to `MealsList` components.
- Displays meals in a styled container.

### 4. **MealsList.jsx**

- Displays **individual meal info**: name, description, price.
- Contains `MealsItemForm` to select quantity and add to cart.

### 5. **MealsItemForm.jsx**

- Input field for quantity (1–5) using **`useRef`**.
- Calls `addToCart` from `CartListContext` on form submit.

### 6. **CartDisplay.jsx**

- Wraps `Cart` inside a **modal**.
- Uses `Modals` component with React Portals.

### 7. **Cart.jsx**

- Maps cart items using `CartItem`.
- Calculates total price.
- Handles **Order** button and clears cart.

### 8. **CartItem.jsx**

- Shows individual item name, amount, price.
- Delete button removes item using `deleteFromCart` from context.

### 9. **Modals.jsx**

- Uses **React Portals** to render `Backdrop` and `ModalOverlay`.
- Click on backdrop closes modal.

### 10. **Footer.jsx**

- Static footer with navigation links and copyright.

## Cart Context (`cart-context.jsx`)

- Provides global state for cart.
- Uses **useReducer** for managing state transitions.

**Reducer Actions:**

- `ADD_CART`: Adds new item or increases amount if already exists.
- `DELETE_CART`: Removes an item.
- `ORDER_CART`: Clears cart after order.

**Functions exposed:**

- `addToCart(item)`
- `deleteFromCart(id)`
- `orderCart()`

## Data Flow

1. **User selects quantity → adds item → `MealsItemForm` triggers `addToCart`**.
2. **Cart context updates `cartList`** via reducer.
3. **Header Cart button toggles modal → `CartDisplay` renders cart items**.
4. **Cart items rendered using `CartItem`**.
5. **Delete button triggers `deleteFromCart`** → item removed.
6. **Order button triggers `orderCart` → clears cart and closes modal**.

## Styling

- CSS modules for scoped styles.
- `CartItem`, `Button`, `Badge`, `Container` all use modular CSS.
- `.bg-image` for background image in App.
- `.modal` and `.backdrop` styled for modal effect.

Screenshots
<img width="1834" height="712" alt="image" src="https://github.com/user-attachments/assets/b7cbe56f-7d85-4c7b-bcd7-3c00d3e09bb4" />
<img width="1809" height="724" alt="image" src="https://github.com/user-attachments/assets/6ff7f0a1-16b4-44ef-ad83-24b4096e8061" />
<img width="1384" height="687" alt="image" src="https://github.com/user-attachments/assets/393816af-30b7-4341-a5eb-1ed2d4e6be44" />

Author:
Priyanhsu Singh
Frontend Developer | React Enthusiast
