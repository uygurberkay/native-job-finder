import { 
    useState, 
    useEffect 
} from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'eb38f8873dmshb43fcbeb8ad172fp18c696jsn4e26694a3e7f',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);
    
        try {
            const response = await axios.request(options);
        
            setData(response.data.data);
            setIsLoading(false);
            } catch (error) {
            setError(error);
            console.log(error)
            } finally {
            setIsLoading(false);
            }
        };
        
        useEffect(() => {
            fetchData();
        }, []);
        
        const refetch = () => {
            setIsLoading(true);
            fetchData();
        };
        
        return { data, isLoading, error, refetch };
    };
    
    export default useFetch;