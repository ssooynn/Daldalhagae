package object;

public class Bridge {
	String fsno;
	int fk2;
	
	
	
	
	public Bridge(String fsno, int fk2) {
		super();
		this.fsno = fsno;
		this.fk2 = fk2;
	}



	public void setFsno(String fsno) {
		this.fsno = fsno;
	}



	public void setFk2(int fk2) {
		this.fk2 = fk2;
	}



	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append(fsno);
		builder.append(", ");
		builder.append(fk2);
		builder.append("\n");
		return builder.toString();
	}
	
	

}
