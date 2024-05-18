const HeadingsTable = ({
                           theme,
                           title,
                           project,
                           words,
                           deleteItem,
                       }) => {
    return <div>
        <ul className="thead">
            {theme && <li><h3>{theme}</h3></li>}
            {title && <li><h3>{title}</h3></li>}
            {project && <li><h3>{project}</h3></li>}
            {words && <li><h3>{words}</h3></li>}
            {deleteItem && <li><h3>{deleteItem}</h3></li>}
        </ul>
    </div>
}

export default HeadingsTable
