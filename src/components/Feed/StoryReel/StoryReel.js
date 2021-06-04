import React from 'react'
import './StoryReel.css'
import Story from './Story/Story'
import { useStateValue } from "../../../StateProvider";


function StoryReel() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="storyReel"> 
            {/* Story */}
            <Story
                image={"https://www.readree.com/wp-content/uploads/2021/01/Search-Engines-That-Search-for-Duplicate-images.jpg"}
                profileSrc={"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/08/image9f999e70-ac08-45b1-85f7-3daa03ef4585-1565266406.jpg"}
                title={"Suresh Raina"}
                />
            <Story
                image={"https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"}
                profileSrc={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"}
                title={"Lisa Ann"}
            />
            <Story
                image={"https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY="}
                profileSrc={user.photoURL}
                title={user.displayName}
            />
            <Story
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbjmnlzLycPBzci1ZnnWb_nivt8HLtto5DA&usqp=CAU"}
                profileSrc={user.photoURL}
                title={user.displayName}
            />
            <Story
                image={"https://buffer.com/library/content/images/2020/09/Frame-47.png"}
                profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"}
                title={"Ben Atkins"}
            />
        </div>
    )
}

export default StoryReel
