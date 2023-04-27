import { getDocks } from "./database.js"

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li>${dock.location}</li>`

    }

    docksHTML += "</ul>"

    return docksHTML
}