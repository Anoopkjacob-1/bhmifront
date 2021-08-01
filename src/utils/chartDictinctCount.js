

const DistinctCount=(Data)=>{
let count=Data.map(({ bmitext }) => bmitext)
.reduce((names, bmitext) => {
  const count = names[bmitext] || 0;
  names[bmitext] = count + 1;
  return names;
}, {});
  console.log(count)
    let result=Object.values(count)
    return result
}
export default DistinctCount