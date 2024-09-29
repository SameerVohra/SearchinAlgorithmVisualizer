const LinearSearch = async (
  arr: number[],
  element: number,
  setCurrentIndex: (index: number | null) => void
): Promise<number> => {
  for (let i = 0; i < arr.length; i++) {
    setCurrentIndex(i);
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (arr[i] === element) {
      setCurrentIndex(null); 
      return i;
    }
  }
  setCurrentIndex(null);
  return -1;
};

export default LinearSearch;
