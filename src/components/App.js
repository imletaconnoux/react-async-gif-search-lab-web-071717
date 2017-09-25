import React from 'react'

import NavBar from './NavBar'
import GiflistContainer from './GiflistContainer'
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GiflistContainer />
    </div>
  )
}

export default App
