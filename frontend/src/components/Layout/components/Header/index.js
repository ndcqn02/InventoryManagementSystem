import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import React from 'react';
import { UserIcon, BellAlertIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

const cx = classNames.bind(styles);

function Header() {
   return (
      <header className={cx('wrapper')}>
         <nav
            className=" bg-white relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
            navbar-scroll="false"
         >
            <div className="flex items-center justify-between w-full py-1 mx-auto flex-wrap-inherit">
               <nav>
                     <img  className='h-11' alt="logo" src="https://i.imgur.com/oE5Tzmg.png" />
                  <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                     {/* <li className="text-sm leading-normal text-black opacity-50">Pages</li>
                     <li
                        className="text-sm pl-2 capitalize leading-normal text-black before:float-left before:pr-2 before:text-white before:content-['/']"
                        aria-current="page"
                     >
                        Dashboard
                     </li> */}
                  </ol>
                  {/* <h6 className="mb-0 font-bold text-black capitalize">Dashboard</h6> */}
               </nav>

               <div className="flex items-center  mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                  <div className="flex items-center md:ml-auto md:pr-4">
                     <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                        <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                           <i className="fas fa-search"></i>
                        </span>
                        <input
                           type="text"
                           className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                           placeholder="Type here..."
                        />
                     </div>
                  </div>
                  <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full ml-1">
                     <li className="flex items-center mr-2">
                        <a
                           href="/sign-in"
                           className="block in px-0 py-2 text-sm font-semibold text-black transition-all ease-nav-brand"
                        >
                           <UserIcon className="h-5 w-5 inline" />

                           <span className="inline">Đăng nhập</span>
                        </a>
                     </li>

                     <li className="relative flex items-center pr-2 mr-2">
                        <Cog6ToothIcon className="h-5 w-5" />
                     </li>

                     <li className="relative flex items-center pr-2 mr-2">
                        <BellAlertIcon className="h-5 w-5" />
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default Header;
