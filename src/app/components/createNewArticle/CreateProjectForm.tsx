'use client';

const SelectOrCreateProjectForm = ({ onNext, projects,  selectedOption, handleChange }) => {


    return <div className={'select-or-create-project'}>
            <h2>Select Project</h2>
            <form className={'select-or-create-project_form'}>
                <label className={'libel-signin'}>
                    <span className={'icon-project'}></span>
                    <select value={selectedOption} onChange={handleChange} className={'select-style project-select'} name="projects" id="projects">
                        {projects && projects.map((item, i)=>(
                            <option key={i} value={item.uid}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <button onClick={onNext} className={'select-or-create-project_next-button'} type={'submit'}>
                    Next
                </button>
            </form>
        </div>
}


export default SelectOrCreateProjectForm
