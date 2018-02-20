import React, { Fragment } from 'react'
import './App.css'
import { MediaPlayer, MediaPlayerHeader, MediaPlayerList, MediaPlayerControls } from '../Components'

const App = () => (
  <div className="MediaPlayer-App">
    <MediaPlayer
      render={state => (
        <Fragment>
          <MediaPlayerHeader {...state} />
          <MediaPlayerList {...state} />
          <MediaPlayerControls />
        </Fragment>
      )}
    />
  </div>
)

export default App
