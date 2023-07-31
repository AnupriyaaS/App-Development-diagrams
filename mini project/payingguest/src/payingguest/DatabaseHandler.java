package payingguest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DatabaseHandler {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini1";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "tiger";
    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("Failed to load MySQL JDBC driver.", e);
        }
        return DriverManager.getConnection(DB_URL,DB_USER , DB_PASSWORD);
    }
    // Method to register a new user
    public void registerUser(User user) {
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                     "INSERT INTO users (username, password) VALUES (?, ?)")) {

            stmt.setString(1, user.getUsername());
            stmt.setString(2, user.getPassword());

            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle exceptions appropriately
        }
    }

    // Method to validate user login
    public boolean loginUser(String username, String password) {
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                     "SELECT COUNT(*) FROM users WHERE username = ? AND password = ?")) {

            stmt.setString(1, username);
            stmt.setString(2, password);

            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                int count = rs.getInt(1);
                return count == 1;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle exceptions appropriately
        }
        return false;
    }
    public List<PayingGuest> searchPGByGender(String gender) {
        List<PayingGuest> pgList = new ArrayList<>();

        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                     "SELECT * FROM pg WHERE gender = ?")) {

            stmt.setString(1, gender);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
            	int pgId = rs.getInt("pg_id");
            	String pgName = rs.getString("pg_name");
            	String pgType = rs.getString("gender");
            	int roomNumber = rs.getInt("room_number");
            	int sharing = rs.getInt("sharing");
            	double cost = rs.getDouble("cost");
            	String address = rs.getString("address");
            	int pincode = rs.getInt("pincode");

            	PayingGuest pg = new PayingGuest(pgId, pgName, pgType, roomNumber, sharing, cost, address, pincode);

                pgList.add(pg);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle exceptions appropriately
        }

        return pgList;
    }
    public void deletePayingGuest(int pgId) {
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                     "DELETE FROM pg WHERE pg_id = ?")) {

            stmt.setInt(1, pgId);

            int rowsAffected = stmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("PG with ID " + pgId + " deleted successfully!");
            } else {
                System.out.println("PG with ID " + pgId + " not found or couldn't be deleted.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle exceptions appropriately
        }
    }
    public void addPayingGuest(PayingGuest pg) {
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(
                     "INSERT INTO pg (pg_name, gender, room_number, sharing, cost, address, pincode) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?)")) {

            stmt.setString(1, pg.getPgName());
            stmt.setString(2, pg.getPgType());
            stmt.setInt(3, pg.getRoomNumber());
            stmt.setInt(4, pg.getSharing());
            stmt.setDouble(5, pg.getCost());
            stmt.setString(6, pg.getAddress());
            stmt.setInt(7, pg.getPincode());

            int rowsAffected = stmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("PG details added successfully!");
            } else {
                System.out.println("Failed to add PG details.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle exceptions appropriately
        }
    }


}