import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App, {Display, Dashboard} from './App';

const clickMultipleTimes    =   (num, button)  =>  {
    for(i = 0; i < num; i++)    {
        fireEvent.click(button)
    }
}


describe('Display renders and functions properly',  ()  =>  {

    test('Display without crashing', () => {
      render(<Display />);
    });

    test('Display shows count of balls and strikes for at-bat', ()  =>  {
        const component = render(<Display />);
        const balls = component.getByTestId('balls');
        const strikes = component.getByTestId('strikes');
        expect(balls).toHaveTextContent('0');
        expect(strikes).toHaveTextContent('0');
    })

    test('Display balls and strikes reset to 0 when balls hits 4',  ()  =>  {
        const display = render(<Display />);
        const dashboard = render(<Dashboard />);
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const ballButton = dashboard.getByTestId('ballButton');
        const strikeButton = dashboard.getByTestId('strikeButton');
        clickMultipleTimes(2, strikeButton)
        clickMultipleTimes(4, ballButton)
        expect(balls).toHaveTextContent('0')
        expect(strikes).toHaveTextContent('0')
    })

    test('Display balls and strikes reset to 0 when strikes hits 3',  ()  =>  {
        const display = render(<Display />);
        const dashboard = render(<Dashboard />);
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const ballButton = dashboard.getByTestId('ballButton');
        const strikeButton = dashboard.getByTestId('strikeButton');
        clickMultipleTimes(3, ballButton)
        clickMultipleTimes(3, strikeButton)
        expect(balls).toHaveTextContent('0')
        expect(strikes).toHaveTextContent('0')
    })

    test('Display balls and strikes reset to 0 when strikes hits 3',  ()  =>  {
        const display = render(<Display />);
        const dashboard = render(<Dashboard />);
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const ballButton = dashboard.getByTestId('ballButton');
        const strikeButton = dashboard.getByTestId('strikeButton');
        const hitButton = dashboard.getByTestId('hitButton');
        clickMultipleTimes(3, ballButton)
        clickMultipleTimes(2, strikeButton)
        fireEvent.click(hitButton);
        expect(balls).toHaveTextContent('0')
        expect(strikes).toHaveTextContent('0')
    })

    test('Display strikes increases to a max of 2 when foul button is clicked',  ()  =>  {
        const display = render(<Display />);
        const dashboard = render(<Dashboard />);
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const foulButton = dashboard.getByTestId('foulButton');
        clickMultipleTimes(10, foulButton)
        expect(strikes).toHaveTextContent('2')
    })

})

describe('Dashboard renders and functions properly',  ()  =>  {

    test('Dashboard without crashing', () => {
      render(<Dashboard />);
    });
    test('Dashboard buttons render without crashing',   ()  =>  {
        const component = render(<Dashboard />);
        const ballButton = component.getByTestId('ballButton')
        const foulButton = component.getByTestId('foulButton')
        const hitButton = component.getByTestId('hitButton')
        const strikeButton = component.getByTestId('strikeButton')
        expect(ballButton).toHaveTextContent('ball');
        expect(strikeButton).toHaveTextContent('strike');
        expect(foulButton).toHaveTextContent('foul');
        expect(hitButton).toHaveTextContent('hit');
    })
})
