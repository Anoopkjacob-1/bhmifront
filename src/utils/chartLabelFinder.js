const labelfinder=(Data)=>{
    let arr=[...new Set(Data.map(x=>x.bmitext))];
    ;
    return arr
}
export default labelfinder