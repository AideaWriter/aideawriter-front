import HeadingsTable from '@/app/components/articles/HeadingsTable';
import ArticlesList from '@/app/components/articles/ArticlesList';

const TablesWithArticles = () => {
    return <div className="article-page">
        <h1>Articles</h1>
        <p>List of all your articles generated by Logo.</p>
        <HeadingsTable theme={'Theme'} title={'Title'} project={'Project'} deleteItem={'Delete'}/>
        <ArticlesList />
    </div>
}


export default TablesWithArticles
