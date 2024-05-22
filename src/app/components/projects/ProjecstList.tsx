'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';
import Remove from '../../images/remove.svg';
import Pencil from '../../images/pencil.svg';
import Pagination from '@/app/components/articles/Pagination';
import UpdateProjectName from '@/app/components/projects/UpdateProjectName';

const ProjectsList = ({ data }) => {
    const [projects, setProjects] = useState(null)
    const [popUpDelete, setPopUpDelete] = useState(null);
    const [totalProjects, setTotalProjects ] = useState(1)
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(7);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [popUpUpdate, setPopUpUpdate] = useState(null)
    const [nameForm, setNameForm] = useState(null)
    const [dataUpdate, setDataUpdate] = useState<any | null>()

    const totalPages = Math.ceil(totalProjects / take);
    const handlePopUpDelete = (uid) => {
        setPopUpDelete(uid)
    }

    const projectHandlePopUpUpdate= (uid) =>{
        setPopUpUpdate(uid)
    }
    const handlePopUpCansel = () => {
        setPopUpDelete(null)
    }

    const handleUpdateName = (childDataUpdate) => {
        setDataUpdate(childDataUpdate)
    }

    const handleNextPage = () => setPage(currentPage => {
        if (currentPage < totalPages){
            return currentPage + 1;
        }else {
            return currentPage;
        }

    });
    const handlePreviousPage = () => setPage(currentPage => Math.max(1, currentPage - 1));



    const handleSubmitDelete = async (uid) => {
        await fetch(`/api/project/delete`, {
            method:'DELETE',
            body:JSON.stringify({
                uid
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            return response.json()
        })
            .then(() => {
                setReloadTrigger((prev) => !prev); // Переключить триггер для перезагрузки данных
            });
    };



    useEffect(() => {


        const getProjectsLength = async () => {
            try {
                const {data} = await axios.get('/api/project/get_length_projects', {
                });
                setTotalProjects(data);
            }catch (e){
                console.log(e);
            }
        }

        const getProjects = async () => {
            try {
                const {data} = await axios.get('/api/project/get-projects', {
                    params: {
                        page,
                        take,
                    }
                })
                setProjects(data);
            }catch (e){
                console.log(e);
            }
        }
        getProjectsLength()
        getProjects();

        if(dataUpdate !== undefined ){
            if (dataUpdate.uid === popUpUpdate) setPopUpUpdate(null)
        }
    }, [page, take, reloadTrigger, data, dataUpdate])


    console.log(dataUpdate);

    return <div className="articles-list-block">

        <ul className="articles-list">
            {
                projects?.map((project, i) => (
                    <li key={i}>
                        {popUpUpdate !== project.uid ? <Link href={`/projects/${project.uid}`}>
                            <h4>{project.name}</h4>
                        </Link> : <UpdateProjectName name={project.name} uid={project.uid} childData={handleUpdateName} />}
                        {/*<h4>{article.titles[0]}</h4>*/}
                        {/*<h4>{article.project_name}</h4>*/}
                        {/*<h4 className="word-heading">{article.words}</h4>*/}
                        {popUpUpdate !== project.uid && <button onClick={() => projectHandlePopUpUpdate(project.uid)} className={'delete-article'}>
                            <Image src={Pencil} alt="update"/>
                        </button>}
                        {/*{ popUpUpdate === project.uid && <PopUpUpdateProject/>}*/}
                        <button onClick={() => handlePopUpDelete(project.uid)} className={"delete-article"}>
                            <Image src={Remove} alt="remove"/>
                        </button>
                        {popUpDelete === project.uid &&< div className="pop-up-delete delete-project" style={{background: 'rgba(56, 44, 75, 0.77)'}}>
                            <h4>All your articles related to this project will be deleted. Do you want to delete this project?</h4>
                            <div>
                                <button onClick={() => handleSubmitDelete(project.uid)} >Delete</button>
                                <button onClick={handlePopUpCansel} >Cansel</button>
                            </div>

                        </div>}

                    </li>
                ))
            }
        </ul>

        <div className="pagination-block">
            <button className="prev-button" onClick={handlePreviousPage}>Prev</button>
            <Pagination
                totalPages={totalPages}
                currentPage={page}
                onPageChange={(pageNumber) => setPage(pageNumber)}
            />
            <button className="next-button" onClick={handleNextPage}>Next</button>
        </div>

    </div>
}

export default ProjectsList
