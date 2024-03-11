import { Empty } from '~shared/ui/Empty';
import { Layout } from './ui/HomePage';
import { CategoriesBanner } from '~widgets/categories-banner';
import { SubscribeBlock } from '~widgets/subscribe-block';

const HomePage = () => (
  <Layout
    categories={<Empty title="categories" />}
    categoriesSlider={<Empty title="categoriesSlider" />}
    title={<Empty title="title" />}
    bestsellers={<Empty title="bestsellers" />}
    subCategory={<CategoriesBanner />}
    newProducts={<Empty title="newProducts" />}
    stock={<Empty title="stock" />}
    subscribe={<SubscribeBlock />}
  />
);

export { HomePage };
