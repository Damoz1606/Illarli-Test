import { TokenManager, TokenVariable } from "./TokenManager";

const AUTHORIZATION_CONFIGURATION = (): any => {
    return {
        "Authorization": `${TokenManager.getToken(TokenVariable.JWT)}`
    }
}

export { AUTHORIZATION_CONFIGURATION };