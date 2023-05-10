import { create } from 'react-test-renderer';
import Modal from './index';

describe('Modal', () => {
    it('Should render correctly', () => {
        const comp = create(<Modal />)
        expect(comp).toMatchSnapshot()
    })
})