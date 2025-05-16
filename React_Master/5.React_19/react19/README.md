# React 19

# Compiler

- React 19 now includes its own compiler, which will not only speed up performance but also automate certain tedious tasks, reducing the workload for developers.

# Memorization

- With React 19's new compiler, there's no longer a need for memorization the process of optimizing components to prevent unnecessary re-renders. Previously, we relied on hook like 'useMemo()' and 'useCallback()' for this purpose, but these will now become obsolete.

# Metadata

- We no longer need to install third-party packages for SEO and metadata because React 19 now offers built-in support for these features. We can place the tags anywhere within the component and it will work for both client and server.

# Directives

- React 19 now includes built-in support for use client and use server directives.
- This allows components to be rendered on the server, resulting in improved SEO, faster page load times, and more straghtforward data fetching.

# We don't have to care about it:

1. ForwardRef()
2. React.lazy()
3. useContext()
4. memo()
5. useEfffect()
6. useCallback()

# USE HOOK

- The use() hook lets you read and load resources asynchronously, such as promises or context. Unlike other hooks, it can be utilized in loops and conditionals.
- In certain situations, it can serve as a replacement for useEffect() when fetching data, and it streamlines context usage by allowing you to use use(context) instead of useContext(context).

# Actions

- React 19 introduces actions, which are asynchronous functions designed to simplify form submissions. Actions can be utilized on both the client and server sides.

# useFormStatus

- useFormStatus is a hook that gives you status information of the last form submission.
  syntax: const {pending, data, method, action} = useFormStatus();

# useActionState

- useActionState is a hook that allows you to update state based on the result of a form action. syntax: const [state, formAction] = useActionState(fn, initialState)
