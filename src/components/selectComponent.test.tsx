import React from "react"
import { render, screen } from "@testing-library/react"
import SelectComponent from "./selectComponent"
import { useTranslations } from "next-intl"
import "@testing-library/jest-dom"

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}))

describe("SelectComponent", () => {
  const mockTranslations: { [key: string]: string } = {
    "enumType.value1": "Value 1",
    "enumType.value2": "Value 2",
  }

  beforeEach(() => {
    ;(useTranslations as jest.Mock).mockReturnValue(
      (key: string) => mockTranslations[key],
    )
  })

  it("renders without crashing", () => {
    const values = { value1: "Value 1", value2: "Value 2" }
    const enumType = "enumType"

    render(<SelectComponent values={values} enumType={enumType} />)

    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })
})
