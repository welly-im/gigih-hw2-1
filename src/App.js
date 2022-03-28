import './App.css';
import Data from './data/new-data';
import Playlist from './components/playlist/index';
import RecomMusic from './components/recomended/index';

function App() {

  const DataMusic = 
  Data.map((item) => 
  <Playlist key={item.id} 
  name={item.album.name} 
  artist={item.album.artists[0].name} 
  url={item.album.external_urls.spotify} 
  images={item.album.images[0].url} />)

  const Recommended = 
  Data.filter((item) => item.album.artists[0].name !== 'Queen').map((item) => 
  <RecomMusic key={item.id} 
  name={item.album.name} 
  artist={item.album.artists[0].name} 
  url={item.album.external_urls.spotify} 
  images={item.album.images[0].url} />)


  return (
    <div className="Playlist">
       <h1>Made For You</h1>
      <div className='recommended-music'>
        {Recommended}
      </div>
      <h1>History</h1>
      <div className='history-music'>
        {DataMusic}
      </div>
    </div>
  );
}

export default App;
