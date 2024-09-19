import { render } from "@testing-library/react"
import DashboardPage from "./page"
import { useSession } from "next-auth/react"

describe("DashboardPage", () => {
  it("renders the DashboardPage correctly", () => {
    render(<DashboardPage />)
  })
})
