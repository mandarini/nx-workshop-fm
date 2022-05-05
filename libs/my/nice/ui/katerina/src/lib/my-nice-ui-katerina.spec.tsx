import { render } from '@testing-library/react';

import MyNiceUiKaterina from './my-nice-ui-katerina';

describe('MyNiceUiKaterina', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyNiceUiKaterina />);
    expect(baseElement).toBeTruthy();
  });
});
