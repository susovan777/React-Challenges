import React, { useState } from "react";

const Header = () => {
  const [month, setMonth] = useState("mar");

  return (
    <div className="header">
      <div className="heading_text">
        <h3>Transaction Dashboard</h3>
      </div>

      <div className="control_bar">
        <input type="text" placeholder="Search transaction" />
        <select
          name="months"
          id="months"
          value={month}
          onChange={(e) => setMonth(e.target.value)}>
          <option value="jan">Jan</option>
          <option value="feb">Feb</option>
          <option value="mar">Mar</option>
          <option value="apr">Apr</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
