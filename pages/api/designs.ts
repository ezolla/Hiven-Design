import { NowRequest, NowResponse } from '@vercel/node'
import designs from '../../designs.json'

export default function get(req: NowRequest, res: NowResponse) {
  return res.json(designs)
}
