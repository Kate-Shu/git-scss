import React from 'react';
import '../Styles/Navbar.css';
// import '../Styles/generic.css';

export default function Bottom() {
  return (
    <div className="navbar">
      <a href="/home" className="nav">
        Home
      </a>

      <p>Paragraph 1</p>

      <div className="block">
        <div className="block__text block__big">
          Here is <span>span</span>
          <p>Paragraph 2</p>
        </div>
        <a href="/home" className="nav">
          Contact
        </a>
      </div>
      <p className="mixin">mixin is here</p>
      <h2>for git</h2>
    </div>
  );
}
