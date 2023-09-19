import React, { useReducer } from "react";
import "./Card.css";

const initialState = {
  isBlack: false,
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COLOR":
      console.log("Toggling color");
      return {
        ...state,
        isBlack: !state.isBlack,
      };
    default:
      return state;
  }
};

export const Card = () => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const cardColor = state.isBlack ? "black" : "white";
  const toggleColor = () => dispatch({ type: "TOGGLE_COLOR" });

  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: cardColor,
          width: "200px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
      <div class="form-check form-switch custom-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggleColor}
        />
      </div>
    </>
  );
};
