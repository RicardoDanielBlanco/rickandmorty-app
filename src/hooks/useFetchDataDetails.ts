import { useEffect, useState } from "react";

function useFetchDataDetails(apiUrl : string){
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);  
  const [error , setError] = useState(null);

  interface Data {
    image?:string;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin: {
      name?: string;
      url?: string;
    };
    episode?:string;
    dimension?:string;
    created?:string;
    air_date?:string;
    error?:string
  }


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();

      if(json.error) {
        setLoading(false)
        setError(json.error)
      } else {
        setData(json);
        setLoading(false)
        setError(null)
      }
    } catch (e) {
        console.error("error",e)
    }
  }

  return {data, error, loading}
}

export default useFetchDataDetails;