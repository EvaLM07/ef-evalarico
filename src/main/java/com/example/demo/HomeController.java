package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/")
    public String home(){
        return "index";
    }

    @GetMapping(path = "/api/alumnos/{id}/formacion")
    public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
        String sql = "SELECT alumno.id as ID, alumno.nombre as NOMBRE, colegio.nombre as COLEGIO, ugel.nombre as UGEL FROM integrante JOIN colegio ON alumno.id_colegio = colegio.id JOIN ugel ON alumno.id_ugel = ugel.id WHERE alumno.id_alumno = ?";
        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
        return queryResult;
    }
    /**
     * [
     *   {"campo": "Valor"},
     *   {"campo": 2},
     * ]
     * List<Map<String, Object>>
     */


}
