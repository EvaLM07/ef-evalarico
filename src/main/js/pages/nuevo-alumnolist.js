const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


const NuevoListaDeAlumnoPage = () => {

    let { id } = useParams();
    const [colegios, setColegios] = useState([])
    const [ugeles, setUgeles] = useState([])
    const [idColegio, setIdColegio] = useState('')
    const [idUgel, setIdUgel] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/alumnolists',
            entity: {
                alumno: 'http://localhost:8080/api/alumnos/'+id,
                colegio: 'http://localhost:8080/api/colegios/'+idColegio,
                ugel: 'http://localhost:8080/api/ugel/'+idUgel},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/colegios'
        }).done(response=>{
            let colegios2 = [];
            response.entity._embedded.colegios.map(colegio => {
                colegios2.push({value: colegio._links.self.href.split('/').slice(-1), label: colegio.nombre})
            })
            setColegios(colegios2)
        })
        client({
            method: 'GET',
            path: '/api/ugeles'
        }).done(response=>{
            let ugeles2 = [];
            response.entity._embedded.ugeles.map(ugel => {
                ugeles2.push({value: ugel._links.self.href.split('/').slice(-1), label: ugel.nombre})
            })
            setUgeles(ugeles2)
        })

    },[])

    return (
        <>
            <h1>Nueva Lista de Alumno</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='colegio'>Colegio</label>
                <select name="colegio" id="colegio" onChange={(e)=>{setIdColegio(e.target.value)}}>
                    {colegios.map(colegio => {	
                        return (
                            <option key={colegio.value} value={colegio.value}>{colegio.label}</option>
                        )
                    })}
                </select>
                
                <label>Ugel</label>
                <select name="ugel" id="ugel" onChange={(e)=>{setIdUgel(e.target.value)}}>
                    {ugeles.map(ugel => {	
                        return (
                            <option key={ugel.value} value={ugel.value}>{ugel.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nueva Lista" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoListaDeAlumnoPage;