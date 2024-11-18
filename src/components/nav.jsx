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
            to="/aboutMe"
            style={({ isActive }) =>({
                color: isActive ? 'var(--color-tertiary)' : 'var(--background-color)',
            })}
            >
            About Me
            </NavLink>,

            <NavLink
            key={2}
            className="nav-link"
            to="/protfolio"
            style={({ isActive }) =>({
                color: isActive ? 'var(--color-tertiary)' : 'var(--background-color)',
            })}
            >
            Protfolio
            </NavLink>,

            <NavLink
            key={3}
            className="nav-link"
            to="/contact"
            style={({ isActive }) =>({
                color: isActive ? 'var(--color-tertiary)' : 'var(--background-color)',
            })}
            >
            Contact
            </NavLink>,

            <NavLink
            key={4}
            className="nav-link"
            to="/resume"
            style={({ isActive }) =>({
                color: isActive ? 'var(--color-tertiary)' : 'var(--background-color)',
            })}
            >
            Resume
            </NavLink>,
        ]}
    />

  );
}