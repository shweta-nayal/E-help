import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const lawyers = [
  { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
  { name: "Michael Johnson", email: "michael.johnson@example.com", phone: "456-789-1230" },
  { name: "Emily Davis", email: "emily.davis@example.com", phone: "654-321-9870" },
  { name: "David Wilson", email: "david.wilson@example.com", phone: "321-654-9870" },
];

const LawyerList = () => {
  return (
    <>
        <Navbar />
        <div className="bg-pastel-blue min-h-screen flex flex-col items-center pt-10">
        <h1 className="text-4xl font-bold text-dark mb-6 shadow-text">Criminal Lawyers</h1>
        <div className="w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-xl bg-white p-6">
            <table className="w-full border-collapse">
            <thead>
                <tr className="bg-light-blue text-navy font-bold text-lg">
                <th className="p-4 text-left rounded-tl-lg">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-center rounded-tr-lg">Profile</th>
                </tr>
            </thead>
            <tbody>
                {lawyers.map((lawyer, index) => (
                <tr
                    key={lawyer.name}
                    className={`hover:bg-light-blue hover:scale-105 transform transition-all duration-300 ${
                    index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"
                    }`}
                >
                    <td className="p-4 font-medium">{lawyer.name}</td>
                    <td className="p-4">{lawyer.email}</td>
                    <td className="p-4">{lawyer.phone}</td>
                    <td className="p-4 text-center">
                    <Link
                        to={`/lawyer/${lawyer.name}`}
                        className="inline-block bg-dark text-white px-4 py-2 rounded-lg hover:bg-secondary shadow-md"
                    >
                        View →
                    </Link>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </>
  );
};

export default LawyerList;
