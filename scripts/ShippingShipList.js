import { getHaulers, getShippingShips } from "./database.js"

export const ShippingShipList = () => {
    const shippingShips = getShippingShips()
    //Sorts the shippingships array alphabetically by the name property
    shippingShips.sort((a,b) => a.name.localeCompare(b.name))

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li
                        data-id="${shippingShip.id}"
                        data-type= "shippingShip"
                        data-haulerid="${shippingShip.haulerShipId}"
                        data-name="${shippingShip.name}"
                        >${shippingShip.name}</li>`

    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if(itemClicked.dataset.type === "shippingShip") {

            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerid

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            
            // Iterate the array of hauler objects
            const haulers = getHaulers()
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if(parseInt(haulerId) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip.name = hauler.name
                    // Show an alert to the user with this format...
                    // Palais Royal is being hauled by Seawise Giant
                }
            }
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }
    }
)