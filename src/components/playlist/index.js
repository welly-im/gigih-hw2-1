import { useState } from 'react';

import './index.css';

function Playlist({name, artist, url, images}) {

    //create a button select when click change to deselect
    const [selected, setSelected] = useState(false);

    //create a button select when click change to deselect
    const handleClick = () => {
        setSelected(!selected);
    }

    return(
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
                            <a href={url} target="_blank" rel='noreferrer'><button className='btn-select' onClick={handleClick}>{selected ? 'Deselect' : 'Select'}</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default Playlist;
