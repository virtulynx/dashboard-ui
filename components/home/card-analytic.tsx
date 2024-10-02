import { Card, CardBody } from "@nextui-org/react";

const AnalyticsCard = () => {
  const metrics = [
    { title: "Total Listings", value: "120" },
    { title: "Total Sales", value: "80" },
    { title: "Revenue", value: "$5000" },
    { title: "New Listings", value: "15" },
    { title: "Average Price", value: "$40" },
    { title: "Visits", value: "2000" },
    { title: "Conversion Rate", value: "4%" },
    { title: "Top Listing", value: "Lamborghini Model" },
  ];

  return (
    <Card className="max-w-full">
      <CardBody className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} shadow="sm" className="p-4">
              <h4 className="text-md font-semibold">{metric.title}</h4>
              <p className="text-lg">{metric.value}</p>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default AnalyticsCard;
