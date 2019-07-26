import axios from 'axios';

const HttpService = async () => {
    let {data} = await axios.get('http://localhost:4000/legasuite/WLMGALL',
           {headers:
                {
                 'Content-Type': 'text/xml',
                 'Authorization': 'Basic b2ltaWRtMTphY2Nlc3M='
                // 'Authorization': req.headers.authorization
                }
           });

    return data;
}
 
export default HttpService;
