import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App, {Display, Dashboard} from './App';


describe('Display renders and functions properly',  ()  =>  {

    test('Display without crashing', () => {
      render(<Display />);
    });
    test('Display shows count of balls and strikes for at-bat', ()  =>  {
        const component = render(<Display />);
        const balls = component.getByTestId('balls');
        const strikes = component.getByTestId('strikes');
        expect(balls).toHaveContext('0');
        expect(balls).toHaveContext('0');
    })
})

describe('Dashboard renders and functions properly',  ()  =>  {

    test('Dashboard without crashing', () => {
      render(<Dashboard />);
    });
})
