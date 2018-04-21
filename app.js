"use strict";
exports.__esModule = true;
var CommandLineAdapter_1 = require("./App/ClientAdapter/CommandLineAdapter");
/**
 * Created by Matt Pike on 20/04/2018.
 */
var commandLineAdapter = new CommandLineAdapter_1.CommandLineAdapter();
commandLineAdapter.dispatchRequestToService(process.argv);
