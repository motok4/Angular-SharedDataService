import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';

class SharedDataService {
    constructor() {
        this.chanels = new Map();
        this.observable = new Map();
    }
    /**
     * @param {?} label
     * @return {?}
     */
    verifyChannel(label) {
        if (!this.chanels.has(label)) {
            let /** @type {?} */ hashmap = new BehaviorSubject$1('');
            this.chanels.set(label, hashmap);
            this.observable.set(label, this.chanels.get(label).asObservable());
        }
    }
    /**
     * @param {?} label
     * @param {?} mensagem
     * @return {?}
     */
    publish(label, mensagem) {
        this.verifyChannel(label);
        this.chanels.get(label).next(mensagem);
    }
    /**
     * @param {?} label
     * @param {?} callback
     * @return {?}
     */
    subscribe(label, callback) {
        this.verifyChannel(label);
        this.observable.get(label).subscribe(callback);
    }
}
SharedDataService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SharedDataService.ctorParameters = () => [];

class SharedDataServiceModule {
}
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
SharedDataServiceModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { SharedDataServiceModule, SharedDataService };
//# sourceMappingURL=shared-data-service.js.map
