//create react functional component

import './index.css';

function Playlist({name, artist, url, images}) {

    return(
        
        //create a table with 3 columns
        <div className='Playlist-component'>
            <table className="list-music">
                <tbody>
                    <tr>
                        <td className='Image'>
                            <img src={images} alt={name} />
                        </td>
                        <td className='Playlist-info'>
                            <p className='title-song'>{name}</p>
                            <p  className='artist'>{artist}</p>
                            <a href={url} target="_blank"><button className='btn-select'>Select</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        
            {/* <div className='Image'>
                <img src={images} />
            </div>
            <div className='Playlist-info'>
                <h4>Album</h4>
                <p className='title-song'>{name}</p>
                <p className='artist'>{artist}</p>
                <a href={url} target='_blank'><button className='btn-select'>Select</button></a>
            </div> */}
        </div>
        
    );
}

export default Playlist;
