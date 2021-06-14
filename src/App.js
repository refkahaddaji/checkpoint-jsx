import imageInSrc from './imageInSrc.jpg';

import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black", maxWidth:"100vw" }}>

        <h1 class="title red">Refka Haddaji</h1>

        <br />
        <img src={imageInSrc} width="520" height="300"  />

        <br />

        <img src="/imageInPublic.jpg" width="520" height="300" />
    
        </div>
        <iframe width="520" height="300"  
        src={'https://www.youtube.com/embed/XewKPAClkSw'} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

        </iframe>

        

      </header>
    </div>
  );
}


export default App;
