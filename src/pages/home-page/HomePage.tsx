import { Empty } from '~shared/ui/Empty';
import { Layout } from './ui/HomePage';

const HomePage = () => (
  <Layout
    categories={<Empty title="categories" />}
    categoriesSlider={<Empty title="categoriesSlider" />}
    title={<Empty title="title" />}
    bestsellers={<Empty title="bestsellers" />}
    subCategory={<Empty title="subCategory" />}
    newProducts={<Empty title="newProducts" />}
    stock={<Empty title="stock" />}
    subscribe={<Empty title="subscribe" />}
  />
);

export { HomePage };
