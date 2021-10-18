export default class ForeignLangaugeService{

    getForeignLanguage() {

        return axios.get("http://localhost:8080/api/foreignLanguages/foreignLanguage")
    }

}