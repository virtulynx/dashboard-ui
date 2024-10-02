import { FC } from 'react';
import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

export type CardType = {
  id: number;
  title: string;
  img: string;
  price: string;
  datePosted: string;
};

const MarketplaceCard: FC<CardType> = ({ item }) => {
  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => console.log('item pressed')}
      className="max-w-xs"
    >
      <CardBody className="p-0">
        <Image
          alt={item.title}
          src={item.img}
          width={400}
          height={400}
          className="object-cover h-48"
        />
      </CardBody>
      <CardFooter className="flex flex-col items-start p-3">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-lg font-semibold">{item.price}</p>
        <p className="text-md text-default-500">
          Active · Listed on {item.datePosted}
        </p>
      </CardFooter>
    </Card>
  );
};

export default MarketplaceCard;
