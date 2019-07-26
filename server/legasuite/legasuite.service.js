const axios = require('axios');
const xml2js = require('xml2js');
const parser = new xml2js.Parser;

module.exports = {
    wlmgall
};

async function wlmgall(req) {
    // let xmls = '<Request name="WLMGALL"><Input><LoginId>oimidm1</LoginId><LoginPassword>access</LoginPassword><XP-ASSOC-NAME>WOF</XP-ASSOC-NAME><ClientId>01</ClientId></Input></Request>';
    let xmls = '<Request name="WI70"><Input><AccountNumber>014203305374353743</AccountNumber></Input></Request>';
            
    // let result = await axios.post('http://mfd1.corp.jmfamily.com:8087/XPLXWXML/WFPW/function/WLMGALL',
    let result = await axios.post('http://mfd1.corp.jmfamily.com:8087/XPLXWXML/WCAW/function/WI70',
           xmls,
           {headers:
                {
                 'Content-Type': 'text/xml',
                //  'Authorization': 'Basic b2ltaWRtMTphY2Nlc3M='
                'Authorization': req.headers.authorization
                }
           });

    let data = {};

    parser.parseString(result.data, function(err, jsonResult){data = jsonResult;})
// console.log('data.Result.UserRecordSequence - ', data.Result.UserRecordSequence)
console.log('data - ', data)
// return data.Result.UserRecordSequence;
return data;
}
