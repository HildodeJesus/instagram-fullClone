import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Root from "./pages/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "team",
				element: <Home />,
			},
		],
	},
]);

export default router;
