import {CommandLineAdapter} from "./App/ClientAdapter/CommandLineAdapter";
/**
 * Created by Matt Pike on 20/04/2018.
 */

let commandLineAdapter = new CommandLineAdapter();
commandLineAdapter.dispatchRequestToService(process.argv);