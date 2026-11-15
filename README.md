# ReactNativeBoilerplate

A React Native starter with a counter example, built with Redux Toolkit and React Navigation.

## Stack
React Native 0.63.2 (React 16.13), Redux Toolkit, react-redux, React Navigation v5 (stack navigator) with gesture-handler, reanimated, screens and safe-area-context, Jest, ESLint.

## What the example shows
- A `Main` screen and a `Second Counter` screen navigating through a stack
- A shared counter in a Redux store (`source/store/reducers/counterReducer.js`)

## Structure
- `App.js`: Redux `Provider`, `NavigationContainer` and stack
- `source/component/`: screens and styles
- `source/store/`: store and reducers

## Run
```bash
npm install
npm run android   # or: npm run ios
npm start         # Metro bundler on port 8081
npm test          # Jest
npm run lint      # ESLint
```

## Status
Archived. Targets React Native 0.63 (2020), so dependencies need upgrading before it builds with current tooling.

## License
MIT