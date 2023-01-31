import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockedState, mockStore } from '../../../redux/app/mockStore';
import Cart from '..';
import { customRender } from '../../../utils/customRender';

describe('Components <Cart />', () => {
  it('should render <Cart /> and redux info', () => {
    const { getByTitle } = customRender(
      <Provider store={mockStore(mockedState)}>
        <Cart />
      </Provider>,
    );

    expect(getByTitle(/Headset Cloud Stinger/)).toBeInTheDocument();
    expect(getByTitle(/Apple Watch Series 7/)).toBeInTheDocument();
  });

  it('should increase the quantity of the first item', async () => {
    const { getAllByTitle, unmount } = customRender(
      <Provider store={mockStore(mockedState)}>
        <Cart />
      </Provider>,
    );

    const qty = getAllByTitle('Quantidade')[0];
    expect(qty).toHaveAttribute('value', '3');

    const increase = getAllByTitle('Aumentar');
    userEvent.click(increase[0]);

    await waitFor(() => {
      expect(qty).toHaveAttribute('value', '4');
    });

    unmount();
  });

  it('should decrease the quantity of the first item', async () => {
    const { getAllByTitle, unmount } = customRender(
      <Provider store={mockStore(mockedState)}>
        <Cart />
      </Provider>,
    );

    const qty = getAllByTitle('Quantidade')[0];
    expect(qty).toHaveAttribute('value', '3');

    const decrease = getAllByTitle('Diminuir');
    userEvent.click(decrease[0]);

    await waitFor(() => {
      expect(qty).toHaveAttribute('value', '2');
    });

    unmount();
  });

  it('should remove the the first item', async () => {
    const { getByTitle, getAllByTitle, queryByTitle, unmount } = customRender(
      <Provider store={mockStore(mockedState)}>
        <Cart />
      </Provider>,
    );

    expect(getByTitle(/Headset Cloud Stinger/)).toBeInTheDocument();

    const remove = getAllByTitle('Remover');
    userEvent.click(remove[0]);

    await waitFor(() => {
      expect(queryByTitle(/Headset Cloud Stinger/)).not.toBeInTheDocument();
    });

    unmount();
  });
});
