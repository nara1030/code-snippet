import Child from "./Child";
import Profile from "./Profile";

const { useState } = require("react");

export default function Mother(props) {
    const [total, setBalance] = useState(20000);
    const [target, setTarget] = useState('');

    const who = (target) => {
        setTarget(target);
    }

    const give = () => {
        if (total === 0) {
            console.log(`저번에 줬잖아~ ${target}`);
            return false;
        }
        console.log(`알았어 ${target}`);
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
                setTarget={who}
                givePettyCash={give}
            />
            <Child
                url="../../img/daughter.png"
                role="딸"
                setTarget={who}
                givePettyCash={give}
            />
        </div>
    );
}