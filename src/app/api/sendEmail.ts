interface IData {
  email: string
  subject: string
  message: string
}

export const sendEmail = async (data: IData) => {
  const JSONdata = JSON.stringify(data)
  const endpoint = 'http://localhost:4000'

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }

  const response = await fetch(endpoint, options)

  console.log(data)
}
