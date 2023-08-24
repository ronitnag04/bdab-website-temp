import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {execArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ExecBoardCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                committee="exec"
                name="Lara Panigrahi"
                photoLink={execArr[0]}
                role="Co-President"
                interest1="Dancing"
                interest2="Weightlifting"
                interest3="Buying indoor plants"
                linkedin="https://www.linkedin.com/in/lara-panigrahi-9570581b9"
                calendly = "http://calendly.com/larapanigrahi"
            />
            <OfficerCard className="item-1"
                committee="exec"
                name="Joshua Chandiramani"
                photoLink={execArr[1]}
                role="Co-President"
                interest1="Competitive tennis"
                interest2="Hip hop dance"
                interest3="YouTube Content Creation"
                linkedin="https://www.linkedin.com/in/joshua-chandiramani/"
                calendly = "https://calendly.com/jcjoshuac/coffeechat"
            />
            <OfficerCard className="item-2"
                committee="exec"
                name="Ria Jain"
                photoLink={execArr[2]}
                role="VP of Development"
                interest1="Reading"
                interest2="Watching sunsets"
                interest3="Stargazing"
                linkedin="https://www.linkedin.com/in/riajain230"
                calendly ="https://calendly.com/ria_jain/coffeechat"
            />
            <OfficerCard className="item-3"
                committee="exec"
                name="Ethan Preston"
                photoLink={execArr[3]}
                role="Internal Vice President"
                interest1="Running"
                interest2="Tennis"
                interest3="Watching sports"
                linkedin="https://www.linkedin.com/in/ethanpreston/"
                calendly = "https://calendly.com/ethanpreston"
            />
            <OfficerCard className="item-4"
                committee="exec"
                name="Priya Kamath"
                photoLink={execArr[4]}
                role="External Vice President"
                interest1="Finding new coffee shops"
                interest2="Lifting"
                interest3="Ocean Swims"
                linkedin="https://www.linkedin.com/in/priya-k-/"
                calendly = "https://calendly.com/priyak22"
            />
            <OfficerCard className="item-5"
                committee="exec"
                name="Pruthvi Innamuri"
                photoLink={execArr[5]}
                role="VP of Consulting"
                interest1="Producing music"
                interest2="Cooking"
                interest3="Dogs"
                linkedin="https://www.linkedin.com/in/pruthvi-innamuri/"
                calendly = "https://calendly.com/pruthvi-innamuri/coffee-chats-1"
            />
            <OfficerCard className="item-6"
                committee="exec"
                name="Madeleine Larson"
                photoLink={execArr[6]}
                role="VP of Education: Bootcamp"
                interest1="Thrifting"
                interest2="Exploring new cafes"
                interest3="Creating Playlists on Spotify"
                linkedin="https://www.linkedin.com/in/madeleinelarson/"
                calendly = "https://calendly.com/maddielarson/bdab-coffee-chat-w-maddie"
            />
            <OfficerCard className="item-7"  
                committee="exec"
                name="Cadence Hsu"
                photoLink={execArr[7]}
                role="VP of Education: Online Course"
                interest1="Going to the beach"
                interest2="Thrifting"
                interest3="Trying new coffee/food places"
                linkedin="https://www.linkedin.com/in/cadyhsu/"
                calendly = "https://calendly.com/cadencehsu/product-space-coffee-chats"
            />
        </CardContainer>
    </>
)

export default ExecBoardCards
