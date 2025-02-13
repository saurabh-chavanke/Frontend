import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="h-screen w-full flex flex-col bg-gray-100">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-6 leading-tight">
          DETECTION OF HEMORRHAGES IN COLOUR FUNDUS IMAGES
        </h1>
        <p className="text-lg max-w-2xl text-gray-700">
          Upload an image to detect hemorrhages in fundus images using
          rule-based image processing techniques.
        </p>

        <Link
          to="/detect"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Start Detection
        </Link>

        {/* Team Members Section */}
        <div className="mt-10 text-gray-800 text-lg font-semibold">
          <p className="text-xl font-bold text-gray-900 mb-2">This Project is Created By </p>
          <ul>
            <li>Saurabh Chavanke</li>
            <li>Ketan Aher</li>
            <li>Sachin Avhad</li>
            <li>Utkarsha Shinde</li>
          </ul>
        </div>

        {/* Guidance Section */}
        <div className="mt-6 text-gray-800 text-lg font-semibold">
          <p className="text-xl font-bold text-gray-900">Under the Guidance of:</p>
          <p className="text-red-600 font-bold">Prof. Sunil M. Kale</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-white text-sm text-center border-t w-full bg-gray-800">
        © 2025 Resolve Diabetic Retinopathy | All rights reserved
      </footer>
    </div>
  );
}

export default Home;
