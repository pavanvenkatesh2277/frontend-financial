import axios from "axios"
const BASE_REST_API_URL="http://localhost:8181/company/all"
class ListCompanyService{
    getAllcompanys(){
        return axios.get(BASE_REST_API_URL)

    }
}
export default new ListCompanyService();
