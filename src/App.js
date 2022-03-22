import logo from './logo.svg';
import './App.css';
import Data from './data/data';

function App() {

  let images = Data.album.images[0].url;
  let titleSong = Data.album.name;
  let artist = Data.album.artists[0].name;
  let url = Data.album.external_urls.spotify;
  console.log(Data)

  return (
    <div className="Playlist">
      <div className='Image'>
      <img src={images}/>
      </div>
      <div className='Playlist-info'>
        <h4>Album</h4>
        <p className='title-song'>{titleSong}</p>
        <p className='artist'>{artist}</p>
        <a href={url} target='_blank'><button className='btn-select'>Select</button></a> 
      </div>
    </div>
  );
}

export default App;
