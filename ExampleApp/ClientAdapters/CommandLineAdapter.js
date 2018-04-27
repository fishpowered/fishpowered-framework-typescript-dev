"use strict";
exports.__esModule = true;
//import {CreateType} from "../../System/Service/Type/CreateType";
/**
 *
 * Created by Matt Pike on 20/04/2018.
 */
var CommandLineAdapter = /** @class */ (function () {
    function CommandLineAdapter() {
    }
    CommandLineAdapter.dispatchRequestToService = function (commandLineArgs) {
        var request = CommandLineAdapter.convertCommandLineArgsToServiceRequest(commandLineArgs);
        if (request.service) {
            var CreateType = require('../../System/Service/Type/CreateType.js');
            var loadedService = new CreateType();
            console.log(loadedService.call("testval"));
            //Container.set(
            /*
            console.log("instanatiating "+request.service);
            let serviceNamespace = "../../"+request.service;
            const loadedService = await import(serviceNamespace);
            console.log(loadedService.call("foo"));
            /*import("../../"+request.service).then(service => {
                console.log(service.call("foox"));
            });*/
        }
    };
    CommandLineAdapter.convertCommandLineArgsToServiceRequest = function (commandLineArgs) {
        if (commandLineArgs.length <= 2) {
            return { "service": "", "params": [] };
        }
        else {
            return {
                "service": commandLineArgs[2],
                "params": CommandLineAdapter.convertCommandLineArgsToKeyValueArray(commandLineArgs.slice(3, commandLineArgs.length))
            };
        }
    };
    CommandLineAdapter.convertCommandLineArgsToKeyValueArray = function (commandLineArgs) {
        var args = {};
        commandLineArgs.forEach(function (val) {
            // Remove any dashes people like to add at the start to denote params
            if (val.trim().substr(0, 2) == "--") {
                val = val.substr(2);
            }
            else if (val.trim().substr(0, 1) == "-") {
                val = val.substr(1);
            }
            // Expected either "key=value" or just "value", if there's no key then return as "value=value"
            if (val.indexOf("=") > 0) {
                var parts = val.split("=", 2);
                var keyName = parts[0];
                args[keyName.trim()] = parts[1].trim();
            }
            else {
                args[val] = val;
            }
        });
        return args;
    };
    return CommandLineAdapter;
}());
exports.CommandLineAdapter = CommandLineAdapter;
