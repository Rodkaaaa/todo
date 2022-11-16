package Connect;

public class BeanUser {
    private int id;
    private String name;
    
    public BeanUser(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public BeanUser() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
}
