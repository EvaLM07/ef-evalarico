const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ugeles: [], colegios: [], alumnos: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/ugeles' }).done(response => {
			this.setState({ ugeles: response.entity._embedded.ugeles });
		});
		client({ method: 'GET', path: '/api/colegios' }).done(response => {
			this.setState({ colegios: response.entity._embedded.colegios });
		});
		client({ method: 'GET', path: '/api/alumnos' }).done(response => {
			this.setState({ alumnos: response.entity._embedded.alumnos });
		});
	}
	render() {
		return (
			<>
                <h1>Evaluacion Final - Eva Larico</h1>

				<div style={{"width": "100%","display": "flex"}} >

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Ugel" emoji="🏢" />
						<UgelList ugeles={this.state.ugeles} />
						<br />
						<Link to="/nuevo-ugel">Nuevo Ugel</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Colegio" emoji="🏫" />
						<ColegioList colegios={this.state.colegios} />
						<br />
						<Link to="/nuevo-musico">Nuevo Colegio</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Alumno" emoji="👨‍🎓" />
						<AlumnoList alumnos={this.state.alumnos} />
						<br />
						<Link to="/nuevo-alumno">Nuevo Alumno</Link>
					</div>
				</div>

			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado de {props.entidad.toLowerCase()}</span>
			<hr />
		</>
	)
}


class UgelList extends React.Component {
	render() {
		const ugeles = this.props.ugeles.map(ugel =>
			<Ugel key={ugel._links.self.href} ugel={ugel} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
					</tr>
					{ugeles}
				</tbody>
			</table>
		)
	}
}
class ColegioList extends React.Component {
	render() {
		const colegios = this.props.colegios.map(colegio =>
			<Colegio key={colegio._links.self.href} colegio={colegio} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Direccion</th>
						<th>Acciones</th>
					</tr>
					{colegios}
				</tbody>
			</table>
		)
	}
}
class AlumnoList extends React.Component {
	render() {
		const alumnos = this.props.alumnos.map(alumno =>
			<Alumno key={alumno._links.self.href} alumno={alumno} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Edad</th>
						<th>Acciones</th>
					</tr>
					{alumnos}
				</tbody>
			</table>
		)
	}
}

class Ugel extends React.Component {
	render() {
		const id = this.props.ugel._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.ugel.nombre}</td>
				
				<td>
					<Link to={'/editar-ugel/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Colegio extends React.Component {
	render() {
		const id = this.props.colegio._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.colegio.nombre}</td>
				<td>{this.props.colegio.direccion}</td>
				<td>
					<Link to={`/editar-colegio/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Alumno extends React.Component {
	render() {
		const id = this.props.alumno._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.alumno.nombre}</td>
				<td>
					<Link to={`/ver-alumno/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;