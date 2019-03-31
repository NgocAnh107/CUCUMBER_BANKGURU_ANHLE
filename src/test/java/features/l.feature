
@login
Feature: Login feature
	As a PO
	I want login to system
	So that make sure login function work well

  Scenario: Register to system
	Given I open system
	And I get login page Url
	And I click to here link
	And I input to email textbox with data "automation"
	And I click to submit button at Register page 
	Then I get User info
	And I get Password info
	When I open login page again
	

  Scenario: Login to system
	Given I input to Usernanme textbox
	And I input to Password textbox
	And I click to login button at Login page
	Then Verify Home page dislayed with message "Welcome To Manager's page of Guru99 Bank"


  