import UseCaseType from '../use-cases/useCaseType';

export const pgQuery = async ({ pool, query }: UseCaseType, info: any = null, field: string) => {
    const inputs = [];
    let error: any | null = null;
    let response: any | null = null;

    for (const [,value] of Object.entries(info)) {
        inputs.push(value);
    }

    if (info == null) {
        pool.query(query)
            .then(res => { response = res })
    } else {
        pool.query(query, inputs)
            .then(res => { response = res })
            .catch(err => {
                error = errorToString(err.code);
            })
    }

    await pool.end()

    return Object.freeze({
        response: response,
        error: error
    })
}

const errorToString = (code: string): string => {
    let error: string = "";

    if (code == "23505") {
        error = "username already exists"; 
    } else if (code == "42601") {
        error = "syntax error";
    }

    return error;
}