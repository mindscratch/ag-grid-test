import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getAppRoot(): ElementFinder {
    return element(by.tagName('app-root'));
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}
