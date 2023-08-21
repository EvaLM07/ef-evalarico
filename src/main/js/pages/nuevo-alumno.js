const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageNuevoAlumno() {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/alumnos',
            entity: { nombre: nombre, apellido: apellido, edad: edad },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nuevo Alumno</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} /><br />
                <label htmlFor="nombre">Apellido</label>
                <input type="text" id="apellido" name="apellido" onChange={(e)=>setApellido(e.target.value)} /><br />
                <label htmlFor="nombre">Edad</label>
                <input type="text" id="edad" name="edad" onChange={(e)=>setEdad(e.target.value)} /><br />
                <input type="submit" value="Nuevo Alumno" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoAlumno;