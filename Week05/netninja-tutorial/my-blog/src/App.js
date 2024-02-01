import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // Cannot display objects and booleans
  const link = "https://github.com/burkocyigit";

  return (
    <div className="App">
      <div className="content">
        <h1> {title} </h1>
        <p>Liked {likes} times</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>My GitHub</a>
      </div>
    </div>
  );
}

export default App;
