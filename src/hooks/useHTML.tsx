const useHTML = ({ text }) => {
  return (
    <div
      className='animate-fade animate-duration-300 text-balance'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default useHTML
