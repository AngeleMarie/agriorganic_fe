import React from 'react';
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ShoppingCartIcon, 
  UserGroupIcon, 

} from '@heroicons/react/24/outline';

import Sidebar from '../components/adminSide';
import TopBar from '../components/topBar';
import MetricCard from '../components/MetricCard';
import SummaryChart from '../components/SummaryChart';
import UpcomingPayments from '../components/UpcomingPayments';
import LastOrder from '../components/LastOrder';
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
            <MetricCard
              icon={<CurrencyDollarIcon className="h-6 w-6 text-white" />}
              title="Total Sales"
              value="$278m"
              subtext="+40% Increase"
              color="bg-orange-500"
            />
            <MetricCard
              icon={<ChartBarIcon className="h-6 w-6 text-white" />}
              title="Daily Sales"
              value="$421k"
              subtext="+20% Increase"
              color="bg-blue-500"
            />
            <MetricCard
              icon={<UserGroupIcon className="h-6 w-6 text-white" />}
              title="Daily User"
              value="4215"
              subtext="+48% New User"
              color="bg-green-500"
            />
            <MetricCard
              icon={<ShoppingCartIcon className="h-6 w-6 text-white" />}
              title="Product"
              value="548"
              subtext="+26% New Product"
              color="bg-indigo-800"
            />
            <MetricCard
              icon={<CurrencyDollarIcon className="h-6 w-6 text-white" />}
              title="Expenses"
              value="$219.0"
              subtext="Target Expenses"
              color="bg-red-500"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SummaryChart />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">Active Balance</h3>
                <p className="text-3xl font-bold mb-4">$ 9,470</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Incomes</span>
                    <span>$ 1699.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expenses</span>
                    <span>$ -799.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>$ -199.0</span>
                  </div>
                </div>
            
              </div>
              <UpcomingPayments />
            
            </div>
          </div>
          <div className="mt-6">
            <LastOrder />
          </div>
        </main>
      </div>
    </div>
  );
}