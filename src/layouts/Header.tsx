import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from '@material-tailwind/react';
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { NavListMenu } from '../components/navbar/NavLinkMeny';
import { ProfileMenu } from '../components/navbar/Avatar';

const navListShopItems = [
  {
    title: 'Vegitables',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    route: '/products',
  },
  {
    title: 'Fruits',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
    route: '/about',
  },
  {
    title: 'Meat',
    description: 'Find the perfect solution for your needs.',
    icon: Bars4Icon,
    route: '/blog',
  },
  {
    title: 'Poultry',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
    route: '/services',
  },
  {
    title: 'Eggs & Milk',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
    route: '/support',
  },
  {
    title: 'Seafood',
    description: 'Find the perfect solution for your needs.',
    icon: PhoneIcon,
    route: '/contact',
  },
];

const navListProductItems = [
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    route: '/products',
  },
  {
    title: 'Services',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
    route: '/services',
  },
];

const navListBlogItems = [
  {
    title: 'News',
    description: 'Read insightful articles, tips, and expert opinions.',
    icon: NewspaperIcon,
    route: '/news',
  },
  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles',
    icon: TagIcon,
    route: '/special-offers',
  },
];

const navListPagesItems = [
  {
    title: 'About Us',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
    route: '/about',
  },
  {
    title: 'Services',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
    route: '/services',
  },
  {
    title: 'Support',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
    route: '/support',
  },
  {
    title: 'Contact',
    description: 'Find the perfect solution for your needs.',
    icon: PhoneIcon,
    route: '/contact',
  },
];

const navListJoinGroupItems = [
  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles',
    icon: TagIcon,
    route: '/special-offers',
  },
];

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu navListItems={navListShopItems} title="Shop" />
      <NavListMenu navListItems={navListProductItems} title="Products" />
      <NavListMenu navListItems={navListBlogItems} title="Blog" />
      <NavListMenu navListItems={navListPagesItems} title="Pages" />
      <NavListMenu navListItems={navListJoinGroupItems} title="Join a Group" />
    </List>
  );
}

export function MainNavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="max-w-screen-2xl px-4 py-2 mx-2 sm:mx-4 mt-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="md:ml-10">
          <Link to="/">
            <img
              src="/logos/Logo.png"
              alt="F23-Logo"
              width={50.35}
              height={46.57}
              className="mr-4 md:mr-1 cursor-pointer py-1.5 lg:ml-2 md:ml-6"
            />
          </Link>
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <IconButton variant="text" color="black">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </IconButton>

          {false ? (
            <ProfileMenu />
          ) : (
            <IconButton variant="text" color="black">
              <UserIcon className="h-5 w-5" />
            </IconButton>
          )}

          <IconButton variant="text" color="black">
            <HeartIcon className="h-5 w-5" />
          </IconButton>
          <IconButton variant="text" color="black">
            <ShoppingCartIcon className="h-5 w-5" />
          </IconButton>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <IconButton variant="text" color="black">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </IconButton>

          {false ? (
            <ProfileMenu />
          ) : (
            <IconButton variant="text" color="black">
              <UserIcon className="h-5 w-5" />
            </IconButton>
          )}

          <IconButton variant="text" color="black">
            <HeartIcon className="h-5 w-5" />
          </IconButton>
          <IconButton variant="text" color="black">
            <ShoppingCartIcon className="h-5 w-5" />
          </IconButton>
        </div>
      </Collapse>
    </Navbar>
  );
}
