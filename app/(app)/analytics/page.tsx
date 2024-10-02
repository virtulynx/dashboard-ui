'use client';

import React from 'react';
import AnalyticsCard from '@/components/home/card-analytic';

const Analytics = () => {
  return (
    <div className="h-full lg:px-6">
      <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
        <div className="flex flex-wrap justify-between">
          <h3 className="text-center text-xl font-semibold">Your Analytics</h3>
        </div>
        <AnalyticsCard />
      </div>
    </div>
  );
};

export default Analytics;
