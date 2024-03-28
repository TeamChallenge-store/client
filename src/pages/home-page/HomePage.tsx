import { Empty } from '~shared/ui/Empty';
import { Layout } from './ui/HomePage';
import { CategoriesBanner } from '~widgets/categories-banner';
import { SubscribeBlock } from '~widgets/subscribe-block';
import { Banner } from '~widgets/banner';

const HomePage = () => (
  <Layout
    categoriesSlider={<Banner />}
    bestsellers={<Empty title="bestsellers" />}
    subCategory={<CategoriesBanner />}
    newProducts={<Empty title="newProducts" />}
    stock={<Empty title="stock" />}
    subscribe={<SubscribeBlock />}
  />
);

export { HomePage };
