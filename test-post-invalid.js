(async ()=>{
  try{
    const res = await fetch('http://localhost:3000/api/contact',{method:'POST',headers:{'content-type':'application/json'},body: JSON.stringify({name:'Bad',email:'',message:''})})
    console.log('status', res.status)
    const text = await res.text()
    console.log('body', text)
  } catch(e){ console.error('err', e && e.stack ? e.stack : e) }
})()
