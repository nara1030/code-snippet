import { useEffect, useState } from "react";
import { getMenus } from "../../service/getMenus";

export const Gnb = ({user}) => {
    const {id, name, role} = {...user};
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        // getMenus(1).then(setMenus);
        getMenus(role).then(setMenus);
    }, []);

    return (
        <header>
            <h1></h1>
            <h3>{name}님, 안녕하세요!</h3>
            <h2 className="hide">메인 메뉴</h2>
            <nav className="gnb">
                {/* {createGnb_(menus).outerHTML} */}
                <div dangerouslySetInnerHTML={{__html: createGnb_(menus).outerHTML}} />
            </nav>
        </header>
    );
};

function createGnb(menus) {
    return (
        <ul>
            {menus.map(menu =>
                <li key={menu.id}>
                    <a href="">{menu.name}</a>
                </li>
            )}
        </ul>
    );
}

function createGnb_(menus) {
    return createHtmlInTreeFormat(convertToJsonInTreeFormat(menus));
}

function convertToJsonInTreeFormat(menus) {
    let roots = [],
        children = {};
    
    // A. 최상위 노드(roots) 및 같은 부모 가진 노드(children) 세팅
    for (let i = 0, len = menus.length; i < len; ++i) {
        let item = menus[i],
            p = item.parent,
            target = !p ? roots : (children[p] || (children[p] = []));
        target.push({ value: item });
    }

    const findChildren = function(parentNode) {
        if (children[parentNode.value.id]) {
            parentNode.children = children[parentNode.value.id];
            for (let i = 0, len = parentNode.children.length; i < len; ++i) {
                findChildren(parentNode.children[i]);
            }
        }
    };

    // B. 최상위 노드와 하위 노드 연결(roots와 children 연결)
    for (let i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }

    return roots;
}

function createHtmlInTreeFormat(treeMenus) {
    let ul = document.createElement("ul");

    let menu, li, text;
    for (let i = 0, len = treeMenus.length; i < len; i++) {
        menu = treeMenus[i];
        li = document.createElement("li");
        text = document.createTextNode(menu.value.name);
        li.appendChild(text);

        if (menu.children) li.appendChild(createHtmlInTreeFormat(menu.children));

        ul.appendChild(li);
    }

    return ul;
}

export const hoverGnb = () => {
};