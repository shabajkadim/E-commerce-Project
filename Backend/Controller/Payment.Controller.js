// import Stripe from "stripe";


// export const CheckPayment=async(req,res)=>{
//     // console.log(process.env.STRIPE_SECRET_KEY);
//     console.log(req.body);
//     try{
//         const stripe=new Stripe(process.env.STRIPE_SECRET_KEY) 
//         const params={
//             submit_type:"pay",
//             mode:"payment",
//             payment_method_type:["cart"],
//            shipping_option:[{ shipping_rates:"shr_1P9wr1SIAWllnLs0d6sGGNdv"}],

//            line_items:req.body.map((item)=>{
//             return {
//                 price_data:"inr",
//                 product_data:{
//                     name:item.name,
//                     // image:[item.image]
//                 },
//                 unit_amount:item.price * 100 ,//becouse mili
//                 adjusable_quantity:{
//                     enabled:true,
//                     minimun:1
//                 },
//                 quantity:item.qty
//            }
//            }),

//            success_url:`${process.env.FRONTEND_SUCCESS_URL}/demo`,
//            cancel_url:`${process.env.FRONTEND_SUCCESS_URL}/cart`
//         }
//         const session=await Stripe.checkout.sessions.create(params)
//         res.status(200).json(session.id)
//     }catch(error){
//         console.log(error);
//         res.status(500).json({error:error })
//     }
//     res.send({message:"paymentsuccess",success:true})
// }






import Stripe from "stripe";

export const CheckPayment = async (req, res) => {
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const lineItems = req.body.map((item) => {
            return {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.qty,
            };
        });

        const params = {
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.FRONTEND_SUCCESS_URL}/success`,
            cancel_url: `${process.env.FRONTEND_SUCCESS_URL}/cancel`,
        };

        const session = await stripe.checkout.sessions.create(params);
        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
};
