export default class ForeignLangaugeService{

    getForeignLanguages() {

        return axios.get("http://localhost:8080/api/foreignLanguages/foreignLanguage")
    }

}