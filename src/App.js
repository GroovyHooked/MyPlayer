import { useState } from "react";
import "./App.css";

const App = () => {
  const [path, setPath] = useState("../../assets/img/play1.png");

  const playVid = () => {
    const myVid = document.querySelector(".video");

    if (path === "../../assets/img/play1.png") {
      myVid.play();
      setPath("../../assets/img/pause1.png");
    } else {
      myVid.pause();
      setPath("../../assets/img/play1.png");
    }
  };

  return (
    <div className="container">
      <img className="playIcon" src={path} onClick={playVid} />
      <div className="player">
        <video className="video">
          <source
            className="videomp4"
            src="../../assets/video/sample-mp4-file.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default App;
