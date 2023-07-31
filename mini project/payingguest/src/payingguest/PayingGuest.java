package payingguest;

public class PayingGuest {
    private int pgId;
    private String pgName;
    private String pgType; 
//    private String gender;
    private int roomNumber;
    private int sharing;
    private double cost;
    private String address;
    private int pincode;

    public PayingGuest(int pgId, String pgName,  String pgType, int roomNumber, int sharing, double cost, String address, int pincode) {
        this.pgId = pgId;
        this.pgName = pgName;
        this.pgType = pgType;
        this.roomNumber = roomNumber;
        this.sharing = sharing;
        this.cost = cost;
        this.address = address;
        this.pincode = pincode;
    }

	public int getPgId() {
		return pgId;
	}

	public void setPgId(int pgId) {
		this.pgId = pgId;
	}

	public String getPgName() {
		return pgName;
	}

	public void setPgName(String pgName) {
		this.pgName = pgName;
	}
	 public String getPgType() {
	        return pgType;
	    }

	    public void setPgType(String pgType) {
	        this.pgType = pgType;
	    }

//	public String getGender() {
//		return gender;
//	}
//
//	public void setGender(String gender) {
//		this.gender = gender;
//	}

	public int getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(int roomNumber) {
		this.roomNumber = roomNumber;
	}

	public int getSharing() {
		return sharing;
	}

	public void setSharing(int sharing) {
		this.sharing = sharing;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

    
}
