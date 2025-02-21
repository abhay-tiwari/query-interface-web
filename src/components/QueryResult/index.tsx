import useQueryResultOperations from "./operations";

const QueryResult = () => {
    const { queryResult } = useQueryResultOperations();
    
    return (
        <div>Query Result</div>
    );
}

export default QueryResult;