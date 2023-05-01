import { getHaulers } from "./database.js"

export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li>${hauler.location}</li>`

    }

    haulersHTML += "</ul>"

    return haulersHTML
}