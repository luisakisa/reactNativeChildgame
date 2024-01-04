package pack.infrastructure.out.repository.user;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;
import jakarta.persistence.*;
import jakarta.transaction.*;
import jakarta.transaction.RollbackException;
import pack.application.dto.User;

public class UserRep implements IUserRep {

    @PersistenceUnit(unitName = "pg")
    private EntityManagerFactory entityManagerFactory;

    @Resource
    private UserTransaction userTransaction;

    public boolean add(User user)
    {
        try{
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        try {
            userTransaction.begin();
        } catch (NotSupportedException | SystemException e) {
            e.printStackTrace();
        }
        entityManager.joinTransaction();
        EUser eUser = new EUser();
        eUser.setId(user.getId());
        eUser.setPlayerAge(user.getAge());
        eUser.setLevel(user.getLevel());
        eUser.setPlayerName(user.getName());

        entityManager.persist(eUser);
        try {
            userTransaction.commit();
        } catch (SecurityException | IllegalStateException | RollbackException | HeuristicMixedException
                 | HeuristicRollbackException | SystemException e) {
            e.printStackTrace();
        }
        return true;
    } catch(
    Exception e)

    {
        e.printStackTrace();
        return false;
    }}
    @Override
    public ArrayList<User> selectAll() {
        EntityManager entityManager= entityManagerFactory.createEntityManager();
        try {
            userTransaction.begin();
        } catch (NotSupportedException | SystemException e) {
            e.printStackTrace();
        }
        entityManager.joinTransaction();
        List<EUser> EUsers = entityManager.createQuery("SELECT p FROM EUser p",EUser.class).getResultList();
        try {
            userTransaction.commit();
        } catch (SecurityException | IllegalStateException | RollbackException | HeuristicMixedException
                | HeuristicRollbackException | SystemException e) {
            e.printStackTrace();
        }
        ArrayList<User> Users =  new ArrayList<>();
        for (EUser euser: EUsers){
            User p = new User();
            p.setId(euser.getId());
            p.setName(euser.getPlayerName());
            p.setAge(euser.getPlayerAge());
            p.setLevel(euser.getLevel());
            Users.add(p);
        }
        return Users;
      }

    @Override
    public User selectOne(int id) {
                 EntityManager entityManager = entityManagerFactory.createEntityManager();
        try {
            userTransaction.begin();
        } catch (NotSupportedException | SystemException e) {
            e.printStackTrace();
        }
        entityManager.joinTransaction();
        EUser user = entityManager
                .createQuery("SELECT u FROM EUser u WHERE u.id = :id", EUser.class)
                .setParameter("id", id).getSingleResult();

        try {
            userTransaction.commit();
        } catch (SecurityException | IllegalStateException | RollbackException | HeuristicMixedException
                | HeuristicRollbackException | SystemException e) {
            e.printStackTrace();
        }

            User p = new User();
            p.setId(user.getId());
            p.setName(user.getPlayerName());
            p.setAge(user.getPlayerAge());
            p.setLevel(user.getLevel());
        return p;
    }
    @Override
    public boolean delete(int id) {
        try {
    EntityManager entityManager= entityManagerFactory.createEntityManager();
    try {
        userTransaction.begin();
    } catch (NotSupportedException | SystemException e) {
        e.printStackTrace();
    }
    entityManager.joinTransaction();
      entityManager.createQuery("DELETE FROM EUser o WHERE o.id = :id")
              .setParameter("id", id)
              .executeUpdate();
      try {
        userTransaction.commit();
    } catch (SecurityException | IllegalStateException | RollbackException | HeuristicMixedException
            | HeuristicRollbackException | SystemException e) {
        e.printStackTrace();
    }return true;}
        catch (Exception e) {
            e.printStackTrace();
            return false;
        }
  }
}
