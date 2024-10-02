'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import { CiCirclePlus } from 'react-icons/ci';
import MarketplaceCard from '@/components/home/card-listing';

const items = [
  {
    id: 1,
    img: '/flop.jpeg',
    title: 'Item 1',
    price: 'CA$50',
    datePosted: '03/08',
  },
  {
    id: 2,
    img: '/flop.jpeg',
    title: 'Another Item',
    price: 'CA$30',
    datePosted: '02/08',
  },
  {
    id: 3,
    img: '/flop.jpeg',
    title: 'Another Item 3',
    price: 'CA$25',
    datePosted: '04/08',
  },
  {
    id: 4,
    img: '/flop.jpeg',
    title: 'Another Item 4',
    price: 'CA$40',
    datePosted: '01/08',
  },
  {
    id: 5,
    img: '/flop.jpeg',
    title: 'Another Item 5',
    price: 'CA$35',
    datePosted: '05/08',
  },
  {
    id: 6,
    img: '/flop.jpeg',
    title: 'Another Item 6',
    price: 'CA$45',
    datePosted: '06/08',
  },
  {
    id: 7,
    img: '/flop.jpeg',
    title: 'Another Item 7',
    price: 'CA$55',
    datePosted: '07/08',
  },
  {
    id: 8,
    img: '/flop.jpeg',
    title: 'Another Item 8',
    price: 'CA$60',
    datePosted: '08/08',
  },
  {
    id: 9,
    img: '/flop.jpeg',
    title: 'Another Item 9',
    price: 'CA$65',
    datePosted: '09/08',
  },
];

const Listings = () => {
  return (
    <div className="h-full lg:px-6">
      <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
        <div className="flex flex-wrap justify-between">
          <h3 className="text-center text-xl font-semibold">Your Listings</h3>
          <Button size="lg">
            <CiCirclePlus size={24} />
            New Listing
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {items.map((item) => (
            <MarketplaceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
