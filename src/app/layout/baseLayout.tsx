import { Layout } from '~shared/ui/Layout';
import { Header } from '~widgets/header';
import { Search } from '~features/search';

const baseLayout = <Layout header={<Header searchSlot={<Search />} />} />;

export { baseLayout };
