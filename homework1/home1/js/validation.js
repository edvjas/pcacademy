let minRows = 2
let maxRows = 8

function resizeTextArea () {
  let lineHeight = window.getComputedStyle(this, null).getPropertyValue('line-height')
  let paddingTop = window.getComputedStyle(this, null).getPropertyValue('padding-top')
  let paddingbottom = window.getComputedStyle(this, null).getPropertyValue('padding-bottom')
  let borderTop = window.getComputedStyle(this, null).getPropertyValue('border-top')
  let borderBottom = window.getComputedStyle(this, null).getPropertyValue('border-bottom')

  let padding = parseFloat(paddingbottom) + parseFloat(paddingTop)
  let border = parseFloat(borderTop) + parseFloat(borderBottom)
  let taLineHeightParsed = parseFloat(lineHeight)

  let taHeight = this.scrollHeight - padding // Get the scroll height of the textarea
  let numberOfLines = Math.floor(taHeight / taLineHeightParsed)
  if (numberOfLines <= minRows || this.value === '') {
    let newHeight = minRows * taLineHeightParsed + border + padding + 'px'
    this.style.height = newHeight
    this.style.overflowY = 'hidden'
  } else if (numberOfLines > maxRows) {
    let newHeight = maxRows * taLineHeightParsed + border + padding + 'px'
    this.style.height = newHeight
    this.style.overflowY = 'scroll'
  } else {
    let newHeight = numberOfLines * taLineHeightParsed + border + padding + 'px'
    this.style.height = newHeight
    this.style.overflowY = 'hidden'
  }
}

window.onload = () => {
  let textArea = document.getElementById('myTextarea')
  textArea.addEventListener('input', resizeTextArea)
  textArea.dispatchEvent(new Event('input'))
}
