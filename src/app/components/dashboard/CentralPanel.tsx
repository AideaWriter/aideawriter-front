'use client';

import {useEffect, useState} from 'react';
import axios from 'axios';

const CentralPanel = () =>{


    const [articles, setArticles] = useState(null)
    const [projects, setProjects] = useState(null)
    const [tokenTracker, setTokenTracker] = useState(null)


    useEffect(() => {



        const getProjects = async () => {
            try {
                const {data} = await axios.get('/api/project/get_length_projects', {
                });
                setProjects(data);
            }catch (e){
                console.log(e);
            }
        }


        const getArticles = async () => {
            try {
                const {data} = await axios.get('/api/articles/get_length_article');
                setArticles(data);
            }catch (e){
                console.log(e);
            }
        }

        const getTokenTracker = async () => {
            try {
                const {data} = await axios.get('/api/ai/get_token_tracker');
                setTokenTracker(data);
            }catch (e){
                console.log(e);
            }
        }
        getArticles()
        getProjects()
        getTokenTracker()
    }, [])

    console.log(articles);

    return <div className={'central-panel'}>
        <div>
            <h2 className={'dashboard-central-first-title'}>How it <span>works:</span></h2>
            <div>
                <ul className={'list-platform'}>
                    <li className={'item-platform'}>

                        <p> 1. Create a Project</p>

                    </li>
                    <li className={'item-platform'}>

                        <p>2. Go to the &quot;Create New Articles&quot; tab</p>

                    </li>
                    <li className={'item-platform'}>

                        <p>3. Select a project </p>

                    </li>
                    <li className={'item-platform'}>

                        <p>4. Specify the required settings Generate article</p>

                    </li>
                    <li className={'item-platform'}>

                        <p>5. Generate article</p>

                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div className={'dashboard-central-container'}>
                <h2 className={'dashboard-central-first-title'}>Your <span>works:</span></h2>
                <p className={'description-first-title'}>The total number of your projects, articles and points spent is displayed here</p>
            </div>
            <ul className={'list-your-works'}>
                <li>
                    <h2>{projects && projects}</h2>
                    <h3>Projects</h3>
                </li>
                <li>
                    <h2>{articles === null ? 0 : articles}</h2>
                    <h3>Articles</h3>
                </li>
                <li>
                    <h2>{tokenTracker === null ? 0 : tokenTracker.token}</h2>
                    <h3>Articles Point</h3>
                </li>
            </ul>
        </div>
    </div>
}

export default CentralPanel
