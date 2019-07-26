import React, { useState } from 'react';
import HttpService from '../services/httpService';

const Container = () => {
    let [data, setData] = useState([]);

    const handleClick = async () => {
        console.log('clicked');
        let result = await HttpService();
        let data = [];
        for(let i=0;i<850;i++){
            let name = `Item${i+1}`
            console.log(name)
            data[i] = result[name]
        }
        setData(data);
    }

    console.log('data - ', data);
    return ( 
        <div className="container">
            <button type="button" className="btn btn-primary" onClick={()=>handleClick()}>Get All</button>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">UserId</th>
                    <th scope="col">RegionBranch</th>
                    <th scope="col">MenuGroup</th>
                    <th scope="col">CustomUserId</th>
                    <th scope="col">Option1</th>
                    <th scope="col">Option2</th>
                    <th scope="col">Option3</th>
                    <th scope="col">AccessCode</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => console.log('row - ', row))}
                    <tr>
                    <th scope="row">Item1</th>
                    <td>{data.UserId}</td>
                    <td>{data.RegionBranch}</td>
                    <td>{data.MenuGroup}</td>
                    <td>{data.CustomUserId}</td>
                    <td>{data.Option1}</td>
                    <td>{data.Option2}</td>
                    <td>{data.Option3}</td>
                    <td>{data.AccessCode}</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Container;