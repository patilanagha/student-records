import { browser, by, element, logging, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await browser.getTitle()).toEqual('StudentRecords');
  });
  it('should go to student grid', async function () {
    var EC = protractor.ExpectedConditions;
    await browser.wait(EC.presenceOf(element(by.xpath('//canvas'))), 5000);
    await element(by.xpath('//canvas')).click();
    expect(await element(by.id('tableHeader')).getText()).toEqual(
      'Third Grade Students'
    );
    await browser.sleep(1500);
  });

  it('should show save and cancel button on row edit', async function () {
   await element(by.id('studentRow0')).click();
    expect(await element(by.id('cancelBtn')).isDisplayed()).toBeTruthy();
    expect(await element(by.id('saveBtn')).isDisplayed()).toBeTruthy();
    await  browser.sleep(1500);
  });

  it('should show error message on incorrect age', async function () {
    await element(by.id('ageInput')).sendKeys('5');
    expect(await element(by.id('ageError')).getText()).toEqual('Invalid age');
    await browser.sleep(1500);
  });

  it('should not show error message on correct age', async function () {
    await  element(by.id('ageInput')).clear();
    await element(by.id('ageInput')).sendKeys('5');
    expect(await element(by.id('ageError')).isPresent()).toBeFalsy();
    await browser.sleep(1500);
  });

  it('should remove row edit on cancel', async function () {
    await element(by.id('cancelBtn')).click();
    expect(await element(by.id('ageInput')).isPresent()).toBeFalsy();
    await browser.sleep(1500);
  });

  it('should go back to pie chart', async function () {
   await element(by.id('backBtn')).click();
    expect(await element(by.xpath('//canvas')).isPresent()).toBeTruthy();
    await browser.sleep(1500);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
