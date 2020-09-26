// functions
const subscribe =async()=>{
    const emails = document.getElementById('emails').value
        const response = await fetch('https://rlsgldiane2020.herokuapp.com/subscribe/',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:emails
                

            }),
            headers:{
                "Content-Type": "application/json"
            }
        })

        const responseData = await response.json()
        console.log(responseData)
        if(response.ok){
            location.href="../../contact.html"
        }else{
            alert(responseData.error)
        }
}


// events

document.getElementById('subscribe').addEventListener('click',subscribe)
