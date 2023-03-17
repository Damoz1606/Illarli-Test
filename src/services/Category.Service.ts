import axios from "axios";
import EventsApi from "config/apis/EventsApi";
import { AUTHORIZATION_CONFIGURATION } from "utils/AuthorizationUtils";
import { CategoryRS } from "./dto/CategoryRS";

class CategoryService {

    public static async getCategories() {
        try {
            const response = (await axios.get<{ data: CategoryRS[] }>(EventsApi.API_GET_CATEGORIES(), AUTHORIZATION_CONFIGURATION())).data;
            if (!response) throw ("Categories not found");
            const data = response.data;
            if (!response) throw ("Categories not found");
            return data;
        } catch (error: any) {
            throw error;
        }
    }

    public static async getCategory(id: number) {
        try {
            const response = (await axios.get<{ data: CategoryRS }>(EventsApi.API_GET_CATEGORY(id), AUTHORIZATION_CONFIGURATION())).data;
            if (!response) throw ("Category not found");
            const data = response.data;
            if (!response) throw ("Category not found");
            return data;
        } catch (error: any) {
            throw error;
        }
    }

}

export { CategoryService }