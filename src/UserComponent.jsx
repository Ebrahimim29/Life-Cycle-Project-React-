import { useState } from "react"


const UserComponent = () => {

    const [age, setAge] = useState(20);
    
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