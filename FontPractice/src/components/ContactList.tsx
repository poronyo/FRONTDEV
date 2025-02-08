import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function ContactList() {
  const [selected, setSelected] = useState<number | null>(null);

  const contacts = [
    { name: "Person1", type: "TeamLead" },
    { name: "Person2", type: "Member" },
    { name: "Person3", type: "Member" },
    { name: "Person4", type: "Member" },
    { name: "Person5", type: "Member" },
  ];
  return (
    <div className="max-w-md mx-auto my-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">Contacts</h2>
      </div>

      {/* Search Bar */}
      <div className="font-semibold text-gray-900 ">
        <div className="flex items-start gap-2  w-full pl-10 pr-3 py-2 rounded-md bg-gray-100  text-gray-700 placeholder-gray-400 focus:outline-none">
          <FiSearch />
          <input type="text" placeholder={`Search`}></input>
        </div>
      </div>

      {/* Contact List */}
      <div className="p-4 space-y-1">
        {contacts.map((contact, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`w-full flex justify-between items-center p-1 rounded-lg cursor-pointer transition ${
              selected === index ? "bg-gray-100" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-900 font-medium">{contact.name}</span>
            </div>
            <span className="text-gray-400 text-sm">{contact.type}</span>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="p-4 bg-gray-100 flex justify-end items-center space-x-4 rounded-b-lg">
        <button className="text-gray-500 font-medium hover:text-gray-700 transition cursor-pointer">
          Cancel
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer">
          Invite
        </button>
      </div>
    </div>
  );
}

export default ContactList;
