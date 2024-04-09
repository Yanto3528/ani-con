const AUTH_PATH = '/auth';
const POSTS_PATH = '/posts';

export const paths = {
  home: () => '/',
  main: {
    app: () => '/app',
    messages: () => '/messages',
    posts: {
      create: () => `${POSTS_PATH}/create`,
    },
  },
  auth: {
    register: () => `${AUTH_PATH}/register`,
    login: () => `${AUTH_PATH}/login`,
  },
};
