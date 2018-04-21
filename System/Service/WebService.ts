import {Service} from "./Service";

/**
 * Defines a web service that is callable from a remote client
 */
export interface WebService extends Service{

	/**
	 * Service dependencies should be passed in via the constructor
	 *
	 * @param dependencies
	 */
	constructor(...dependencies);

	/**
	 * Execute the service with the defined parameters.
	 * Defined parameters can be extracted to an interface so it is consumable by a remote client
	 *
	 * @param serviceParams
	 */
	call(...serviceParams) : any;
}