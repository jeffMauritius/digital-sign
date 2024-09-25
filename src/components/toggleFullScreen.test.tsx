import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ToggleFullScreen from "./toggleFullScreen"
import "@testing-library/jest-dom"

describe("ToggleFullScreen", () => {
  beforeEach(() => {
    document.exitFullscreen = jest.fn()
    document.documentElement.requestFullscreen = jest.fn()
  })

  it("renders the button with EnterFullScreenIcon initially", () => {
    render(<ToggleFullScreen />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByRole("button").firstChild).toHaveClass(
      "EnterFullScreenIcon",
    )
  })

  it("toggles to ExitFullScreenIcon when entering fullscreen", () => {
    render(<ToggleFullScreen />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(document.documentElement.requestFullscreen).toHaveBeenCalled()
    expect(button.firstChild).toHaveClass("ExitFullScreenIcon")
  })

  it("toggles back to EnterFullScreenIcon when exiting fullscreen", () => {
    render(<ToggleFullScreen initialToggleIcon={false} />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    expect(document.exitFullscreen).toHaveBeenCalled()
    expect(button.firstChild).toHaveClass("EnterFullScreenIcon")
  })
})
