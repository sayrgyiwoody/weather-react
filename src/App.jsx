import axios from "axios"
import FormComponent from "./components/FormComponent"
import WeatherInfo from "./components/WeatherInfo"
import Loading from "./components/Loading"
import { Alert } from "@material-tailwind/react"
import { api, api_key } from "./api/api"
import { useEffect, useState } from "react"

export default function App() {

  const [data,setData] = useState({});
  const [errorMsg,setErrorMsg] = useState('');
  const [loading,setLoading] = useState(false);

  const fetchApi = async (city) => {
    if(city === undefined){
      city = 'Yangon';
    }
    try {
      setLoading(true);
      const response = await api.get(`?q=${city}&appid=${api_key}`);
      setData(response.data);
      setLoading(false);
    }catch(error){
      setErrorMsg(error.response.data.message);
      setLoading(false);
      setTimeout(()=> {
        setErrorMsg('');
      },3000);
    }
  }

  useEffect( () => {
    fetchApi();
  },[]);

  return (
    <div className=" bg-gray-100 w-screen min-h-screen flex pt-10 md:pt-0 md:items-center justify-center px-3 ">

    <div className="mx-auto w-full max-w-lg  bg-white shadow-md p-5 rounded-lg h-fit">
          <FormComponent fetchApi={fetchApi}></FormComponent>
          { errorMsg && <Alert className="mt-4" color="red">{errorMsg}</Alert>}
          {!loading && <WeatherInfo data={data} ></WeatherInfo>}
          {loading && <Loading></Loading>}
        </div>
    </div>
    
  )
}