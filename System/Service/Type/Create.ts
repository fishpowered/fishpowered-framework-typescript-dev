import {Service} from "../Service";
//import Project from "ts-simple-ast";
/**
 * Generate a class that represents a data type
 */
export class Create implements Service{

	constructor(){ //
		//codeGenerationProject.
	}

	/**
	 * Create a new data type
	 * @param name
	 * @param implementsInterfaces
	 * @returns {boolean}
	 */
	call(name:string, implementsInterfaces?: string[]): string{
		return "Created some file";
	}
}