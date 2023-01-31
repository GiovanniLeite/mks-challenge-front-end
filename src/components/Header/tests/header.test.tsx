import { Provider } from 'react-redux';

import { mockedState, mockStore } from '../../../redux/app/mockStore';
import Header from '..';
import { customRender } from '../../../utils/customRender';

describe('Components <Header />', () => {
  it('should render <Header /> and redux info', () => {
    const { getByText, getByTitle } = customRender(
      <Provider store={mockStore(mockedState)}>
        <Header />
      </Provider>,
    );

    expect(getByText(/MKS/)).toBeInTheDocument();
    expect(getByTitle('Carrinho')).toHaveTextContent(/2/);
    expect(getByTitle('Total')).toHaveTextContent(/5.000/);
  });
});
