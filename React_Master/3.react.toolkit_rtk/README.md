# Redux

- Redux is an open-source javascript library for managing the state of an application in a predictable way. It is commonly used with libraries like React for building user interfaces but can be used with any javascript framework or library.
- Makes the state management easy.

# Toolkit

- The official, opinionated, batteries-included toolset for efficient Redux development.
- Makes the Redux easy to work with

# installation of redux toolkit

- npm install @reduxjs/toolkit
- npm install react-redux
- npm install @reduxjs/toolkit react-redux

# What is the Store?

- A store is a central place where the state of our application is stored and it can be created using the configureStore function, and it holds the entire state tree of our application.

# What is Slice?

- A slice is a piece of store state and the corresponding reducer logic to update that state. Slices are a way to organize our redux store by breaking it down init smaller, more manageable parts.

# Slice Analogy

- Imagine you have a big cake, and you want to cut it into smaller, more manageable pieces. Each smaller piece is like a "slice" of the cake. In the context redux toolkit a "slice" is like a smaller part of your application's overall state and the instructions on how to change or update that specific part.

# Reducer

- Reducers are like the instructions on what to do with each slice of the cake. The define how the information in a particular slice can be4 changed or updated.

# Actions

- Actions are like the requests or commands you give to change a specific slice of the cake. For example, you might have an action called "Eat a Bite" that instructs how to take a bite from a slice.

# useSelector() Hook

- useSelector hook allows us to read data from the redux store.

# useDispatch() Hook

- The dispatch function is used to send actions to the store, triggering upates to the application state. In simpler terms, it lets you change the state in your redux store from within your react comonents.
