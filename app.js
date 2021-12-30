

const addtoDb=item=>{
const db =getDb();
if(item in db){
db[item] = db[item] +1
}
else{
    db[item] =1
}

saveToDb(db);
}
const removeFromDb = item =>{ 
    const db = getDb();
    delete db[item];
    saveToDb(db);
}
const saveToDb =db=>{
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shoping-cart' ,dbJSON);

}

const getDb = ()=> {
    let savedDb = localStorage.getItem('shoping-cart')
    savedDb =JSON.parse(savedDb)
   
    return savedDb;
}