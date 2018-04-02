import { SiwPlaygroundPage } from './app.po';

describe('siw-playground App', function() {
  let page: SiwPlaygroundPage;

  beforeEach(() => {
    page = new SiwPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
