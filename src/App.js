import './App.css';
import LaunchComponent from './Components/Launches';
import logo from './assets/spacex-logo.png'
import image001 from './assets/img/launch-home.png';
import refresh_ico from './assets/icon/refresh.png';
function App() {

    function refreshPage(){
        window.location.reload(false);
    }
  return (
    <div className="App">
        <header className="App-header">
            <div>
                <span><img id="spacex_logo"src={logo} alt="spacex logo" /> LAUNCHES</span>
            </div>
            <div className="App-header-right-pane-refresh" onClick={refreshPage}>
                Reload Data <img id="refresh_ico" src={refresh_ico} alt="refresh icon"/>
            </div>
        
        </header>
        <div className="App-body">
            <div>
                <img id="spacex_image" src={image001} alt="spacex"/>
            </div>
            <div className="App-body-right-pane">
                <LaunchComponent />
            </div>
        </div>
    </div>
  );
}

export default App;
