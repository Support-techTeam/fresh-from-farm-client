import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Badge,
} from '@material-tailwind/react';
import {
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { ProfileMenu } from '../components/navbar/Avatar';
import Login from '../pages/authentication/Login';
import Registration from '../pages/authentication/Registration';
import InputSearchField from '../components/common/InputSearchField';
import '../styles/general-header.css';
import { useCart } from '../context/CartContext';

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to="/">
        <Typography variant="small" color="white" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4 menu-text">
            Home
          </ListItem>
        </Typography>
      </Link>
      <Link to="/shop">
        <Typography variant="small" color="white" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4 menu-text">
            Shop
          </ListItem>
        </Typography>
      </Link>
      <Link to="/shop">
        <Typography variant="small" color="white" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4 menu-text">
            Products
          </ListItem>
        </Typography>
      </Link>
      <Link to="/shop">
        <Typography variant="small" color="white" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4 menu-text">
            Blog
          </ListItem>
        </Typography>
      </Link>
      <Link to="/shop">
        <Typography variant="small" color="white" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4 menu-text">
            Pages
          </ListItem>
        </Typography>
      </Link>
      <Link to="/shop">
        <Typography variant="small" color="white" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4 menu-text">
            Join a Group
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

export function GeneralHeader() {
  const [openNav, setOpenNav] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const { totalQuantity } = useCart();
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const handleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleRegistrationModal = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  return (
    <>
      {/*<!-- Component: Navbar with Topbar --> */}
      {/*<!-- Top bar --> */}
      <div className="border-b border-slate-200 bg-slate-100 mb-0 overflow-x-hidden">
        <div className="flex items-center lg:justify-between justify-center">
          <div className="md:ml-10">
            <Link to="/">
              <img
                src="/logos/Logo_xl.png"
                alt="F23-Logo"
                className="mr-4 md:mr-1 cursor-pointer py-1.5 lg:ml-2 md:ml-6"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <InputSearchField
              type="text"
              name="search"
              label="Search"
              placeholder="Search"
              classess="rounded-full h-12 w-[362px]"
              labelClasses=""
            />
          </div>
          <div className="hidden gap-2 lg:flex md:mr-10">
            {false ? (
              <ProfileMenu />
            ) : (
              <IconButton
                variant="text"
                color="black"
                onClick={handleLoginModal}
              >
                <UserIcon className="h-5 w-5" />
              </IconButton>
            )}

            <IconButton variant="text" color="black">
              <HeartIcon className="h-5 w-5" />
            </IconButton>
            <Link to="/cart" className="flex justify-center items-center">
              <Badge
                content={totalQuantity}
                withBorder
                className="px-2 bg-amber-500 border-0 text-white mt-1"
                color="amber"
              >
                <IconButton variant="text">
                  <ShoppingCartIcon className="h-5 w-5" />
                </IconButton>
              </Badge>
            </Link>
          </div>
        </div>
      </div>

      {/*<!-- Header --> */}
      <header className="w-full flex justify-center items-center mx-auto">
        <div className="max-h-[768px] w-[calc(100%+48px)]">
          <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-2 py-2 lg:px-8 lg:py-4 bg-[#A4BC46]">
            <Login
              isOpen={isLoginOpen}
              toggleModal={handleLoginModal}
              toggleRegisterModal={handleRegistrationModal}
            />
            <Registration
              isOpen={isRegistrationOpen}
              toggleModal={handleRegistrationModal}
              toggleLoginModal={handleLoginModal}
            />
            <div className="flex items-center lg:justify-center justify-end text-blue-gray-900">
              <div className="hidden lg:block">
                <NavList />
              </div>
              <IconButton
                variant="text"
                color="blue-gray"
                className="lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
                )}
              </IconButton>
            </div>
            <Collapse open={openNav}>
              <NavList />
              <div className="px-2">
                <InputSearchField
                  type="text"
                  name="search"
                  placeholder="Search"
                  classess="rounded-full h-12 w-[100%] md:w-[100%] lg:w-[362px]"
                />
              </div>
              <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden px-2">
                {false ? (
                  <ProfileMenu />
                ) : (
                  <IconButton
                    variant="text"
                    color="white"
                    onClick={handleLoginModal}
                  >
                    <UserIcon className="h-5 w-5" />
                  </IconButton>
                )}

                <IconButton variant="text" color="white">
                  <HeartIcon className="h-5 w-5" />
                </IconButton>
                <Link to="/cart" className="flex justify-center items-center">
                  <Badge
                    content={totalQuantity}
                    withBorder
                    className="px-2 bg-amber-500 border-0 text-white mt-1"
                    color="amber"
                  >
                    <IconButton variant="text">
                      <ShoppingCartIcon className="h-5 w-5 text-white" />
                    </IconButton>
                  </Badge>
                </Link>
              </div>
            </Collapse>
          </Navbar>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
