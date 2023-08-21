package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Alumno {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String apellido;
	private Integer edad;

	private Alumno() {}

	public Alumno(String nombre, String apellido, Integer edad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Alumno oo = (Alumno) o;
		return Objects.equals(id, oo.id) &&
			Objects.equals(nombre, oo.nombre) &&
			Objects.equals(apellido, oo.apellido) &&
			Objects.equals(edad, oo.edad);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre);
	}

	@Override
	public String toString() {
		return "Alumno{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", apellido='" + apellido + '\'' +
			", edad='" + edad + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Integer getEdad() {
		return edad;
	}

	public void setEdad(Integer edad) {
		this.edad = edad;
	}



}