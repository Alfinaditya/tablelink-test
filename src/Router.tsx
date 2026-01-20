import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './modules/layout';
import CounterPage from './modules/counter';
import JsFuncPage from './modules/js-func';
import TabsPage from './modules/tabs';
import ModalDialogPage from './modules/modal-dialog';
import DatatablePage from './modules/datatable';
import WelcomePage from './modules/welcome';

const Router = () => {
	const router = createBrowserRouter([
		{
			id: 'root',
			path: '/',
			element: <RootLayout />,
			children: [
				{
					path: '/',
					index: true,
					element: <WelcomePage />,
				},
				{
					path: '/counter',
					element: <CounterPage />,
				},
				{
					path: '/js-func',
					element: <JsFuncPage />,
				},
				{
					path: '/tabs',
					element: <TabsPage />,
				},
				{
					path: '/modal-dialog',
					element: <ModalDialogPage />,
				},
				{
					path: '/datatable',
					element: <DatatablePage />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};
export default Router;
