import ErrorPage from './index';
import { create } from 'react-test-renderer'

describe('ErrorPage', () => {
    it('Should render correctly', () => {
        const comp = create(<ErrorPage />)
        expect(comp).toMatchSnapshot()
    })
})