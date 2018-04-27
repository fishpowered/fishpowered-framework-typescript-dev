"use strict";
exports.__esModule = true;
var ExampleApp;
(function (ExampleApp) {
    /**
     * Example web service
     */
    var RegisterUser = /** @class */ (function () {
        function RegisterUser(permissions) {
            this.permissions = permissions;
        }
        /**
         * @returns int
         * @param registerUserRequest
         */
        RegisterUser.prototype.call = function (registerUserRequest) {
            var userRequestingAccess = null;
            if (this.permissions.hasPermission(userRequestingAccess, 'User', 'User.RegisterUser')) {
                //if(registerUserRequest.
            }
        };
        return RegisterUser;
    }());
    ExampleApp.RegisterUser = RegisterUser;
})(ExampleApp = exports.ExampleApp || (exports.ExampleApp = {}));
