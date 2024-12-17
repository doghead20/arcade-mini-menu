
//% icon="\uf0c9"
//% color="#36b58b"
//% block="Mini Menu"
//% groups='["Create","Controls","Styling"]'
namespace miniMenu {
    /**
     * Creates a MenuItem with some text and an optional icon
     *
     * @param text The text for the MenuItem
     * @param image An optional icon for the MenuItem
     * @returns A MenuItem
     */
    //% blockId=mini_menu_create_menu_item
    //% block="menu item $text||$image"
    //% text.defl="abc"
    //% text.shadow=text
    //% image.shadow=screen_image_picker
    //% group="Create"
    //% weight=90
    //% help=github:arcade-mini-menu/docs/create-menu-item
    export function createMenuItem(text: string, image?: Image) {
        _init()
        return new MenuItem(text, image);
    }

    /**
     * Creates a MenuSprite with up to 30 MenuItems. If you need more than 30 items, use `create menu from array` instead.
     *
     * @param item1 a MenuItem to include in the array
     * @param item2 a MenuItem to include in the array
     * @param item3 a MenuItem to include in the array
     * @param item4 a MenuItem to include in the array
     * @param item5 a MenuItem to include in the array
     * @param item6 a MenuItem to include in the array
     * @param item7 a MenuItem to include in the array
     * @param item8 a MenuItem to include in the array
     * @param item9 a MenuItem to include in the array
     * @param item10 a MenuItem to include in the array
     * @param item11 a MenuItem to include in the array
     * @param item12 a MenuItem to include in the array
     * @param item13 a MenuItem to include in the array
     * @param item14 a MenuItem to include in the array
     * @param item15 a MenuItem to include in the array
     * @param item16 a MenuItem to include in the array
     * @param item17 a MenuItem to include in the array
     * @param item18 a MenuItem to include in the array
     * @param item19 a MenuItem to include in the array
     * @param item20 a MenuItem to include in the array
     * @param item21 a MenuItem to include in the array
     * @param item22 a MenuItem to include in the array
     * @param item23 a MenuItem to include in the array
     * @param item24 a MenuItem to include in the array
     * @param item25 a MenuItem to include in the array
     * @param item26 a MenuItem to include in the array
     * @param item27 a MenuItem to include in the array
     * @param item28 a MenuItem to include in the array
     * @param item29 a MenuItem to include in the array
     * @param item30 a MenuItem to include in the array
     * @returns A MenuSprite
     */
    //% blockId=mini_menu_show_menu
    //% block="create menu sprite|$item1||$item2 $item3 $item4 $item5 $item6 $item7 $item8 $item9 $item10 $item11 $item12 $item13 $item14 $item15 $item16 $item17 $item18 $item19 $item20 $item21 $item22 $item23 $item24 $item25 $item26 $item27 $item28 $item29 $item30"
    //% blockSetVariable=myMenu
    //% item1.shadow=mini_menu_create_menu_item
    //% item2.shadow=mini_menu_create_menu_item
    //% item3.shadow=mini_menu_create_menu_item
    //% item4.shadow=mini_menu_create_menu_item
    //% item5.shadow=mini_menu_create_menu_item
    //% item6.shadow=mini_menu_create_menu_item
    //% item7.shadow=mini_menu_create_menu_item
    //% item8.shadow=mini_menu_create_menu_item
    //% item9.shadow=mini_menu_create_menu_item
    //% item10.shadow=mini_menu_create_menu_item
    //% item11.shadow=mini_menu_create_menu_item
    //% item12.shadow=mini_menu_create_menu_item
    //% item13.shadow=mini_menu_create_menu_item
    //% item14.shadow=mini_menu_create_menu_item
    //% item15.shadow=mini_menu_create_menu_item
    //% item16.shadow=mini_menu_create_menu_item
    //% item17.shadow=mini_menu_create_menu_item
    //% item18.shadow=mini_menu_create_menu_item
    //% item19.shadow=mini_menu_create_menu_item
    //% item20.shadow=mini_menu_create_menu_item
    //% item21.shadow=mini_menu_create_menu_item
    //% item22.shadow=mini_menu_create_menu_item
    //% item23.shadow=mini_menu_create_menu_item
    //% item24.shadow=mini_menu_create_menu_item
    //% item25.shadow=mini_menu_create_menu_item
    //% item26.shadow=mini_menu_create_menu_item
    //% item27.shadow=mini_menu_create_menu_item
    //% item28.shadow=mini_menu_create_menu_item
    //% item29.shadow=mini_menu_create_menu_item
    //% item30.shadow=mini_menu_create_menu_item
    //% group="Create"
    //% weight=100
    //% help=github:arcade-mini-menu/docs/create-menu
    export function createMenu(
        item1: MenuItem,
        item2?: MenuItem,
        item3?: MenuItem,
        item4?: MenuItem,
        item5?: MenuItem,
        item6?: MenuItem,
        item7?: MenuItem,
        item8?: MenuItem,
        item9?: MenuItem,
        item10?: MenuItem,
        item11?: MenuItem,
        item12?: MenuItem,
        item12?: MenuItem,
        item13?: MenuItem,
        item14?: MenuItem,
        item15?: MenuItem,
        item16?: MenuItem,
        item17?: MenuItem,
        item18?: MenuItem,
        item19?: MenuItem,
        item20?: MenuItem,
        item21?: MenuItem,
        item22?: MenuItem,
        item23?: MenuItem,
        item24?: MenuItem,
        item25?: MenuItem,
        item26?: MenuItem,
        item27?: MenuItem,
        item28?: MenuItem,
        item29?: MenuItem,
        item30?: MenuItem,
    ) {
        _init();

        const m = new MenuSprite();
        m.setMenuItems([
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
            item8,
            item9,
            item10,
            item11,
            item12,
            item13,
            item14,
            item15,
            item16,
            item17,
            item18,
            item19,
            item20,
            item21,
            item22,
            item23,
            item24,
            item25,
            item26,
            item27,
            item28,
            item29,
            item30,
        ].filter(i => !!i));
        m.setButtonEventsEnabled(true);

        m.x = 80;
        m.y = 60;

        return m;
    }

