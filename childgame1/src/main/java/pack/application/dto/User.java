package pack.application.dto;

public class User {
    private String playerName;
    private int playerAge;
    private int level;
    private int id;

    public String getName() {
        return playerName;
    }

    public void setName(String playerName) {
        this.playerName = playerName;
    }

    public int getAge() {
        return playerAge;
    }

    public void setAge(int playerAge) {
        this.playerAge = playerAge;
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