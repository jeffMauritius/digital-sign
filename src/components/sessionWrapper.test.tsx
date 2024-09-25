import React from "react"
import { render } from "@testing-library/react"
import SessionWrapper from "./sessionWrapper"
import "@testing-library/jest-dom"

jest.mock("next-auth/react", () => ({
  SessionProvider: jest.fn(({ children }) => <div>{children}</div>),
}))

describe("SessionWrapper", () => {
  it("renders children within SessionProvider", () => {
    const { getByText } = render(
      <SessionWrapper>
        <div>Test Child</div>
      </SessionWrapper>,
    )

    expect(getByText("Test Child")).toBeInTheDocument()
  })
})
