class TokenManager {

    public static getToken(key: string) {
        return sessionStorage.getItem(key);
    }

    public static saveToken(token: { key: string, value: any }) {
        return sessionStorage.setItem(token.key, token.value);
    }

    public static removeToken(key: string) {
        return sessionStorage.removeItem(key);
    }

    public static existToken(key: string) {
        return !!sessionStorage.getItem(key);
    }
}

enum TokenVariable {
    JWT = 'token'
}

export { TokenManager, TokenVariable }