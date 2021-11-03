export default class JobExperienceService{

    getJobExperiences() {

        return axios.get("http://localhost:8080/api/jobExperiences/getAll")
    }

}