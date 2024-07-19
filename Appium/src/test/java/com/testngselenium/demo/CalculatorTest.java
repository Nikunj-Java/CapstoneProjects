package com.testngselenium.demo;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class CalculatorTest {
	
	//WebDriver driver;
	static AppiumDriver<MobileElement> driver;
	//AndroidDriver driver
	public static void main(String[] args) {
		try {
			openCalculator();
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
	
		URL url=new URL("http://192.168.1.100:4723/wd/hub");
		driver=new AppiumDriver<MobileElement>(url,cap);
		System.out.println("Application Started");
	}

}
