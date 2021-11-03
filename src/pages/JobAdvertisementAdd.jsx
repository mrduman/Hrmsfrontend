import { Formik, useFormik } from "formik";
import { useEffect, useState } from "react";
import CityService from "../services/cityService";
import JobAdvertisementService from '../services/jobAdvertisementService';
import JobPositionService from '../services/jobPositionService';
import EmployerService from '../services/employerService'

export default function JobAdvertisementAdd(params) {

    const AdvertPostForm = () => {

        let jobAdvertisementService = new JobAdvertisementService()

        const [cities, setCities] = useState([])
        const [employers, setEmployers] = useState([])
        const [jobPositions, setJobPositions] = useState([])
       

        useEffect(() =>{

            let cityService = new CityService()
            let jobPositionService = new JobPositionService()
            let employerService = new EmployerService()

            cityService.getCities().then((result) => setCities(result.data.data))
            jobPositionService.getJobPositions().then((result) =>setJobPositions(result.data.data) )
            employerService.getEmployers().then((result) => setEmployers(result.data.data))

        }, [])




} 

}