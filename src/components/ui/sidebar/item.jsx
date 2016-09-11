import React from 'react';
import { Link, IndexLink } from 'react-router';

const Sidebar = ({ href, children }) => (
  <IndexLink
    to={href}
    className="sidebar-item"
    activeClassName="active">
    {children}
  </IndexLink>
);

export default Sidebar;
