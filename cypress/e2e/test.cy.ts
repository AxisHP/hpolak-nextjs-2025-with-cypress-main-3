// put first tests here

describe("Check if the main page loads and shows the Spotify title properly", () => {
    it("should display the Spotify title on the main page", () => {
        cy.visit("/");
        cy.contains("Spotify").should("be.visible");
    });
});

describe("Test that album cards display on homepage", () => {
    it("should show album cards on the homepage", () => {
        cy.visit("/");
        cy.get('[data-cy="album-card"]').should("have.length.greaterThan", 0);
    });
});

describe("Verify navigation bar search functionality works", () => {
    it("should find the results for the search query", () => {
        cy.visit("/");
        cy.get('[data-cy="search-input"]').type("queen");
        cy.get('[data-cy="search-button"]').click();
        cy.url().should("include", "/search?q=queen");
    });
});

describe("Test individual album detail page navigation", () => {
    it("should navigate to the album detail page when clicking Detail button", () => {
        cy.visit("/");
        cy.get('[data-cy="album-card"]')
            .first()
            .within(() => {
                cy.contains("Detail").click();
            });
        cy.url().should("include", "/album/");
    });
});

describe("Check author page displays albums correctly", () => {
    it("should show albums on the author page", () => {
        cy.visit("/author/1");
        cy.get('[data-cy="album-card"]').first().should(`be.visible`);
        cy.url().should("include", "/author/");
        cy.contains("Albums:").should("be.visible");
    });
});

describe("Test search results show songs, albums and authors", () => {
    it("should display songs, albums, and authors in search results", () => {
        cy.visit("/search?q=love");
        cy.contains("Songs").should("be.visible");
        cy.contains("Albums").should("be.visible");
        cy.contains("Authors").should("be.visible");
    });
});

describe("Verify album page shows songs table properly", () => {
    it("should display songs table on the album detail page", () => {
        cy.visit("/album/1");
        cy.get("table").should("be.visible");
        cy.get("table tbody tr").should("have.length.greaterThan", 0);
    });
});

describe("Test loading states are handled correctly", () => {
    it("should display loading indicators when data is being fetched", () => {
        cy.visit("/");
        cy.contains("Loading...").should("be.visible");
    });
});

describe("Check footer is present on main page", () => {
    it("should display the footer on the main page", () => {
        cy.visit("/");
        cy.get("footer").should("be.visible");
        cy.contains("Footer").should("be.visible");
    });
});
