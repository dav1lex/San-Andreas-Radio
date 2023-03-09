import {Images} from './stations'

export function Radio({current}) {

    function findImage() {
        return current === 0 ? Images.PLAYBACK :
            current === 1 ? Images.KROSE :
                current === 2 ? Images.BOUNCE :
                    current === 3 ? Images.SFUR :
                        current === 4 ? Images.LOSSANTOS :
                            current === 5 ? Images.RADIOX :
                                current === 6 ? Images.CSR :
                                    current === 7 ? Images.KJAH :
                                        current === 8 ? Images.MASTERS :
                                            current === 9 ? Images.WCTR :
                                                Images.DEF
    }

    return (
        <div>
            <img src={findImage()}/>
        </div>
    )
}
