"use strict";
exports.__esModule = true;
var CommandLineAdapter_1 = require("./ExampleApp/ClientAdapters/CommandLineAdapter");
/**
 * Created by Matt Pike on 20/04/2018.
 */
//let commandLineAdapter = new CommandLineAdapter();
CommandLineAdapter_1.CommandLineAdapter.dispatchRequestToService(process.argv);
