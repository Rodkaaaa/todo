package Connect;

import java.lang.invoke.CallSite;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class connectarJava {
    private static Connection c;
    private static CallableStatement cstm;
    private static ResultSet rs;
    public static void main(String[] args)  {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("bienvenido al systema");
        System.out.println("ingresar el usuario: ");
        String user = sc.next();
        System.out.println("ingresar el password: ");
        String password = sc.next();
        sc.close();

        List<BeanUser> listUsers = new ArrayList<>();
        listUsers = getUsert(user, password);
        listUsers.forEach(u -> System.out.println(u));


    }
    public static List<BeanUser> getUsert(String p_user, String p_password){
        ArrayList<BeanUser> listUser = new ArrayList<>();
        try {
            c = getConnection(p_user, p_password);
            cstm =  c.prepareCall("SELECT * FROM usuario");
            rs = cstm.executeQuery();

            while(rs.next()){
                BeanUser beanUser = new BeanUser();
                beanUser.setId(rs.getInt("idUsuario"));
                beanUser.setName(rs.getString("nombre"));

                listUser.add(beanUser);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }finally{
            try {
                rs.close();
                cstm.close();
                c.close();
            } catch (SQLException e) {
                // TODO:  exception
                System.out.println(e.getMessage());
            }
        }
        return listUser;
    }
    public static Connection getConnection(String p_user, String p_password) throws SQLException{
        String host = "127.0.0.1";
        String user = p_user;
        String password = p_password;
        int port = 3306;
        String database = "veterinaria";
        boolean ssl = false;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            
        } catch (Exception e) {
            System.out.println("Libreria no encontrada: " + e.getMessage());
        }
        String url = String.format("jdbc:mysql://%s/%s?useSSl=%b", host, database, user, ssl);
        return DriverManager.getConnection(url, user, password);
    }
}
