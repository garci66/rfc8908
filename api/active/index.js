export const config = {
    runtime: 'edge',
  };
  
export default async function (req) {
  var myResponseObj={'captive':true }
  return new Response(JSON.stringify(myResponseObj),{status:200,  headers: {'Content-Type': 'application/json'}})
}
  
