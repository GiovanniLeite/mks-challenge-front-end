import '@testing-library/jest-dom/extend-expect';

import { customRender } from '../../../utils/customRender';
import Footer from '..';

describe('Components <Footer />', () => {
  it('should render <Footer />', () => {
    const { getByText } = customRender(<Footer />);

    expect(
      getByText(/MKS sistemas © Todos os direitos reservados/),
    ).toBeInTheDocument();
  });
});
