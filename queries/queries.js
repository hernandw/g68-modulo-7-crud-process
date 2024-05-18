import pool from "../config/db.js";

/*
Create
Read
Update
Delete
*/

const argumento = process.argv.slice(2)
const opcion = argumento[0]
let type = argumento[1]
let size = argumento[2]
let id = argumento[3]

const addClothes = async () => {
  try {
    const text = "INSERT INTO clothes(type, size) values($1, $2) returning *";
    const values = [type, size];
    const response = await pool.query(text, values);
    console.log(response.rows);
  } catch (error) {
    console.log(error);
  }
};


const getClothes = async()=>{
    try {
        const response = await pool.query("SELECT * from clothes")
        console.log(response.rows)
    } catch (error) {
        console.log(error)
    }
}

const editClothes = async()=>{
    try {
        const text = "UPDATE clothes set type = $1, size = $2 WHERE id = $3 RETURNING *"
        const values = [type, size, id]
const response = await pool.query(text, values)
console.log(response.rows)
    } catch (error) {
        console.log(error)
    }
}


if(opcion === 'add'){
    addClothes()
}else if(opcion === 'get'){
    getClothes()
}else if(opcion === 'edit'){
    editClothes()
}else if(opcion === 'delete'){
    deleteClothes()
}else{
    console.log('No es una opcion valida')
}


