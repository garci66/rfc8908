export const config = {
    runtime: 'edge',
  };
  
export default async function (req) {
  const myUrl = new URL(req.url).searchParams;
  var myResponse={'captive':false, "user-portal-url":"https://activelearning.school-wifi.com/captive-portal" }
  const rfc8908 = myUrl.get('rfc8908')
  if (rfc8908){
    myResponse['user-portal-url']+=`?rfc8908={$rfc8908}`
  }
  return myResponse
}
  