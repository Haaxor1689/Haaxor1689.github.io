import { RouteProps } from 'react-router-dom';

import LazyRoute from './LazyRoute';

type RouteItem = Required<Pick<RouteProps, 'path' | 'render'>>;

export const Routes = {
	Home: '/',
	Accommodations: '/accommodations',
	Detail: (id: string) => `/accommodations/${id}`,
};

const routes: RouteItem[] = [
	{
		path: Routes.Home,
		render: LazyRoute(() => import('../Pages/Home')),
	},
];
export default routes;
