describe("articlesConjunctions", function() {

  it('a phrase containing words "a, an, the, and, but, for, nor, of" returns true', function() {
    expect(articlesConjunctions("some title of the book for a spider")).to.equal(true);
  });

    it('a phrase that does not contain words "a, an, the, and, but, for, nor, of" returns false', function() {
      expect(articlesConjunctions("i miss you")).to.equal(false);
    });

});


describe("titleCase", function() {

  it('returns a single word titlecased', function() {
    expect(titleCase("HELLO")).to.equal("Hello");
  });

  it('returns a phrase with every word titlecased', function() {
    expect(titleCase("how are you")).to.equal("How Are You");
  });

  it('does not capitalize the words "a, an, the, and, but, for, nor, of"', function() {
    expect(titleCase("some title of the book for a spider")).to.equal('Some Title of the Book for a Spider');
  });


  it('does will capitalize the words "a, an, the, and, but, for, nor, of" if they are at the beginning or end of a phrase', function() {
    expect(titleCase("a story called for")).to.equal('A Story Called For');
  });

  it('will account for hyphenated words', function() {
    expect(titleCase("a story called for")).to.equal('A Story Called For');
  });


});
