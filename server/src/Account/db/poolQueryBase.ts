import UseCaseType from '../use-cases/useCaseType';

export const pgQuery = async ({ pool, query }: UseCaseType, info: any) => {
    const inputs = [];

    for (const [,value] of Object.entries(info)) {
        inputs.push(value);
    }

    /*

    Error code: 42601 Name: syntax_error Description: The keyword needs to have the correct spacing or a semicolon to be identified.

    Error code: 42501 Name: insufficient_privilege Description: The command GRANT must be executed to grant SQL user privileges such as INSERT, SELECT, or UPDATE.

    Error code: 42602 Name: invalid_name Description: A table or database name has incorrect capitalization, characters or a mixture of both errors.

    Error code: 42622 Name: name_too_long Description: The identifier is longer than the 63-byte limit. This applies to names for databases, tables, schema, and other Postgres database object identifier names.

    Error code: 42939 Name: reserved_name Description: The database or table already has a SQL-reserved value.

    Error code: 42703 Name: undefined_column Description: The column name doesn’t exist.

    */

    let error: any | null = null;

    // const res = await pool.query(query, inputs, (err, result) => {
    // const res = await pool.query(query, inputs, (err, _) => {
    //     if (err) {
    //         error = err;
    //       }
    // });

    await pool.query(query, inputs)
        .catch(err => { error = err })

    await pool.end()

    return error;
   // return res;
}