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
						<Link to="/nueva-banda">Nuevo Alumno</Link>
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


class InstrumentoList extends React.Component {
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Descripción</th>
						<th>Acciones</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}
class MusicoList extends React.Component {
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}
class BandaList extends React.Component {
	render() {
		const bandas = this.props.bandas.map(banda =>
			<Banda key={banda._links.self.href} banda={banda} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{bandas}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component {
	render() {
		const id = this.props.instrumento._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>{this.props.instrumento.descripcion}</td>
				<td>
					<Link to={'/editar-instrumento/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Musico extends React.Component {
	render() {
		const id = this.props.musico._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.musico.nombre}</td>
				<td>
					<Link to={`/editar-musico/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Banda extends React.Component {
	render() {
		const id = this.props.banda._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.banda.nombre}</td>
				<td>
					<Link to={`/ver-banda/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;