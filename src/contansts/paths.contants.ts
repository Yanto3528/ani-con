const AUTH_PATH = '/auth';

export const paths = {
  home: () => '/',
  auth: {
    register: () => `${AUTH_PATH}/register`,
    login: () => `${AUTH_PATH}/login`,
  },
};
