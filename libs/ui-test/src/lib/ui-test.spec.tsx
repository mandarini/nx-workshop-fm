import { render } from '@testing-library/react';

import UiTest from './ui-test';

describe('UiTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiTest />);
    expect(baseElement).toBeTruthy();
  });
});
