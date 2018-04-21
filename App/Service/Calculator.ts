import {WebService} from "../../System/Service/WebService";

/**
 * Example web service
 */
export class Calculator implements WebService{

	constructor(...dependencies: any[]) {

	}

	/**
	 * @param a
	 * @param b
	 * @returns int
	 */
	call(a:any, b:any): any{
		return a+b;
	}
}