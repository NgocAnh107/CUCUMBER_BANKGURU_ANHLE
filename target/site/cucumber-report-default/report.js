$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "As a PO\nI want login to system\nSo that make sure login function work well",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Register to system",
  "description": "",
  "id": "login-feature;register-to-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I open system",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I get login page Url",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to here link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I input to email textbox with data \"automation\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click to submit button at Register page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get User info",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I get Password info",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I open login page again",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I input to Usernanme textbox",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input to Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click to login button at Login page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify Home page dislayed with message \"Welcome To Manager\u0027s Page of Guru99 Bank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterAndLoginSteps.iOpenSystem()"
});
formatter.result({
  "duration": 6361443724,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nnull\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027HT-PC\u0027, ip: \u0027169.254.218.88\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:129)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat stepDefinitions.RegisterAndLoginSteps.iOpenSystem(RegisterAndLoginSteps.java:23)\r\n\tat ✽.Given I open system(login.feature:9)\r\nCaused by: org.openqa.selenium.firefox.UnableToCreateProfileException: java.io.IOException: There is not enough space on the disk\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027HT-PC\u0027, ip: \u0027169.254.218.88\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.layoutOnDisk(FirefoxProfile.java:427)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:85)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat stepDefinitions.RegisterAndLoginSteps.iOpenSystem(RegisterAndLoginSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:539)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:761)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:461)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:207)\r\nCaused by: java.io.IOException: There is not enough space on the disk\r\n\tat sun.nio.ch.FileDispatcherImpl.write0(Native Method)\r\n\tat sun.nio.ch.FileDispatcherImpl.write(FileDispatcherImpl.java:75)\r\n\tat sun.nio.ch.IOUtil.writeFromNativeBuffer(IOUtil.java:93)\r\n\tat sun.nio.ch.IOUtil.write(IOUtil.java:51)\r\n\tat sun.nio.ch.FileChannelImpl.write(FileChannelImpl.java:211)\r\n\tat sun.nio.ch.FileChannelImpl.transferToTrustedChannel(FileChannelImpl.java:516)\r\n\tat sun.nio.ch.FileChannelImpl.transferTo(FileChannelImpl.java:612)\r\n\tat org.openqa.selenium.io.FileHandler.copyFile(FileHandler.java:195)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:159)\r\n\tat org.openqa.selenium.io.FileHandler.copyDir(FileHandler.java:178)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:157)\r\n\tat org.openqa.selenium.io.FileHandler.copyDir(FileHandler.java:178)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:157)\r\n\tat org.openqa.selenium.io.FileHandler.copy(FileHandler.java:144)\r\n\tat org.openqa.selenium.firefox.internal.FileExtension.writeTo(FileExtension.java:72)\r\n\tat org.openqa.selenium.firefox.internal.ClasspathExtension.writeTo(ClasspathExtension.java:64)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.installExtensions(FirefoxProfile.java:443)\r\n\tat org.openqa.selenium.firefox.FirefoxProfile.layoutOnDisk(FirefoxProfile.java:421)\r\n\t... 46 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iGetLoginPageUrl()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToHereLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "automation",
      "offset": 36
    }
  ],
  "location": "RegisterAndLoginSteps.iInputToEmailTextboxWithData(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToSubmitButtonAtRegisterPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iGetUserInfo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iGetPasswordInfo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iOpenLoginPageAgain()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputToUsernanmeTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputToPasswordTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToLoginButtonAtLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome To Manager\u0027s Page of Guru99 Bank",
      "offset": 40
    }
  ],
  "location": "RegisterAndLoginSteps.verifyHomePageDislayedWithMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});