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
        <div className="App-body">
            <div>
                image left
            </div>
            <div id="App-body-list">
                component right
                <LaunchComponent />
            </div>
        </div>
    </div>
  );
}

export default App;
