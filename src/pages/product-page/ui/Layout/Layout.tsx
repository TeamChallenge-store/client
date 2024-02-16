import { FC, ReactNode } from 'react';

type TLayoutProps = {
  sidebar?: ReactNode;
  sortBy?: ReactNode;
  productList?: ReactNode;
  pagination?: ReactNode;
};

const Layout: FC<TLayoutProps> = props => {
  return (
    <section>
      <div className="inner">
        <aside className="filters">{props.sidebar}</aside>

        <div>
          <div className="select">{props.sortBy}</div>
          <div>
            {props.productList}
            {props.pagination}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Layout };
