import logo from './logo.svg';
import './App.css';

export interface Env {
	db: D1Database;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
		const images = require.context('./graphics', true);
        <img src={logo} className="App-logo" alt="logo" />
        const stmt = await env.db.prepare('SELECT * FROM mons').run()
		stmt.forEach(element => {
			console.log(`mon: ${`element`}`)
		});
      </header>
    </div>
  );
}

export default App();
