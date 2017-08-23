/// <reference path="../bower_components/polymer-ts/polymer-ts.ts" />

class HTMLElementExt {
    querySelectorAll: any;
}

@component("my-app")
class MyApp extends polymer.Base {

    provideInstance: (key: string, any) => void;

    @property({ 
        type: String, 
        notify: true
    })
    page: String;

        @property({
        type: Object,
        notify: true
    })
    route: any;

    @property({
        type: Object,
        notify: true
    })
    routeData: any;

    @property({
        type: Object,
        notify: true
    })
    pageData: any;

    @observe('_routePageChanged(routeData.page)')
    _routePageChanged(page) {
        this.page = page || 'view1';

        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }
    @observe("_pageChanged(routeData.page)")
    _pageChanged(page) {
        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl('my-' + page + '.html');
        this.importHref(resolvedPageUrl, null, this._showPage404, true);
    }
    @observe("_showPage404")
     _showPage404() {
        this.page = 'view404';
    }
}

MyApp.register();