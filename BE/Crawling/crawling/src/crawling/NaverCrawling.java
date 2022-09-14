package crawling;

import java.awt.image.BufferedImage;
import java.io.*;
import java.net.URL;
import java.text.DecimalFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ByTagName;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import object.Bridge;
import object.Feed;
import util.CommonUtil;

public class NaverCrawling {
	public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
	public static final String WEB_DRIVER_PATH = "C:\\Users\\KMLEE\\Downloads\\chromedriver.exe";
	public static Map<String, Integer>[] detailMap;
	public static List<Bridge>[] bridgeList;
	public static int cnt = 5;
	public static Set<String> titleSet, fkeySet;
	public static int[] arr = new int[62];
	public static String fkey;
	public static String skey;
	public static List<Feed> listFeed;

	public static String getUrl(int a, int b){
		if(a==1){
			return "https://search.shopping.naver.com/search/all?frm=NVSHATC&origQuery=%EA%B0%95%EC%95%84%EC%A7%80%EC%82%AC%EB%A3%8C"
					+ "&pagingIndex=" + b
					+ "&pagingSize=40&productSet=total&query=%EA%B0%95%EC%95%84%EC%A7%80%EC%82%AC%EB%A3%8C&sort=rel&timestamp=&viewType=list";

		} else if (a==2) {
			return "https://search.shopping.naver.com/search/all?frm=NVSHATC&origQuery=%EA%B0%95%EC%95%84%EC%A7%80%20%EA%B0%84%EC%8B%9D&pagingIndex=" +
					b +
					"&pagingSize=40&productSet=total&query=%EA%B0%95%EC%95%84%EC%A7%80%20%EA%B0%84%EC%8B%9D&sort=rel&timestamp=&viewType=list";

		}
		return "";


	};

