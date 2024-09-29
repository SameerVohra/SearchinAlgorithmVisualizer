import React, { useState } from 'react';
import BinarySearch from '../algorithms/BinarySearch';

interface BinarySearchComponentProps {
  arr: number[];
  setAns: React.Dispatch<React.SetStateAction<number | null>>;
  setBinState: React.Dispatch<React.SetStateAction<any>>;
  binState: any;
  setErr: React.Dispatch<React.SetStateAction<string>>;
  ans: number | null;
}

const BinarySearchComp: React.FC<BinarySearchComponentProps> = ({
  arr,
  setAns,
  setBinState,
  setErr,
  binState,
  ans,
}) => {
  const [ele, setEle] = useState<string>('');

  const handleSearch = async () => {
    const element = parseInt(ele);

    
    if (isNaN(element)) {
      setErr('Please enter a valid number to search');
      return;
    }

    const steps = await BinarySearch(arr, element);
    

    for (let step of steps) {
      setBinState(step);
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
    }
  
    setAns(steps[steps.length - 1].ans);
  };

  return (
    <>
      <input
        value={ele}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEle(e.target.value)}
        placeholder="Enter the element you want to search"
        className="border border-gray-300 rounded p-2 mr-2 text-black"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-black rounded p-2">
        Search
      </button>

      <div className="m-4 flex flex-row gap-5 flex-wrap justify-start items-center">
        {arr.map((a, ind) => (
          <div
            key={ind}
            className={`w-12 h-12 flex justify-center items-center p-5 border border-black
              ${binState?.start === ind || binState?.end === ind ? 'bg-cyan-300' : ''}
              ${binState?.mid === ind ? 'bg-yellow-300' : ''}
              ${ans === ind ? 'bg-green-500' : ''}`}
          >
            {a}
          </div>
        ))}
      </div>
    </>
  );
};

export default BinarySearchComp;
