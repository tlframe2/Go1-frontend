import React from 'react';
import { useHistory } from 'react-router-dom';

const Events = props => {
  const history = useHistory();

  const showDetails = () => {
    history.push('/details', { ...props });
  }

  return (
    <ul>
      <li onClick={showDetails}>{props.title}</li>
      <li>{props.time}</li>
    </ul>
  )
}

export default Events;