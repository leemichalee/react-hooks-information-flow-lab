import React, { useState } from "react";

function Header({isDarkMode, diffDarkModeClick}){
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={diffDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;