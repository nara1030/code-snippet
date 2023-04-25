/**
 * @param depth(Number or 'All')
 * @returns menus
 */
export const getMenus = async (depth = 3) => {
    // return await fetch('data/menus.json')
    //     .then(res => res.json())
    //     .then(menus => menus.filter(menu => menu.depth <= depth));
    const response = await fetch('data/menus.json');
    const menus = await response.json();
    return menus.filter(menu => menu.depth <= depth);
};

/**
 * @param menus
 * @param depth(Number or 'All')
 */
function drawToConsole(menus) {
    
}