import { getRequests } from "./dataAccess";

export const Rentals = () => {
  const rentals = getRequests()
 let html = `
    <ul> 
      ${rentals.map(rental => {
        return `<li> ${rental.description} <button class="rental__delete"
          id="rental--${rental.id}">Delete
          </button>
          </li>`
        }).join("")
      }
    </ul>
  `

return html

}