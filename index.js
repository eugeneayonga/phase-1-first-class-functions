const receivesAFunction = callback => callback();
console.log(receivesAFunction(spy)) ;





const returnsANamedFunction = () => function callback() {
    var fn = returnsANamedFunction();
    if (fn === "") {
        return "function";
    } else {
        return "named function";
    }
};






const returnsAnAnonymousFunction = () => () => {
    var fn = returnsAnAnonymousFunction();
    if (fn.name === "") {
        return "anonymous";
    } else {
        return "function";
    }
};
