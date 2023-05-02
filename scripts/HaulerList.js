import { getHaulers, getShippingShips } from "./database.js"

export const HaulerList = () => {
    const haulers = getHaulers()
    //Sorts the haulers array alphabetically by the name property
    haulers.sort((a,b) => a.name.localeCompare(b.name))

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        
        haulersHTML += `<li
                   data-id= "${hauler.id}"
                   data-type= "hauler" 
                >${hauler.name}</li>`

    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if(itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked
            let haulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let counter = 0

            // Iterate all of the shipping ships
            const shippingShips = getShippingShips()

            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if(parseInt(haulerId) === ship.haulerShipId) {

                    // Increase the counter by 1
                    counter++
                }
            }
            
            window.alert(`This hauler is carrying ${counter} shipping ships`)
        }
    }
)
