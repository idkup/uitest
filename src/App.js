import logo from './logo.svg';
import './App.css';

export interface Env {
	db: D1Database;
}

function importAll(r) {
  return r.keys().map(r);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
		const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
        <img src={logo} className="App-logo" alt="logo" />
        const stmt = await env.db.prepare('SELECT * FROM mons').run()
		for (let i in stmt) {
			console.log(`${i}`)
		}
      </header>
    </div>
  );
}

export default App();
