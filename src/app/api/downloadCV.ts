export const downloadCV = () => {
  fetch('http://212.60.21.114:4100/file', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.blob()
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'kisialiou-maksim-cv.pdf')
      document.body.appendChild(link)
      link.click()
      if (link.parentNode) {
        link.parentNode.removeChild(link)
      }
    })
    .catch((error) => console.error('Error downloading file:', error))
}
