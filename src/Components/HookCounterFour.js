import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map((items) => (
          <p key={items.id}>{items.value}</p>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
