import { shallow } from 'enzyme';
import App from './App';


test('app component renders without crashing', () =>{
   const wrapper = shallow(<App/>);
   expect(wrapper.exists()).toBe(true);
});

