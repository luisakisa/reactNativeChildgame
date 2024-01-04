package pack.infrastructure.out.repository.user;

import pack.application.dto.User;

import java.util.ArrayList;

public interface IUserRep {
    ArrayList<User> selectAll();
    User selectOne(int id);
    boolean delete(int id);
    boolean add(User user);
}
