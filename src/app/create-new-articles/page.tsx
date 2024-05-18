'use client';

import DashboardLayout from '@/app/dashboard/layout';
import NavMenu from '@/app/components/navigation/NavMenu';
import DashboardComponent from '@/app/components/dashboard/DashboardComponent';
import SelectOrCreateProjectForm from '@/app/components/createNewArticle/CreateProjectForm';
import {useEffect, useState} from 'react';
import CreateArticle from '@/app/components/createNewArticle/CreateArticle';
import axios from 'axios';
import ProjectContext from '../components/createNewArticle/ProjectContext';


const CreateNewArticles = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [projects, setProjects] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        // console.log("Выбранное значение:", event.target.value);
    };

    useEffect( ()=>{
        const getProject = async () => {
            try {
                const {data} = await axios.get('/api/project/get');
                console.log(data);
                setProjects(data);
                setSelectedOption(data[0].uid)
            }catch (e){
                console.log(e);
            }
        }
        getProject();
    },[])


    // Функции для перехода к следующему/предыдущему шагу
    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    // Рендеринг компонента в зависимости от текущего шага
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <SelectOrCreateProjectForm onNext={nextStep} projects={projects} selectedOption={selectedOption} handleChange={handleChange} />
              ;
            case 2:
                return <CreateArticle />;
            // Другие case для других шагов...
            default:
                return <SelectOrCreateProjectForm onNext={nextStep} projects={projects} selectedOption={selectedOption} handleChange={handleChange} />;
        }
    };



    return (
        <DashboardLayout>
            <main className="dashboard-container">
                <NavMenu/>
                <DashboardComponent>
                    <ProjectContext.Provider value={`${selectedOption}`}>
                    {renderStep()}
                    </ProjectContext.Provider>
                </DashboardComponent>
            </main>
        </DashboardLayout>
    )
}

export default CreateNewArticles
