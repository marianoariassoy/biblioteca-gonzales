import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'
import Item from '../../components/Item3'
import Filter from '../../components/Filter'

const Index = () => {
  const { data, loading } = useFetch(`/amigos`)
  const { color } = useDataContext()

  return (
    <div className='w-full flex flex-col gap-y-12 px-6'>
      {loading ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-y-8'>
          <Filter data={data} />
          {data.map((item, index) => (
            <Item
              key={index}
              data={item}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Index
