// functions
const subscribe =async()=>{
    const emails = document.getElementById('emailsub').value
    console.log(emails)
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
            alert("Thank you!!!")
        }else{
            alert(responseData.data)
        }
    
}


// events

document.getElementById('sub').addEventListener('click',subscribe)
