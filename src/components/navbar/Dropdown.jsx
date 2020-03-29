import React, { useState } from "react";
import "../navbar/dropdown.css";

export default function Dropdown() {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="wrapper">
      <div className="custom-dropdown">
        <ul className="dropdown-ul">
          <li
            className="dropdown-list-handle"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            My Settings
          </li>
          {openDropdown ? (
            <>
              <li className="dropdown-list">
                <a href="#">Create Page</a>
              </li>
              <li className="dropdown-list">
                <a href="#">Manage Page</a>
              </li>
              <li className="dropdown-list">
                <a href="#">Create Ads</a>
              </li>
              <li className="dropdown-list">
                <a href="#">Manage Ads</a>
              </li>
              <li className="dropdown-list">
                <a href="#">Activity Log</a>
              </li>
              <li className="dropdown-list">
                <a href="#">View Customers</a>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
