import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const MediaPlayerList = ({ tracks }) => (
  <Fragment>
    <div className="MediaPlayer-options">
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-tabs">
            <a className="navbar-item is-tab is-active" href="#">
              My playlist
            </a>
            <a className="navbar-item is-tab" href="#">
              Romantic
            </a>
            <a className="navbar-item is-tab" href="#">
              Rock
            </a>
            <a className="navbar-item is-tab" href="#">
              Rap
            </a>
            <a className="navbar-item is-tab" href="#">
              EDM
            </a>
          </div>
        </div>
      </nav>
    </div>
    <ul className="MediaPlayer-tracklist">
      {tracks.map(track => (
        <li className="MediaPlayer-tracklist-item" key={track.id}>
          <div className="item-image">
            <img src="https://picsum.photos/50/50" alt="" />
          </div>
          <div className="item-details">
            <span className="item-title">{track.song}</span>
            <span className="item-meta">Deydreaming</span>
          </div>
          <span className="item-time">3:45</span>
        </li>
      ))}
    </ul>
  </Fragment>
)

MediaPlayerList.propTypes = {
  tracks: PropTypes.array.isRequired,
}

export default MediaPlayerList
