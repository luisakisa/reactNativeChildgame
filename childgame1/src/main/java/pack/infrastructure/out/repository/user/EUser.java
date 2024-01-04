package pack.infrastructure.out.repository.user;
import java.io.Serializable;

import jakarta.persistence.*;

@Entity
@Table(name = "\"data\"")
public class EUser implements Serializable{
    @Column(name = "\"playerName\"")
    private String playerName;
    @Column(name = "\"level\"")
    private int level;
    @Id
    @Column(name = "\"id\"")
    private int id;
    @Column(name = "\"playerAge\"")
    private int playerAge;

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String name) {
        this.playerName = name;
    }

    public int getPlayerAge() {
        return playerAge;
    }

    public void setPlayerAge(int age) {
        this.playerAge = age;
    }
    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}