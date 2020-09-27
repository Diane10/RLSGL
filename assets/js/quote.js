
    const add_quote =async()=>{
        const names = document.getElementById('namep').value
        const namecs = document.getElementById('namec').value
        const emails = document.getElementById('emailp').value
        const districts = document.getElementById('namedistr').value
        const calls = document.getElementById('nametime').value
        const telnums = document.getElementById('telnum').value
        const subjects = document.getElementById('subject1').value
        const messages = document.getElementById('message1').value    
            const response = await fetch('https://rlsgldiane2020.herokuapp.com/quote/',{
                method:"POST",
                body:JSON.stringify({
                    name:names,
                    company_name:namecs,
                    email:emails,
                    district:districts,
                    time_to_call:calls,
                    contact_number:telnums,
                    subject:subjects,
                    message:messages,
    
                }),
                headers:{
                    "Content-Type": "application/json"
                  
                }
              
            })
    
            const responseData = await response.json()
            console.log(responseData)
            if(response.ok){
                location.href="../../thankyou.html"
            }else{
                alert(responseData.error)
            }
        
        }
    
        document.getElementById('submitquote').addEventListener('click',add_quote)