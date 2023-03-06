import {Topbar} from "./Topbar";
import {Radio} from "./Radio";
import {Player} from "./Player";
import {RadioSelector} from "./RadioSelector";
import {useState} from "react";


function App() {
    const [radioindex, setradioindex] = useState(0)

    function changeindex(radioindex) {
        setradioindex(radioindex)
    }

    return (
        <div className='w-screen h-screen bg-black'>
            <div className='h-24'>
                <Topbar/>
            </div>
            <div className=' h-[41rem] flex flex-row'>
                <Radio current={radioindex}/>
                <RadioSelector setradioindex={changeindex}/>
            </div>
            <div className=' h-24'>
                <Player radioindex={radioindex} setradioindex={changeindex}/>
            </div>
        </div>
    );
}

export default App;
