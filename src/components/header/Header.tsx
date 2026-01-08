import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">MyApp</div>

        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/add-user" className="nav-link">Users</a>
          <a href="#" className="nav-link">Profile</a>
        </nav>

        <button className="btn">Login</button>
      </div>
    </header>
  );
};