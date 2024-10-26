import { getRequestContext } from '@cloudflare/next-on-pages'
import Staff from "@/lib/models/staff"
// import { connect } from "mongoose"
import {connect} from '@/lib/db'
import { NextResponse } from "next/server"

// export const runtime = 'edge'


export const GET = async () =>{

  // console.log(process.env.MONGODB_URI);
  
  try {
      await connect()
      const staff = await Staff.find()
      // const staff = await Staff.findById({_id: { $oid: "6717e8e102b3d874d3871621"}})
      // const staff = await Staff.findById({_id: "6717e8e102b3d874d3871621"})


      return new NextResponse(JSON.stringify(staff), {status: 200})
  } catch (error) {
      // console.log(error);
      
      return new NextResponse('err'+ error.message, {
          status: 500,
      })
  }
}




// export async function GET(request) {
//   let responseText = 'Hello World'

//   // In the edge runtime you can use Bindings that are available in your application
//   // (for more details see:
//   //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
//   //    - https://developers.cloudflare.com/pages/functions/bindings/
//   // )
//   //
//   // KV Example:
//   // const myKv = getRequestContext().env.MY_KV_NAMESPACE
//   // await myKv.put('suffix', ' from a KV store!')
//   // const suffix = await myKv.get('suffix')
//   // responseText += suffix

//   return new Response(responseText)
// }
