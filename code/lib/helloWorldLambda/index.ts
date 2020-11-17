export const handler: any = async (
    event: any,
    context: any,
    callback: any): Promise<any> => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify('Hello World!')
    }
}
