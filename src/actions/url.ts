export const DOMAIN =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_ENDPOINT_DEV
    : process.env.REACT_APP_API_ENDPOINT_PROD;

// URLs
export const loginURL = `${DOMAIN}/user/login`;
export const getPostsURL = `${DOMAIN}/posts`;
