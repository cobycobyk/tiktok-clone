import {useEffect, useState} from 'react';
import "./App.css";
import Video from "./components/Video/Video";
import * as videosAPI from './utilities/videos-api';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(function() {
    async function getVideos() {
      const video = await videosAPI.getVideos();
      setVideos(video)
    }
    getVideos();
  }, []);


  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) => (
            <Video 
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            /> 
          )
        )}
      </div>
    </div>
  );
}

export default App;
