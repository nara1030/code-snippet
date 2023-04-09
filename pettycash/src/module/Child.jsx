import Profile from "./Profile";

const { useState } = require("react");

export default function Child(props) {
    const [money, setPocket] = useState(0);

    const handleClick = () => {
        console.log(`${props.role}: 엄마, 용돈 좀 주세요!`);
        props.setTarget(props.role);
        if (props.givePettyCash()) setPocket(money + 1000);
    }

    return (
        <div className="child">
            <Profile url={props.url} role={props.role} />
            <span className="pocket">용돈: {money}</span>
            <button onClick={handleClick}>요청</button>
        </div>
    );
}