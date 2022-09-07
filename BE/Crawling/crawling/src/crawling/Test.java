package crawling;

import java.util.Date;

public class Test {
	public static void main(String[] args) {
		int[] arr = new int[62];
		
		for(int i=0; i<62; i++) {
			if(i<10) {
				arr[i] = 48+i;
			}else if(i>=10 && i<36){
				arr[i] = 55+i;
			}else {
				arr[i] = 61+i;
			}
		}
		
		for(int i : arr) {
			System.out.println((char)i);
		}
		
		int i = (int)(Math.random()*63);
		
		
	}
}
