export default class JobPostService{

    getJobPost() {

        return axios.get("http://localhost:8080/api/jobPost/getall")
    }

}