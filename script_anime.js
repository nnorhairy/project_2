//create button query
const button = document.querySelector('button')
//input search for anime name
const animeInput = document.querySelector('input')
//display anime image
const imageDiv = document.querySelector('div')

const animeName = document.querySelector('div')

//create button action
button.addEventListener('click',async()=>{
 
    let anime = animeInput.value
 
    let responseAnime = await axios.get(`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime}`)
   
   //console.log(responseAnime)
 // let animeName = responseAnime.data.anime_name
  //console.log(animeName)
  //let animeId = responseAnime.data.anime_id
 // console.log(animeId)
 // let animeimg = responseAnime.data.anime_img
 // console.log(animeimg)

  
   let animeImg = responseAnime.data.img
   let animeName = responseAnime.data.anime_name
   console.log(animeName)


   console.log(animeImg)
    imageDiv.innerHTML = `<img src=${animeImg}>`
    
    
  
  
})
