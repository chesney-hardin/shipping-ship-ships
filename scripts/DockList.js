import { getDocks, getHaulers } from "./database.js"

export const DockList = () => {
    const docks = getDocks()
    //Sorts the docks array alphabetically by the location property
    docks.sort((a,b) => a.location.localeCompare(b.location))

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li
                data-id="${dock.id}"
                data-location="${dock.location}"
                data-type="dock"
                >${dock.location}</li>`

    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //When a dock is clicked, present a message that tells which dock is unloading which haulers
        //Was a dock list item clicked?
        if(itemClicked.dataset.type === "dock") {
            
            //Get the id of the dock clicked on
            let dockId = itemClicked.dataset.id

            //Get the list of haulers
            const haulers = getHaulers()

            let haulingShips = " "

            //Iterate the list of haulers
            for (const hauler of haulers) {
                //Does the dockId of the hauler match the Id of the dock clicked on?
                if(hauler.dockId === parseInt(dockId)) {
                    haulingShips += `${hauler.name}, `
                }
        }

        //create a window alert that presents a message like this: `The ${dock.location} is currently unloading ${hauler.name}`
        if(haulingShips === " "){
            window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing`)
        }
        else {window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulingShips}`)}
        
    } 
        
    }   
)

