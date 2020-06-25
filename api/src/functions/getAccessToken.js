export const handler = async (event, context) => {
  console.log('>> getAccessToken')
  console.log(event)

  console.log(decodeURI(event.headers.cookie))
  console.log(context)
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json ' },
    body: { event, context },
  }
}
