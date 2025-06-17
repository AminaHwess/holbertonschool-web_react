import {render, screen} from '@testing-library/react'
import Login from './Login.jsx'
import {StyleSheetTestUtils} from 'aphrodite'

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

describe("Login component", () => {
    it("is the login form rendered", () => {
        render(<Login />)
        const emailInput = screen.getByTestId("email")
        const passwordInput = screen.getByTestId("pw")
        const button = screen.getByTestId("btn")
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })
    it("checking if the login text is displayed", () => {
        render(<Login />)
        const text = screen.getByText("Login to access the full dashboard")
        expect(text).toBeInTheDocument()
    })
})
