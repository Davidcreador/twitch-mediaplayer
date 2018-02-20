import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODO: Spotify api
class MediaPlayer extends Component {
  state = {
    tracks: [],
  }

  componentDidMount() {
    this.setState({
      tracks: [
        { song: 'test-song', format: 'mp3', id: 1, image: 'https://picsum.photos/600/600' },
        { song: 'test-song-2', format: 'mp3', id: 2, image: 'https://picsum.photos/600/600' },
        { song: 'test-song-3', format: 'mp3', id: 3, image: 'https://picsum.photos/600/600' },
      ],
    })
  }

  render() {
    return <div className="MediaPlayer">{this.props.render(this.state)}</div>
  }
}

MediaPlayer.propTypes = {
  render: PropTypes.func.isRequired,
}

export default MediaPlayer
