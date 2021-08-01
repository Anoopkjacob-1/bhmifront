

const DistinctCount=(Data)=>{
let count=Data.reduce( (acc, o) => (acc[o.bmitext] = (acc[o.bmitext] || 0)+1, acc),{} );
    let result=Object.values(count)
    return result
}
export default DistinctCount