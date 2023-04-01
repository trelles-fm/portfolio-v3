import '../styles/global.scss';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="App">
      <nav>
        <Logo />
      </nav>
      <header>
        <div>
          <h1 className="main-header">
            TRANSFORMING
            <br />
            <span>
              CREATIVE <span>IDEAS</span>
              <br />
              INTO CODE.
            </span>
          </h1>
          <p className="sub-header">Franco Trelles, full-stack software engineer based in New York</p>
        </div>
      </header>
      <main>
        <p>
          Hello! 👋, I am a graphic designer turned full-stack engineer, enthusiastic about building solutions, tackling
          challenges, and writing clean, efficient code. My design experience gives me a boost in creating user-friendly
          and visually appealing software.
        </p>
      </main>
    </div>
  );
}

export default App;
