import React from 'react';
import Enzyme, { mount } from 'enzyme';
import LoginPage from './login-page';
import rootReducer from '../../redux/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'jsdom-global/register';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const initialState: any = {
  form: {
    request: false,
    user: {},
  },
};

const store = createStore(rootReducer, initialState);

describe('Login page', () => {
  let wrapper: any;

  beforeEach(() => {
    const Wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

    wrapper = mount(<LoginPage />, { wrappingComponent: Wrapper });
  });

  it('should render something', async () => {
    expect(wrapper).not.toBeNull();
  });

  it('should render paragraph', async () => {
    expect(wrapper.find('p').text()).toEqual('Enter your email and password.');
  });
});
