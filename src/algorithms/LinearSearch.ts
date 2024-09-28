const LinearSearch = async (
  arr: number[],
  element: number,
  setCurrentIndex: (index: number | null) => void
): Promise<number> => {
  for (let i = 0; i < arr.length; i++) {
    setCurrentIndex(i); // Highlight the current index
    await new Promise((resolve) => setTimeout(resolve, 500)); // Add delay for visibility
    if (arr[i] === element) {
      setCurrentIndex(null); // Reset after finding
      return i;
    }
  }
  setCurrentIndex(null); // Reset after finishing search
  return -1;
};

export default LinearSearch;
