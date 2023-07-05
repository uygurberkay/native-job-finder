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
        "X-RapidAPI-Key": '9371d3b500mshfa5c10a38d4aa05p15e2a8jsn94fde9f7e217',
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
        const response = await axios.request(options);

        setData(response.data);
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