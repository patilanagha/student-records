const { browser } = require("protractor");

describe("Student records", function () {
  it("should check for title ", async function () {
    browser.get("http://localhost:4200/");
    expect(browser.getTitle()).toEqual("StudentRecords");
    browser.sleep(1500);
  });

  it("should go to student grid", async function () {
    var EC = protractor.ExpectedConditions;
    await browser.wait(EC.presenceOf(element(by.xpath("//canvas"))), 5000);
    await element(by.xpath("//canvas")).click();
    expect(element(by.id("tableHeader")).getText()).toEqual("Third Grade Students");
     browser.sleep(1500);
  });

  it("should show save and cancel button on row edit", async function () {
    element(by.id("studentRow0")).click();
    expect(element(by.id("cancelBtn")).isDisplayed()).toBeTruthy();
    expect(element(by.id("saveBtn")).isDisplayed()).toBeTruthy();
    browser.sleep(1500);
  });

  it("should show error message on incorrect age", async function () {
    element(by.id("ageInput")).sendKeys('5');
    expect(element(by.id("ageError")).getText()).toEqual("Invalid age");
    browser.sleep(1500);
  });

  it("should not show error message on correct age", async function () {
    element(by.id("ageInput")).clear();
    element(by.id("ageInput")).sendKeys('5');
    expect(element(by.id("ageError")).isPresent()).toBeFalsy();
    browser.sleep(1500);
  });


  it("should remove row edit on cancel", async function () {
    element(by.id("cancelBtn")).click();
    expect(element(by.id("ageInput")).isPresent()).toBeFalsy();
    browser.sleep(1500);
  });

  it("should go back to pie chart", async function () {
    element(by.id("backBtn")).click();
    expect(element(by.xpath("//canvas")).isPresent()).toBeTruthy();
    browser.sleep(1500);
  });


});
