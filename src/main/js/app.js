const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoColegio = require('./pages/nuevo-colegio');
const PageEditarColegio = require('./pages/editar-colegio');
const PageEditarUgel = require('./pages/editar-ugel');
const PageNuevoUgel = require('./pages/nuevo-ugel');
const VerAlumnoPage = require('./pages/ver-alumno');
const PageNuevoAlumno = require('./pages/nuevo-alumno');
const NuevoListaDeAlumnoPage = require('./pages/nuevo-alumnolist');


const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/editar-colegio/:id', element: <PageEditarColegio /> },
	{ path: '/nuevo-colegio', element: <PageNuevoColegio /> },
	{ path: '/editar-ugel/:id', element: <PageEditarUgel /> },
	{ path: '/nuevo-ugel', element: <PageNuevoUgel /> },
	{ path: '/nueva-alumno', element: <PageNuevoAlumno /> },
	{ path: '/ver-alumno/:id', element: <VerAlumnoPage /> },
	{ path: '/ver-alumno/:id/nuevo-alumnolist', element: <NuevoListaDeAlumnoPage /> },

]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)