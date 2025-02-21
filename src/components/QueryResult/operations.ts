import { useState } from "preact/hooks";

export type QueryResult = {
    headers: string[]
    data: string[][]
}

const useQueryResultOperations = () => {
   const [queryResult, setQueryResult] = useState<QueryResult>();

   return {
    queryResult
   };
}

export default useQueryResultOperations;