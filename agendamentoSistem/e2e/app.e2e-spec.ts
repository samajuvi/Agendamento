import { AgendamentoSistemPage } from './app.po';

describe('agendamento-sistem App', () => {
  let page: AgendamentoSistemPage;

  beforeEach(() => {
    page = new AgendamentoSistemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