    /**
     * Creates a MenuSprite from an array of MenuItems
     *
     * @param items An array of MenuItems to use in the MenuSprite
     * @returns A MenuSprite
     */
    //% blockId=mini_menu_create_menu_from_array
    //% block="create menu sprite from $items"
    //% blockSetVariable=myMenu
    //% items.shadow=lists_create_with
    //% items.defl=mini_menu_create_menu_item
    //% group="Create"
    //% weight=99
    //% help=github:arcade-mini-menu/docs/create-menu-from-array
    export function createMenuFromArray(
        items: MenuItem[]
    ) {
        _init();

        const m = new MenuSprite();
        // FIXME: slice here?
        m.setMenuItems(items);
        m.setButtonEventsEnabled(true);

        m.x = 80;
        m.y = 60;

        return m;
    }

    /**
     * A direction to move the selection in
     */
    //% blockId=mini_menu_move_direction
    //% block="$move"
    //% shim=TD_ID
    //% blockHidden
    //% help=github:arcade-mini-menu/docs/move-direction
    export function _moveDirection(move: MoveDirection): number {
        return move;
    }

    /**
     * Creates a border box that can be used with the setStyleProperty or setMenuStyleProperty padding, margin, and border options.
     *
     * @param left The width of the box on the left side
     * @param top The width of the box on the top side
     * @param right The width of the box on the right side
     * @param bottom The width of the box on the bottom side
     * @returns A number in which the left, top, right, and bottom have been encoded
     */
    //% blockId=mini_menu_create_border_box
    //% block="left $left top $top right $right bottom $bottom"
    //% group="Styling"
    //% weight=10
    //% help=github:arcade-mini-menu/docs/create-border-box
    export function createBorderBox(left: number, top: number, right: number, bottom: number) {
        return packMargin(left, top, right, bottom);
    }
}
