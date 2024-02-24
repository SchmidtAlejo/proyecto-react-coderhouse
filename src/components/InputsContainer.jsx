import React from 'react'
import capitalLeterHelper from '../helpers/capitalLeterHelper'

export default function InputsContainer({ formData, onChange, error }) {
    return (
        <>
            {
                Object.keys(formData).map((key, i) => (
                    <>
                        <input className="border-0 p-2 ps-3 rounded-1 text-white" type="text" placeholder={capitalLeterHelper(key)} name={key} onChange={onChange} />
                        {
                            error[key] && <p className="text-danger">{capitalLeterHelper(error[key])}</p>
                        }
                    </>
                ))
            }
        </>
    )
}
