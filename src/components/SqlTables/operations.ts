import { useEffect, useState } from "react";
import { SqlTableService } from "../../services/sql-tables-service";

export type Schema = {
    fieldName: string;
    type: string;
}
export type SqlTable = {
    tableName: string;
    schema: Schema[]
}

export const useSqlTables = () => {
    const [tables, setTables] = useState<SqlTable[]>();
    const [isSchemaDialogOpen, setIsSchemaDialogOpen] = useState<boolean>(false);
    const [selectedSchema, setSelectedSchema] = useState<Schema[]>();

    useEffect(() => {
        fetchSqlTables();
    }, []);

    const fetchSqlTables = async () => {
        const tablesData = await SqlTableService.getSqlTables();
        if(tablesData && tablesData.length > 0) {
            setTables(tablesData);
        }
    }

    const onTableSelect = (schema: Schema[]) => {
        setSelectedSchema(schema);
        toggleSchemaDialog(true);
    }


    const toggleSchemaDialog = (isOpen: boolean) => {
        setIsSchemaDialogOpen(isOpen);
    }


    return {
        tables,
        isSchemaDialogOpen,
        toggleSchemaDialog,
        selectedSchema,
        onTableSelect
    }
}
