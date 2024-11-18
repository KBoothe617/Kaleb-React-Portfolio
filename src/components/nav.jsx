import { NavLink } from 'react-router-dom';
import Navbar from './navbar';

/// Navbar function component
export default function Nav() {
  return (
    <Navbar
        links={[
            <NavLink
            key={1}
            className="nav-link"
            to="/"
            style={({ isActive }) =>({
                color: isActive ? 'var(--color-tertiary)' : 'var(--background-color)',
            })}
            >
            About Me
            </NavLink>,
        ]}
    />

  );
}