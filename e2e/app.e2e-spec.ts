import { PowwowPage } from './app.po';

describe('powwow App', function() {
  let page: PowwowPage;

  beforeEach(() => {
    page = new PowwowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
