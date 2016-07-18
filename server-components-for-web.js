window.components = {
    newElement: function () {
        return Object.create(HTMLElement.prototype);
    },
    registerElement: function (tagName, options) {
        var originalCreatedCallback = options.prototype.createdCallback;
        options.prototype.createdCallback = function () {
            var updatedArgs = [window.document].concat([].slice.call(arguments));
            return originalCreatedCallback.apply(this, updatedArgs);
        };

        return document.registerElement(tagName, options);
    },
    onServer: false
};

window.componentsStatic = {
    forComponent: function (componentName) {
        return {
            setPath: function () { },
            getPath: function () { },
            getUrl: function (path) {
                return "/components/" + componentName + "/" + path;
            }
        };
    },
    includeCSS: function (document, url) {
    },
    includeScript: function (document, url) {
    }
};
