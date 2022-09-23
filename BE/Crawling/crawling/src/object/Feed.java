package object;

public class Feed {
	String sno;
	String title;
	String image;
	String reviewUrl;
	
	
	public void setSno(String sno) {
		this.sno = sno;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public void setReviewUrl(String reviewUrl) {
		this.reviewUrl = reviewUrl;
	}


	public String getSno() {
		return sno;
	}


	public String getTitle() {
		return title;
	}


	public String getImage() {
		return image;
	}


	public String getReviewUrl() {
		return reviewUrl;
	}


	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append(sno);
		builder.append(", ");
		builder.append(title);
		builder.append(", ");
		builder.append(image);
		builder.append("\n");
		return builder.toString();
	}
	
	
	
}
