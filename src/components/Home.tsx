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

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr('');
    setAns(null); 
    setCurrentIndex(null);
    setBinState(null);
    GenerateArray(size, setArr, setErr);
  };

  return (
    <>
      {err && <h1 className="text-red-500">{err}</h1>}
      
      <form onSubmit={handleSubmit} className="my-4">
        <input
          placeholder="Enter the array size"
          type="number"
          value={size}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSize(e.target.value)}
          className="border border-gray-300 rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-600 text-white rounded p-2">
          GENERATE
        </button>
      </form>

      <select value={algo} onChange={(e) => setAlgo(e.currentTarget.value)}>
        <option value="linear">LINEAR SEARCH</option>
        <option value="binary">BINARY SEARCH</option>
      </select>

      {algo === 'linear' && (
        <LinearSearchComponent
          arr={arr}
          setAns={setAns}
          setCurrentIndex={setCurrentIndex} 
          setErr={setErr}
          currentIndex={currentIndex}
          ans = {ans}
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
      {ans === -1 ? (
        <h1>Element not found</h1>
      ) : ans !== null ? (
        <h1>Element found at: {ans}</h1>
      ) : null}
    </>
  );
};

export default Home;
