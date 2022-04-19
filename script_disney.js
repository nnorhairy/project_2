//create button query
const button = document.querySelector('button')
//input search for anime name
const disneyInput = document.querySelector('input')
//display anime image

const imageDiv =  document.querySelector('div')
const disneyName =  document.querySelector('h2')
const div =  document.querySelector('div')

//create button action
button.addEventListener('click',async()=>{
 
    let disneyID = disneyInput.value
 
    let responseDisney = await axios.get(`https://api.disneyapi.dev/characters/${disneyID}`)
   
  

  
   let disneyImg = responseDisney.data.imageUrl
   let disneyN = responseDisney.data.name
   console.log(disneyN)

    disneyName.innerHTML = `Name: ${disneyN} `
    div.innerHTML = `<div></div> `
    imageDiv.innerHTML = `<img src=${disneyImg}>`
    
 
  
  
})
