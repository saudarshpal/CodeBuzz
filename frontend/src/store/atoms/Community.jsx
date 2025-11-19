import {atom} from 'recoil'

const communityAtom = atom({
    key : "communityAtom",
    default :  [],
    // effects_UNSTABLE : [persistAtom]
})


export {communityAtom}