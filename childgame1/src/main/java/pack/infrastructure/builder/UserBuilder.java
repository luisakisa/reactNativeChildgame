package pack.infrastructure.builder;

import jakarta.inject.Inject;
import jakarta.enterprise.inject.Produces;
import jakarta.enterprise.inject.Default;
import pack.application.api.in.IUserModel;
import pack.infrastructure.out.repository.user.IUserRep;


public class UserBuilder {

    @Inject @Default
    private IUserModel model;

    @Inject @Default
    private IUserRep repository;

    @Produces @Built
    public IUserModel buildModel() {
	   model.injectRepository(repository);
       return model;
    } 
}