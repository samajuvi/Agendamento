import { DashboardMonitoramentoVendaPage } from './app.po';

describe('dashboard-monitoramento-venda App', () => {
  let page: DashboardMonitoramentoVendaPage;

  beforeEach(() => {
    page = new DashboardMonitoramentoVendaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
