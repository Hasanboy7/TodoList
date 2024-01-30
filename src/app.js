const img=document.querySelector('.delet')
const input=document.querySelector('input')
const todo=document.querySelector('.todo')
const etid_modal=document.querySelector('section')
const model_delet=document.querySelector(".model_delet")
const createTodo=text=>{
    // create TODO list
    const div=document.createElement("div")
    div.className="w-100 h-[60px] mt-3 rounded-[5px] flex items-center justify-between p-5 hover:h-[65px] hover:cursor-pointer shadow-md hover:shadow-xl"

    const h2=document.createElement("h2")
    h2.className="text-[22px] text-blue-700 font-[600]"
    
    const img_div=document.createElement('div')
    img_div.className="flex item-center justify-around p-1 h-[40px] w-[100px]"
    const img1=document.createElement("img")
    img1.src="./img/delete-bin-5-fill.png"
    img1.className="w-[30px] hover:w-[32px] cursor-pointer"
    const img2=document.createElement("img")
    img2.src="./img/edit-2-fill.png"
    img2.className="w-[30px] hover:w-[32px] cursor-pointer"

    h2.textContent=text
    img_div.append(img1)
    img_div.append(img2)
    div.append(h2)
    div.append(img_div)
    // console.log(img1);
    // console.log(img2);
    
    // create modal
    // const modal=document.createElement('div')
    const modal_gurp=document.createElement('div')
    const h1=document.createElement('h1')
    const input_grup=document.createElement('div')
    const input_1=document.createElement('input')
    const input_2=document.createElement('input')
    const button=document.createElement('button')

    // modal.className='w-[50%] bg-blue-700 h-[50%] rounded shadow-slate-500 shadow-xl flex items-center justify-center flex-col'
    modal_gurp.className="w-[50%] bg-blue-700 h-[50%] rounded shadow-slate-500 shadow-xl flex items-center justify-center flex-col"
    h1.className="text-center text-[50px] mt-[-20px] uppercase font-mono tracking-[10px] text-lime-50"
    h1.textContent="Taxrirlsh"
    input_grup.className="w-[100%] flex items-center justify-center flex-col mt-4"
    input_1.className="w-[90%] h-[25%] text-[25px] bg-lime-600 text-white border border-1 border-black p-4 mt-4"
    input_1.setAttribute("disabled", "")
    input_2.className="w-[90%] h-[25%] text-[25px] border border-1 border-black p-4 mt-5"
    button.classList="w-[90%] h-[25%] bg-blue-950 mt-5 text-[30px] text-lime-50"
    button.textContent="Submit"
    // events hodisalar
    img_div.children[0].addEventListener('click',()=>{
        img_div.children[0].parentElement.parentElement.remove() 
    })
    div.addEventListener('click',(e)=>{
        h2.classList.toggle("line-through")
        // e.preventDefault()
    })
    img_div.children[1].addEventListener('click',(e)=>{
        e.preventDefault()
        etid_modal.classList.remove('hidden')
        etid_modal.classList.add('flex')
        etid_modal.append(modal_gurp)
        input_1.textContent=text    
    })
    modal_gurp.append(h1)
    // modal.append(modal_gurp)
    modal_gurp.append(input_grup)
    input_grup.append(input_1)
    input_grup.append(input_2)
    input_grup.append(button)
    return div
    
}


input.addEventListener('keydown',(e)=>{
    if (e.key=='Enter'){
        const text=input.value
        const todoList=createTodo(text)
        todo.append(todoList)
        input.value=""  
    }
})
model_delet.addEventListener('click',()=>{
    model_delet.parentElement.remove()
})
setInterval(()=>{
    setTimeout(()=>{
        document.querySelector('marquee').style.color='red'
    },800)
    document.querySelector('marquee').style.color='white'
},1500)
