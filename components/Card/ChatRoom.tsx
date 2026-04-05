import Image from "next/image";

interface propsType{
    _id: string;
    img: string;
    name: string;
    latestMessage: string;
}
export default function ChatRoom({data, activeId}: {data: propsType; activeId: string}) {
    return (
        <div className={`${data._id === activeId ? "bg-primary text-white" : ""} flex gap-4 items-center`}>
            <Image src={data.img} alt="chat room icon" height={100} width={100} className="aspect-square object-cover" />
            <section className="grow">
                <h4>{data.name}</h4>
                <p>{data.latestMessage}</p>
            </section>
        </div>
    )
}