package object;

public class Review {
	int no;
	String itemSno;
	int rate;
	String content;
	
	public void setNo(int no) {
		this.no = no;
	}

	public void setItemSno(String itemSno) {
		this.itemSno = itemSno;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Review(int no, String itemSno, int rate, String content) {
		super();
		this.no = no;
		this.itemSno = itemSno;
		this.rate = rate;
		this.content = content;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Review [no=");
		builder.append(no);
		builder.append(", itemSno=");
		builder.append(itemSno);
		builder.append(", rate=");
		builder.append(rate);
		builder.append(", content=");
		builder.append(content);
		builder.append("]");
		return builder.toString();
	}
	
}
