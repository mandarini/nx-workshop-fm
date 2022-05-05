describe('store-ui-shared: Sample component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sample--primary&args=name;age;something:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Sample!');
    });
});
