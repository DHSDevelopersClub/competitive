var main = require("./main");

exports.test1 = function(test) {
    test.expect(1);
    test.strictEqual(main.main(), "main", "main function should return 'main'");
    test.done();
};
