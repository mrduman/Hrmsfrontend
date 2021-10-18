export default class ProgrammingLanguageService{

    getProgrammingLanguage() {

        return axios.get("http://localhost:8080/api/programmingLanguages/programmingLanguages")
    }

}