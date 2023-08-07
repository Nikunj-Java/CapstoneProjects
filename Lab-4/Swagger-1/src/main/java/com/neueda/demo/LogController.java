// Rest Controller to print various log level messages
package com.neueda.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogController {

	// creating a logger
	Logger logger
		= LoggerFactory.getLogger(LogController.class);

	@RequestMapping("/log") public String log()
	{
		// Logging various log level messages
		logger.trace("Log level: TRACE");
		logger.info("Log level: INFO");
		logger.debug("Log level: DEBUG");
		logger.error("Log level: ERROR");
		logger.warn("Log level: WARN");

		return "Hey! You can check the output in the logs";
	}
}
