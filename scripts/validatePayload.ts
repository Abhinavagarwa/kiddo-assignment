import payload from "../src/data/homepage.json";
import { HomepageSchema } from "../src/utils/validatePayload";

const result =
  HomepageSchema.safeParse(payload);

if (!result.success) {
  console.error(result.error);
  process.exit(1);
}

console.log("Payload Valid");