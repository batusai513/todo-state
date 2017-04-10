import React, { PropTypes } from 'react';

export default function Clock(props) {
    var time = props.time;
    return (
        <h1>{time}</h1>
    );
}

Clock.propTypes = {
  time: PropTypes.string.isRequired,
};