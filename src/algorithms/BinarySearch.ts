interface BinAns {
  start: number;
  end: number;
  mid: number;
  ans: number;
}


const BinarySearch = (arr: number[], element: number): Promise<BinAns[]> => {
  return new Promise((resolve) => {
    arr.sort((a,b)=>a-b)
    const steps: BinAns[] = [];
    let s: number = 0;
    let e: number = arr.length - 1;
    let mid: number = -1;
    let ans: number = -1;

    while (s <= e) {
      mid = Math.floor(s + (e - s) / 2);
      steps.push({ start: s, end: e, mid, ans });

      if (arr[mid] === element) {
        ans = mid;
        steps.push({ start: s, end: e, mid, ans });
        break;
      } else if (arr[mid] < element) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }

    if (ans === -1) steps.push({ start: s, end: e, mid, ans: -1 });
    resolve(steps);
  });
};

export default BinarySearch
