import { FormsModule } from "@angular/forms"
import { PassengerDetailComponent } from "./passenger-details/passenger.component"

describe('passenger-details.cy.ts', () => {
  it('playground', () => {
    cy.mount(PassengerDetailComponent, {
      imports: [FormsModule]
    })
    cy.contains("Passenger Detail")
    cy.contains("Passenger Name:")
    cy.contains("Age:")
    cy.contains("From:")
    cy.contains("To:")
    cy.get('button').should("have.text", "Submit")
    cy.get('#name').should("have.value", "")
  })
})