import {Images} from "./stations";

export function RadioSelector({setradioindex}) {
    return (
        <div>
            <div
                className='w-full  h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
                onClick={() => setradioindex(0)}>
                <img src={Images.PLAYBACK} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>Playback FM</div>
            </div>

            <div onClick={() => setradioindex(1)}
                 className='w-full  h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'>
                <img src={Images.KROSE} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>K-Rose</div>
            </div>

            <div onClick={() => setradioindex(2)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.BOUNCE} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>BOUNCE FM</div>
            </div>

            <div onClick={() => setradioindex(3)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.SFUR} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>SF-UR</div>
            </div>

            <div onClick={() => setradioindex(4)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.LOSSANTOS} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>Radio Los Santos</div>
            </div>

            <div onClick={() => setradioindex(5)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.RADIOX} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>Radio X</div>
            </div>

            <div onClick={() => setradioindex(6)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.CSR} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>CSR 103.9</div>
            </div>

            <div onClick={() => setradioindex(7)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.KJAH} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>K-JAH Fm</div>
            </div>

            <div onClick={() => setradioindex(8)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.MASTERS} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>Master sounds 98.3</div>
            </div>

            <div onClick={() => setradioindex(9)}
                 className='w-full select-none h-14 bg-black flex items-center hover:bg-neutral-600  border-b-[1px] border-b-neutral-600'
            >
                <img src={Images.WCTR} width='44PX'/>
                <div className='text-xl capitalize font-light font-gothic '>WCTR</div>
            </div>

        </div>
    )
}