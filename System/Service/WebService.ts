import {Service} from "./Service";

/**
 * Defines a web service that is callable from a remote client
 */
export interface WebService extends Service{

	/**
	 * Execute the service with the defined parameters.
	 * Defined parameters can be extracted to an interface so it is consumable by a remote client
	 *
	 * @param serviceParams
	 */
	call(...serviceParams) : any;
}