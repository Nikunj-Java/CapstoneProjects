package com.testngselenium.demo;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class CalculatorTest2 {
	
	//WebDriver driver;
	static AppiumDriver<MobileElement> driver;
	//AndroidDriver driver
	public static void main(String[] args) {
		try {
			openCalculator();
			performCalculation();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getCause());
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		
	}
	public static void openCalculator() throws MalformedURLException {
		DesiredCapabilities cap=new DesiredCapabilities();
		 
		//set the device name
		cap.setCapability("deviceName", "Redmi 10A");
		//add device id from cmd
		cap.setCapability("udid", "HAGEUCSSOFXC5LVC");
		//add platform name
		cap.setCapability("platformName", "Android");
		//add platformVersion from mobile-11 RP1A.200720.011
		cap.setCapability("platformVersion", "11 RP1A.200720.011");
		//add package name from mobile
		cap.setCapability("appPackage", "com.miui.calculator");
		//add package name
		cap.setCapability("appActivity", "com.miui.calculator.cal.CalculatorActivity");
		cap.setCapability("automationName", "UiAutomator2");
	
		URL url=new URL("http://192.168.1.100:4723/wd/hub");
		driver=new AppiumDriver<MobileElement>(url,cap);
		System.out.println("Application Started");
		
	}
	public static void performCalculation() {
        try {
            // Find and click the number 5 button
            WebElement fiveButton = driver.findElement(By.id("com.miui.calculator:id/btn_5"));
            fiveButton.click();
            System.out.println("Clicked 5");

            // Find and click the addition (+) button
            WebElement plusButton = driver.findElement(By.id("com.miui.calculator:id/btn_add"));
            plusButton.click();
            System.out.println("Clicked +");

            // Find and click the number 3 button
            WebElement threeButton = driver.findElement(By.id("com.miui.calculator:id/btn_3"));
            threeButton.click();
            System.out.println("Clicked 3");

            // Find and click the equals (=) button
            WebElement equalsButton = driver.findElement(By.id("com.miui.calculator:id/btn_eq"));
            equalsButton.click();
            System.out.println("Clicked =");

            // Optionally, validate the result
            WebElement result = driver.findElement(By.id("com.miui.calculator:id/result"));
            String resultText = result.getText();
            System.out.println("Result: " + resultText);
        } catch (Exception e) {
            System.out.println("Error during calculation:");
            System.out.println("Cause: " + e.getCause());
            System.out.println("Message: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
