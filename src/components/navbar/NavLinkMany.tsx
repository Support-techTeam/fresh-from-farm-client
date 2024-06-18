// @typescript-eslint/no-explicit-any
// eslint-disable-next-line
import { useState, createElement, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
// eslint-disable-next-line
export function NavListMenu(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [renderItems, setRenderItems] = useState([]);

  useEffect(() => {
    setRenderItems(props.navListItems);
  }, [props.navListItems]);

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {props.title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems?.length > 0 &&
              renderItems.map(({ icon, title, description, route }, key) => (
                <Link to={route} key={key}>
                  <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                      {' '}
                      {createElement(icon, {
                        strokeWidth: 2,
                        className: 'h-6 text-gray-900 w-6',
                      })}
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="paragraph"
                        className="text-xs !font-medium text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </div>
                  </MenuItem>
                </Link>
              ))}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {renderItems?.length > 0 &&
            renderItems.map(({ icon, title, description }, key) => (
              <Link to="/" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                  <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {' '}
                    {createElement(icon, {
                      strokeWidth: 2,
                      className: 'h-6 text-gray-900 w-6',
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="flex items-center text-sm font-bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs !font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </MenuItem>
              </Link>
            ))}
        </Collapse>
      </div>
    </Fragment>
  );
}
