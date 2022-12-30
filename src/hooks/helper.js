const stopScroll = ()=>{
    document.body.style.overflow = "hidden"
}
const startScroll = ()=>{
document.body.style.overflow = "scroll"
}

export {
    stopScroll,
    startScroll
}