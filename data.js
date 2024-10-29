const fs = require("fs")
//add data
const addPerson = (id , fname , lname , city , age) => {
     const allData = loadInfo()

     const duplicatedData = allData.filter((obj) =>{
        return  obj.id === id 
     })

      if (duplicatedData.length === 0  ){

     allData.push({
       id : id,
       fname : fname,
       lname : lname,
       city : city,
       age : age
     })
     savealldata(allData)
    } else {
      console.log("ERROR DUPLICATED DATA")
    }
}

/////////////////////////////////////////////////////////////////////

const loadInfo = () => {
  try { 
      const dataJson = fs.readFileSync("data10.json").toString()
      return  JSON.parse(dataJson)
  }
  catch {
      return []
  }
   
}

const savealldata = (allData) => {
    const saveallDataJson  = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , saveallDataJson)
 }
///////////////////////////////////////////////////////////////////

// to read data BY ID:
const readData=(id)=>{
  const allData=loadInfo()
  const itemNeeded=allData.find((obj)=>{
      return obj.id==id
  })
  if (itemNeeded) {
      console.log(itemNeeded)
    }else {
      console.log("ID NEEDED NOT FOUND")
    }
}
//////////////////////////////////////////////////////////////////
//read all data

const readAllData=()=>{
  const allData=loadInfo()
  allData.find((obj)=>{
    console.log(obj);
})
}

////////////////////////////////////////////////////////////////////////////////////
//delete data BY ID
const deleteData=(id)=>{
  const allData=loadInfo()
  const dataKeep=allData.filter((obj)=>{
      return obj.id !==id
  })
  console.log(dataKeep)
  console.log("you have successfully deleted an item")
}

//////////////////////////////////////////////////////////////////////
//delete all data
const deleteallData=()=>{
  const filePath = './data10.json';

// Overwrite the file with an empty string
fs.writeFile(filePath, '', (err) => {
  if (err) {
    console.error('Error clearing file:', err);
    return;
  }
  console.log('File contents cleared successfully');
});
   

}
module.exports={
    addPerson,
    readData,
    readAllData,
    deleteData,
    deleteallData
}

