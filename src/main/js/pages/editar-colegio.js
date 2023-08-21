const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarColegio() {

    const [colegio, setColegio] = useState({});

    // getting id param from route
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/colegios/' + id }).done(response => {
            setMusico(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/colegios/' + id,
            entity: colegio,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Colegio</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={colegio.nombre} onChange={(e) => setColegio({...colegio, nombre: e.target.value })} /><br />
                <label htmlFor="nombre">Colegio</label>
                <input type="text" id="colegio" name="colegio" value={colegio.direccion} onChange={(e) => setColegio({...colegio, direccion: e.target.value })} /><br />
                <input type="submit" value="Editar Colegio" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarColegio;