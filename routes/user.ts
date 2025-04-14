
import {Router} from "express"

const router = Router();


// get request to get the presigned URL
router.get("/get_presigned_url",async(req,res)=>{


    res.status(200).json({
        message:"HELLO WORLD",
    })
})



export default router;
