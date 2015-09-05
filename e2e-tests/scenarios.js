'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /landing-page when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/landing-page");
  });


  describe('landing-page', function() {

    beforeEach(function() {
      browser.get('index.html#/landing-page');
    });


    it('should render landing-page when user navigates to /landing-page', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('donate', function() {

    beforeEach(function() {
      browser.get('index.html#/donate');
    });


    it('should render donate when user navigates to /donate', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
