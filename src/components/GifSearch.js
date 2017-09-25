import React from 'react';

class GifSearch extends React.Component{

  constructor(){
    super();

    this.state = {
      searchTerm: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event){
    this.setState({
      searchTerm: event.target.value
    })

  }

  handleSubmit(event){
    event.preventDefault()

    if (this.state.searchTerm !== ""){
      this.props.searchApi(this.state.searchTerm)
    }


  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleInputChange} value={this.state.searchTerm}/>
      </form>
    )
  }


}

export default GifSearch;
