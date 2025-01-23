const useHTML = ({ text }) => {
  const formattedText = text.replace(/<div>/g, '<div class="mb-3">').replace(/<h3>/g, '<h3 class="mb-3">')

  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />
}

export default useHTML
