// // store.js
// import createSagaMiddleware from "redux-saga";
// import newsReducer from "./variable-slice";
// import watchNews from "./saga";
// import {
//   applyMiddleware,
//   combineReducers,
//   createStore,
// } from "@reduxjs/toolkit";
// const sagaMiddleware = createSagaMiddleware();
// const rootReducer = combineReducers({
//   news: newsReducer,
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(watchNews);

// export default store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );
