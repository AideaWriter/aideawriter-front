'use client';


import Link from 'next/link';
import {useEffect, useState} from 'react';
import axios from 'axios';


const LastArticles = () =>{
    const [articles, setArticles] = useState(null)
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(4);

    useEffect(() => {
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
        getArticles()
    }, [])


    console.log(articles);
    return <div className={'last-articles-block'}>
        <span>Last Articles</span>
        <ul>
            {articles && articles.map((article, i) => (
                <li key={i} className={'article-block'}>
                    <Link className={'link-articles-block'} href={`/articles/${article.uid}`}>
                        <h3>{article.theme}</h3>
                        <p>{article.text.blocks[1].data.text.slice(0, 100)} ...</p>
                    </Link>
                </li>
            ))}

            {/*<li className={'article-block'}>*/}
            {/*    <Link className={'link-articles-block'} href={'#'}>*/}
            {/*        <h3>Articles</h3>*/}
            {/*        <p>Lojbsdfjhs sdfgbashjdgfbjhads sdahjgfhjksdgaf sadjhkfgjksahdfgas sgajhdfgjkashdgf</p>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className={'article-block'}>*/}
            {/*    <Link className={'link-articles-block'} href={'#'}>*/}
            {/*        <h3>Articles</h3>*/}
            {/*        <p>Lojbsdfjhs sdfgbashjdgfbjhads sdahjgfhjksdgaf sadjhkfgjksahdfgas sgajhdfgjkashdgf</p>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li className={'article-block'}>*/}
            {/*    <Link className={'link-articles-block'} href={'#'}>*/}
            {/*        <h3>Articles</h3>*/}
            {/*        <p>Lojbsdfjhs sdfgbashjdgfbjhads sdahjgfhjksdgaf sadjhkfgjksahdfgas sgajhdfgjkashdgf</p>*/}
            {/*    </Link>*/}
            {/*</li>*/}
        </ul>
    </div>
}

export default LastArticles
