import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "./theme-provider"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import "@testing-library/jest-dom"

jest.mock("next-themes", () => ({
  ThemeProvider: jest.fn(({ children }) => <div>{children}</div>),
}))

describe("ThemeProvider", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>,
    )

    expect(getByText("Test Child")).toBeInTheDocument()
  })

  it("passes props to NextThemesProvider", () => {
    const customProps = { attribute: "class" }

    render(
      <ThemeProvider {...customProps}>
        <div>Test Child</div>
      </ThemeProvider>,
    )

    expect(NextThemesProvider).toHaveBeenCalledWith(
      expect.objectContaining(customProps),
      {},
    )
  })
})
