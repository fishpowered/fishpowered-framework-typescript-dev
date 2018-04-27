import {CommandLineAdapter} from "./ExampleApp/ClientAdapters/CommandLineAdapter";
/**
 * Created by Matt Pike on 20/04/2018.
 */

//let commandLineAdapter = new CommandLineAdapter();
CommandLineAdapter.dispatchRequestToService(process.argv);