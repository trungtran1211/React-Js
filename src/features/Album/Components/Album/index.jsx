import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.array.isRequired,
};

function Album(props) {
    const {album} = props;
    return (
        <div className="album">
            <div>
                <img src={album.imageUrl}></img>
            </div>
            <p>
               {album.name}
            </p>
        </div>
    );
}

export default Album;