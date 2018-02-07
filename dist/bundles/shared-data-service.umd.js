(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/BehaviorSubject')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/BehaviorSubject'], factory) :
	(factory((global['shared-data-service'] = {}),global.ng.core,global.ng.common,global.Rx));
}(this, (function (exports,core,common,BehaviorSubject) { 'use strict';

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
            var /** @type {?} */ hashmap = new BehaviorSubject.BehaviorSubject('');
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
    { type: core.Injectable },
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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

exports.SharedDataServiceModule = SharedDataServiceModule;
exports.ɵa = SharedDataService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared-data-service.umd.js.map
