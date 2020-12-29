import { serve } from "https://deno.land/std@0.82.0/http/server.ts";
import name from './src/controller/index.ts';

const s = serve({ port: 8000 });
console.log("http://localhost:8000");
for await (const req of s) {
	req.respond({ body: name + "hello world\n" });
}
