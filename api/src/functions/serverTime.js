export const handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 404 }
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json ' },
    body: { time: new Date(), context },
  }
}
