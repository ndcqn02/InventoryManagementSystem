import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import React from 'react';
import { UserIcon, BellAlertIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderCustomer() {
   return (
      <header className={cx('wrapper')}>
         <nav
            className=" h-full bg-white relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
            navbar-scroll="false"
         >
            <div className="flex items-center justify-between w-full py-1 mx-auto flex-wrap-inherit">
               <img alt="logo" src="https://i.imgur.com/oE5Tzmg.png" />

               <nav>
                  <ul className="flex items-center ml-60">
                     <NavLink to="/">
                        <li className="mx-4 font-bold text-lg hover:text-blue-500">Trang chủ</li>
                     </NavLink>
                     <NavLink to="/">
                        <li className="mx-4 font-bold text-lg hover:text-blue-500">Danh mục sản phẩm</li>
                     </NavLink>
                     <NavLink to="/">
                        <li className="mx-4 font-bold text-lg hover:text-blue-500">Liên hệ</li>
                     </NavLink>
                  </ul>
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
                  <ul className="flex flex-row  pl-0 mb-0 list-none md-max:w-full ml-1">
                     <li className="flex items-center p-3">
                        <Link to="/sign-in">
                           <UserIcon className="h-6 w-6" />
                        </Link>
                     </li>

                     <li className="relative flex items-center pr-2 p-3">
                        <BellAlertIcon className="h-6 w-6" />
                     </li>
                     <li className="relative flex items-center pr-2 p-3">
                        <Link to="/cart">
                           {/* <ShoppingCartIcon className="h-6 w-6" /> */}
                           
                           <button
                              className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                              aria-label="Cart"
                           >
                              <svg
                                 className="h-6 w-6"
                                 fill="none"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                              <span className="absolute inset-0 object-right-top -mr-6">
                                 <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                                    0
                                 </div>
                              </span>
                           </button>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default HeaderCustomer;
