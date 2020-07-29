import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Header from './components/Header/header';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />))

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render .App', () => {
    expect(wrapper.find('.App').exists());
  })

  it('should render header component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  })
})
