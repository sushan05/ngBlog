import { CheckAngular2Page } from './app.po';

describe('check-angular2 App', () => {
  let page: CheckAngular2Page;

  beforeEach(() => {
    page = new CheckAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
