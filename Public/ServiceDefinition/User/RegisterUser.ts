///<reference path="../../TypeDefinition/User/UserFields.ts"/>
import {ExampleApp} from "../../TypeDefinition/User/UserFields";

export namespace ExampleApp{

	export interface RegisterUserRequest{
		fullName : string;//UserFullNameField;
		email : string;//UserEmailField;
		password : string;//UserPasswordField;
	}
	export interface RegisterUserResponse {
		success : boolean;
	}
}