import { GOOGLE_AUTH } from './types'

export const googleAuth = (response) => {
    return {
        type: GOOGLE_AUTH,
        payload: response
    }

}