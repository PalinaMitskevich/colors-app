import MainContent from './index';
import { render, screen } from "@testing-library/react";

describe('MainContent',  () => {
    test('should run useEffect correctly', async () => {
        render(<MainContent />)
        const data = await screen.findByText(/true red/i)
        expect(data).toBeInTheDocument()
    })
})