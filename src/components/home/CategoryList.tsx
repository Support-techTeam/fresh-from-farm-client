import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const categoryItems = [
  {
    name: 'Vegetables',
    icon: '/images/categories/vegetables.png',
    quantity: '64',
  },
  { name: 'Fruits', icon: '/images/categories/fruits.png', quantity: '24' },
  { name: 'Meat', icon: '/images/categories/meat.png', quantity: '22' },
  { name: 'Poultry', icon: '/images/categories/poultry.png', quantity: '16' },
  {
    name: 'Eggs & Milk',
    icon: '/images/categories/egg_milk.png',
    quantity: '45',
  },
  { name: 'Seafood', icon: '/images/categories/seafood.png', quantity: '38' },
];
// eslint-disable-next-line
export function CategoryListCard({ categories }: { categories: any }) {
  return (
    <Card
      shadow={false}
      className="border border-white  hover:border-gray-200 hover:border-3 hover:shadow-md cursor-pointer"
    >
      <CardBody className="py-1">
        <img
          src={categories.icon}
          alt="category_icon"
          className="w-[120px] h-[120px] min-w-[80px] min-h-[80px] mb-2 mt-1 object-contain"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <div>
            <Typography
              className="mb-1 jost-bold text-sm md:text-base"
              color="blue-gray"
              variant="lead"
            >
              {categories.name}
            </Typography>
          </div>
          <Typography
            variant="paragraph"
            className="text-gray-600 mb-2 text-sm md:text-base"
          >
            ({categories.quantity} items)
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default function CategoryListConponent() {
  return (
    <section className="py-10 px-8 bg-white">
      <div className="mx-auto text-center mb-16">
        <Typography
          variant="h1"
          className="lily-script-one-regular my-2 text-4xl text-[#A4BC46]"
        >
          Top Categories
        </Typography>
      </div>
      <div className="mx-auto container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 md:grid-cols-2 place-items-center">
          {categoryItems &&
            categoryItems?.length > 0 &&
            categoryItems.map((item, index) => (
              <CategoryListCard categories={item} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
