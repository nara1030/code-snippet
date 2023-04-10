import Child from "./Child";
import Profile from "./Profile";

const { useState } = require("react");

export default function Mother(props) {
    const [total, setBalance] = useState(20000);
    
    const give = (role) => {
        if (total === 0) {
            console.log(`저번에 줬잖아~ ${role}`);
            return false;
        }
        console.log(`알았어 ${role}`);
        setBalance(total - 1000);
        return true;
    }

    return (
        <div className="mother">
            <Profile url={props.url} role={props.role} />
            <span className="total">잔고: {total}</span>

            <Child
                url="../../img/son.png"
                role="아들"
                givePettyCash={give}
            />
            <Child
                url="../../img/daughter.png"
                role="딸"
                givePettyCash={give}
            />
        </div>
    );
}