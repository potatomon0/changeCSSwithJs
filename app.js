
const inputs= document.querySelectorAll('.controls input')//select all inputs in control element

function handleUpdate(){
    console.log(this.value)
    //dataset is an object that will contain all data attributes from that element
    //suffix variable get the unit 'px' for setting css property
    const suffix=this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}

inputs.forEach(input=>{
    input.addEventListener('change',handleUpdate)
})
inputs.forEach(input=>{
    input.addEventListener('mousemove',handleUpdate)
})