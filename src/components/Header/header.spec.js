import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<Header />))

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('it should render 2 </div>`/s', () => {
        expect(wrapper.find('div').length).toEqual(2);
    })

    it('it should render 2 </Button> `/s', () => {
        expect(wrapper.find('Button').length).toEqual(2);
    })
})