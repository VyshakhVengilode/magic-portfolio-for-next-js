import React, { useState, useMemo } from "react";

const WORDS = [
  { word: "CATS", clue: "Meowing pets" },
  { word: "DOGS", clue: "Barking animals" },
  { word: "BIRD", clue: "Can fly and chirp" },
  { word: "FISH", clue: "Lives in water" },
  { word: "GOAT", clue: "A horned farm animal" },
  { word: "LION", clue: "King of the jungle" },
  { word: "WOLF", clue: "Howling wild canine" },
  { word: "BEAR", clue: "Large, furry, and strong animal" },
];

function generateCrossword() {
  const shuffled = [...WORDS].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4);

  const grid = Array(4)
    .fill(null)
    .map(() => Array(4).fill(null));
  const across = [];
  const down = [];

  selected.forEach((item, idx) => {
    for (let j = 0; j < 4; j++) {
      grid[idx][j] = item.word[j];
    }
    across.push({
      num: idx + 1,
      clue: item.clue,
      row: idx,
      col: 0,
      answer: item.word,
    });
    for (let j = 0; j < 4; j++) {
      grid[j][idx] = selected[j].word[idx];
    }
    down.push({
      num: idx + 1,
      clue: selected[idx].clue,
      row: 0,
      col: idx,
      answer:
        selected[0].word[idx] +
        selected[1].word[idx] +
        selected[2].word[idx] +
        selected[3].word[idx],
    });
  });

  return { grid, across, down };
}

function getCellKey(row, col) {
  return `${row}-${col}`;
}

const CrosswordPuzzle = () => {
  const { grid, across, down } = useMemo(() => generateCrossword(), []);
  const [inputs, setInputs] = useState({});

  function renderCell(row, col) {
    const cellValue = grid[row][col];
    if (cellValue == null) {
      return <td key={getCellKey(row, col)} className="bg-gray-200 w-8 h-8"></td>;
    }
    return (
      <td key={getCellKey(row, col)}>
        <input
          type="text"
          maxLength={1}
          value={inputs[getCellKey(row, col)] || ""}
          onChange={(e) => {
            const val = e.target.value.toUpperCase().slice(0, 1);
            setInputs((prev) => ({ ...prev, [getCellKey(row, col)]: val }));
          }}
          style={{
            width: "2em",
            height: "2em",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "1.2em",
          }}
        />
      </td>
    );
  }

  function checkAnswers() {
    let correct = true;
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (grid[row][col] !== null) {
          if ((inputs[getCellKey(row, col)] || "").toUpperCase() !== grid[row][col]) {
            correct = false;
          }
        }
      }
    }
    return correct;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Dynamic 4x4 Crossword</h2>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {[0, 1, 2, 3].map((row) => (
            <tr key={row}>
              {[0, 1, 2, 3].map((col) => renderCell(row, col))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <div>
          <strong>Across</strong>
          <ul>
            {across.map((clue) => (
              <li key={`across-${clue.num}`}>
                <strong>{clue.num}.</strong> {clue.clue}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Down</strong>
          <ul>
            {down.map((clue) => (
              <li key={`down-${clue.num}`}>
                <strong>{clue.num}.</strong> {clue.clue}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="mt-3 p-2 bg-blue-500 text-white rounded"
        onClick={() => alert(checkAnswers() ? "Correct! Well done!" : "Try again!")}
      >
        Check Answers
      </button>
    </div>
  );
};

export default CrosswordPuzzle;