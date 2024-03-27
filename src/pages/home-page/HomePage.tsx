import { Empty } from '~shared/ui/Empty';
import { Layout } from './ui/HomePage';
import { PromotionalOffers } from '~widgets/promotional-offers';
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
    stock={<PromotionalOffers />}
    subscribe={<SubscribeBlock />}
  />
);

export { HomePage };
