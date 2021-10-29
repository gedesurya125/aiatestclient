import React from 'react';
import reactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import AppNavBar from '../index';
import { Provider } from 'react-redux';
import store from '../../../redux/store';


const AppNavBarWithRedux = () => <Provider store={store}><div data-testid="app-navbar"><AppNavBar/></div></Provider>

it('component should render without crash', () => {
  const div = document.createElement('div');
  reactDOM.render(<AppNavBarWithRedux/>, div);
  reactDOM.unmountComponentAtNode(div);
})

it('component should render correctly', () => {
  const {getByTestId} = render(<AppNavBarWithRedux/>)
  const appNavbar = getByTestId('app-navbar');
  const searchInputContainer = getByTestId('search-input-container');
  const logoSection = getByTestId('logo-section');
  expect(appNavbar).toContainElement(searchInputContainer);
  expect(appNavbar).toContainElement(logoSection);
})

it('Match snapshot 1', () => {
  const tree = renderer.create(<AppNavBarWithRedux/>);
  expect(tree).toMatchSnapshot();
})
