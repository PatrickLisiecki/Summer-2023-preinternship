import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Render buttons"),
    () => {
        render(<App />);

        expect(
            screen.getByRole("button", { name: "Bookmarked" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Applying" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Applied" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Interviewing" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Negotiating" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Accepted" })
        ).toBeInTheDocument();
    };

test("Clicking a button makes its filter active and changes its background", () => {
    render(<App />);
    
    const bookmarkedButton = screen.getByRole("button", { name: "Bookmarked" });

    expect(bookmarkedButton.toHaveClass("bg-blue-500"));

    fireEvent.click(bookmarkedButton);

    expect(bookmarkedButton.toHaveClass("bg-blue-500"));
});
