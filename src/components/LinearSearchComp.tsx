import React, { useState } from 'react';
import LinearSearch from '../algorithms/LinearSearch';

interface LinearSearchComponentProps {
  arr: number[];
  setAns: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setErr: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: number | null; 
  ans: number | null
}

const LinearSearchComp: React.FC<LinearSearchComponentProps> = ({
  arr,
  setAns,
  setCurrentIndex,
  setErr,
  currentIndex,
  ans,
}) => {
  const [ele, setEle] = useState<string>('');

  const handleSearch = async () => {
    const element = parseInt(ele);

    if (isNaN(element)) {
      setErr('Please enter a valid number to search');
      return;
    }

    const index = await LinearSearch(arr, element, setCurrentIndex);
    setAns(index);
  };

  return (
    <>
      <input
        value={ele}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEle(e.target.value)}
        placeholder="Enter the element you want to search"
        className="border border-gray-300 rounded p-2 mr-2 text-black"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white rounded p-2">
        Search
      </button>

      <div className="m-4 flex flex-row gap-5 flex-wrap justify-start items-center">
        {arr.map((a, ind) => (
          <div
            key={ind}
            className={`w-12 h-12 flex justify-center items-center p-5 border border-black
              ${ind === currentIndex ? 'bg-orange-300' : ''}
              ${currentIndex!==null && ind<currentIndex ? 'bg-gray-300': ''}
${ans!==null && ans==ind?'bg-green-300': ''}
`}
          >
            {a}
          </div>
        ))}
      </div>
      
    </>
  );
};

export default LinearSearchComp;
