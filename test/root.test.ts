import { expect, test } from "vitest";
import axios from "axios";

test("Fazer chamada a API", async () => {
  const response = await axios.get("http://localhost:8081");
//   console.log(response.data);
});


test.skip("Enviar o formulatio", async () => {
  try {
    const res = await axios.post("http://localhost:8081/post", {
      name: "Rui Marcos",
      email: "ruimarcosjoaogmail.com",
    });

    console.log(res.data);
    
    expect(res.data).toBe({
        name: "Rui Marcos",
        email: "ruimarcosjoaogmail.com",
      })

    // console.log(res.config.data);
  } catch (error) {
    console.log(error);
  }
});
