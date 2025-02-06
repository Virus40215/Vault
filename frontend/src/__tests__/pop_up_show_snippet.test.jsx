import { render, screen, fireEvent } from "@testing-library/react";
import PopUpShowSnippet from "../components/pop_up_show_snippet";
import { vi } from "vitest";

describe("PopUpShowSnippet", () => {
  const mockData = {
    title: "Test Snippet",
    language: "javascript",
    code: "console.log('Hello World');",
  };

  test("rendert das PopUp mit Titel und Code-Editor", () => {
    render(<PopUpShowSnippet dataObj={mockData} onClick={() => {}} />);

    expect(screen.getByText(/Test Snippet/i)).toBeInTheDocument();

    const editor = screen.getByRole("textbox");
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveValue("console.log('Hello World');");
  });

  test("schließt das PopUp, wenn der Close-Button geklickt wird", () => {
    const mockOnClick = vi.fn();

    render(<PopUpShowSnippet dataObj={mockData} onClick={mockOnClick} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
