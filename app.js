




const getDadJokes = async() => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/',config)
    return res.data.joke
  }
  const display = document.querySelector('#translate-output')
const newJoke = async()=>{
    const jokeText = await getDadJokes()
    display.innerText = jokeText;

}


const btn = document.querySelector('button')
btn.addEventListener('click',newJoke)




