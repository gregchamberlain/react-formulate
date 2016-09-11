import React from 'react';
import Item from './item';

const Sidebar = ({ children }) => (
  <div className="fill">
    <div className="sidebar">
      <Item href="/">Getting Started</Item>
      <Item href="/input-types">InputTypes</Item>
      <Item href="/sandbox">Sandbox</Item>
    </div>
    <div className="sidebar-content">
      {children}
    </div>
  </div>
);

export default Sidebar;
