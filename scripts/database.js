
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
        {id: 3, dockId: 1, name: "Munchin Fish"}
    ]
}

export const getDocks = () => {
    return structuredClone(database.docks)
}