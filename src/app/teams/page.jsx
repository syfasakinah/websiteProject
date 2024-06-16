import React from 'react'

const Teams = () => {
  return (
    <div className="space-y-4 flex-col ">
      <h1 className="font-bold">Teams Section</h1>
    
      <div className="text-center border-2 border-orange-300 rounded-xl">
        "The Product is Incredible"
        <div className="font-bold text-center">
          by John
          <div>⭐️⭐️⭐️⭐️⭐️
          </div>
        </div>
      </div>
      <div className="text-center border-2 border-orange-500 rounded-xl">
        "Its very usefull"
        <div className="font-bold text-center">
          by Starla
          <div>⭐️⭐️⭐️⭐️
          </div>
          </div>
        </div>
        <div className="text-center border-2 border-orange-700 rounded-xl">
        "Its very Helpfull"
        <div className="font-bold text-center">
          by Ryan
          <div>⭐️⭐️⭐️⭐️⭐️
            </div>
          </div>
        </div>
    </div>
  )
}

export default Teams