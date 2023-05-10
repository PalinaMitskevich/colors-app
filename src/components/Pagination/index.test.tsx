import { create } from 'react-test-renderer';
import Pagination from './index';
import {render, screen, fireEvent } from "@testing-library/react";

describe('Pagination', () => {
    it('Should render correctly', () => {
        const itemProps = {
            page: 1,
            totalPages: 3,
            moveToNextPage: jest.fn(),
            moveToPrevPage: jest.fn(),
            setPage: jest.fn(),
            pages: [1, 2, 3]
        }
        const comp = create(<Pagination {...itemProps} />)
        expect(comp).toMatchSnapshot()
    })

    it('Should call handlers correctly', () => {
        const moveToNextPageMock = jest.fn()
        const moveToPrevPageMock = jest.fn()
        const setPageMock = jest.fn()
        const itemProps = {
            page: 1,
            totalPages: 3,
            moveToNextPage: moveToNextPageMock,
            moveToPrevPage: moveToPrevPageMock,
            setPage: setPageMock,
            pages: [1, 2, 3]
        }
        const { container } = render(<Pagination {...itemProps} />)
        const button = screen.getByText(1)
        fireEvent.click(button)
        expect(setPageMock).toHaveBeenCalled()

        const arrowBack = screen.getByTestId('arrowBack')
        fireEvent.click(arrowBack)
        expect(moveToPrevPageMock).toHaveBeenCalled()

        const arrowForward = screen.getByTestId('arrowForward')
        fireEvent.click(arrowForward)
        expect(moveToNextPageMock).toHaveBeenCalled()
    })
})