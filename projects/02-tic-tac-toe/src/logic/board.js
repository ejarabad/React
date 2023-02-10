import { WINNER_COMBOS } from "../constants";

//Separamos logica
export const checkWinnerFrom = (boardToCheck) => {
  //Revisamos todas las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
};

export  const checkEndGame = (newBoard) => {
    //Revisamos si hay un empate
    //Si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square != null)
  }