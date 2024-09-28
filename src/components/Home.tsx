import React, { useState } from 'react';
import GenerateArray from '../GenerateArray';
import LinearSearch from '../algorithms/LinearSearch';

export const Home = () => {
  const [size, setSize] = useState<string>('');
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState<string>('');
  const [algo, setAlgo] = useState<string>("linear");
  const [ele, setEle] = useState<string>('');
  const [ans, setAns] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr('');
    setAns(null); // Reset previous search result
    GenerateArray(size, setArr, setErr);
  };

  const handleSearch = async () => {
    const element = parseInt(ele);
    if (algo === "linear") {
      const index = await LinearSearch(arr, element, setCurrentIndex); // Pass setCurrentIndex to update UI
      setAns(index);
    }
  };

  return (
    <>
      {err && <h1 className="text-red-500">{err}</h1>}
      <h1 className="text-xl font-bold">THIS IS MY MAIN PAGE</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          placeholder="Enter the array size"
          type="number"
          value={size}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSize(e.target.value)}
          className="border border-gray-300 rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded p-2">GENERATE</button>
      </form>

      <select value={algo} onChange={(e) => setAlgo(e.currentTarget.value)}>
        <option value="linear">LINEAR SEARCH</option>
        <option value="binary">BINARY SEARCH</option>
        <option value="jump">JUMP SEARCH</option>
      </select>

      <input
        value={ele}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEle(e.target.value)}
        placeholder='Enter the element you want to search'
      />
      <button onClick={handleSearch}>Search</button>

      {arr.length > 0 ? (
        <div className="m-4 flex flex-row gap-5 flex-wrap justify-start items-center">
          {arr.map((a, ind) => (
            <div
              key={ind}
              className={`w-fit h-fit p-5 border border-black ${
                currentIndex === ind ? 'bg-yellow-300' : ''
              } ${ans===ind?'bg-green-500': ''}`}
            >
              {a}
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-gray-500">No array generated yet.</h2>
      )}
      {ans === -1 ? (
        <h1>Element not found</h1>
      ) : ans !== null ? (
        <h1>Element found at: {ans}</h1>
      ) : null}
    </>
  );
};
