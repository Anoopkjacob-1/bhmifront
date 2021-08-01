import React,{useState} from 'react'
import Bmiform from './bmiform'
import Chart from './chart'

function Landingpage() {
    const [refresher, setrefresher] = useState(true);

    return (
<div className="d-flex bd-highlight">
<div className="flex-fill bd-highlight"><Chart refresher={refresher}/></div>
<div className="ml-4  flex-fill bd-highlight ">
     <Bmiform setrefresher={setrefresher} refresher={refresher}/>
</div>
</div>
    )
}

export default Landingpage
