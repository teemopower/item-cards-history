import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// reducers
import { cardsReducer, imagesReducer } from "./reducer";

export const store = createStore(
  combineReducers({
    cards: cardsReducer,
    images: imagesReducer
  }),
  applyMiddleware(thunk)
);
