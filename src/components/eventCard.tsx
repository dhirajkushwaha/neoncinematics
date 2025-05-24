

type EventCardProps = {
  title: string;
  img: string;
  desc: string;
};

export default function EventCard(props : EventCardProps ){

    return(

        <div className=" lg:w-[32%] ">
            <div className= " bg-black border border-orange-500 rounded-[12px] py-[15px] px-[25px]   "  >
                <h2 className="text-3xl" style={{fontFamily:"polysans"}}>{props.title}</h2>
                <img className="my-4 rounded-[10px]" src={props.img} alt="" />
                <p className=""  style={{fontFamily:"DM Sans"}} >{props.desc}</p>
            
            </div>

        </div>
    )
}