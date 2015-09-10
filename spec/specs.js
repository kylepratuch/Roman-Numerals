describe('romanNumeral', function() {
    it("assigns M to every 1000", function() {
        expect(romanNumeral(3000)).to.eql("MMM");
    });
});

describe('romanNumeral', function() {
    it("assigns CM to 900", function() {
        expect(romanNumeral(900)).to.eql("CM");
    });
});

describe('romanNumeral', function() {
    it("properly converts to roman numerals", function() {
        expect(romanNumeral(987)).to.eql("CMLXXXVII");
    });
});

describe('romanNumeral', function() {
    it("does not attempt to convert numbers over 3999", function() {
        expect(romanNumeral(4562)).to.eql("Can't do it!");
    })
})
