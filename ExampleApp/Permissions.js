"use strict";
exports.__esModule = true;
var ExampleApp;
(function (ExampleApp) {
    var Permissions = /** @class */ (function () {
        function Permissions() {
        }
        /**
         *
         * @param userRequestingAccess
         * @param {string} requestedPermission
         * @param {string} resourceId
         */
        Permissions.prototype.hasPermission = function (userRequestingAccess, requestedPermission, resourceId) {
            return true;
        };
        return Permissions;
    }());
    ExampleApp.Permissions = Permissions;
})(ExampleApp = exports.ExampleApp || (exports.ExampleApp = {}));
