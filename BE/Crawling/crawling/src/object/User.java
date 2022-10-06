package object;

public class User {
	String userSno;
	String kakaoId = ".";
	String name;
	String phone="000-0000-0000";
	String address=".";

	public String getUserSno() {
		return userSno;
	}

	public void setUserSno(String userSno) {
		this.userSno = userSno;
	}

	public String getKakaoId() {
		return kakaoId;
	}

	public void setKakaoId(String kakaoId) {
		this.kakaoId = kakaoId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public User(String userSno, String name) {
		super();
		this.userSno = userSno;
		this.name = name;
	}


	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append(userSno);
		builder.append(", ");
		builder.append(kakaoId);
		builder.append(", ");
		builder.append(name);
		builder.append(", ");
		builder.append(phone);
		builder.append(", ");
		builder.append(address);
		builder.append("\n");
		return builder.toString();
	}

	
	
}
