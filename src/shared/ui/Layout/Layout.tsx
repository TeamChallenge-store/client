import { FC, ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { IProductCard } from '~entities/product';
import { ProductList } from '~widgets/product-list';

type TLayoutProps = {
  header: ReactNode;
  footer?: ReactNode;
};

const products: IProductCard[] = [
 {
  id: 0,
  name: "Tent Te Terra Incognita  ALFA 2",
  price: "4 800",
  image: "https://s3-alpha-sig.figma.com/img/a620/60f9/a89486e32ed4bb35b52789006e692e62?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eivza1R-Tg-TALe0rGwGd6sut96DFWC4Xzbbdh4D46H6dOujH2dPMtoe3IO7iu6nT-~OCUXKSk6EGczUz~-YOuyZ2kuX5Ss7cV3dz5EXQawD5RdERzFk0rQxbyRsieLeLjVcRGFEqcSqnqwH9rtlCmGZOSzkoYyVbgBKyh7j3Io4LChpzFipZH~iqkehpQwdaP9F8iqQGmOC23Rf7nZHxj4GrOLIVL-rCmB0Sv5apSFYCPRyvjexqmKPbXj0o5qkCFhknY0J0CQyPsU~GR5Lli3TJvTdTBfS9uhoGuHFBZ18k52libAGGTst4s~bPXIl5GYzq5yn1Xotsu5u3EvXcw__",
  oldPrice: "4 800"
 },
 {
  id: 1,
  name: "fdsdsdd kdsd dsdsd jjkjkj hkjhjkhn ",
  price: "3232",
  image: "https://s3-alpha-sig.figma.com/img/1166/41f3/6479e8303ea19583b11bde39ecc87de2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SzRBWu3yEaL7wX9bupHeX6Pz1fqMNalw~yb9-kYrmZkNf0y8SHC75xMqZjCQjCHk4fd3ZDfXJL-h0VTHf8zNL2d57eoI4WVpAW9xw~H5~qFkinPH66RCn8U075nEKa0hsGBFeTJlPaN2nEXReq3FCdOHZADSVmDEeAyi8rKAcBSRYYAAiV8n08RvbLMOYv6NFoAbA7RUNeGctROch4OYmd07MkaXAB87YDlqWReA~3-fmzwc9gLNLbPAHWzyqBe4k-CmYiyhjEXf6Ckl44rgxYd0GPDLbafDy9C-a~93CGVsO-a7i5nNYX3E8m0AqW4tobgOo-ul7~iOm8FVIWvaQA__",
  oldPrice: "32323"
 },
 {
  id: 2,
  name: "fdsdsdd kjjkjkj hkjhjkhn ",
  price: "3232",
  image: "https://s3-alpha-sig.figma.com/img/a620/60f9/a89486e32ed4bb35b52789006e692e62?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eivza1R-Tg-TALe0rGwGd6sut96DFWC4Xzbbdh4D46H6dOujH2dPMtoe3IO7iu6nT-~OCUXKSk6EGczUz~-YOuyZ2kuX5Ss7cV3dz5EXQawD5RdERzFk0rQxbyRsieLeLjVcRGFEqcSqnqwH9rtlCmGZOSzkoYyVbgBKyh7j3Io4LChpzFipZH~iqkehpQwdaP9F8iqQGmOC23Rf7nZHxj4GrOLIVL-rCmB0Sv5apSFYCPRyvjexqmKPbXj0o5qkCFhknY0J0CQyPsU~GR5Lli3TJvTdTBfS9uhoGuHFBZ18k52libAGGTst4s~bPXIl5GYzq5yn1Xotsu5u3EvXcw__",
  oldPrice: "32323"
 },
 {
  id: 3,
  name: "fdsdsdd dsdsdsdsds dsds kjjkjkj hkjhjkhn ",
  price: "3232",
  image: "https://s3-alpha-sig.figma.com/img/a620/60f9/a89486e32ed4bb35b52789006e692e62?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eivza1R-Tg-TALe0rGwGd6sut96DFWC4Xzbbdh4D46H6dOujH2dPMtoe3IO7iu6nT-~OCUXKSk6EGczUz~-YOuyZ2kuX5Ss7cV3dz5EXQawD5RdERzFk0rQxbyRsieLeLjVcRGFEqcSqnqwH9rtlCmGZOSzkoYyVbgBKyh7j3Io4LChpzFipZH~iqkehpQwdaP9F8iqQGmOC23Rf7nZHxj4GrOLIVL-rCmB0Sv5apSFYCPRyvjexqmKPbXj0o5qkCFhknY0J0CQyPsU~GR5Lli3TJvTdTBfS9uhoGuHFBZ18k52libAGGTst4s~bPXIl5GYzq5yn1Xotsu5u3EvXcw__",
  oldPrice: "32323"
 },

]

const Layout: FC<TLayoutProps> = props => {
  return (
    <>
      {props.header}
      <main>
        <div className='box'>
        <ProductList products={products}/>
        </div>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
      {props.footer}
    </>
  );
};

Layout.defaultProps = {
  footer: <footer>Footer</footer>,
};

export { Layout };
