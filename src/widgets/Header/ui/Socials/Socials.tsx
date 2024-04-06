import { NavLink } from 'react-router-dom';
import css from './Socials.module.scss';

const Socials = () => {
  return (
    <ul className={css.socials}>
      <li>
        <NavLink to="https://www.youtube.com/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M18.145 5.017H6.47801C4.18801 5.017 2.33301 6.852 2.33301 9.116V14.884C2.33301 17.148 4.18901 18.984 6.47801 18.984H18.145C20.435 18.984 22.29 17.148 22.29 14.884V9.116C22.29 6.852 20.434 5.016 18.145 5.016V5.017ZM15.342 12.28L9.88501 14.855C9.85172 14.871 9.81493 14.8784 9.77804 14.8764C9.74115 14.8743 9.70538 14.863 9.67404 14.8435C9.6427 14.8239 9.61682 14.7967 9.59881 14.7645C9.58079 14.7322 9.57123 14.6959 9.57101 14.659V9.35C9.57167 9.31287 9.58173 9.27652 9.60023 9.24432C9.61873 9.21213 9.64508 9.18514 9.67683 9.16588C9.70857 9.14661 9.74468 9.13569 9.78178 9.13414C9.81888 9.13259 9.85577 9.14045 9.88901 9.157L15.347 11.892C15.3834 11.9101 15.4139 11.9381 15.435 11.9728C15.4562 12.0075 15.4671 12.0474 15.4666 12.0881C15.4661 12.1287 15.4541 12.1683 15.4321 12.2025C15.41 12.2366 15.3788 12.2638 15.342 12.281V12.28Z"
              fill="black"
            />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://www.facebook.com/">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M9.37923 5.865V8.613H7.36523V11.973H9.37923V21.959H13.5132V11.974H16.2882C16.2882 11.974 16.5482 10.363 16.6742 8.601H13.5302V6.303C13.5302 5.96 13.9802 5.498 14.4262 5.498H16.6802V2H13.6162C9.27623 2 9.37923 5.363 9.37923 5.865Z"
              fill="black"
            />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://twitter.com/">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M22.333 5.907C21.5834 6.23438 20.7895 6.44904 19.977 6.544C20.8298 6.04323 21.4711 5.24911 21.781 4.31C20.973 4.78033 20.0917 5.1116 19.174 5.29C18.7876 4.88521 18.3227 4.56339 17.8078 4.34418C17.2928 4.12497 16.7386 4.01297 16.179 4.015C13.913 4.015 12.076 5.825 12.076 8.055C12.076 8.371 12.112 8.68 12.182 8.975C10.5566 8.89769 8.96512 8.48241 7.50918 7.75564C6.05323 7.02887 4.76477 6.00658 3.72601 4.754C3.36183 5.3684 3.17042 6.06978 3.17201 6.784C3.1727 7.45197 3.33984 8.10923 3.6583 8.69639C3.97676 9.28356 4.43651 9.78211 4.99601 10.147C4.34549 10.126 3.70903 9.95233 3.13801 9.64V9.69C3.13801 11.648 4.55301 13.281 6.42801 13.653C6.07562 13.7465 5.71259 13.7939 5.34801 13.794C5.08301 13.794 4.82601 13.769 4.57501 13.719C4.84309 14.5269 5.35611 15.2313 6.04283 15.7343C6.72954 16.2374 7.55585 16.5141 8.40701 16.526C6.94708 17.6505 5.15483 18.258 3.31201 18.253C2.98001 18.253 2.65401 18.233 2.33301 18.197C4.21426 19.3877 6.3956 20.0183 8.62201 20.015C16.169 20.015 20.295 13.858 20.295 8.519L20.281 7.996C21.0859 7.42967 21.7812 6.72185 22.333 5.907Z"
              fill="black"
            />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://www.instagram.com/">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M16.35 2H8.28001C6.70316 2.00185 5.19144 2.62914 4.07654 3.74424C2.96163 4.85933 2.3346 6.37115 2.33301 7.948L2.33301 16.018C2.33486 17.5948 2.96215 19.1066 4.07724 20.2215C5.19234 21.3364 6.70416 21.9634 8.28101 21.965H16.351C17.9279 21.9631 19.4396 21.3359 20.5545 20.2208C21.6694 19.1057 22.2964 17.5938 22.298 16.017V7.947C22.2962 6.37015 21.6689 4.85844 20.5538 3.74353C19.4387 2.62862 17.9269 2.00159 16.35 2V2ZM20.29 16.017C20.29 16.5344 20.1881 17.0468 19.9901 17.5248C19.7921 18.0028 19.5019 18.4371 19.136 18.803C18.7701 19.1689 18.3358 19.4591 17.8578 19.6571C17.3798 19.8551 16.8674 19.957 16.35 19.957H8.28001C7.23523 19.9567 6.23333 19.5415 5.49465 18.8026C4.75598 18.0638 4.34101 17.0618 4.34101 16.017V7.947C4.34127 6.90222 4.7565 5.90032 5.49536 5.16165C6.23423 4.42297 7.23623 4.008 8.28101 4.008H16.351C17.3958 4.00827 18.3977 4.42349 19.1364 5.16235C19.875 5.90122 20.29 6.90322 20.29 7.948V16.018V16.017Z"
              fill="black"
            />
            <path
              // eslint-disable-next-line max-len
              d="M12.3153 6.819C10.9467 6.82112 9.63485 7.36579 8.66722 8.33361C7.69959 9.30143 7.15517 10.6134 7.15332 11.982C7.15491 13.3509 7.69934 14.6633 8.66722 15.6314C9.6351 16.5995 10.9474 17.1441 12.3163 17.146C13.6854 17.1444 14.998 16.5998 15.9661 15.6317C16.9342 14.6637 17.4787 13.3511 17.4803 11.982C17.4782 10.6131 16.9333 9.30088 15.965 8.33319C14.9968 7.3655 13.6842 6.82132 12.3153 6.82V6.819ZM12.3153 15.138C11.4786 15.138 10.6761 14.8056 10.0844 14.2139C9.49272 13.6222 9.16032 12.8198 9.16032 11.983C9.16032 11.1462 9.49272 10.3438 10.0844 9.75208C10.6761 9.1604 11.4786 8.828 12.3153 8.828C13.1521 8.828 13.9546 9.1604 14.5462 9.75208C15.1379 10.3438 15.4703 11.1462 15.4703 11.983C15.4703 12.8198 15.1379 13.6222 14.5462 14.2139C13.9546 14.8056 13.1521 15.138 12.3153 15.138Z"
              fill="black"
            />
            <path
              // eslint-disable-next-line max-len
              d="M17.489 8.095C18.1721 8.095 18.726 7.54118 18.726 6.858C18.726 6.17483 18.1721 5.621 17.489 5.621C16.8058 5.621 16.252 6.17483 16.252 6.858C16.252 7.54118 16.8058 8.095 17.489 8.095Z"
              fill="black"
            />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://www.linkedin.com/">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M22.292 13.719V21.098H18.014V14.213C18.014 12.483 17.395 11.303 15.847 11.303C14.665 11.303 13.961 12.099 13.652 12.868C13.539 13.143 13.51 13.526 13.51 13.911V21.098H9.23001C9.23001 21.098 9.28801 9.438 9.23001 8.229H13.51V10.053L13.482 10.095H13.51V10.053C14.078 9.178 15.093 7.927 17.366 7.927C20.181 7.927 22.292 9.767 22.292 13.719ZM4.75401 2.026C3.29101 2.026 2.33301 2.986 2.33301 4.249C2.33301 5.484 3.26301 6.473 4.69801 6.473H4.72601C6.21901 6.473 7.14601 5.484 7.14601 4.249C7.12001 2.986 6.22001 2.026 4.75501 2.026H4.75401ZM2.58701 21.098H6.86501V8.229H2.58701V21.098Z"
              fill="black"
            />
          </svg>
        </NavLink>
      </li>
    </ul>
  );
};

export { Socials };
