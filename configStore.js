import { createStore, combineReducers } from "redux";
import { mentReducer } from "../Reducer/mentorsReducer";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            mentReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
}