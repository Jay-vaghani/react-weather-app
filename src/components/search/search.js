import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api'

function Search({ onSearchChange }) {

  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = async (inputValue) => {
    return (
      await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => {
          return {
            options: response.data.map((city) => {
              return { 
                // value: `${city.latitude} ${city.longitude}`,
                value: {
                  lat: city.latitude,
                  lon: city.longitude
                },
                label: `${city.name}`,
              }
            })
          }
        })
        .catch(err => console.error(err))
    )
  }

  return (
    <div>
      <AsyncPaginate
        placeholder='Search For City'
        debounceTimeout={1000}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default Search