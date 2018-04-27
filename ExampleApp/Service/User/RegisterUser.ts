///<reference path="../../Permissions.ts"/>
///<reference path="../../../Public/ServiceDefinition/User/RegisterUser.ts"/>
import {WebService} from "../../../System/Service/WebService";
import {ExampleApp.RegisterUserRequest} from "../../../Public/ServiceDefinition/User/RegisterUser";
import {Service} from "../../../System/Service/Service";
import RegisterUser = ExampleApp.RegisterUser;
import {ExampleApp} from "../../../Public/ServiceDefinition/User/RegisterUser";
import RegisterUserRequest = ExampleApp.RegisterUserRequest;
export namespace ExampleApp{

	/**
	 * Example web service
	 */
	export class RegisterUser implements WebService{

		public constructor(private permissions : Permissions){

		}

		/**
		 * @returns int
		 * @param registerUserRequest
		 */
		public call(registerUserRequest : RegisterUserRequest): RegisterUserResponse{
			let userRequestingAccess = null;
			if(this.permissions.hasPermission(userRequestingAccess, 'User', 'User.RegisterUser')){
				//if(registerUserRequest.
			}
		}
	}
}