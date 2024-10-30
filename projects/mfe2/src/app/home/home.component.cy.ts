import { HomeComponent } from "./home.component";

describe('HomeComponent test', () => {
    it('mounts', () => {
        cy.mount(HomeComponent)
    })
})