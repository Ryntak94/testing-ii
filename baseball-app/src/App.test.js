import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App, {Display, Dashboard} from './App';

const clickMultipleTimes    =   (num, button)  =>  {
    for(let i = 0; i < num; i++)    {
        fireEvent.click(button)
    }
}


describe('Display renders and functions properly',  ()  =>  {
    render(<App/>)
    const display = render(<Display />);
    const dashboard = render(<Dashboard />);

    test('Display without crashing', () => {
      render(<Display />);
    });

    test('Display shows count of balls and strikes for at-bat', ()  =>  {

        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        expect(balls).toHaveTextContent('0');
        expect(strikes).toHaveTextContent('0');
    })

    test('Display shows correct numbers when ball, strike, and foul are clicked once each', ()  =>  {
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const ballButton = dashboard.getByTestId('ballButton');
        const strikeButton = dashboard.getByTestId('strikeButton');
        const foulButton = dashboard.getByTestId('foulButton');
        fireEvent.click(ballButton);
        fireEvent.click(strikeButton);
        fireEvent.click(foulButton);
        expect(balls).toHaveTextContent('1')
        expect(strikes).toHaveTextContent('2')
    })

    test('Display balls and strikes reset to 0 when balls hits 4',  ()  =>  {
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const ballButton = dashboard.getByTestId('ballButton');
        const strikeButton = dashboard.getByTestId('strikeButton');
        clickMultipleTimes(2, strikeButton)
        clickMultipleTimes(5, ballButton)
        expect(balls).toHaveTextContent('1')
        expect(strikes).toHaveTextContent('0')
    })

    test('Display balls and strikes reset to 0 when strikes hits 3',  ()  =>  {
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const ballButton = dashboard.getByTestId('ballButton');
        const strikeButton = dashboard.getByTestId('strikeButton');
        clickMultipleTimes(3, ballButton)
        clickMultipleTimes(4, strikeButton)
        expect(balls).toHaveTextContent('0')
        expect(strikes).toHaveTextContent('1')
    })

    test('Display balls and strikes reset to 0 when strikes hits 3',  ()  =>  {
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const ballButton = dashboard.getByTestId('ballButton');
        const strikeButton = dashboard.getByTestId('strikeButton');
        const hitButton = dashboard.getByTestId('hitButton');
        clickMultipleTimes(3, ballButton)
        clickMultipleTimes(2, strikeButton)
        fireEvent.click(hitButton);
        fireEvent.click(strikeButton);
        expect(balls).toHaveTextContent('0')
        expect(strikes).toHaveTextContent('1')
    })

    test('Display strikes increases to a max of 2 when foul button is clicked',  ()  =>  {
        const balls = display.getByTestId('balls');
        const strikes = display.getByTestId('strikes');
        const foulButton = dashboard.getByTestId('foulButton');
        clickMultipleTimes(10, foulButton)
        expect(strikes).toHaveTextContent('2')
    })

})

describe('Dashboard renders and functions properly',  ()  =>  {
    const dashboard = render(<Dashboard />)
    test('Dashboard without crashing', () => {
      render(<Dashboard />);
    });
    test('Dashboard buttons render without crashing',   ()  =>  {
        const ballButton = dashboard.getByTestId('ballButton')
        const foulButton = dashboard.getByTestId('foulButton')
        const hitButton = dashboard.getByTestId('hitButton')
        const strikeButton = dashboard.getByTestId('strikeButton')
        expect(ballButton).toHaveTextContent(/ball/i);
        expect(strikeButton).toHaveTextContent(/strike/i);
        expect(foulButton).toHaveTextContent(/foul/i);
        expect(hitButton).toHaveTextContent(/hit/i);
    })
})
