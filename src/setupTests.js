import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// Fail test if there is an error in the console
console.error = message => {
  throw new Error(message);
};
