import './App.css';
import Data from './data/data';
import Playlist from './components/playlist/index';

function App() {

  let images = Data.album.images[0].url;
  let titleSong = Data.album.name;
  let artist = Data.album.artists[0].name;
  let url = Data.album.external_urls.spotify;
  console.log(Data)

  return (
    <div className="Playlist">
      <Playlist
      images={images}
      titleSong={titleSong}
      artist={artist}
      url={url}
      />
    </div>
  );
}

export default App;
