import { paths } from './paths.contants';

export const publicRoutes = ['/'];

export const authRoutes = [paths.auth.register(), paths.auth.login()];
export const defaultLoggedInRedirectRoute = paths.home();
