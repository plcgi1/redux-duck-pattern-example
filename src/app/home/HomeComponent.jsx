import React from 'react';
import RedditContainer from './RedditContainer';

function HomeComponent(props) {
  const {
    currentCount,
    onIncrementClick,
    onDecrementClick
  } = props
  return (
    <div>
      <p>current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <RedditContainer/>
    </div>
  )
}

export default HomeComponent;