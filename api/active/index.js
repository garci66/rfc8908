export const config = {
    runtime: 'edge',
  };
  
export default async function (req) {
  const myUrl = new URL(req.url).searchParams;
  var myResponseObj={'captive':true, "user-portal-url":"https://activelearning.school-wifi.com/captive-portal" }
  const rfc8908 = myUrl.get('rfc8908')
  if (rfc8908){
    myResponseObj['user-portal-url']+=`?rfc8908=${rfc8908}`
  }
  
  return new Response(JSON.stringify(myResponseObj),{status:200,  headers: {'Content-Type': 'application/json'}})
}
  
