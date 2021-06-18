// json-server database.json -p 8088 -w -This will start your json server

const applicationState = {
  rentals: [] 
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
  return fetch(`${API}/rentals`)
    .then(response => response.json())
    .then(
      (rentalRequests) => {
        // Store the external state in application state
        applicationState.rentals = rentalRequests
      }
    )
}

export const getRequests = () => {
  return applicationState.rentals.map(rental => ({...rental}));
}

export const sendRequest = (userRentalRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userRentalRequest) 
  }
  return fetch(`${API}/rentals`, fetchOptions)
    .then(response => response.json())
    .then(() => {
      document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}

export const deleteRequest = (id) => {
  return fetch(`${API}/rentals/${id}`, { method: "DELETE" })
    .then(
      () => {document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}
