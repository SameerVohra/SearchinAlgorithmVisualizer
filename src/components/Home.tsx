import React, { useState } from 'react';
import GenerateArray from '../GenerateArray';
import LinearSearchComponent from './LinearSearchComp';
import BinarySearchComponent from './BinarySearchComp';

export const Home = () => {
  const [size, setSize] = useState<string>('');
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState<string>('');
  const [algo, setAlgo] = useState<string>('linear');
  const [ans, setAns] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [binState, setBinState] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false); // Spinner state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr('');
    setAns(null); 
    setCurrentIndex(null);
    setBinState(null);
    setLoading(true); // Start loading spinner
    GenerateArray(size, setArr, setErr);
    setLoading(false); // Stop loading spinner after array generation
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex flex-col items-center p-6">
      
      {/* Error message */}
      {err && <h1 className="text-red-500 font-bold text-lg animate-bounce">{err}</h1>}

      {/* Form Section with Glassmorphism Effect */}
      <form onSubmit={handleSubmit} className="my-4 w-full max-w-md bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <input
            placeholder="Enter the array size"
            type="number"
            value={size}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSize(e.target.value)}
            className="border border-transparent focus:border-blue-500 transition-all duration-300 shadow-md rounded-lg p-3 mb-4 md:mb-0 md:mr-4 w-full md:w-auto text-gray-900"
          />
          <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full md:w-auto">
            GENERATE
          </button>
        </div>
      </form>

      {/* Algorithm Selection */}
      <div className="my-4 w-full max-w-md bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
        <label className="block text-lg mb-2">Select Algorithm:</label>
        <select
          value={algo}
          onChange={(e) => setAlgo(e.currentTarget.value)}
          className="p-3 bg-gray-800 border border-transparent focus:border-blue-500 rounded-lg w-full text-white shadow-md focus:outline-none transition-all duration-300"
        >
          <option value="linear">LINEAR SEARCH</option>
          <option value="binary">BINARY SEARCH</option>
        </select>
      </div>

      {/* Search Components */}
      <div className="mt-6 w-full max-w-xl">
        {algo === 'linear' && (
          <LinearSearchComponent
            arr={arr}
            setAns={setAns}
            setCurrentIndex={setCurrentIndex}
            setErr={setErr}
            currentIndex={currentIndex}
            ans={ans}
          />
        )}

        {algo === 'binary' && (
          <BinarySearchComponent
            arr={arr}
            setAns={setAns}
            setBinState={setBinState}
            setErr={setErr}
            ans={ans}
            binState={binState}
          />
        )}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="mt-8">
          <svg
            className="animate-spin h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
            ></path>
          </svg>
        </div>
      )}

      {/* Search Result Display */}
      <div className="mt-8 text-center bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg transform transition-transform duration-500">
        {ans === -1 ? (
          <h1 className="text-red-400 text-2xl font-bold animate-pulse">Element not found</h1>
        ) : ans !== null ? (
          <h1 className="text-green-400 text-2xl font-bold animate-bounce">Element found at index: {ans}</h1>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
