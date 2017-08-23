/// <reference path="../bower_components/polymer-ts/polymer-ts.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HTMLElementExt = (function () {
    function HTMLElementExt() {
    }
    return HTMLElementExt;
}());
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyApp.prototype._routePageChanged = function (page) {
        this.page = page || 'view1';
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    };
    MyApp.prototype._pageChanged = function (page) {
        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl('my-' + page + '.html');
        this.importHref(resolvedPageUrl, null, this._showPage404, true);
    };
    MyApp.prototype._showPage404 = function () {
        this.page = 'view404';
    };
    return MyApp;
}(polymer.Base));
__decorate([
    property({
        type: String,
        notify: true
    })
], MyApp.prototype, "page", void 0);
__decorate([
    property({
        type: Object,
        notify: true
    })
], MyApp.prototype, "route", void 0);
__decorate([
    property({
        type: Object,
        notify: true
    })
], MyApp.prototype, "routeData", void 0);
__decorate([
    property({
        type: Object,
        notify: true
    })
], MyApp.prototype, "pageData", void 0);
__decorate([
    observe('_routePageChanged(routeData.page)')
], MyApp.prototype, "_routePageChanged", null);
__decorate([
    observe("_pageChanged(routeData.page)")
], MyApp.prototype, "_pageChanged", null);
__decorate([
    observe("_showPage404")
], MyApp.prototype, "_showPage404", null);
MyApp = __decorate([
    component("my-app")
], MyApp);
MyApp.register();
//# sourceMappingURL=my-app.js.map