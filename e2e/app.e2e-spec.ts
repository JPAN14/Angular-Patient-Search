import { AngularPatientSearchPage } from './app.po';

describe('angular-patient-search App', () => {
  let page: AngularPatientSearchPage;

  beforeEach(() => {
    page = new AngularPatientSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
