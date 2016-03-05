System.register(["./rest_model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var rest_model_1;
    var MenuItem;
    return {
        setters:[
            function (rest_model_1_1) {
                rest_model_1 = rest_model_1_1;
            }],
        execute: function() {
            MenuItem = (function (_super) {
                __extends(MenuItem, _super);
                function MenuItem() {
                    _super.apply(this, arguments);
                }
                return MenuItem;
            }(rest_model_1.RestModel));
            exports_1("MenuItem", MenuItem);
        }
    }
});
//# sourceMappingURL=menu_item.js.map