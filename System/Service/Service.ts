/**
 * Defines a service that is callable internally
 *
 * @see WebService for services that can be called by external clients
 */
export interface Service{

	/**
	 * Class dependencies should be passed in via the constructor
	 *
	 * @param dependencies
	 */
	//constructor(...dependencies) : Service;

	/**
	 * Execute the service with the defined parameters.
	 * Defined parameters can be extracted to an interface so it is consumable by a remote client
	 *
	 * @param serviceParams
	 */
	call(...serviceParams) : any;
}