package object;

public class Review {
	//{"user_sno","purchase_no","pet_sno","item_sno","rate","content","image"}
	String itemSno;
	String userSno;
	int purchaseNo;
	String petSno;
	int rate;
	String content;
	String image;
	public Review() {
	}

	public Review(String itemSno, String userSno, int purchaseNo, String petSno, int rate, String content, String image) {
		this.itemSno = itemSno;
		this.userSno = userSno;
		this.purchaseNo = purchaseNo;
		this.petSno = petSno;
		this.rate = rate;
		this.content = content;
		this.image = image;
	}

	public String getItemSno() {
		return itemSno;
	}

	public void setItemSno(String itemSno) {
		this.itemSno = itemSno;
	}

	public String getUserSno() {
		return userSno;
	}

	public void setUserSno(String userSno) {
		this.userSno = userSno;
	}

	public int getPurchaseNo() {
		return purchaseNo;
	}

	public void setPurchaseNo(int purchaseNo) {
		this.purchaseNo = purchaseNo;
	}

	public String getPetSno() {
		return petSno;
	}

	public void setPetSno(String petSno) {
		this.petSno = petSno;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Review{" +
				"itemSno='" + itemSno + '\'' +
				", userSno='" + userSno + '\'' +
				", purchaseNo='" + purchaseNo + '\'' +
				", petSno='" + petSno + '\'' +
				", rate=" + rate +
				", content='" + content + '\'' +
				", image='" + image + '\'' +
				'}';
	}
}
