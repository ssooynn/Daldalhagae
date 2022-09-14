package crawling;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Crawling {
	public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
	public static final String WEB_DRIVER_PATH = "C:\\Users\\SSAFY\\Downloads\\chromedriver.exe";

	public static void main(String[] args) {
		int maxPage = 4;
		List<String> itemList = new ArrayList<String>();

		try {
			System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
		} catch (Exception e) {
			e.printStackTrace();
		}

		ChromeOptions options = new ChromeOptions();
		options.addArguments("headless");

		WebDriver driver = new ChromeDriver(options);

		// 모든 리스트 uri 가져오기
		for (int page = 1; page <= maxPage; page++) {

			// 해당 페이지의 html로 이동
			String url = "https://www.dogpang.com/shop/goods/goods_list.php?category=002002010&scroll=0&brandType&page=";
			url += page;

			driver.get(url);
			// calssName이 flex-root 인걸 가져옴
			List<WebElement> el1 = driver.findElements(By.className("flex-root"));

			for (int i = 0; i < el1.size(); i++) {
				// 처음으로 만나는 flex-link의 속성 href의 값을 가져옴
				String str = el1.get(i).findElement(By.className("flex-link")).getAttribute("href");
				itemList.add(str);
			}
		}

		// 저장할 폴더 생성
		String folderName = "feedImage";
		File folder = new File(folderName);

		if (!folder.exists()) {
			folder.mkdir();
		}

		StringBuilder sb = new StringBuilder();
		// 상품 uri로 이동 후 안에 있는 이미지, 내용, 타이틀 크롤링
		for (int i = 0; i < itemList.size(); i++) {
			BufferedImage saveImage = null;
			Feed feed = new Feed();
			String url = itemList.get(i);
			driver.get(url);

			List<WebElement> contentList = driver.findElements(By.className("add-info"));
			WebElement title = driver.findElement(By.id("viewName"));
			WebElement image = driver.findElement(By.id("photo_detail"));
			String imageStr = image.getAttribute("src");
			feed.setTitle(title.getText());

			// 이미지 데이터로 변환
			try {
				saveImage = ImageIO.read(new URL(imageStr));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			int lastIndex = imageStr.lastIndexOf("/");
			String fileName = imageStr.substring(lastIndex + 1, imageStr.length());
			feed.setImage(fileName);
			
			// 만약 이미지 있으면 폴더에 저장
//			if(saveImage != null) {
//				try {
//					int lastIndex = imageStr.lastIndexOf("/");
//					String fileName = imageStr.substring(lastIndex+1, imageStr.length());
//					ImageIO.write(saveImage,"jpg",new File(folderName+"/"+fileName));
//				} catch (IOException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			}			

			for (WebElement we : contentList) {
				String t = we.findElement(By.tagName("dt")).getText();
				String str = we.findElement(By.tagName("dd")).getText();
				feed.setMatch(t, str);
			}
			System.out.println(feed.toString());

			sb.append(feed.toString());
		}


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

	public static void insertData() {

	}

	// 사료
	public static class Feed {
		String title;
		String image;
		String country;
		String maker;
		String shelfLife;
		String encourageAge;
		String weight;

		public void setCountry(String country) {
			this.country = country;
		}

		public void setMaker(String maker) {
			this.maker = maker;
		}

		public void setShelfLife(String shelfLife) {
			this.shelfLife = shelfLife;
		}

		public void setEncourageAge(String encourageAge) {
			this.encourageAge = encourageAge;
		}

		public void setWeight(String weight) {
			this.weight = weight;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public void setImage(String image) {
			this.image = image;
		}

		@Override
		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append(title);
			builder.append(", ");
			builder.append(image);
			builder.append(", ");
			builder.append(country);
			builder.append(", ");
			builder.append(maker);
			builder.append(", ");
			builder.append(shelfLife);
			builder.append(", ");
			builder.append(encourageAge);
			builder.append(", ");
			builder.append(weight);
			builder.append("\n");
			return builder.toString();
		}

		public void setMatch(String t, String el) {
			if (t.equals(ConstUtil.COUNTRY)) {
				this.country = el;
			} else if (t.equals(ConstUtil.ENCOURAGE_AGE)) {
				this.encourageAge = el;
			} else if (t.equals(ConstUtil.MAKER)) {
				this.maker = el;
			} else if (t.equals(ConstUtil.SHELF_LIFE)) {
				this.shelfLife = el;
			} else if (t.equals(ConstUtil.WEIGHT)) {
				this.weight = el;
			}
		}

	}
}
