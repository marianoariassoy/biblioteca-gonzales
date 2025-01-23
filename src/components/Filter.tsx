const Filter = ({ data }) => {
  if (data.length < 2) return null

  return (
    <div className='w-full max-w-4xl m-auto'>
      <ul className='flex submenu [&>li:last-child::after]:hidden'>
        {data.map((item, index) => (
          <li key={index}>
            <a
              href={`#item-${item.id}`}
              className='text-lg hover:underline scroll'
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
