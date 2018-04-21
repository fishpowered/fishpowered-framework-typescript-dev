import {Container} from "typedi";
import {Service} from "../../System/Service/Service";
/**
 * Created by Matt Pike on 20/04/2018.
 */
export class CommandLineAdapter {

	public dispatchRequestToService(commandLineArgs : string[]){
		let request = CommandLineAdapter.convertCommandLineArgsToServiceRequest(commandLineArgs);
		if(request.service){
			//Container.set(
			console.log("instanatiating "+request.service);
			let service = Container.get<Service>(request.service);
			console.log(service.call("foo"));
		}
	}

	static convertCommandLineArgsToServiceRequest(commandLineArgs : string[]) : {service: string, params: object}{
		if(commandLineArgs.length <= 2){
			return {"service":"", "params":[]};
		}else{
			return {
				"service": commandLineArgs[2],
				"params": CommandLineAdapter.convertCommandLineArgsToKeyValueArray(commandLineArgs.slice(3, commandLineArgs.length))
			}
		}
	}

	static convertCommandLineArgsToKeyValueArray(commandLineArgs : string[]) : object{
		let args : {[key: string]: string | number} = {};
		commandLineArgs.forEach(function(val:string){
			// Remove any dashes people like to add at the start to denote params
			if(val.trim().substr(0,2)=="--"){
				val = val.substr(2);
			}else if(val.trim().substr(0,1)=="-"){
				val = val.substr(1);
			}
			// Expected either "key=value" or just "value", if there's no key then return as "value=value"
			if(val.indexOf("=") > 0){
				let parts : string[] = val.split("=", 2);
				let keyName : string = parts[0];
				args[keyName.trim()] = parts[1].trim();
			}else{
				args[val] = val;
			}
		});
		return args;
	}
}
