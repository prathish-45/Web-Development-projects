async function data() {
    return "hello";
}

// async function loadData() {
//     try {
//         let res = await data();
//         console.log(res);
//     } catch (e) {
//         console.log(e);    
//     } 
    
// }


let loadData = async () => {                                                                                        
    let res = await data();
    console.log(res);
    
}

loadData()
