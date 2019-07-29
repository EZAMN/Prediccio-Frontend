import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

var chai = require('chai');
chai.should();
chai.config.includeStack = true;

process.env.NODE_ENV = 'test';