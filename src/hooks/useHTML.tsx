const useHTML = ({ text }) => {
  const formattedText = text
    .replace(/<div>/g, '<div class="mb-3">')
    .replace(/<h3>/g, '<h3 class="mb-3">')
    .replace(/<a>/g, '<a class="undeline">')

  return (
    <div
      className='text-justify'
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  )
}

export default useHTML
