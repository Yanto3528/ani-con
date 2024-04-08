import { paths } from './paths.constants';

export const publicRoutes = ['/'];

export const authRoutes = [paths.auth.register(), paths.auth.login()];
export const defaultLoggedInRedirectRoute = paths.main.app();
