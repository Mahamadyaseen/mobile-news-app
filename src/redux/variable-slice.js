// newsActions.js
export const fetchNews = () => {
  return {
    type: "FETCH_NEWS",
  };
};

export const fetchNewsData = (data) => {
  console.log(data);
  return {
    type: "SET_NEWS",
    payload: { data },
  };
};
export const setNewsData = (data) => {
  console.log(data);
  return {
    type: "NEWS_DATA",
    payload: { data },
  };
};

const initialState = {
  news: [],
  newsData: {},
  isLoading: false,
};

// newsReducer.js
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return { ...state, isLoading: true };
    case "SET_NEWS":
      console.log(action);
      return { ...state, news: action.payload.data, isLoading: false };
    //   return {state.news = action.payload.data,
    // state.isLoading=false};
    case "NEWS_DATA":
      console.log(action);
      return { ...state, newsData: action.payload.data };

    default:
      return state;
  }
};

export default newsReducer;
