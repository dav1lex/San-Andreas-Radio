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
        <div className='w-screen h-fit bg-green-900 '>
            <div className='bg-yellow-400'>
                <Topbar/>
            </div>

            <div className='flex flex-col items-center bg-red-900 '>
                <div className='grow w-2/3 max-w-2xl '>
                    {/*big image*/}
                    <Radio current={radioindex}/>
                </div>
                <div className='w-full h-1/6 overflow-y-scroll '>
                    {/*selector*/}
                    <RadioSelector setradioindex={changeindex}/>
                </div>
            </div>
            <div className='grow'>
                <Player radioindex={radioindex} setradioindex={changeindex}/>
            </div>
        </div>
    );
}

export default App;
