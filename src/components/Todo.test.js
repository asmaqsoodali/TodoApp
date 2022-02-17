import { shallow } from 'enzyme';
import Todo from './Todo';

test('render todo without crashing',()=>{
    const wrapper = shallow(<Todo/>);
    expect(wrapper.exists()).toBe(true);
})

test('expecting todo component to have header Manage your task',()=>{
    const wrapper = shallow(<Todo/>);
    expect(wrapper.contains(<h3>Manage your task</h3>)).toBe(true)
})
