import React from 'react'
import PropTypes from 'prop-types'

const MediaPlayerHeader = ({ tracks }) => (
  <div className="MediaPlayerHeader">
    <img src={tracks[0] ? tracks[0].image : ''} alt="" />
  </div>
)

MediaPlayerHeader.propTypes = {
  tracks: PropTypes.array.isRequired,
}

export default MediaPlayerHeader
