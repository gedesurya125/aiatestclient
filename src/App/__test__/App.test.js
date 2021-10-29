import React from 'react';
import reactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../index';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import { getFlickrImagesAction } from '../../redux/actions/flickrImagesActions';

const TestApp = () => <Provider store={store}><App/></Provider>;

beforeAll(() => {
  store.dispatch(getFlickrImagesAction());
})


afterEach(cleanup);
it('component should render without crash', () => {
  const div = document.createElement('div');
  reactDOM.render(<TestApp/>, div);
  reactDOM.unmountComponentAtNode(div);
});

it('compoent should render properly', () => {
  const {getByTestId} = render(<TestApp/>);
  const app = getByTestId('app');
  const appHeader = getByTestId('app-header');
  const appMain = getByTestId('app-main');

  expect(app).toContainElement(appHeader);
  expect(app).toContainElement(appMain);
})


it('match snapshot', async() => {
  const tree = renderer.create(<TestApp/>).toJSON();
  expect(tree).toMatchSnapshot();
})