import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 rounded-xl">Users: 120</div>
          <div className="p-4 bg-green-100 rounded-xl">Sales: ₹25,000</div>
          <div className="p-4 bg-yellow-100 rounded-xl">Active Sessions: 15</div>
          <div className="p-4 bg-red-100 rounded-xl">Errors: 2</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
