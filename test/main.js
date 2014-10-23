
_.templateSettings.interpolate = /{([\s\S]+?)}/g;

mocha.setup({
    ui: "bdd",
    ignoreLeaks: true
});

var assert = chai.assert;
var expect = chai.expect;

//--- your setup code goes here (i.e. create test instances of your Constructors)
//--- your setup code goes here

var FILL_ME_IN;
describe("About Arrays", function() {

    //We shall contemplate truth by testing reality, via spec expectations.
    it("should create arrays", function() {
        var emptyArray = [];
        expect(typeof(emptyArray)).to.equal('object');
        expect(emptyArray.length).to.equal(0);

        var multiTypeArray = [0, 1, "two",
            function() {
                return 3;
            }, {
                value1: 4,
                value2: 5
            },
            [6, 7]
        ];
        expect(multiTypeArray[0]).to.equal(0);
        expect(multiTypeArray[2]).to.equal('two');
        expect(multiTypeArray[3]()).to.equal(3);
        expect(multiTypeArray[4].value1).to.equal(4);
        expect(multiTypeArray[4]["value2"]).to.equal(5);
        expect(multiTypeArray[5][0]).to.equal(6);
    });

    it("should understand array literals", function() {
        var array = [];
        expect(array.length).to.equal (0);

        array[0] = 1;
        expect( array[0] ).to.equal(1);

        array[1] = 2;
        expect( array.length ).to.equal(2);

        array.push(3);
        expect(array[2]).to.equal(3);
    });

    it("should understand array length", function() {
        var fourNumberArray = [1, 2, 3, 4];

        expect(fourNumberArray.length).to.equal(4);
        fourNumberArray.push(5, 6);
        expect(fourNumberArray.length).to.equal(6);

        var tenEmptyElementArray = new Array(10);
        expect(tenEmptyElementArray.length).to.equal(10);

        tenEmptyElementArray.length = 5;
        expect(tenEmptyElementArray.length).to.equal(5);
    });

    it("should slice arrays", function() {
        var array = ["peanut", "butter", "and", "jelly"];

        expect(array.slice(0, 1)[0]).to.equal("peanut");
        expect(array.slice(0, 2)[0]).to.equal("peanut", "butter");
        expect(array.slice(2, 2)[0]).to.equal(undefined);
        expect(array.slice(2, 20)[0]).to.equal("and", "jelly");
        expect(array.slice(3, 0)[0]).to.equal(undefined);
        expect(array.slice(3, 100)[0]).to.equal("jelly");
        expect(array.slice(5, 1)[0]).to.equal(undefined);
    });

    it("should know array references", function() {
        var array = ["zero", "one", "two", "three", "four", "five"];

        function passedByReference(refArray) {
            refArray[1] = "changed in function";
        }
        passedByReference(array);
        expect(array[1]).to.equal("changed in function");

        var assignedArray = array;
        assignedArray[5] = "changed in assignedArray";
        expect(array[5]).to.equal("changed in assignedArray");

        var copyOfArray = array.slice();
        copyOfArray[3] = "changed in copyOfArray";
        expect(array[3]).to.equal ("?????");
    });

    it("should push and pop", function() {
        var array = [1, 2];
        array.push(3);

        expect(array[2]).to.equal (([1, 2, 3])[2]);

        var poppedValue = array.pop();
        expect(poppedValue).to.equal (3);
        expect(array.join (", ")).to.equal ("1, 2");
    });

    it("should know about shifting arrays", function() {
        var array = [1, 2];

        array.unshift(3);
        expect (array.join (", ")).to.equal("3, 1, 2");

        var shiftedValue = array.shift();
        expect(shiftedValue).to.equal (3);
        expect(array.length).to.equal (2);
    });
});

//--- your tests go here
// an example test suite
describe("Array", function(){
    describe("#indexOf()", function(){
        it("should return -1 when the value is not present", function(){
            expect([1,2,3].indexOf(5)).to.equal(-1);
            expect([1,2,3].indexOf(0)).to.equal(-1);
        })
    })
})
//--- your tests go here

mocha.globals(["jQuery"]);
mocha.run();

