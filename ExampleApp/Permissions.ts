export namespace ExampleApp{

	export class Permissions{

		/**
		 *
		 * @param userRequestingAccess
		 * @param {string} requestedPermission
		 * @param {string} resourceId
		 */
		public hasPermission(userRequestingAccess, requestedPermission:string, resourceId:string) : boolean{
			return true;
		}
	}
}
