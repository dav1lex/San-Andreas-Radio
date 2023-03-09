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
        <>
            <div className='bg-black h-[10vh] flex flex-col items-center justify-center'>
                <Topbar/>
            </div>

            <div className='w-screen h-[80vh]  flex'>

                <div
                    className='w-[60vw]  bg-black flex justify-center items-center'>
                    <div className='w-full  flex justify-center'>
                        <Radio current={radioindex}/>
                    </div>
                </div>

                <div className='w-[40vw] bg-black flex justify-center items-center bg-black'>
                    <div className='w-[40vw]'>
                        <RadioSelector setradioindex={changeindex}/>
                    </div>
                </div>


            </div>
            <div className='h-[10vh]'>
                <Player radioindex={radioindex} setradioindex={changeindex}/>
            </div>
        </>
    )
        ;
}

export default App;
