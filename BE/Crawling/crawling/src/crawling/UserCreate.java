package crawling;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import object.Pet;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import object.User;

public class UserCreate {
	public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
	public static final String WEB_DRIVER_PATH = "C:\\Users\\SSAFY\\Downloads\\chromedriver.exe";
	public Set<String> userSnoSet;
	public Set<String> petSnoSet;
	public Map<Integer, String> userNameMap;
	public Map<Integer, User> userMap;
	public Map<Integer, Pet> petMap;
	public int[] arr = new int[62];
	public String[] ln = {"김","이","박","최","정","강","조","윤","장","임",
			"한","오","서","신","권","황","안","송","전","홍",
			"유","고","문","손","배","조","백","허","찬","채"}; 
	public int fnSize;
	public int usertc;
	public int pettc;

	public UserCreate() {
		for (int i = 0; i < 62; i++) {
			if (i < 10) {
				arr[i] = 48 + i;
			} else if (i >= 10 && i < 36) {
				arr[i] = 55 + i;
			} else {
				arr[i] = 61 + i;
			}
		}
		
		userNameMap = new HashMap<Integer, String>();
		userMap = new HashMap<Integer, User>();
		petMap = new HashMap<Integer, Pet>();
		userSnoSet = new HashSet<>();
		petSnoSet = new HashSet<>();

		try {
			System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
		} catch (Exception e) {
			e.printStackTrace();
		}
		WebDriver driver = new ChromeDriver();
		String url = "https://koreanname.me";
		driver.get(url);
		List<WebElement> btns = driver.findElements(By.className("ant-btn-primary"));

		for (int i = 0; i < 1; i++) {
			btns.get(1).click();
			try {
				Thread.sleep(1500);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		List<WebElement> list = driver.findElements(By.cssSelector(".ant-table-tbody a"));
		for (int i = 0; i < list.size(); i++) {
			userNameMap.put(i, list.get(i).getText());
		}
		fnSize=list.size();
	}

	// 난수 키 생성
	public String randomKey() {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < 20; i++) {
			int ran = (int) (Math.random() * 62);
			sb.append((char) arr[ran]);
		}

		return sb.toString();
	}
	
	//유저생성 
	public void makeUser() {
		String str = randomKey();
		while(userSnoSet.contains(str)) {
			str = randomKey();
		}
		
		str = "u"+str;
		userSnoSet.add(str);
		int lnRan = (int)(Math.random()*30);
		int fnRan = (int)(Math.random()*fnSize);
		String name = ln[lnRan] + userNameMap.get(fnRan);
		User user = new User(str,name);
		userMap.put(usertc++, user);
	}

	public void makePet(){
		String str = randomKey();
		while(petSnoSet.contains(str)) {
			str = randomKey();
		}

		str = "p"+str;
		petSnoSet.add(str);
		petMap.put(pettc,new Pet(str,userMap.get(pettc++).getUserSno()));
	}


	//3천개 만들고 출력
	public void makeUserList() {
		int rowNo = 0;

		XSSFWorkbook xssfWb = null;
		XSSFSheet xssfSheet = null;
		XSSFRow xssfRow = null;

		xssfWb = new XSSFWorkbook(); //XSSFWorkbook 객체 생성
		xssfSheet = xssfWb.createSheet("사용자"); // 워크시트 이름 설정.

		//새 행부터 시작.
		xssfRow = xssfSheet.createRow(rowNo++); // 행 객체 추가
		//타이틀 행 생성하기.
		xssfRow.createCell(0).setCellValue("user_sno");
		xssfRow.createCell(1).setCellValue("kakao_id");
		xssfRow.createCell(2).setCellValue("name");
		xssfRow.createCell(3).setCellValue("phone");
		xssfRow.createCell(4).setCellValue("address");

		for(int i=0; i<3000; i++) {
			makeUser();
			User user =userMap.get(i);
			xssfRow = xssfSheet.createRow(rowNo++); // 행 객체 추가
			xssfRow.createCell(0).setCellValue(user.getUserSno());
			xssfRow.createCell(1).setCellValue(user.getKakaoId());
			xssfRow.createCell(2).setCellValue(user.getName());
			xssfRow.createCell(3).setCellValue(user.getPhone());
			xssfRow.createCell(4).setCellValue(user.getAddress());
		}

		String localFile = "C:/Users/SSAFY/Desktop/" +"user"+ ".xlsx";
		File file = new File(localFile);
		FileOutputStream fos = null;
		try {
			fos = new FileOutputStream(file);
			try {
				xssfWb.write(fos);
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
			if (fos != null) {
				try {
					fos.close();
				} catch (IOException e) {
					throw new RuntimeException(e);
				}
			}
		} catch (FileNotFoundException e) {
			throw new RuntimeException(e);
		}


	}

	public void makePetList() {
		int rowNo = 0;

		XSSFWorkbook xssfWb = null;
		XSSFSheet xssfSheet = null;
		XSSFRow xssfRow = null;

		xssfWb = new XSSFWorkbook(); //XSSFWorkbook 객체 생성
		xssfSheet = xssfWb.createSheet("펫"); // 워크시트 이름 설정.

		//새 행부터 시작.
		xssfRow = xssfSheet.createRow(rowNo++); // 행 객체 추가
		//타이틀 행 생성하기.
		xssfRow.createCell(0).setCellValue("pet_sno");
		xssfRow.createCell(1).setCellValue("user_sno");
		xssfRow.createCell(2).setCellValue("target_no");
		xssfRow.createCell(3).setCellValue("name");
		xssfRow.createCell(4).setCellValue("birth");
		xssfRow.createCell(5).setCellValue("fat");
		
		for(int i=0; i<3000; i++) {
			makePet();
			Pet pet =petMap.get(i);
			xssfRow = xssfSheet.createRow(rowNo++); // 행 객체 추가
			xssfRow.createCell(0).setCellValue(pet.getPetSno());
			xssfRow.createCell(1).setCellValue(pet.getUserSno());
			xssfRow.createCell(2).setCellValue(pet.getTargetNo());
			xssfRow.createCell(3).setCellValue(pet.getName());
			xssfRow.createCell(4).setCellValue(pet.getBirth());
			xssfRow.createCell(5).setCellValue(pet.getFat());
			
		}

		String localFile = "C:/Users/SSAFY/Desktop/" +"pet"+ ".xlsx";
		File file = new File(localFile);
		FileOutputStream fos = null;
		try {
			fos = new FileOutputStream(file);
			try {
				xssfWb.write(fos);
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
			if (fos != null) {
				try {
					fos.close();
				} catch (IOException e) {
					throw new RuntimeException(e);
				}
			}
		} catch (FileNotFoundException e) {
			throw new RuntimeException(e);
		}


	}
}
