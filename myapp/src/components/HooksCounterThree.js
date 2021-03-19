import React, { useState } from "react";

// Using object as the useState variable
function HooksCounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''});
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      {name.firstName}  
      {name.lastName}
    </div>
  );
}

export default HooksCounterThree;
