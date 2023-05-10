import { create } from 'react-test-renderer';
import Item from './index';

describe('Item', () => {
    it('Should render correctly', () => {
        const itemProps = {
            color: 'red',
            id: 1,
            year: 2020,
            name: 'Red',
            pantone_value: '2232'
        }
        const comp = create(<Item color={itemProps}/>)
        expect(comp).toMatchSnapshot()
    })
})