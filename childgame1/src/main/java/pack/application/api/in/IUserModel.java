package pack.application.api.in;
import pack.infrastructure.out.repository.user.IUserRep;
import pack.application.dto.User;

import java.util.ArrayList;


public interface IUserModel {
    void injectRepository(IUserRep repository);
    ArrayList<User> selectAll();
    User selectOne(int id);
    boolean delete(int id);
    boolean add(User user);
}
