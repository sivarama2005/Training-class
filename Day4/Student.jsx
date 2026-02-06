import React from "react";

const Student = ({ student }) => {
  // Fallback data if no props are passed
  const data = student || {
    name: "John Doe",
    rollNo: "CS2025-001",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    department: "Computer Science",
    year: "3rd Year",
    gender: "Male ",
    dob: "12-05-2003",
    address: "Hyderabad, Telangana"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Student Profile</h2>

        <div className="space-y-3 text-sm">
          <ProfileRow label="Name" value={data.name} />
          <ProfileRow label="Roll No" value={data.rollNo} />
          <ProfileRow label="Email" value={data.email} />
          <ProfileRow label="Phone" value={data.phone} />
          <ProfileRow label="Department" value={data.department} />
          <ProfileRow label="Year" value={data.year} />
          <ProfileRow label="Gender" value={data.gender} />
          <ProfileRow label="Date of Birth" value={data.dob} />
          <ProfileRow label="Address" value={data.address} />
        </div>
      </div>
    </div>
  );
};

const ProfileRow = ({ label, value }) => (
  <div className="flex justify-between border-b pb-1">
    <span className="font-medium text-gray-600">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default StudentProfile;
