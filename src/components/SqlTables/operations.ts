import { useEffect, useState } from "react";
import { SqlTableService } from "../../services/sql-tables-service";

export type Schema = {
    fieldNaame: string;
    type: string;
}
export type SqlTable = {
    tableName: string;
    schema: Schema[]
}

export const useSqlTables = () => {
    const [tables, setTables] = useState<SqlTable[]>();
    const [isSchemaDialogOpen, setIsSchemaDialogOpen] = useState<boolean>();

    useEffect(() => {
        fetchSqlTables();
    }, []);

    const fetchSqlTables = async () => {
        const tablesData = await SqlTableService.getSqlTables();
        if(tablesData && tablesData.length > 0) {
            debugger;
            setTables(tablesData);
        }
    }

    const openSchemaDialog = () => {
        setIsSchemaDialogOpen(true);
    }

    return {
        tables,
        isSchemaDialogOpen,
        openSchemaDialog
    }
}
