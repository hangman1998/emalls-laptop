import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "POST") {
    await prisma.laptop.deleteMany({});
    // console.log(req.body);
    await prisma.laptop.createMany({ data: req.body });
  } else if (req.method === "GET") {
    let laptops = await prisma.laptop.findMany({ orderBy: { name: "asc" } });
    const regexFilter = (regex) =>
      laptops.filter((x) => !regex.test(x.name.toLowerCase()));

    laptops = regexFilter(/pentium|celeron/);
    laptops = regexFilter(/mx250|mx330/);
    laptops = regexFilter(/vega/);
    laptops = regexFilter(/int(el)$|integrated/);

    laptops = regexFilter(
      /3500|3550|3750|4600|4700|4800|5500|5600|5700|8250|8750|8850|9300|9750|10210|10200|10300|10510|10750|10870|11370|11375|1135g7|1165g7/
    );
    laptops = regexFilter(/(core)?(\s|-)i[3-5]/);
    laptops = regexFilter(/(\s|-|\n|\t)[1-2]g(b)?(\s|[,]|[-]|$)/);

    laptops = laptops.filter((x) => x.price <= 50 && x.price >= 20);
    res.json(laptops);
  }
}
