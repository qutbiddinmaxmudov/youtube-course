import axios from 'axios'
import { useEffect, useState } from 'react'

const path = process.env.REACT_APP_API_URL

const useGetData = (url, initialState = null) => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const { data } = await axios.get(`${path}${url}`)

      setData(data)
      setLoading(false)
    }

    getData()
  }, [url])

  return [data, loading]
}

export default useGetData
