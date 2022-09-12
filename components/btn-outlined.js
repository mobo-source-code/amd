
const BtnOutlined = ({text}) => {
    return (
        <a className="cursor-pointer relative inline-block px-10 py-5 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-lighter group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-lighter"></span>
<span className="relative text-primary group-hover:text-gray-700 text-2xl">{text}</span>
</a>
    )
}


export default BtnOutlined;