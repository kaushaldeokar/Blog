import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="/" className="">
          My Blog
        </a>
        <nav>
          <a href="/">Login </a>
          <a href="/">Register</a>
        </nav>
      </header>

      <div className="entries">
        <div className="image">
          <img
            src="https://cdn.britannica.com/51/182851-050-97EA5117/Publicity-image-Iron-Man-War-Machine-2.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <h2>Title</h2>
          <p>description</p>
        </div>
        <div className="image">
          <img
            src="https://cdn.britannica.com/51/182851-050-97EA5117/Publicity-image-Iron-Man-War-Machine-2.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <h2>Title</h2>
          <p>description</p>
        </div>
      </div>
    </main>
  );
}

export default App;
