package crawling;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import crawling.Crawling.Feed;
import object.Bridge;
import util.CommonUtil;

public class Review {
	public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
	public static final String WEB_DRIVER_PATH = "C:\\Users\\KMLEE\\Downloads\\chromedriver.exe";

	public static void main(String[] args) {
		StringBuilder sb = new StringBuilder();

		try {
			System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
		} catch (Exception e) {
			e.printStackTrace();
		}

		WebDriver driver = new ChromeDriver();
		JavascriptExecutor js = (JavascriptExecutor) driver;

		for (int page = 1; page <= 1; page++) {
			// 해당 페이지의 html로 이동 후 스크롤
			String url = "https://search.shopping.naver.com/search/all?frm=NVSHATC&origQuery=%EC%9C%A0%EA%B8%B0%EB%86%8D%20%EC%82%AC%EB%A3%8C"
					+ "&pagingIndex=" + page
					+ "&pagingSize=40&productSet=total&query=%EC%9C%A0%EA%B8%B0%EB%86%8D%20%EC%82%AC%EB%A3%8C&sort=rel&timestamp=&viewType=list";
			driver.get(url);

			for (int i = 0; i < 15; i++) {
				js.executeScript("window.scrollBy(0," + (600 + i * 20) + ")");
				try {
					Thread.sleep(100);
				} catch (InterruptedException e1) {
					e1.printStackTrace();
				}
			}

			// 해당 페이지 가져옴
			List<WebElement> el1 = driver.findElements(By.className("basicList_item__0T9JD"));
			for (int i = 0; i < 1; i++) {
				// 큰 영역 가져오기
				WebElement innerDiv = el1.get(i).findElement(By.className("basicList_inner__xCM3J"));
				// 이미지 영역 가져오기
				WebElement imageA = innerDiv.findElement(By.className("thumbnail_thumb__Bxb6Z"));
				String href = imageA.getAttribute("href");
				driver.get(href);

				try {
					Thread.sleep(5000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

				for (int k = 0; k < 4; k++) {
					List<WebElement> reviewList = driver.findElements(By.className("_2389dRohZq"));
//					System.out.println(k+"----------------------------------------------------------");
//					System.out.println(reviewList.size());

					for (int j = 0; j < reviewList.size(); j++) {

						String score = reviewList.get(j).findElement(By.className("_15NU42F3kT")).getText();
						WebElement contentDiv = reviewList.get(j).findElement(By.className("YEtwtZFLDz"));
						String content = contentDiv.findElement(By.className("_3QDEeS6NLn")).getText();

//						System.out.println(score);
//						System.out.println(content);
//						System.out.println();
					}
					
					WebElement next = driver.findElement(By.className("_2Ar8-aEUTq"));
					next.click();
					next.click();
					
					try {
						Thread.sleep(2000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
					
					
				}

			}

		}

//		// 자원 반납
//		try {
//			// 드라이버가 null이 아니라면
//			if (driver != null) {
//				// 드라이버 연결 종료
//				driver.close(); // 드라이버 연결 해제
//
//				// 프로세스 종료
//				driver.quit();
//			}
//		} catch (Exception e) {
//			throw new RuntimeException(e.getMessage());
//		}

	}
}
