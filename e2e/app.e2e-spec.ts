import { DeviathanPrograPage } from './app.po';

describe('deviathan-progra App', () => {
  let page: DeviathanPrograPage;

  beforeEach(() => {
    page = new DeviathanPrograPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
