import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from "./store";
import Container from './components/Container';
import { configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure ({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

/*global someFunction b:true*/
/*eslint no-undef: "error"*/


// describe('App component testing', function() {
//   it('renders welcome message', function() {
//     const wrapper = shallow(<Provider store={store} />); 
//     const welcome = <p> The Best Price List !! </p>;
//     // expect(wrapper.contains(welcome)).to.equal(true);
//   });

// });

describe('App component testing', function() {
it('renders without crashing', () => {
  const data = {"date":"2018-05-07","currencyList":
    [{"currency":"BTC","buyPrice":"$34.98","buyTime":"9:15 AM","sellPrice":"$37.01","sellTime":"12:30 PM","profit":"$2.03"}]};
  
   const wrapper = shallow(<Container store={store} priceList={data}/>);
// expect(wrapper.find('div').exists()).to.equal(true);

});
});
