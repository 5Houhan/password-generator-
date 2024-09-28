import React, { useCallback, useEffect, useRef, useState } from 'react'

const PswdGen = () => {
    const [lenth, setlength] = useState(9)
    const [numberAllowd, setnumberAllowd] = useState(false)
    const [char, setchar] = useState(false)
    const [pswd, setpswd] = useState("")

    const pswdReff = useRef(null)

    const pswdGenarator = useCallback(()=>{
        let pass = ""
        let str = 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowd ==true){
             str += "1234567890"
        }
        if(char == true){
             str += "!@#$%^&*()_+{}|[];>?./";
        }
        // console.log(pass)

        for(let i = 1; i <= lenth; i ++){
            let charr = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(charr)
            // console.log(i)
        }
        setpswd(pass)

    },[lenth, numberAllowd, char, setpswd])

    const pswdCpy = useCallback(()=>{
        pswdReff.current?.select()
        window.navigator.clipboard.writeText(pswd)
    },[pswd])

    useEffect(()=>{
        pswdGenarator()
    },[lenth, numberAllowd, char, pswdGenarator])
  return (
    <div>
      <div className='text-center w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5 bg-gray-700 text-orange-600'>
      <h1 className='text-white pb-3 text-2xl'>Password generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
           type="text"
           value={pswd}
           className='outline-none w-full py-1 px-3 cursor-pointer '
           placeholder='password'
           readOnly
           ref={pswdReff}
         />
         <button onClick={pswdCpy} className='text-white bg-blue-500 px-5 '>copy</button>
      </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input 
            type="range"
            min={8}
            max={100}
            value={lenth}
            className='cursor-pointer'
            
            onChange={(e) => {setlength(e.target.value)}}
             />
             
             <label>Length: {lenth} </label>
          </div>

          <div>
            <input 
            type="checkbox"
            defaultChecked={numberAllowd}
            id='numberInput'
            onChange={() => {
                setnumberAllowd((prev) => !prev);
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>

          <div>
            <input 
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onClick={() => {
                setchar((prev) => !prev);
              // console.log(chr)
            }}
          
             />
             <label htmlFor="charInput">Charactor</label>
          </div>

        </div>

    </div>
    </div>
  )
}

export default PswdGen
