import React from 'react'
import AlbumCard from './AlbumCard';
import PropTypes from 'prop-types'


export default function AlbumCardList(props) {

  const allAlbumCards = props.albumCards.map(albumCard => {
    return <AlbumCard key={albumCard.id} albumInfo={albumCard} />;
  });

  return (
    <div>
    <div className="container-fluid">
      <div className="row">
        {allAlbumCards}
      </div>
    </div>
    </div>
  )
}

AlbumCardList.propTypes = {
  albumCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};