import SectionTitle from "@/component/Shared/Main/SectionTitle";
import { Link } from "react-router";
import { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBusinessTime, FaSearchLocation } from "react-icons/fa";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const MyMap: React.FC = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty popup! <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const position: LatLngExpression = [13.751456439896657, 100.50857949411862]; // Example coordinates (London)

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Information | Parinya";
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <SectionTitle
        preTitle="contact Center"
        title="contact Information"
        align="center"
      >
        Important contact and Social Network to fllow me
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        {/* Terms and Conditions Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="text-indigo-600 dark:text-indigo-400 mb-4">
            <FaSearchLocation className="w-11 h-11" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Location
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            officiis. Vel tenetur natus officiis consequatur.
          </p>
          <Link
            to="/terms"
            className=" inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Read Terms
            <MdKeyboardArrowRight className="ml-1 w-5 h-5 text-indigo-400" />
          </Link>
        </div>

        {/* Privacy Policy Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="text-indigo-600 dark:text-indigo-400 mb-4">
            <FaBusinessTime className="w-11 h-11" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Responed Time
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            minima hic. Iusto, fugit nisi? Earum.
          </p>
          <Link
            to="/contact"
            className="cursor-not-allowed inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Read Policy
            <MdKeyboardArrowRight className="ml-1 w-5 h-5 text-indigo-400" />
          </Link>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <SectionTitle
          preTitle="Contact"
          title="Face to face contact "
          align="center"
        >
          If you have any questions about our this page or need assistance,
          please contact me in below Location.
        </SectionTitle>
        <MyMap />

        <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
          <p>Email: parinyat@xxxxxxx.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM UTC+8</p>
        </div>
      </div>
    </div>
  );
}
