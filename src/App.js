import React from "react";
import "./App.css";
import characters from "./characters.json";
import Fuse from "fuse.js";

const fuse = new Fuse(characters, {
  keys: ["name", "company", "species"],
  includeScore: true,
});

const results = fuse.search("bender");
const characterResults = results.map((character) => character.item);

function App() {
  return (
    <>
      <header className="App-header">
        <div className="container">
          <h1>Futurama Characters</h1>
        </div>
      </header>

      <main className="container">
        <ul className="characters">
          {characterResults.map((character) => {
            const { name, company, species, thumb } = character;
            return (
              <li key={name} className="character">
                <span
                  className="character-thumb"
                  style={{
                    backgroundImage: `url(${thumb})`,
                  }}
                />
                <ul className="character-meta">
                  <li>
                    <strong>Name:</strong> {name}
                  </li>
                  <li>
                    <strong>Company:</strong> {company}
                  </li>
                  <li>
                    <strong>Species:</strong> {species}
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
        <aside>
          <form className="search">
            <label>Search</label>
            <input type="text" />
          </form>
        </aside>
      </main>

      <footer>
        <div className="container">
          <p>
            Images from <a href="http://www.cc.com/shows/futurama">Futurama</a>{" "}
            via <a href="https://futurama.fandom.com/">futurama.fandom.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
