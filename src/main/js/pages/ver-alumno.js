const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');
const {Link} = require('react-router-dom');

const VerAlumnoPage = ()=>{

    let {id} = useParams();
    const [alumno, setAlumno] = useState({});
    const [alumnolists, setAlumnoList] = useState([]);

    useEffect(()=>{

        const url_alumno = '/api/alumnos/'+id

        client({
            method: 'GET',
            path: url_alumno
        }).done((response)=>{setAlumno(response.entity);})

        client({
            method: 'GET',
            path: url_alumno + '/formacion'
        }).done((response)=>{setAlumnoList(response.entity);})

    }, []);

    return (
        <>
            <h1>Ver Alumno</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{alumno.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">Lista de Alumno</th>  
                    </tr>
                    <tr>
                        <th>Colegio</th>
                        <th>Ugel</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnolists.map(alumnolist => {
                        return (
                            <tr key={alumnolist.ID}>
                                <td>{alumnolist.COLEGIO}</td>
                                <td>{alumnolist.UGEL}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to={`/ver-alumno/${id}/nuevo-alumnolist`}>Nueva Lista de Alumno</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = VerAlumnoPage;