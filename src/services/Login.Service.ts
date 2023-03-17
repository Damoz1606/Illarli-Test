import axios from "axios";
import EventsApi from "config/apis/EventsApi";
import { TokenManager, TokenVariable } from "utils/TokenManager";

class LoginService {
    public static async login(credentials: { email: string, password: string }) {
        try {
            const response = (await axios.post<{ token: string }>(EventsApi.API_POST_LOGIN(credentials))).data;
            if (!response) throw new Error("Response getted");
            const token = response.token;
            if (!token) throw new Error("No token found");
            if (TokenManager.existToken(TokenVariable.JWT)) throw new Error("A session is already in use, please close it first");
            TokenManager.saveToken({
                key: TokenVariable.JWT, value: token
            });
            return true;
        } catch (error: any) {
            throw error;
        }
    }

    public static logout() {
        try {
            if (!TokenManager.existToken(TokenVariable.JWT)) throw new Error("There is no sessionin use");
            TokenManager.removeToken(TokenVariable.JWT);
            return true;
        } catch (error: any) {
            throw error;
        }
    }
}

export { LoginService }