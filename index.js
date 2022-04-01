var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function deprecated(target, key, desc) {
    var fn = desc.value;
    return __assign(__assign({}, desc), { value: function () {
            console.log('Method is deprecated');
            return fn.apply(this, arguments);
        } });
}
function once(target, key, desc) {
    var NULL = {};
    var result = NULL;
    var fn = desc.value;
    return __assign(__assign({}, desc), { value: function () {
            if (result === NULL) {
                result = fn.apply(this, arguments);
            }
            return result;
        } });
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.foo = function () {
        return Math.random();
    };
    __decorate([
        once,
        deprecated
    ], Foo.prototype, "foo", null);
    return Foo;
}());
var foo = new Foo();
console.log(foo.foo());
console.log(foo.foo());
console.log(foo.foo());
console.log(foo.foo());
