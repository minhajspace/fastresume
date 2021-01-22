import { GOOGLE_AUTH } from '../actions/types';

const initalState = {
    authData: [],
    googleAuth: "hello world"
}
export const googleAuth = (state = initalState, action) => {
    switch (action.type) {
        case GOOGLE_AUTH:
            const item = action.payload
            return {
                ...state,
                authData: [...state.authData, item]
            }
    }

}