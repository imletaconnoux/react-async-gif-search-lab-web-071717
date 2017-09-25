import React from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

class GifListContainer extends React.Component{

  constructor(){
    super();

    this.state = {
      gifs: []
    }

    this.getGifs = this.getGifs.bind(this)
  }

  getGifs(searchTerm){
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(resp => resp.json())
      .then(allGifs => {
        this.setState({
          gifs: allGifs.data.slice(0,3)
        })
      })

  }

  render(){
    return(
      <div>
        <GifSearch searchApi={this.getGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}

export default GifListContainer;
