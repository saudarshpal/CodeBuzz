import {atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'
const {persistAtom} = recoilPersist()

const postAtom = atom({
    key : "postAtom",
    default : [],
    effects_UNSTABLE : [persistAtom]
})

const postIdAtom = atom({
  key : "postIdAtom",
  default : null
})


export {postAtom,postIdAtom}