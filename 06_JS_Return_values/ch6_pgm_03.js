var getHelloTo;

getHelloTo = function (name) {
    var template = "Hello to {{name}}";
    template = template.replace("{{name}}", name);
    return template;
};

console.log(getHelloTo("Kandra"));
console.log(getHelloTo("Dax"));
