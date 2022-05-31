
const {format} = require('date-fns')



   const secKey="FLWSECK-26a59517b4cd2e97b661af9868a2e9ab-X"
   const axios = require('axios')

    const main = async () => {
      const body = {
        amount: "1", 
      name: "testing plan", 
        interval: "daily", 
        duration:"12",
      }

      const recurrent = await  axios.post("https://api.flutterwave.com/v3/payment-plans", body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${secKey}`
      }
    })
    console.log(recurrent.data)

    
    console.log(format(new Date(),'yyyy-MM-dd'))
    console.log("started")

      

    }


    main()





