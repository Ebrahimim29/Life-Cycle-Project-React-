import { useEffect, useState } from "react"


const UserComponent = () => {

    const [age, setAge] = useState(20);

    //UseEffect: مدیریت چرخه حیات یک component
    useEffect(() => {
        //Mounting: زمانی که component بارگذاری می شود
        console.log("send a request to the server");
       
        return () => {
        //Unmounting: زمانی که component حذف می شود
        console.log("Hoping to meet you");
        };
    }, []);
    
    useEffect(() => {
        //Updating: زمانی که state تغییر می کند
        // console.log(age);
        if(age === 30){
        console.log("Age is 30");
        }
    }, [age]);

    
    return (
        <div>
            <h1>UserComponent</h1>
            <button onClick={() => setAge((prev)=>prev+1)}>
                Change Age
            </button>
            <ul>
                <li>Name: Hossein</li>
                <li>Age: {age}</li>
                <li>Email: Hossein@gmail.com</li>
            </ul>
        </div>
    );
};

export default UserComponent;