package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class AlumnoList {

	private @Id @GeneratedValue Long id;

	@ManyToOne()
	@JoinColumn(name = "id_alumno")
	private Alumno alumno;

	@ManyToOne()
	@JoinColumn(name = "id_colegio")
	private Colegio colegio;

	@ManyToOne()
	@JoinColumn(name = "id_ugel")
	private Ugel ugel;

	public AlumnoList() {}

	public AlumnoList(Alumno alumno, Colegio colegio, Ugel ugel) {
		this.alumno = alumno;
		this.colegio = colegio;
		this.ugel = ugel;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Alumno getAlumno() {
        return alumno;
    }

    public void setAlumno(Alumno alumno) {
        this.alumno = alumno;
    }

    public Colegio getColegio() {
        return colegio;
    }

    public void setColegio(Colegio colegio) {
        this.colegio = colegio;
    }

    public Ugel getUgel() {
        return ugel;
    }

    public void setUgel(Ugel ugel) {
        this.ugel = ugel;
    }


}