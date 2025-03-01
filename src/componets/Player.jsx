import { useState } from "react";

export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editplayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  let btnCaption = "Save";

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="players">
        {editplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
