package payingguest;
import java.util.List;
import java.util.Scanner;

public class PayingGuestApp {
    private static Scanner scanner = new Scanner(System.in);
    private static DatabaseHandler dbHandler = new DatabaseHandler();

    public static void main(String[] args) {
        boolean exit = false;

        while (!exit) {
            System.out.println("Welcome to Online Paying Guest Accommodation");
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Search PG");
            System.out.println("4. Admin - Add PG");
            System.out.println("5. Admin - Delete PG");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    performUserRegistration();
                    break;
                case 2:
                    performUserLogin();
                    break;
                case 3:
                    performSearchPG();
                    break;
                case 4:
                    performAddPG();
                    break;
                case 5:
                    performDeletePG();
                    break;
                case 6:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
                    break;
            }
        }

        System.out.println("--------Thank You!--------");
    }

    private static void performUserRegistration() {
        System.out.println("Enter username: ");
        String username = scanner.nextLine();
        System.out.println("Enter password: ");
        String password = scanner.nextLine();

        User user = new User(username, password);
        dbHandler.registerUser(user);
        System.out.println("Registration successful!");
    }

    private static void performUserLogin() {
        System.out.println("Enter username: ");
        String username = scanner.nextLine();
        System.out.println("Enter password: ");
        String password = scanner.nextLine();

        boolean loginSuccess = dbHandler.loginUser(username, password);
        if (loginSuccess) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Invalid username or password. Please try again.");
        }
    }

    private static void performSearchPG() {
        System.out.println("Enter gender (Male/Female): ");
        String gender = scanner.nextLine();

        List<PayingGuest> pgList = dbHandler.searchPGByGender(gender);
        if (!pgList.isEmpty()) {
            System.out.println("Matching PGs:");
            for (PayingGuest pg : pgList) {
                System.out.println("PG ID: " + pg.getPgId());
                System.out.println("PG Name: " + pg.getPgName());
                System.out.println("PG Type: " + pg.getPgType());
                System.out.println("PG Room Number: " + pg.getRoomNumber());
                System.out.println("PG Sharing: " + pg.getSharing());
                System.out.println("PG Cost: $" + pg.getCost());
                System.out.println("PG Address: " + pg.getAddress());
                System.out.println("PG Pincode: " + pg.getPincode());
                System.out.println("---------------------------");
            }
        } else {
            System.out.println("No PGs found for the given gender.");
        }
    }

    private static void performAddPG() {
        System.out.println("Enter PG Name: ");
        String pgName = scanner.nextLine();
        
        System.out.println("Enter Gender (Male/Female): ");
        String gender = scanner.nextLine();
        
        System.out.println("Enter Room Number: ");
        int roomNumber = scanner.nextInt();
        scanner.nextLine();
        
        System.out.println("Enter Sharing (2/3/4): ");
        int sharing = scanner.nextInt();
        scanner.nextLine();
        
        System.out.println("Enter Cost: ");
        double cost = scanner.nextDouble();
        scanner.nextLine();
        
        System.out.println("Enter Address: ");
        String address = scanner.nextLine();
        
        System.out.println("Enter Pincode: ");
        int pincode = scanner.nextInt();
        scanner.nextLine();

        PayingGuest pg = new PayingGuest(0, pgName, gender, roomNumber, sharing, cost, address, pincode);
        dbHandler.addPayingGuest(pg);
        System.out.println("PG details added successfully!");
    }


    private static void performDeletePG() {
        System.out.println("Enter PG ID to delete: ");
        int pgId = scanner.nextInt();
        scanner.nextLine();

        dbHandler.deletePayingGuest(pgId);
        System.out.println("PG with ID " + pgId + " deleted successfully!");
    }
}