/* eslint-disable react/prop-types */
export default function MainContent({
  dieElements,
  handleRollOrReset,
  isGameWon,
  hasGameStarted,
}) {
  return (
    <main>
      <h1>Tenzies</h1>
      <h2>
        {hasGameStarted
          ? `Game will auto reset after 99 seconds.`
          : `Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.`}
      </h2>
      <div className="dice-container">{dieElements}</div>
      <button className="roll-btn" onClick={handleRollOrReset}>
        {hasGameStarted ? (isGameWon ? "Play Again" : "Roll") : "Play Tenzies"}
      </button>
    </main>
  );
}
