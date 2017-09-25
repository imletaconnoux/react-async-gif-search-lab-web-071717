import React from 'react';
import GifItem from './GifItem'

const GifList = (props) => {

  let allGifs = "Search for gifs!"
  if (props.gifs.length > 0 ) {

     allGifs = props.gifs.map((gif, index) =>
      <GifItem key={index} gif={gif}/>
    )
    
  }


  return(
    <div>
      {allGifs}
    </div>
  )

}

export default GifList
