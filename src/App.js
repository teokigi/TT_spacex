import './App.css';
import LaunchComponent from './Components/Launches';

function App() {
  return (
    <div className="App">
        Space X App
      <header className="App-header">
        <div>
            left image
        </div>
        <div>
            right button
        </div>
        
      </header>
      <body className="App-body">
        <div>
            image left
        </div>
        <div>
            component right
            <LaunchComponent />
        </div>
      </body>
    </div>
  );
}

export default App;
