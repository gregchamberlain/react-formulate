import React from 'react';
import Item from './item';

const Sidebar = ({ children }) => (
  <div className="fill">
    <div className="sidebar">
      <Item href="/">Getting Started</Item>
      <Item href="/InpuTypes">InputTypes</Item>
    </div>
    <div className="sidebar-content">
      {children}
    </div>
  </div>
);

export default Sidebar;
