import {atom} from 'recoil'

const postAtom = atom({
    key : "postAtom",
    default : []
})

const postIdAtom = atom({
  key : "postIdAtom",
  default : null
})


export {postAtom,postIdAtom}