import React from "react"
import styled from "styled-components"
import ContributorCard from "./ContributorCard"
import SectionTitle from "../SmallSectionTitle";

{/* Order(new before old in each category): VPs of Education (Online Course), Heads of Curriculum, Heads of Web, Heads of Marketing, Curriculum Developers, Web Developers, Marketing Specialists */}
const contributors = [ 
    {name: "Edrea Low",
    position: "Head of Ciriculum",
    linkedin: "https://www.linkedin.com/in/edrealow/",
    status: "inactive"
    },
    {name: "Jasmine (Tai-Chen) Wang",
    position: "Head of Ciriculum",
    linkedin: "https://www.linkedin.com/in/jasmine-tai-chen-wang-4674371b5/",
    status: "inactive"
    },
    {name: "Melissa Wong",
    position: "Head of Web Development",
    linkedin: "https://www.linkedin.com/in/melissa-r-wong/",
    status: "inactive"
    },
    {name: "Austin Ho",
    position: "Head of Web Development",
    linkedin: "https://www.linkedin.com/in/aho1628/",
    status: "inactive"
    },   
    {name: "Eddie Liu",
    position: "Head of Marketing",
    linkedin: "https://www.linkedin.com/in/efliu/",
    status: "inactive"
    },
    {name: "Sissi Li",
    position: "Curriculum Developer",
    linkedin: "https://www.linkedin.com/in/sissi-li-28061b1a2/",
    status: "inactive"
    },
    {name: "Mario Montoya",
    position: "Curriculum Developer",
    linkedin: "https://www.linkedin.com/in/mmontoyallamas/",
    status: "inactive"
    },
    {name: "Chandler Beon",
    position: "Curriculum Developer",
    linkedin: "https://www.linkedin.com/in/cdbeon/",
    status: "inactive"
    },
    {name: "Danielle Wong",
    position: "Web Developer",
    linkedin: "https://www.linkedin.com/in/danielle-n-wong/",
    status: "inactive"
    },
    {name: "Arda Ulug",
    position: "Web Developer",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "inactive"
    },
    {name: "Leah Hong",
    position: "Web Developer",
    linkedin: "https://www.linkedin.com/in/leah-hong/",
    status: "inactive"
    },
    {name: "Hrishikesh Ingale",
    position: "Web Developer",
    linkedin: "https://www.linkedin.com/in/hrishikesh-ingale/",
    status: "inactive"
    },
    {name: "Shannon Zhong",
    position: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/shannon-z/",
    status: "inactive"
    },
    {name: "Ryan Shah",
    position: "Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/ardaulug/",
    status: "inactive"
    },
]

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const OCTeamCardsInactive = () => (
    <> 
        <SectionTitle title="Past Team Members" color="light"></SectionTitle>
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

export default OCTeamCardsInactive
