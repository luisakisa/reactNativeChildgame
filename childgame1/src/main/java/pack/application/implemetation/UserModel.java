package pack.application.implemetation;

import pack.infrastructure.out.repository.user.IUserRep;
import pack.application.api.in.IUserModel;
import pack.application.dto.User;

import java.util.ArrayList;

public class UserModel implements IUserModel {
  IUserRep repository;
    @Override
    public void injectRepository(IUserRep repository) {
      this.repository = repository;
    }
  @Override
  public boolean delete(int id) {
    return repository.delete(id);
  }
  @Override
  public ArrayList<User> selectAll() {
        return repository.selectAll();
  }
  @Override
  public User selectOne(int id) {
    return repository.selectOne(id);
  }
  @Override
  public boolean add(User user) {
    return repository.add(user);
  }

}
