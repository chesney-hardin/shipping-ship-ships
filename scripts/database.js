
const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],

    haulers: [
        {id: 1, dockId: 2, name: "Lost Love"},
        {id: 2, dockId: 4, name: "Tip of the Burg"},
        {id: 3, dockId: 1, name: "Munchin Fish"},
        {id: 4, dockId: 1, name: "Tradewind"}
    ],

    shippingShips: [
        {id: 1, haulerShipId: 2, name: "Flubber Rubber"},
        {id: 2, haulerShipId: 3, name: "Jumpin Jay"},
        {id: 3, haulerShipId: 2, name: "Pipsqueak"},
        {id: 4, haulerShipId: 1, name: "Lonely Hour"},
        {id: 5, haulerShipId: 4, name: "Jupiter"},
        {id: 6, haulerShipId: 3, name: "Skipper Slipper"},
        {id: 7, haulerShipId: 1, name: "Triple Trouble"},
        {id: 8, haulerShipId: 3, name: "Frozen Rose"},
    ]
}

export const getDocks = () => {
    return structuredClone(database.docks)
}

export const getHaulers = () => {
    return structuredClone(database.haulers)
}

export const getShippingShips = () => {
    return structuredClone(database.shippingShips)
}