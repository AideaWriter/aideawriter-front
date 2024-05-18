'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';
import Remove from '../../images/remove.svg';
import Pagination from '@/app/components/articles/Pagination';

const ArticlesList = () => {
    const [articles, setArticles] = useState(null)
    const [popUpDelete, setPopUpDelete] = useState(null);
    const [totalArticles, setTotalArticles ] = useState(1)
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(7);
    const [reloadTrigger, setReloadTrigger] = useState(false);

    const totalPages = Math.ceil(totalArticles / take);
    const handlePopUpDelete = (uid) => {
        setPopUpDelete(uid)
    }
    const handlePopUpCansel = () => {
        setPopUpDelete(null)
    }

    const handleNextPage = () => setPage(currentPage => {
        if (currentPage < totalPages){
           return currentPage + 1;
        }else {
            return currentPage;
        }

    });
    const handlePreviousPage = () => setPage(currentPage => Math.max(1, currentPage - 1));


    const handleSubmit = async (uid) => {
        console.log(uid);

        await fetch(`/api/articles/delete`, {
            method:'DELETE',
            body:JSON.stringify({
                uid
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            console.log(response);
            return response.json()
        })
            .then(() => {
                setReloadTrigger((prev) => !prev); // Переключить триггер для перезагрузки данных
            });
    };

    useEffect(() => {
        const getArticlesLength = async () => {
            try {
                const {data} = await axios.get('/api/articles/get_length_article', {
                });
                setTotalArticles(data);
            }catch (e){
                console.log(e);
            }
        }

        const getArticles = async () => {
            try {
                const {data} = await axios.get('/api/articles/get', {
                    params: {
                        page,
                        take,
                    }
                });
                setArticles(data);
            }catch (e){
                console.log(e);
            }
        }
        getArticlesLength()
        getArticles();
    }, [page, take, reloadTrigger])




    return <div className="articles-list-block">
        <ul className="articles-list">
            {
                articles?.map(article => (
                    <li>
                        <Link href={`/articles/${article.uid}`}>
                            <h4>{article.theme}</h4>
                        </Link>
                        <h4>{article.titles[0]}</h4>
                        <h4>{article.project_name}</h4>
                        {/*<h4 className="word-heading">{article.words}</h4>*/}
                        <button onClick={() => handlePopUpDelete(article.uid)} className={"delete-article"}>
                            <Image src={Remove} alt="remove"/>
                        </button>
                        {popUpDelete === article.uid &&< div className="pop-up-delete" style={{background: 'rgba(56, 44, 75, 0.77)'}}>
                            <h4>Do you want to delete this article?</h4>
                            <div>
                                <button onClick={() => handleSubmit(article.uid)} >Delete</button>
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

export default ArticlesList
