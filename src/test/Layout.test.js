import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import chaiEnzyme from 'chai-enzyme';
import { createMemoryHistory } from 'history'
import Layout from '../components/Layout';

configure({ adapter: new Adapter() });

describe('Header Component', () => {

    let component;
    let historyObj;

    beforeEach(() => {
        historyObj = createMemoryHistory();
        component = shallow(<Layout.WrappedComponent history={historyObj}/>)
    })

    it('It should render without errors', () => {
        const wrapper = component.find("[data-test='headerComponent']");
        expect(wrapper.length).to.equal(1);
    });

    it('It should render navigationElement', () => {
        const wrapper = component.find('[data-test="headerComponent"]').dive().dive().find('[data-test="headerNavigation"]');
        expect(wrapper.length).to.equal(1);
    })

    it('It should render correct path to navigate to add new employee page', () => {
        const wrapper = component.find('[data-test="headerComponent"]').dive().dive().childAt(0);
        wrapper.find('[data-test="employeeList"]').simulate('click');
        expect(historyObj.location.pathname).to.equal('/employees');
    })

    chai.use(chaiEnzyme())
    
})