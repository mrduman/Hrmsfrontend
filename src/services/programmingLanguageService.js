export default class ProgrammingLanguageService{

    getProgrammingLanguages() {

        return axios.get("http://localhost:8080/api/programmingLanguages/programmingLanguages")
    }

}