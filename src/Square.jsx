import React, { useContext } from 'react';
import SquareContext from './SquareContext';
import "./Square.css"

function Square({ squareId }) {
  const { colorChanger } = useContext(SquareContext);

  return (
    <button className="square" id={squareId} onClick={() => colorChanger(squareId)}>
    </button>
  );
}

export default Square;
