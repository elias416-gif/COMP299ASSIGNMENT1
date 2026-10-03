import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Portfolio</h1>

      <p>
        Hi, I'm Elias. I'm a Game Programming student at Centennial College.
      </p>

      <h2>My Mission</h2>

      <p>
        My goal is to continue improving my programming skills and create
        games and applications that people can enjoy.
      </p>

      <Link to="/about">
        <button>About Me</button>
      </Link>
    </div>
  );
}

export default Home;