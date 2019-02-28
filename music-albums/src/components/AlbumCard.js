import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard(props) {
  let isOnSale = props.albumInfo.on_sale === 1 ? true : false;
  let saleColor = "black";
  if (isOnSale) {
    saleColor = "green";
  }

  return (
    <div>
        <div className="one-album">
        <img className="img-fluid" src={`/img/${props.albumInfo.id}.jpg`}
               alt={`album-cover for ${props.albumInfo.album_name}`} 
               style = {{border: `4px solid ${saleColor}`}} />          
        <div>
            <div className="font-weight-bold">{props.albumInfo.artist}</div>
            <div>{props.albumInfo.album_name}</div>
            <div>{props.albumInfo.release_date}</div>
            <div className="font-italic">${props.albumInfo.price}</div>
        </div>
    </div>
    </div>
  )
}


AlbumCard.propTypes = {
  albumInfo: PropTypes.shape({
    on_sale: PropTypes.oneOf([0,1]).isRequired,
    id: PropTypes.number.isRequired,
    album_name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};