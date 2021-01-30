
import { React, useEffect, useState } from "react";

function UserInfo() {

    const [userInfoList, setUserInfoList] = useState([]);

    useEffect(() => {
        getUserInfo();
    }, [])

    function getUserInfo() {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then((data) => {
                setUserInfoList([...data]);
            });
    }
    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Enquires</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userInfoList.map((element, key) => {
                            return (
                                <tr key={key}>
                                    <th>{element.id}</th>
                                    <th>{element.firstName}</th>
                                    <th>{element.lastName}</th>
                                    <th>{element.mobileNumber}</th>
                                    <th>{element.currentCourseName}</th>
                                    <th>{element.enquires}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserInfo