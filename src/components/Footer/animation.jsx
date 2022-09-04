export const turn = ()=>{
    const disk = document.getElementById('disk1');
    if (disk.classList == "disk1") {
        disk.classList.add("disk2");
        disk.classList.remove("disk1");
    }else{
        disk.classList.remove("disk2");
        disk.classList.add("disk1");
    }

}