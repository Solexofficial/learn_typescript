function sum(a, b) {
    return a + b;
}
sum(1, 3);
var Foo;
(function (Foo) {
    Foo[Foo["A"] = 0] = "A";
    Foo[Foo["B"] = 1] = "B";
    Foo[Foo["C"] = 2] = "C";
})(Foo || (Foo = {}));
