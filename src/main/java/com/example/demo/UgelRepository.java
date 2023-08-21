package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "ugeles", path = "ugeles")
public interface UgelRepository extends CrudRepository<Ugel, Long> {

}