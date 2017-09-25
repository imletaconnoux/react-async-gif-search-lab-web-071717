import React from 'react';

const GifItem = (props) => {
  return <iframe src={props.gif.embed_url} />
}

export default GifItem
