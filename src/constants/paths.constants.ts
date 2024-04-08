const AUTH_PATH = '/auth';

export const paths = {
  home: () => '/',
  main: {
    app: () => '/app',
  },
  auth: {
    register: () => `${AUTH_PATH}/register`,
    login: () => `${AUTH_PATH}/login`,
  },
};
