"use client"

import useCountries from '@/hooks/useCountries';
import Select from 'react-select'

export type countrySelectValue ={
    flag : string;
    label :string;
    latlng : number[];
    region : string;
    value :string;
}

interface countrySelectProps{
    value : countrySelectValue;
    onChange : (val : countrySelectValue) => void;
}

const CountrySelect: React.FC<countrySelectProps> = ({ value , onChange} ) => {

    const { getAll} = useCountries();
    

  return (
    <div className=' ' >
        <Select 
            placeholder="Anywhere" 
            isClearable
            options={getAll()}
            value={value}
            onChange={(value)=> onChange(value as countrySelectValue) }
            formatOptionLabel={(option : any)=>(
              <div className='flex  flex-row items-center gap-3 ' >
                    <div>
                        {option.flag}
                    </div>
                    <div>
                        {option.label},
                    </div>
                    <span className='text-neutral-500 ml-1  ' >
                    {option.region}
                    </span>
              </div>
            )}

            classNames={{
                control : () => 'p-3 border-2',
                input : () => 'text-lg',
                option : () => 'text-lg',
            }}

            theme={(theme) => ({
                ...theme,
                borderRadius : 6,
                colors : {
                    ...theme.colors,
                    primary : 'black',
                    primary25: "#ffe4e6"
                }
            })}
         />
      
    </div>
  )
}

export default CountrySelect
