System.register(["./rest_model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var rest_model_1;
    var MenuCategory;
    return {
        setters:[
            function (rest_model_1_1) {
                rest_model_1 = rest_model_1_1;
            }],
        execute: function() {
            MenuCategory = (function (_super) {
                __extends(MenuCategory, _super);
                function MenuCategory() {
                    _super.apply(this, arguments);
                }
                return MenuCategory;
            }(rest_model_1.RestModel));
            exports_1("MenuCategory", MenuCategory);
        }
    }
});
//# sourceMappingURL=menu_category.js.map