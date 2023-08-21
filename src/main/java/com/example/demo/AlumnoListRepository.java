package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "alumnolists", path = "alumnolists")
public interface AlumnoListRepository extends CrudRepository<AlumnoList, Long> {

}