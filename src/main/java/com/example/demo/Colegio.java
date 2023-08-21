package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Colegio {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String direccion;

	private Colegio() {}

	public Colegio(String nombre, String direccion) {
		this.nombre = nombre;
		this.direccion = direccion;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Colegio colegio = (Colegio) o;
		return Objects.equals(id, colegio.id) &&
			Objects.equals(nombre, colegio.nombre) &&
			Objects.equals(direccion, colegio.direccion);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, direccion);
	}

	@Override
	public String toString() {
		return "Instrumento{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", direccion='" + direccion + '\'' +
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

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

}