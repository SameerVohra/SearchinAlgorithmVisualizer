const GenerateArray = (
  size: string,
  setArr: React.Dispatch<React.SetStateAction<number[]>>,
  setErr: React.Dispatch<React.SetStateAction<string | "">>,
) => {
  const n: number = parseInt(size);
  const map = new Map<number, boolean>();
  const ar: number[] = [];
  if (n > 100) {
    setArr([]);
    setErr("Maximum capacity is 100");
    return;
  }
  setErr("");
  for (let i = 0; i < n; i++) {
    const a: number = Math.round(Math.random() * n*2 + 1);
    if (!map.has(a)) {
      ar.push(a);
    } else {
      i--;
    }
    map.set(a, true);
  }
  setArr(ar);
};
export default GenerateArray
