import ChatRoom from "../../../Card/ChatRoom"

const list = [
    {
        _id: "asdfa",
        name: "asdfa",
        img: "asdfa",
        latestMessage: "asdfa",
    }
]
export default function Sidebar() {
    return (
        <aside className="wfull">
            {list.map(e => <ChatRoom key={e._id} data={e} activeId="" />)}
        </aside>
    )
}