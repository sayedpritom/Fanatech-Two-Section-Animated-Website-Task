import { Fragment } from 'react'
import './Navbar.css';
import { Disclosure, Menu, Transition, } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../images/logo.svg';
import cart from '../../images/cart.svg';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'EN', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-light navbarStyle">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                {/* Logo and Navigation */}
                <div className="flex flex-shrink-0 grow-0 items-center">
                  <img
                    className="block h-10 w-auto md:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-12 w-auto md:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 md:block md:grow md:flex md:justify-end">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='navBarLinks hover:bg-gray-700 hover:text-white text-sm leading-sm pt-[10px] lg:text-[18px] lg:leading-[18px]'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="button px-4 py-2 text-sm lg:w-[154px] lg:h-[58px] lg:text-[20px]"
                    >
                      Login
                    </button>
                    <div className='cart-icon h-10 w-10 lg:h-[60px] lg:w-[60px]'>
                      <span className='cart-number'>0</span>
                      <img className='w-5 ' src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden fixed navbar-sm ">
            {/* Mobile dropdown button and list of navigation */}
            <div className="space-y-1 px-2 pb-3 pt-2 bg-light-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="">
                <button
                  type="button"
                  className="button px-4 py-2 text-sm lg:w-[154px] lg:h-[58px] lg:text-[20px]"
                >
                  Login
                </button>
                <div className='cart-icon h-10 w-10 lg:h-[60px] lg:w-[60px] mt-5 ml-0'>
                  <span className='cart-number'>0</span>
                  <img className='w-5 ' src={cart} alt="" />
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default Navbar;