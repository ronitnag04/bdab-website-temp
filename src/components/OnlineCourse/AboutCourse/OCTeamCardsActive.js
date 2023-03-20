import React from "react"
import styled from "styled-components"
import ContributorCard from "./ContributorCard"
import SectionTitle from "../SmallSectionTitle";

{/* Order: VPs of Education (Online Course), Head of Curriculum, Head of Web, Head of Marketing, Curriculum Developers, Web Developers, Marketing Specialists */}
const contributors = [ 
    {name: "Joshua Chandiramani",
    position: "VP of Education (Online Course)",
    linkedin: "https://www.linkedin.com/in/joshua-chandiramani/",
    status: "active"
    },
    {name: "Kaito Garcia",
    position: "Head of Curriculum",
    linkedin: "https://www.linkedin.com/in/kaitogarcia/ ",
    status: "active"
    },  
    {name: "Sean She",
    position: "Head of Web Development",
    linkedin: "https://www.linkedin.com/in/sean-she",
    status: "active"
    },   
    {name: "Cadence Hsu",
    position: "Head of Marketing",
    linkedin: "https://www.linkedin.com/in/cadyhsu/",
    status: "active"
    },
    {name: "Nicole Ni",
    position: "Curriculum Developer",
    linkedin: "https://www.linkedin.com/in/qianni17/",
    status: "active"
    },
    {name: "Celine Choi",
    position: "Curriculum Developer",
    linkedin: "https://www.linkedin.com/in/celinejwchoi",
    status: "active"
    },
    {name: "Gokce Gozek",
    position: "Curriculum Developer",
    linkedin: "https://www.linkedin.com/in/gokce-gozek-754818225/",
    status: "active"
    },
    {name: "Ronit Nagarapu",
    position: "Web Developer",
    linkedin: "https://www.linkedin.com/in/ronit-nagarapu",
    status: "active"
    },
    {name: "Daniel Tsan",
    position: "Web Developer",
    linkedin: "https://www.linkedin.com/in/danieltsan/",
    status: "active"
    },
    {name: "Karina Parikh",
    position: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/karina-parikh/",
    status: "active"
    },
    {name: "Adam Staley",
    position: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/adam-staley-3617571b2/",
    status: "active"
    },
    {name: "Sofia Villafuerte",
    position: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/sofia-villafuerte-5853a0223/",
    status: "active"
    },
    {name: "Nikhil Patel",
    position: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/nikhilpatel0610/",
    status: "active"
    }
]

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const OCTeamCardsActive = () => (
    <> 
        <SectionTitle title="Current Team Members" color="light"></SectionTitle>
        <CardContainer> 
            {contributors.map((details) =>
                <>
                    <ContributorCard 
                        name={details.name}
                        position={details.position}
                        linkedin={details.linkedin}
                        status={details.status}
                    />
                </>
            )}
        </CardContainer>
    </>
)

export default OCTeamCardsActive
