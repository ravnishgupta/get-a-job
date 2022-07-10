
const SkillsList =({skills, title}) => {
    let allskill ="";


    if(skills.length)
    { 
        skills.map((skill, i) =>{
            return <span className="skill" key={i}> {skill} </span>
        });
        skills.forEach((skill, i) => {
            if(i < skills.length-1)
            {   
                allskill += skill.description + ", ";
            }
            else{
                allskill += skill.description;
            }
            
        });
    }
    return <div className="mb-2 text-gray-600 dark:text-gray-600">Skills : {allskill}</div>;
};


  export default SkillsList;