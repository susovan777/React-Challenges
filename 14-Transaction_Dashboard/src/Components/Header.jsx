import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="heading_text">
        <h3>Transaction Dashboard</h3>
      </div>

      <div className="control_bar">
        <input type="text" placeholder="Search transaction" />
        <select name="months" id="months">
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
