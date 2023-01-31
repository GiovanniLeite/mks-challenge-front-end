import { Provider } from 'react-redux';

import { mockedState, mockStore } from '../../../redux/app/mockStore';
import Card from '..';
import { customRender } from '../../../utils/customRender';

export const product = {
  id: 8,
  name: 'Headset Cloud Stinger',
  brand: 'HyperX',
  description:
    'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
  photo:
    'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
  price: '1600.00',
  createdAt: '2023-01-23T18:17:04.771Z',
  updatedAt: '2023-01-23T18:17:04.771Z',
};

describe('Components <Card />', () => {
  it('should render <Card /> and redux info', () => {
    const { getByText } = customRender(
      <Provider store={mockStore(mockedState)}>
        <Card {...product} />
      </Provider>,
    );

    expect(getByText(/Headset Cloud Stinger/)).toBeInTheDocument();
    expect(getByText(/1.600/)).toBeInTheDocument();
    expect(
      getByText(
        /O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza/,
      ),
    ).toBeInTheDocument();
    expect(getByText(/COMPRAR/)).toBeInTheDocument();
  });
});
