import { sendRequest } from "./dataAccess";
import { getRequests } from "./dataAccess";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "submitRequest") {
    const userParentName = document.querySelector("input [name='rentalParentName']").value
    const userChildName = document.querySelector("input [name='rentalChildName']").value
    const userAttendance = document.querySelector("input [name='rentalAttendance']").value
    const userAddress = document.querySelector("input [name='rentalAddress']").value
    const userDate = document.querySelector("input [name='rentalDate']").value
    const userHours = document.querySelector("input [name='rentalHours']").value

    const dataToSendToAPI = {
      parentName: userParentName,
      childName: userChildName,
      attendance: userAttendance,
      address: userAddress,
      date: userDate,
      hours: userHours
    }
    sendRequest(dataToSendToAPI)
  }
}) 