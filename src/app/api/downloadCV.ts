export const downloadCV = () => {
  const fileUrl =
    'https://drive.google.com/file/d/1dNKdvLTnIM7tBCsHPwprDVV3x0DKL-LX/view?usp=drive_link'

  const downloadLink = document.createElement('a')
  downloadLink.href = fileUrl
  downloadLink.setAttribute('download', 'filename.pdf') // Укажите имя файла для скачивания
  document.body.appendChild(downloadLink)

  downloadLink.click()

  document.body.removeChild(downloadLink)
}
