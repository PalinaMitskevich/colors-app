import { create } from 'react-test-renderer';
import ErrorPage from './index';

describe('ErrorPage', () => {
    it('Should render correctly', () => {
        const comp = create(<ErrorPage />)
        expect(comp).toMatchSnapshot()
    })
})