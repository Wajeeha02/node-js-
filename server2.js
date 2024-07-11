import { createServer } from 'http';
const PORT=8000;

const users=[
    {id:1,name:'Wajeeha Usman'},
    {id:2, name:'areesha tariq khan'}
];

const server=createServer((req,res)=>{
if(req.url='/api/users' && req.method==='GET'){
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(users));
    res.end();
}else{
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({message:'Route not found'}));
    res.end();
}
});

server.listen(PORT, () => {
    console.log(`Server running on Port :${PORT}`);
  });