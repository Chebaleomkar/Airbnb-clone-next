"use client"
interface HeadingProps{
    title :string;
    subtitle ?: string;
    center?: boolean;
}

const Heading = ({title , subtitle , center}:HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'} >
        <div className="text-2xl font-bold">
        {title || "Title"}
        </div>

        <div className="font-light text-neutral-500 mt-2">
            {subtitle || "subTitle"}
        </div>
        
    </div>
  )
}

export default Heading