describe('Calendar Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays calendar view', () => {
    cy.get('[data-testid="calendar-view"]').should('be.visible');
  });

  it('allows creating new event', () => {
    cy.get('[data-testid="add-event-button"]').click();
    cy.get('[data-testid="event-form"]').should('be.visible');

    cy.get('[data-testid="event-title"]').type('Test Event');
    cy.get('[data-testid="event-date"]').type('2024-01-01');
    cy.get('[data-testid="event-time"]').type('10:00');
    cy.get('[data-testid="save-event"]').click();

    cy.get('[data-testid="event-list"]').should('contain', 'Test Event');
  });

  it('allows editing existing event', () => {
    // First create an event
    cy.get('[data-testid="add-event-button"]').click();
    cy.get('[data-testid="event-title"]').type('Test Event');
    cy.get('[data-testid="save-event"]').click();

    // Then edit it
    cy.get('[data-testid="event-list"]').contains('Test Event').click();
    cy.get('[data-testid="edit-event"]').click();
    cy.get('[data-testid="event-title"]').clear().type('Updated Event');
    cy.get('[data-testid="save-event"]').click();

    cy.get('[data-testid="event-list"]').should('contain', 'Updated Event');
  });
});
