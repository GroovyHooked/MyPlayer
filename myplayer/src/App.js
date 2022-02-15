
import "./App.css";

const App = () => {

  const playVid = () => {
    const myVid = document.querySelector('.videoParent');
    const myButton = document.querySelector('.playIcon');
    if(myButton.src === 'http://localhost:3000/assets/img/play1.png'){
      myVid.play()
      myButton.setAttribute('style', 'background-color: transparent;')
      myButton.src = '../../assets/img/pause1.png';
    
    } else {
      myVid.pause();
      myButton.src = '../../assets/img/play1.png';
    }  
  }

  const data = [
    {
      video: "../../assets/video/BigBuckBunny.mp4",
      play: "../../assets/img/play1.png",
      pause: "../../assets/img/pause1.png",
    },
  ];

  const renderData = () => {
    return data.map((d) => (
      <div className="container">
        <div className="player">
          <video className="videoParent">
            <source className="videomp4" src={d.video} type="video/mp4" />
          </video>
          <img className="playIcon" src={d.play} onClick={playVid}/>
        </div>
      </div>
      
    ));
  };

  return <>{renderData()}</>;
};

export default App;
