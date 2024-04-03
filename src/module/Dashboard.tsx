import React from 'react'
import TopNavbar from '../components/top-navbar';
import { Home } from '../components/Home';


export default function Dashboard() {
  const renderComponent = () => {
    // switch (component?.mainComponent) {
    //   case MainComponentContextType.EDUCATION:
    //     return <div className="sm:p-4"><EducationScreen/></div>
    //   case MainComponentContextType.CONTACT:
    //     return <div className="p-4"><ContactScreen/></div>
    //   case MainComponentContextType.EXPERIENCE:
    //     return <div className="sm:p-4"><ExperienceScreen/></div>
    //   case MainComponentContextType.SKILLS:
    //     return <div className="sm:px-4 bg-slate-950 xl:px-16 "><SkillsScreen/></div>
    //   default:
    //     return <div className="p-4"><Home/></div>
    // }
    return <Home/>
  }

  return (
    <>
      <div className="bg-[#21201e] h-screen w-screen flex flex-col justify-between">
        <TopNavbar />
        {renderComponent()}
        {/* <Footer /> */}
      </div>
    </>
  )
}