	public static void main(String[] args) throws IOException {
		StringBuilder sb = new StringBuilder();
		detailMap = new HashMap[cnt];
		bridgeList = new ArrayList[cnt];
		titleSet = new HashSet<>();
		fkeySet = new HashSet<>();
		listFeed = new ArrayList<>();
		fkey = "";

		//파일저장
//		String reviewFilePath = "C:/Users/KMLEE/Desktop/review.csv";
//		File reviewFile = null;
//		BufferedWriter bw = null;
//		String NEWLINE = System.lineSeparator();
//
//		reviewFile = new File(reviewFilePath);
//		bw = new BufferedWriter(new FileWriter(reviewFile));
		int rowNo = 0;

		XSSFWorkbook xssfWb = null;
		XSSFSheet xssfSheet = null;
		XSSFRow xssfRow = null;

		xssfWb = new XSSFWorkbook(); //XSSFWorkbook 객체 생성
		xssfSheet = xssfWb.createSheet("리뷰"); // 워크시트 이름 설정.

		//새 행부터 시작.
		xssfRow = xssfSheet.createRow(rowNo++); // 행 객체 추가
		//타이틀 행 생성하기.
		xssfRow.createCell(1).setCellValue("item_sno");
		xssfRow.createCell(2).setCellValue("rate");
		xssfRow.createCell(3).setCellValue("content");



		for (int i = 0; i < 62; i++) {
			if (i < 10) {
				arr[i] = 48 + i;
			} else if (i >= 10 && i < 36) {
				arr[i] = 55 + i;
			} else {
				arr[i] = 61 + i;
			}
		}

		for (int i = 0; i < cnt; i++) {
			detailMap[i] = new HashMap<>();
			bridgeList[i] = new ArrayList<>();
		}

		try {
			System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
		} catch (Exception e) {
			e.printStackTrace();
		}
//		ChromeOptions options = new ChromeOptions();
//		options.addArguments("headless");
//		WebDriver driver = new ChromeDriver(options);
		WebDriver driver = new ChromeDriver();
		JavascriptExecutor js = (JavascriptExecutor) driver;
		for(int x = 1; x<=2;x++) {


			sb.append("-----------------------------------------------");
			sb.append("\n");

			for (int page = 1; page <= 1; page++) {
				// 해당 페이지의 html로 이동 후 스크롤
				String url=getUrl(x,page);

				driver.get(url);

				for (int i = 0; i < 18; i++) {
					js.executeScript("window.scrollBy(0," + (600 + i * 20) + ")");
					try {
						Thread.sleep(100);
					} catch (InterruptedException e1) {
						e1.printStackTrace();
					}
				}

				// 해당 페이지 가져옴
				List<WebElement> el1 = driver.findElements(By.className("basicList_item__0T9JD"));
				for (int i = 0; i < el1.size(); i++) {
					// 큰 영역 가져오기
					WebElement innerDiv = el1.get(i).findElement(By.className("basicList_inner__xCM3J"));

					// 제목 가져오기
					String title = innerDiv.findElement(By.className("basicList_title__VfX3c")).getText().replaceAll(
							"[0-9]+(?i)g\\s|[0-9]*.[0-9]+(?i)kg|\\[.*\\]|\\(.*배송,*\\)|\\(.*무료.*\\)|[0-9]+종|택[0-9]+|^(강아지)$",
							"").replaceAll("\\s{2,}", " ").trim();
					if (titleSet.contains(title))
						continue;
					titleSet.add(title);
					if (x == 1) {
						fkey = "f" + randomKey();
					} else
						fkey = "s" + randomKey();
					while (fkeySet.contains(fkey)) {
						if (x == 1) {
							fkey = "f" + randomKey();
						} else
							fkey = "s" + randomKey();
					}
					fkeySet.add(fkey);


					// 이미지 영역 가져오기
					WebElement imageA = innerDiv.findElement(By.className("thumbnail_thumb__Bxb6Z"));
					WebElement img = imageA.findElement(By.tagName("img"));
					String src = img.getAttribute("src");
					String imageName = "";
					String reviewUrl = imageA.getAttribute("href");

					// 디테일가져오기
					WebElement detail = innerDiv.findElement(By.className("basicList_detail_box__OoXKt"));
					String detailText = detail.getText();

					if(x==1)
					if (!subDetail(detailText))
						continue;

					// 사료 객체 생성
					Feed feed = new Feed();
					feed.setSno(fkey);
					feed.setTitle(title);
					imageName = ImageTransfrom(src);
					feed.setImage(imageName);
					feed.setReviewUrl(reviewUrl);

					sb.append(feed);
					listFeed.add(feed);
				}
			}
		}
		// 리뷰
		for (int i = 0; i < listFeed.size(); i++) {
			Feed rfeed = listFeed.get(i);
			driver.get(rfeed.getReviewUrl());
			
			String url = driver.getCurrentUrl();
			System.out.println(url);
			// 네이버스토어인 경우
			if (url.contains("smartstore.naver.com")) {
				int cnt =0;
				
				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				List<WebElement> cntList = driver.findElements(
						By.cssSelector(".z7cS6-TO7X > ._27jmWaPaKy > ul > li > a"));

				for (int j = 0; j < cntList.size(); j++) {
					String kind = cntList.get(j).getText();
					if (kind.contains("리뷰")) {
						try {
							String cntStr = cntList.get(j).findElement(By.className("_3HJHJjSrNK")).getText().replaceAll(",","");
							cnt = Integer.parseInt(cntStr);
							System.out.println(cnt);
						} catch (Exception e) {
							System.out.println("sdffsd");
						}
					}
				}

				if(cnt==0) {
					continue;
				}
				
				int pagingCnt = cnt / 20 + 1;

				for (int k = 1; k <= pagingCnt; k++) {
					List<WebElement> reviewList = driver.findElements(By.className("_2389dRohZq"));

					for (int j = 0; j < reviewList.size(); j++) {

						String score = reviewList.get(j).findElement(By.className("_15NU42F3kT")).getText();
						WebElement contentDiv = reviewList.get(j).findElement(By.className("YEtwtZFLDz"));
						String content = contentDiv.findElement(By.className("_3QDEeS6NLn")).getText();
						System.out.println("스토어");
						System.out.println(rfeed.getSno());
						System.out.println(score);
						System.out.println(content);
						System.out.println();


//						System.out.println(String.format("%s,%s,%s",rfeed.getSno(),score,content));
//						bw.write(String.format("%s,%s,%s",rfeed.getSno(),score,content));
//						bw.write(NEWLINE)
						System.out.println(rowNo+"번 행에 쓰는중");
						xssfRow = xssfSheet.createRow(rowNo++); // 행 객체 추가
						xssfRow.createCell(1).setCellValue(rfeed.getSno());
						xssfRow.createCell(2).setCellValue(score);
						xssfRow.createCell(3).setCellValue(content);

					}

					System.out.println(k);
					System.out.println(pagingCnt);

					if (k == pagingCnt){
						//액셀파일 저장
						String localFile = "C:/Users/KMLEE/Desktop/exceldata/" + rfeed.getSno()+ ".xlsx";
						File file = new File(localFile);
						FileOutputStream fos = null;
						fos = new FileOutputStream(file);
						xssfWb.write(fos);
						if (fos != null) fos.close();
						//
						break;
					}

					
					WebElement next = driver.findElement(By.className("_2Ar8-aEUTq"));
					next.click();

					
					
					try {
						Thread.sleep(500);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}

				}

				// 네이버 쇼핑인 경우
			} else if (url.contains("shopping.naver.com")) {
				int cnt = 0;

				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

				List<WebElement> cntList = driver.findElements(
						By.cssSelector(".style_detail__nvTm_ > .floatingTab_detail_tab__akl87 > ul > li > a"));

				for (int j = 0; j < cntList.size(); j++) {
					String kind = cntList.get(j).findElement(By.tagName("strong")).getText();
					if (kind.equals("쇼핑몰리뷰")) {
						try {
							String cntStr = cntList.get(j).findElement(By.tagName("em")).getText().replaceAll(",", "");
							cnt = Integer.parseInt(cntStr);
							System.out.println(cnt);
						} catch (Exception e) {
							System.out.println("sdffsd");
						}
					}
				}

				if(cnt==0) {
					continue;
				}
				
				int pagingCnt = cnt / 20 + 1;

				for (int k = 1; k <= pagingCnt; k++) {
					if (k == 11){
						//액셀파일 저장
						String localFile = "C:/Users/KMLEE/Desktop/exceldata/" + rfeed.getSno()+ ".xlsx";
						File file = new File(localFile);
						FileOutputStream fos = null;
						fos = new FileOutputStream(file);
						xssfWb.write(fos);
						if (fos != null) fos.close();
						//
						break;
					}

					List<WebElement> reviewList = driver.findElements(By.cssSelector("#section_review > ul > li"));
//			System.out.println(k+"----------------------------------------------------------");
//			System.out.println(reviewList.size());

					for (int j = 0; j < reviewList.size(); j++) {

						String score = reviewList.get(j).findElement(By.className("reviewItems_average__0kLWX"))
								.getText().replaceAll("평점", "");
						WebElement contentDiv = reviewList.get(j)
								.findElement(By.className("reviewItems_review__DqLYb"));
						String content = contentDiv.findElement(By.className("reviewItems_text__XrSSf")).getText();
						System.out.println(rfeed.getSno());
						System.out.println(score);
						System.out.println(content);
						System.out.println();
//						bw.write(String.format("%s|%s|%s",rfeed.getSno(),score,content));
//						bw.write(NEWLINE);
						System.out.println(rowNo+"번 행에 쓰는중");
						xssfRow = xssfSheet.createRow(rowNo++); // 행 객체 추가
						xssfRow.createCell(1).setCellValue(rfeed.getSno());
						xssfRow.createCell(2).setCellValue(score);
						xssfRow.createCell(3).setCellValue(content);

					}

					if (k == pagingCnt){
						//액셀파일 저장
						String localFile = "C:/Users/KMLEE/Desktop/exceldata/" + rfeed.getSno()+ ".xlsx";
						File file = new File(localFile);
						FileOutputStream fos = null;
						fos = new FileOutputStream(file);
						xssfWb.write(fos);
						if (fos != null) fos.close();
						//
						break;

					}



					WebElement paginDiv = driver.findElement(By.className("review_section_review__GDdvh"));
					WebElement aDiv = paginDiv.findElement(By.cssSelector(".pagination_now__Ey_sR + a"));
					aDiv.click();

					try {
						Thread.sleep(500);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}

				}

			}

		}


		sb.append("-------------------\n");
		sb.append(CommonUtil.FUNCTION);
		sb.append("\n");
		sb.append(parse(detailMap[0]));
		sb.append("\n");
		for (Bridge b : bridgeList[0]) {
			sb.append(b);
		}
		sb.append("-------------------\n");

		sb.append(CommonUtil.GRADE);
		sb.append("\n");
		sb.append(parse(detailMap[1]));
		sb.append("\n");
		for (Bridge b : bridgeList[1]) {
			sb.append(b);
		}
		sb.append("-------------------\n");

		sb.append(CommonUtil.MATERIAL);
		sb.append("\n");
		sb.append(parse(detailMap[2]));
		sb.append("\n");
		for (Bridge b : bridgeList[2]) {
			sb.append(b);
		}
		sb.append("-------------------\n");

		sb.append(CommonUtil.PARTICLE);
		sb.append("\n");
		sb.append(parse(detailMap[3]));
		sb.append("\n");
		for (Bridge b : bridgeList[3]) {
			sb.append(b);
		}
		sb.append("-------------------\n");

		sb.append(CommonUtil.TARGET);
		sb.append("\n");
		sb.append(parse(detailMap[4]));
		sb.append("\n");
		for (Bridge b : bridgeList[4]) {
			sb.append(b);
		}
		sb.append("-------------------\n");

		System.out.println(sb);
		// 자원 반납
		try {
			// 드라이버가 null이 아니라면
			if (driver != null) {
				// 드라이버 연결 종료
				driver.close(); // 드라이버 연결 해제

				// 프로세스 종료
				driver.quit();
			}
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage());
		}
	}

	// 이미지 저장
	public static String ImageTransfrom(String src) {
		// 저장할 폴더 생성
		String folderName = "feedImage";
		String fileName = "";
		BufferedImage saveImage = null;
		File folder = new File(folderName);

		if (!folder.exists()) {
			folder.mkdir();
		}

		// 이미지 데이터로 변환
		try {
			saveImage = ImageIO.read(new URL(src));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 만약 이미지 있으면 폴더에 저장
//		if (saveImage != null) {
//			try {
//				int lastIndex = src.lastIndexOf("/");
//				int lastIndex2 = src.lastIndexOf("?");
//				fileName = src.substring(lastIndex + 1, lastIndex2);
//				ImageIO.write(saveImage, "jpg", new File(folderName + "/" + fileName));
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
		if (saveImage != null) {
			int lastIndex = src.lastIndexOf("/");
			int lastIndex2 = src.lastIndexOf("?");
			fileName = src.substring(lastIndex + 1, lastIndex2);
		}

		return fileName;
	}

	// 디테일 분할
	public static boolean subDetail(String detailText) {
		String subDetail[] = detailText.split("\\|");
		List<String[]> detailNames = new ArrayList<>();
		boolean gradeCheck = false;

		for (String s1 : subDetail) {
			if (s1 == null || "".equals(s1))
				continue;
			String[] sdd = s1.split(" : ");
			detailNames.add(sdd);

			if (sdd[0].equals(CommonUtil.GRADE)) {
				if (sdd[1].contains("홀리스틱(1등급)") || sdd[1].contains("유기농") || sdd[1].contains("로가닉")
						|| sdd[1].contains("그레인프리"))
					gradeCheck = true;
			}

		}

		if (!gradeCheck)
			return false;

		for (String[] s : detailNames) {
			setDetail(s);
		}

		return true;
	}

	// 디테일 종류 찾아 넣기
	public static void setDetail(String[] sdd) {

		String[] el;
		switch (sdd[0]) {
		case CommonUtil.FUNCTION:
			el = sdd[1].split(",");

			for (String s : el) {
				if (s.charAt(0) == 32) {
					s = s.substring(1);
				}
				if ("".equals(s)) {
					continue;
				}
				if (!detailMap[0].containsKey(s)) {
					int no = detailMap[0].size() + 1;
					detailMap[0].put(s, no);
				}
				int no = detailMap[0].get(s);
				bridgeList[0].add(new Bridge(fkey, no));
			}

			break;
		case CommonUtil.GRADE:
			el = sdd[1].split(",");

			for (String s : el) {
				if (s.charAt(0) == 32) {
					s = s.substring(1);
				}
				if ("".equals(s)) {
					continue;
				}
				if (!detailMap[1].containsKey(s)) {
					int no = detailMap[1].size() + 1;
					detailMap[1].put(s, no);
				}
				int no = detailMap[1].get(s);
				bridgeList[1].add(new Bridge(fkey, no));
			}

			break;
		case CommonUtil.MATERIAL:
			el = sdd[1].split(",");

			for (String s : el) {
				if (s.charAt(0) == 32) {
					s = s.substring(1);
				}
				if ("".equals(s)) {
					continue;
				}
				if (!detailMap[2].containsKey(s)) {
					int no = detailMap[2].size() + 1;
					detailMap[2].put(s, no);
				}
				int no = detailMap[2].get(s);
				bridgeList[2].add(new Bridge(fkey, no));
			}

			break;
		case CommonUtil.PARTICLE:
			el = sdd[1].split(",");

			for (String s : el) {
				if (s.charAt(0) == 32) {
					s = s.substring(1);
				}
				if ("".equals(s)) {
					continue;
				}
				if (!detailMap[3].containsKey(s)) {
					int no = detailMap[3].size() + 1;
					detailMap[3].put(s, no);
				}
				int no = detailMap[3].get(s);
				bridgeList[3].add(new Bridge(fkey, no));
			}

			break;
		case CommonUtil.TARGET:
			el = sdd[1].split(",");

			for (String s : el) {
				if (s.charAt(0) == 32) {
					s = s.substring(1);
				}
				if ("".equals(s)) {
					continue;
				}
				if (!detailMap[4].containsKey(s)) {
					int no = detailMap[4].size() + 1;
					detailMap[4].put(s, no);
				}
				int no = detailMap[4].get(s);
				bridgeList[4].add(new Bridge(fkey, no));
			}

			break;

		default:
			break;
		}

	}

	// map -> String 형식으로 변환
	public static String parse(Map<String, Integer> map) {
		StringBuilder sb = new StringBuilder();

		List<Map.Entry<String, Integer>> entryList = new LinkedList<>(map.entrySet());
		entryList.sort((o1, o2) -> o1.getValue() - o2.getValue());
		for (Map.Entry<String, Integer> entry : entryList) {
			sb.append(entry.getValue());
			sb.append(", ");
			sb.append(entry.getKey());
			sb.append("\n");
		}

		return sb.toString();
	}

	// 난수 키 생성
	public static String randomKey() {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < 20; i++) {
			int ran = (int) (Math.random() * 62);
			sb.append((char) arr[ran]);
		}

		return sb.toString();
	}

}
