export default class JobExperienceService{

    getJobExperience() {

        return axios.get("http://localhost:8080/api/jobExperiences/getAll")
    }

}