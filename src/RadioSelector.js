import {Images} from "./stations";

export function RadioSelector({setradioindex}) {


    return (
        <div className='h-full w-full hr bg-black flex flex-col items-center '>
            <div className='w-4/5 overflow-y-scroll'>
                <div className='w-full  h-auto bg-black flex items-center hover:bg-neutral-900'
                     onClick={() => setradioindex(0)}>
                    <img src={Images.PLAYBACK} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>Playback FM</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(1)}
                     className='w-full  h-auto bg-black flex items-center hover:bg-neutral-600'>
                    <img src={Images.KROSE} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>K-Rose</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(2)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.BOUNCE} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>BOUNCE FM</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(3)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.SFUR} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>SF-UR</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(4)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.LOSSANTOS} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>Radio Los Santos</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(5)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.RADIOX} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>Radio X</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(6)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.CSR} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>CSR 103.9</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(7)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.KJAH} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>K-JAH Fm</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(8)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.MASTERS} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>Master sounds 98.3</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
                <div onClick={() => setradioindex(9)}
                     className='w-full select-none h-auto bg-black flex items-center hover:bg-neutral-600'
                >
                    <img src={Images.WCTR} width='70PX'/>
                    <div className='text-3xl capitalize font-light font-gothic '>WCTR</div>
                </div>
                <hr className='mb-[0.05rem] mt-[0.05rem]  '/>
            </div>
        </div>
    )
}