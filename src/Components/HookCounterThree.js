import React, { useState } from "react";

function HookCounterThree() {
  const [name, setname] = useState({ FirstName: "", LastName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.FirstName}
        onChange={(e) => setname({ ...name, FirstName: e.target.value })}
      />
      <input
        type="text"
        value={name.LastName}
        onChange={(e) => setname({ ...name, LastName: e.target.value })}
      />
      <button
        type="submit"
        onClick={() => {
          console.log("sagar", name);
        }}
      >
        Submit
      </button>
      <h2>Your FirstName Is :-{name.FirstName} </h2>
      <h2>Your LastName Is :-{name.LastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterThree;
