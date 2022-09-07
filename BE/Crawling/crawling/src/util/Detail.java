package util;

public enum Detail {
	PARTICLE("입자크기"),
	GRADE("등급"),
	TARGET("급여대상"),
	FUNCTION("기능"),	
	MATERIAL("주원료");
	
	private final String label;
	
	Detail(String label){
		this.label = label;
	}
	
	public String getLabel() {
		return label;
	}
}
