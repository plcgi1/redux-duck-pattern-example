import React from 'react';
import shortid from 'shortid';

function RedditComponent(props) {
  const { subredditData, showRedditSpinner, fetchSubredditJson } = props
  
  if(showRedditSpinner) { return <p>Loading...</p> }
  
  return (
    <ul>
      {subredditData.map((data, index) => (
        <li key={shortid.generate()}>
          <a href={`https://reddit.com${data.url}`} target="_blank">{data.title}</a>
        </li>
      ))}
      <button onClick={() => fetchSubredditJson('reactjs')}>Show ReactJS subreddits</button>
    </ul>
  )
}

export default RedditComponent;