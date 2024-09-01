'use client'
const DropZone = ({children}) => {
    return(<div className="flex items-center w-lg justify-between space-x-4 p-2 border-2  hover:border-gray-400 rounded-xl transition-colors duration-300"> {children} </div>)
}

export default DropZone
