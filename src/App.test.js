import React from 'react';
import { render } from '@testing-library/react'; //RTL
// import renderer from 'react-test-renderer'; // --dev react-test-renderer
import App from './App';

// JestDOM --> DOM yang ada di Browser

test('renders learn react link', () => {
  const { getByText } = render(<App />); // Render komponen
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('change language', () => {
//   const component = renderer.create(
//     <App />
//   );

//   let tree = component.toJSON();  // tree component itu seperti faktorial triangle
//   expect(tree).toMatchSnapshot(); //snapshot sama seperti DOM

//   component.getInstance()._handleClick(); // klik pertama
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   component.getInstance()._handleClick(); // maling dari state-state app.js
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot(); //klik kedua
// })

// test('2 tambah 3 adalah 5', () => {
//   expect(2 + 3).toBe(5);
// })

// test('object equality', () => {
//   const iniObject = { pertama: 1 };
//   iniObject['kedua'] = 2;
//   expect(iniObject).toEqual({
//     pertama: 1,
//     kedua: 2
//   });

//   let sesuatu;
//   expect(sesuatu).toBeUndefined();

//   let iniNull = null;
//   expect(iniNull).toBeNull();
//   expect(iniNull).toBeDefined();
//   expect(false).toBeFalsy();
//   expect(true).toBeTruthy();

//   let number = 4;
//   expect(number).toBeGreaterThan(3);
//   expect(number).toBeGreaterThanOrEqual(4);
//   expect(number).toBeLessThan(5);

//   let string = 'ini string';
//   expect(string).not.toMatch(/a/);
//   expect(string).toMatch(/i/);

//   let array = [1, 2, 3];
//   expect(array).toContain(1);
// })
