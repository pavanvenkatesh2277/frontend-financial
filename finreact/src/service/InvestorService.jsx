import axios from "axios"
const BASE_REST_API_URL="http://localhost:8181/investor/getall"
class InvestorService{
    getAllinvestors(){
        return axios.get(BASE_REST_API_URL)

    }
}
export default new InvestorService();