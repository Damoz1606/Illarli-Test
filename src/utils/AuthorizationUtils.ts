import { TokenManager, TokenVariable } from "./TokenManager";

const AUTHORIZATION_CONFIGURATION = (): any => {
    return {
        headers: {
            Authorization: `Bearer ${TokenManager.getToken(TokenVariable.JWT)}`
        }
    }
}

export { AUTHORIZATION_CONFIGURATION };