


const ListPoint = ({text}) => {
    return (
        <div className="flex space-x-2 md:space-x-3 mb-4 md:mb-8 items-center">
            <div className="w-2 h-2 md:w-4 md:h-4 bg-primary"></div>
            <h1 className="text-sm md:text-4xl font-head">{text}</h1>
        </div>
    )
}

export default ListPoint