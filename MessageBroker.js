import Bunny, {OPTS} from "bunnimq"
import path from "path"
import { fileURLToPath } from 'url';
OPTS.cwd = path.dirname(fileURLToPath(import.meta.url))
// console.log(fileURLToPath(import.meta.url))
Bunny({port: 3000, DEBUG:true})