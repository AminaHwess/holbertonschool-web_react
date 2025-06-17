import React from 'react';
import { render } from '@testing-library/react';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  it('logs mount and unmount', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const Dummy = () => <div>Dummy</div>;
    const Wrapped = WithLogging(Dummy);
    const { unmount } = render(<Wrapped />);
    expect(logSpy).toHaveBeenCalledWith('Component Dummy is mounted');
    unmount();
    expect(logSpy).toHaveBeenCalledWith('Component Dummy is going to unmount');
    logSpy.mockRestore();
  });
}); 