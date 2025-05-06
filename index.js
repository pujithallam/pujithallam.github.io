const projects = [
    {
        name: 'Advanced CFD Simulation',
        description: 'Modeled thermal convection under Earth and Mars gravity using ANSYS Fluent. Enhanced lift force oscillation by 41.3% through shape optimization.'
    }
]

const skills = [
    'SolidWorks', 'CAD', 'Fusion 360', 'Python'
]

function createProjCards(){
    let projContent = document.getElementById('project-content')

    let html = ''
    projects.forEach((proj)=>{
        html+=`
            <div class="card">
            <div
            class="card-content" >
                <p
                class="card-heading">
                    ${proj.name}
                </p>
                <p class="card-description">
                    ${proj.description}
                </p>
            </div>
            </div>
        `
    })

    projContent.innerHTML= html
}

function createTechSkills(){
    let techSkillsContent = document.getElementById('techskill-container')

    let html = ''
    skills.forEach((skill)=>{
        html+=`
            <p class="technical-skill">
                ${skill}
            </p>
        `
    })

    techSkillsContent.innerHTML = html
}

function createContent(){

    createProjCards()
    createTechSkills()

}

createContent()
