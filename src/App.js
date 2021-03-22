import Card from "./components/Card"
import './App.css';
import axios from "axios";
import { useEffect, useReducer } from "react";




const initialState = {
  cards: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: action.cards
      }
    default:
      return state;
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const { cards } = state

  useEffect(() => {
    axios.get('http://localhost:3000/response').then((response) => {
      dispatch({ type: "ADD_CARD", cards: response.data })
    })
  }, [])

  return (
    <div className="App">
      <div className="cardsContainer">
        {cards.map((c, index) => (<Card key={index} card={cards[index]} />))}
      </div>
    </div>
  );
}

export default App;
