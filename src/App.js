import './App.css';
import LaunchComponent from './Components/Launches';

function App() {

    function refreshPage(){
        window.location.reload(false);
    }
  return (
    <div className="App">
        Space X App
        <header className="App-header">
            <div>
                left image
            </div>
            <div class="App-header-right-pane-refresh" onClick={refreshPage}>
                Reload Data
            </div>
        
        </header>
        <div className="App-body">
            <div>
                image left
            </div>
            <div class="App-body-right-pane">
                <LaunchComponent />
            </div>
        </div>
    </div>
  );
}

export default App;
