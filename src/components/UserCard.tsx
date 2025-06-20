import React from "react";

interface Company {
  title: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  company: Company;
}

export const UserCard: React.FC<{ user: User }> = ({ user }) => (
  <div
    tabIndex={0}
    className="flex items-center gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-400 bg-white mb-4"
  >
    <img
      src={user.image}
      alt={`${user.firstName} ${user.lastName}`}
      className="w-20 h-20 rounded-full object-cover"
    />
    <div>
      <h2 className="text-lg font-semibold">
        {user.firstName} {user.lastName}
      </h2>
      <p className="text-sm text-gray-600">
        {user.company.title} at {user.university}
      </p>
      <p className="text-sm text-gray-500">
        📞 {user.phone} | ✉️ {user.email}
      </p>
    </div>
  </div>
);
