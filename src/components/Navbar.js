// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Smart Security</h2>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>Logs</li>
        <li>Alerts</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "16px",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  },
};

export default Navbar;


