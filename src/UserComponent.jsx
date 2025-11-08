import { useEffect, useState } from "react"
import styles from "./UserComponent.module.css";

const UserComponent = () => {

    const [age, setAge] = useState(20);

    //UseEffect: مدیریت چرخه حیات یک component
    useEffect(() => {
        //Mounting: زمانی که component بارگذاری می شود
        console.log("send a request to the server");
       
        //Side-Effect:یعنی عملیاتی که به جز رندر کردن component انجام می شود
        const handleClick = () => {
            console.log("Age is 20");            
        }

        const element = document.getElementById("age");
        if (element) {
            element.addEventListener("click", handleClick);
        }
        
        return () => {
        //Unmounting: زمانی که component حذف می شود
        console.log("Hoping to meet you");

        //Cleanup: زمانی که component حذف می شود
        if (element) {
            element.removeEventListener("click", handleClick);
        }
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
        <div className={`some-class ${styles.userContainer}`}>
            <h1 className={styles["user-title"]}>UserComponent</h1>
            <button  className={styles["user-btn"]} onClick={() => setAge((prev)=>prev+1)}>
                Change Age
            </button>
            <ul className={styles["user-info"]}>
                <li>Name: Hossein</li>
                <li>Age: <span className={styles["user-age"]}>{age}</span></li>
                <li>Email: Hossein@gmail.com</li>
            </ul>
        </div>
    );
};

export default UserComponent;