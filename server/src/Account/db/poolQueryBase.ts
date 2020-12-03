import UseCaseType from '../use-cases/useCaseType';

export const pgQuery = async ({ pool, query }: UseCaseType, info: any = null) => {
    const inputs = [];
    let error: any | null = null;
    let response: any | null = null;

    

    if (info == null) {
        console.log('in 1');
        await pool.query(query)
        .then(res => { response = res })
    } else {

        for (const [,value] of Object.entries(info)) {
            inputs.push(value);
        }

        console.log('in 2');
        console.log(inputs);
        console.log(query);


        try {
            response = await pool.query(query, inputs);
        } catch(err: any) {
            error = errorToString(parseInt(err.code));
        }
        // await pool.query(query, inputs)
        // .then(res => { response = res })
        // .catch(err => {
        //     error = errorToString(parseInt(err.code));
        // })
    }

    // await pool.end()

    return Object.freeze({
        response,
        error
    })
}

const errorToString = (code: number): string => {
    let error: string = "";

    if (code == 23505) {
        error = "username already exists"; 
    } else if (code == 42601) {
        error = "syntax error";
    }

    return error;
}