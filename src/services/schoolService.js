export default class SchoolService{

    getSchools() {

        return axios.get("http://localhost:8080/api/school/getAll")
    }

}