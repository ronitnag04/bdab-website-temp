import React, { useState } from "react"
import VisionSection from "./VisionSection"
import DepartmentSection from "./DepartmentSection"
import ClubValuesSection from "./ClubValuesSection"
import FilterCards from "./OfficerSection/FilterCards"

const AboutUsContent = () => {
    return (
        <>
            <VisionSection/>
            <DepartmentSection/>
            <ClubValuesSection/>
            <FilterCards/>
        </>
    )
}

export default AboutUsContent