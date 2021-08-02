// Reference: https://www.youtube.com/watch?v=SBjf9-WpLac&list=PLTo9PCskHpbHjtO9Dq4gC0DXhoqgCQFSN&index=2
var func1 = function (b) {
    console.log("func1 scope start");

    var c = "c";
    var func1a = function (d) {
        var e = "e";
        console.log("func1a scope start");
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log("func1a scope end");
    }
    var func1b = function (f) {
        console.log("func1b scope start");
        var g = "g";
        console.log(a);
        console.log(b);
        console.log(c);
        // console.log(d); runtime error
        // console.log(e); runtime error
        console.log(f);
        console.log(g);
        console.log("func1b scope end");
    }
    var func1c = function(){
        console.log("func1c scope start");
        console.log(a);
        console.log(b);
        console.log(c);
        // console.log(d); runtime error
        // console.log(e); runtime error
        // console.log(f); runtime error
        // console.log(g); runtime error
        func1a("d");
        func1b("f");
        console.log("func1c scope end");
    }

    console.log(a);
    console.log(b);
    console.log(c);
    // console.log(d); runtime error
    // console.log(e); runtime error
    // console.log(f); runtime error
    // console.log(g); runtime error
    func1a("d");
    func1b("f");
    func1c();

    console.log("func1 scope end");
}

var a = "a";
func1("b");