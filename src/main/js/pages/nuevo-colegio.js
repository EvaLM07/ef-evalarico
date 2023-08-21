const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageNuevoColegio() {

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/colegios',
            entity: { nombre: nombre, direccion: direccion },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nuevo Colegio</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} /><br />
                <label htmlFor="nombre">Direccion</label>
                <input type="text" id="direccion" name="direccion" onChange={(e)=>setDireccion(e.target.value)} /><br />
                <input type="submit" value="Nuevo Colegio" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoColegio;