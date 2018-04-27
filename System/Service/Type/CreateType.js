"use strict";
exports.__esModule = true;
//import {Project as CodeGeneration} from "ts-simple-ast";
/**
 * Generate a class that represents a data type
 */
var CreateType = /** @class */ (function () {
    function CreateType() {
    }
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
    CreateType.prototype.call = function (name, implementsInterfaces) {
        return "Created some file" + name;
    };
    return CreateType;
}());
exports.CreateType = CreateType;
