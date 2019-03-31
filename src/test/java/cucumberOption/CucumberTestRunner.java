package cucumberOption;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = true,
		features ="src/test/java/features",
				glue ="src/test/java/stepDefinitions",
				monochrome = true,
				plugin = {"pretty","html:target/site/cucumber-report-default",
					"json:target/site/cucumber.json"	},
				snippets = SnippetType.CAMELCASE,
				tags= {"@login"}
		
		)
// de setting cho cucumber

public class CucumberTestRunner {

}
