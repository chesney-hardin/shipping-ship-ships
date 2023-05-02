import { DockList } from "./DockList.js"
import { HaulerList } from "./HaulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector(".main-container")

const shipHTML = `
    
    <section class="dock-list">
        <h2>Docks</h2>
            ${DockList()}
    </section>

    <section class="hauler-list">
        <h2>Hauling Ships</h2>
            ${HaulerList()}
    </section>

    <section class="shippingShip-list">
        <h2>Shipping Ships</h2>
            ${ShippingShipList()}
    </section>
    
`

mainContainer.innerHTML = shipHTML 
