// export const downloadCV = () => {
//   fetch('http://212.60.21.114:4100/file', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/pdf',
//     },
//   })
//     .then((response) => {
//       console.log(response)
//       if (!response.ok) {
//         throw new Error('Network response was not ok')
//       }
//       return response.blob()
//     })
//     .then((blob) => {
//       const url = window.URL.createObjectURL(new Blob([blob]))
//       const link = document.createElement('a')
//       link.href = url
//       link.setAttribute('download', 'kisialiou-maksim-cv.pdf')
//       document.body.appendChild(link)
//       link.click()
//       if (link.parentNode) {
//         link.parentNode.removeChild(link)
//       }
//     })
//     .catch((error) => console.error('Error downloading file:', error))
// }

export const downloadCV = () => {
  // Замените ссылку на прямую ссылку на ваш файл на Google Drive или Yandex Disk
  const fileUrl =
    'https://drive.google.com/file/d/1dNKdvLTnIM7tBCsHPwprDVV3x0DKL-LX/view?usp=drive_link'

  // Создаем ссылку на скачивание файла
  const downloadLink = document.createElement('a')
  downloadLink.href = fileUrl
  downloadLink.setAttribute('download', 'filename.pdf') // Укажите имя файла для скачивания
  document.body.appendChild(downloadLink)

  // Имитируем нажатие на ссылку для скачивания файла
  downloadLink.click()

  // Удаляем ссылку из DOM
  document.body.removeChild(downloadLink)
}
