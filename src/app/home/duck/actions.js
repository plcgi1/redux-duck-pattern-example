import types from './types.js';

const incrementCount = (value) => {
  return {
    type: types.INCREMENT_COUNT,
    value
  }
};

const decrementCount = (value) => {
  return {
    type: types.DECREMENT_COUNT,
    value
  }
};

const requestSubredditJson = (subreddit) => {
  return {
    type: types.REQUEST_SUBREDDIT_JSON,
    subreddit
  }
};
const receiveSubredditJson = (json) => {
  return {
    type: types.RECEIVE_SUBREDDIT_JSON,
    subredditData: json
  }
}

export default {
  incrementCount,
  decrementCount,
  requestSubredditJson,
  receiveSubredditJson
}
