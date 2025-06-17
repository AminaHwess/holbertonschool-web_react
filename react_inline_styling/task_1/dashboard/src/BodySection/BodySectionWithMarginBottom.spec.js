import {render, screen} from "@testing-library/react"
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom"
import {StyleSheetTestUtils} from 'aphrodite'

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})


test("testing that the BodySectionWithMarginBottom component contains a div with the class bodySectionWithMargin", () => {
    render(<BodySectionWithMarginBottom/>)
    const elem = screen.getByRole("bswm")
    expect(elem).toBeInTheDocument()
})

test("testing that the BodySectionWithMarginBottom component renders the BodySection component", () => {
    render(<BodySectionWithMarginBottom/>)
    const elem = screen.getByRole("bs")
    expect(elem).toBeInTheDocument()
})