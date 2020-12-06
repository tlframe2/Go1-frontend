import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Displays preview of event. Clicking on title will redirect to detail page for event
 * @param {object} props - event properties
 */
const Events = props => {
  const history = useHistory();

  // Redirects user to detail page
  const showDetails = () => {
    history.push('/details', { ...props });
  }

  // Keeps it simple by just showing tiny image, title, and date
  return (
    <div className="event-container">
      <img src={props.image} className="event-img-small" />
      <ul>
        <li onClick={showDetails} className="title">{props.title}</li>
        <li className="date">{props.time}</li>
      </ul>
    </div>
  )
}

Events.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  eventLocation: PropTypes.object,
  seats: PropTypes.array
}

export default Events;