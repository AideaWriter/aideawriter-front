const  Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
                key={i}
                style={{
                    fontWeight: currentPage === i ? 'bold' : 'normal',
                    background: currentPage === i ? 'blue' : 'transparent'
            }}
                onClick={() => onPageChange(i)}
                className="button-num-pagination"
            >
                {i}
            </button>
        );
    }

    return <div>{pages}</div>;
};

export default Pagination
