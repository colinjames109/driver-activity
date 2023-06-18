export interface MenuOption {
    title: string;
    url: string;
}

import menuOptions from '../data/menu.json'

const useMenuOptions = () => ({ data: menuOptions });

export default useMenuOptions;