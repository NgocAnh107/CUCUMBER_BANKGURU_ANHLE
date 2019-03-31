package stepDefinitions;

import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterAndLoginSteps {
	WebDriver driver;
	String loginPageUrl, userID,email,  password;
	
	
	@Given("^I open system$")
	public void iOpenSystem()  {
		driver = new FirefoxDriver();
		driver.get("http://demo.guru99.com/v4/");
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		
	    
	   
	}

	@Given("^I get login page Url$")
	public void iGetLoginPageUrl()  {
	    loginPageUrl =  driver.getCurrentUrl();
	   
	}

	@Given("^I click to here link$")
	public void iClickToHereLink()  {
		driver.findElement(By.xpath("//a[text()=\"here\"]")).click();
	    
	   
	}

	@Given("^I input to email textbox with data \"([^\"]*)\"$")
	public void iInputToEmailTextboxWithData(String emailValue)  {
		email = emailValue +  randomValue() +"@gmail.com";
	    driver.findElement(By.xpath("//input[@name='emailid']")).sendKeys(email);
	   
	}

	@Given("^I click to submit button at Register page$")
	public void iClickToSubmitButtonAtRegisterPage()  {
		  driver.findElement(By.xpath("//input[@value='Submit']")).click();;
	   
	}

	@Then("^I get User info$")
	public void iGetUserInfo()  {
		userID = driver.findElement(By.xpath("//td[text()='User ID :']/following-sibling::td")).getText();
	   
	   
	}

	@Then("^I get Password info$")
	public void iGetPasswordInfo()  {
		   password = driver.findElement(By.xpath("//td[text()='Password :']/following-sibling::td")).getText();
		   
	   
	}

	@When("^I open login page again$")
	public void iOpenLoginPageAgain()  {
	    driver.get(loginPageUrl);
	   
	}

	@Given("^I input to Usernanme textbox$")
	public void iInputToUsernanmeTextbox()  {
	    driver.findElement(By.xpath("//input[@name='uid']")).sendKeys(userID);
	   
	}

	@Given("^I input to Password textbox$")
	public void iInputToPasswordTextbox()  {
		   driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	   
	}

	@Given("^I click to login button at Login page$")
	public void iClickToLoginButtonAtLoginPage()  {
		driver.findElement(By.xpath("//input[@value='LOGIN']")).click();;
	   
	}

	@Then("^Verify Home page dislayed with message \"([^\"]*)\"$")
	public void verifyHomePageDislayedWithMessage(String welcomeMessage)  {
		  
	   Assert.assertTrue(driver.findElement(By.xpath("//marquee[text()=\""+welcomeMessage+"\"]")).isDisplayed());
	}
	
	public int randomValue() {
		Random ran = new Random();
		return ran.nextInt(99999);
	}



}
