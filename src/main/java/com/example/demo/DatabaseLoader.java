package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final UgelRepository repositoryU;
	private final ColegioRepository repositoryC;
	private final AlumnoRepository repositoryA;
	private final AlumnoListRepository repositoryAL;

	@Autowired
	public DatabaseLoader(
		UgelRepository repositoryU,
		ColegioRepository repositoryC,
		AlumnoRepository repositoryA,
		AlumnoListRepository repositoryAL
		) {
		this.repositoryU = repositoryU;
		this.repositoryC = repositoryC;
		this.repositoryA = repositoryA;
		this.repositoryAL = repositoryAL;
	}

	@Override
	public void run(String... strings) throws Exception {

		Ugel u_Ugel01 = new Ugel("Ugel 01");
		Ugel u_Ugel02 = new Ugel("Ugel 02");
		this.repositoryU.save(u_Ugel01);
		this.repositoryU.save(u_Ugel02);

		Colegio c_Ollantay = new Colegio("6038 Ollantay", "Av Edilverto Ramos");
		Colegio c_Maristas = new Colegio("Maristas", "Av Los Heroes");
		Colegio c_AlfonzoUgarte = new Colegio("Alfonzo Ugarte", "Av Rosario");
		this.repositoryC.save(c_Ollantay);
		this.repositoryC.save(c_Maristas);
		this.repositoryC.save(c_AlfonzoUgarte);
		
		Alumno a_Eva = new Alumno("Eva", "Larico",18);
		Alumno a_Luis = new Alumno("Luis", "Salazar",12);
		Alumno a_Juana = new Alumno("Juana", "Villegas",13);
		Alumno a_Juan = new Alumno("Juan", "Medina",15);
		this.repositoryA.save(a_Eva);
		this.repositoryA.save(a_Luis);
		this.repositoryA.save(a_Juana);
		this.repositoryA.save(a_Juan);

		AlumnoList al_Eva = new AlumnoList(a_Eva, c_Ollantay, u_Ugel01);
		this.repositoryAL.save(al_Eva);
		AlumnoList al_Luis = new AlumnoList(a_Luis, c_Ollantay, u_Ugel01);
		this.repositoryAL.save(al_Luis);
		AlumnoList al_Juana = new AlumnoList(a_Juana, c_Maristas, u_Ugel02);
		this.repositoryAL.save(al_Juana);
		AlumnoList al_Juan = new AlumnoList(a_Juan, c_AlfonzoUgarte, u_Ugel01);
		this.repositoryAL.save(al_Juan);
		


	}
}