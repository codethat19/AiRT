import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, 
  isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 
          rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-[#444444] border border-slate-800 text-white text-sm
      rounded-lg focus:ring-[#0d6efd] focus:border-[#0d6efd] outline-none
      block w-full p-3'
      />
    </div>
  )
}

export default FormField