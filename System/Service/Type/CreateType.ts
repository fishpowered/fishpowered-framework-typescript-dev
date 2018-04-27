import {Service} from "../Service";
//import {Project as CodeGeneration} from "ts-simple-ast";
/**
 * Generate a class that represents a data type
 */
export class CreateType implements Service{

	/*constructor(private codeGeneration? : CodeGeneration){
		if(!codeGeneration){
			//this.codeGeneration = new CodeGeneration();
		}
	}*/

	/**
	 * CreateType a new data type
	 * @param name
	 * @param implementsInterfaces
	 * @returns {boolean}
	 */
	call(name:string, implementsInterfaces?: string[]): string{
		return "Created some file"+name;
	}

}