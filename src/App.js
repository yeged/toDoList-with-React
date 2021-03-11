import './App.css';
import Main from "./components/Main";
import { Provider } from "react-redux"
import { combineReducers, createStore, applyMiddleware } from "redux"
import listReducer from "./store/reducer/list"
import thunk from "redux-thunk"


function App() {

  const rootReducer = combineReducers({
      list: listReducer
  })

  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
