import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
var SharedDataService = /** @class */ (function () {
    function SharedDataService() {
        this.chanels = new Map();
        this.observable = new Map();
    }
    /**
     * @param {?} label
     * @return {?}
     */
    SharedDataService.prototype.verifyChannel = function (label) {
        if (!this.chanels.has(label)) {
            var /** @type {?} */ hashmap = new BehaviorSubject$1('');
            this.chanels.set(label, hashmap);
            this.observable.set(label, this.chanels.get(label).asObservable());
        }
    };
    /**
     * @param {?} label
     * @param {?} mensagem
     * @return {?}
     */
    SharedDataService.prototype.publish = function (label, mensagem) {
        this.verifyChannel(label);
        this.chanels.get(label).next(mensagem);
    };
    /**
     * @param {?} label
     * @param {?} callback
     * @return {?}
     */
    SharedDataService.prototype.subscribe = function (label, callback) {
        this.verifyChannel(label);
        this.observable.get(label).subscribe(callback);
    };
    return SharedDataService;
}());
SharedDataService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SharedDataService.ctorParameters = function () { return []; };
var SharedDataServiceModule = /** @class */ (function () {
    function SharedDataServiceModule() {
    }
    return SharedDataServiceModule;
}());
SharedDataServiceModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [],
                providers: [SharedDataService],
                exports: []
            },] },
];
/**
 * @nocollapse
 */
SharedDataServiceModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { SharedDataServiceModule, SharedDataService };
//# sourceMappingURL=shared-data-service.es5.js.map
