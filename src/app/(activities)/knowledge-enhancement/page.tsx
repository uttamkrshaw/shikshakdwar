
import Hero from "@/app/(activities)/activities/hero";
import { Footer, Navbar } from "@/components";
import SelfCare from "@/components/activity/left";
import RightKnowledge from "@/components/activity/right";

const style={
  backgroundColor: "#CBDDF5",
}

const Knowledge = () => {
  return (
    <>
      <Navbar />
      <Hero
      heading="Knowledge Enhancement: The Essential Process"
      subheading=""
      backgroundImage="/image/activities/Knowledge_bg.jpg"
    />
      <h2 className="pl-36 pt-10  text-4xl font-medium">Knowledge Enhancement</h2>
    <SelfCare heading="SELF CARE FOR EDUCATORS" subheading=" Teaching takes a lot of energy, both physical and mental. Self-care is not just a luxury for teachers; it is a necessity. For would-be teachers, establishing healthy self-care habits early in their careers can contribute to a more sustainable and fulfilling professional journey." image="/image/activities/Knowledge_girl.jpg" style={style}/>
    <RightKnowledge heading="CURATING THE ROUGH EDGES" subheading=" Addressing anxiety-related issues in students requires a multifaceted approach that involves creating a supportive environment, providing resources, and implementing strategies to help students cope. We at Shikshakdwar provide an insight and support to aspiring educators to approach anxiety-related issues with empathy and flexibility." image="/image/activities/curating.jpg"/>
    <SelfCare heading="DIGITAL CITIZENSHIP AND E TIQUETTES" subheading=" Digital literacy and etiquette are crucial skills for would-be educators in the modern educational landscape. These are essential skills to navigate the digital age of education successfully. These skills not only enhance teaching practices but also prepare educators to guide students to responsibly and effectively use technology in their academic and personal lives." image="/image/activities/digital.jpg" style={style}/>
    <RightKnowledge heading="PLUGGING LEARNING GAPS" subheading=" A learning gap is a disparity between what a student has mastered and what is expected at their particular grade level. There are various resources available to address these gaps and increase student success. We at Shikshakdwar guide aspiring educators to learn various strategies to plug learning gaps." image="/image/activities/plugging.jpg"/>
    <SelfCare heading="SOCIAL EMOTIONAL LEARNING" subheading=" Incorporating Social and Emotional Learning is essential for aspiring educators. It equips them with the skills and mind-set needed to create a positive, inclusive, and supportive learning environment, laying the foundation for both academic success and personal growth of their students." image="/image/activities/social.jpg" style={style}/>
    <RightKnowledge heading="PROTECTION OF CHILDREN FROM OF SEXUAL OFFENCES" subheading=" The workshop is dedicated to exploring the vital aspects of the Protection of Children from Sexual Offences (POCSO) Act, enacted in India in 2012. We will delve into important topics such as reporting mandates, the role of child welfare committees, child-sensitive medical examinations, tackling technology-related offenses, and promoting awareness programs." image="/image/activities/protact.jpg"/>
    
    <SelfCare heading="PREVENTION OF SEXUAL HARASSMENT" subheading=" The workshop emphasizes the crucial role teacher play in fostering a safe and respectful school culture. Through engaging discussions, case studies, and expert guidance, participants will be equipped with the knowledge and tools necessary to create a secure learning environment. Dont miss this opportunity to enhance your skills and contribute to a positive educational community." image="/image/activities/prevention.jpg" style={style}/>
      <Footer />
    </>
  );
};

export default Knowledge;
