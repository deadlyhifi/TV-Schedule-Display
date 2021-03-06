import * as React from 'react'
import PropTypes from 'prop-types'

export class TimeSlot extends React.Component {
  render () {
    const cssClass = 'schedule--row' + (this.props.style ? ' ' + this.props.style : '')
    return (
      <div className={cssClass}>
        <div className='track track1'>{this.props.track1}</div>
        <div className='time'>{this.props.time}</div>
        <div className='track track2'>{this.props.track2}</div>
      </div>
    )
  }
}

TimeSlot.propTypes = {
  time: PropTypes.string.isRequired,
  track1: PropTypes.string.isRequired,
  track2: PropTypes.string.isRequired,
  style: PropTypes.string
}
