import { create } from 'react-test-renderer';
import SearchInput from './index';

describe('SearchInput', () => {
    it('Should render correctly', () => {
        const comp = create(<SearchInput />)
        expect(comp).toMatchSnapshot()
    })
})