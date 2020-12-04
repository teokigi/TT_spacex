import './App.css';
import LaunchComponent from './Components/Launches';
import logo from './assets/spacex-logo.png'

function App() {

    function refreshPage(){
        window.location.reload(false);
    }
  return (
    <div className="App">
        Space X App
        <header className="App-header">
            <div>
                <img id="spacex_logo"src={logo} />
            </div>
            <div className="App-header-right-pane-refresh" onClick={refreshPage}>
                Reload Data
            </div>
        
        </header>
        <div className="App-body">
            <div>
                image left
            </div>
            <div className="App-body-right-pane">
                <LaunchComponent />
            </div>
        </div>
    </div>
  );
}

export default App;
