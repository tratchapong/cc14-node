require("dotenv").config();
const { readFile, writeFile } = require("fs/promises");
const express = require("express");
const app = express();

const getProducts = () => readFile("./products.json", "utf8").then(JSON.parse);
const saveFile = (file, data) => writeFile(file, JSON.stringify(data,null,2));
const saveDeleted = (del_item) => {
  readFile("./deleted.json", "utf8")
    .then(JSON.parse)
    .then((all_del) => {
      console.log('addDeleted :', del_item)
      all_del.push(del_item);
      return all_del;
    })
    .then((all_del) => saveFile("deleted.json", all_del));
};

app.get("/products", (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  // console.log(page, limit)
  getProducts()
    .then((all) => {
      let start = (page - 1) * limit;
      let end = +start + +limit - 1;
      console.log(start, end);
      // res.send(`${start}, ${end}`)

      let scope_items = all.slice(start, end);
      // console.log(scope_items)
      return scope_items;
      // return 'ok'
    })
    .then((el) => res.send(el));
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  getProducts()
    .then((pd) => {
      let del_idx = pd.findIndex((el) => el.id === +id);
      if (del_idx === -1) return {}
      let [del_item] = pd.splice(del_idx, 1);
      // console.log(del_item)
      saveDeleted(del_item);
      return {pd, del_item};
    })
    .then(({pd, del_item}) => {
      if(del_item)
        saveFile("./products.json", pd);
      return { msg: `${del_item?.id || 'no thing'} have deleted` };
    })
    .then((msg) => res.send(msg));
});


app.use((req, res) => {
  res.status(404).send({ msg: "path not found" });
});

let port = +process.env.PORT || 8000;
app.listen(port, () => console.log("Server on port", port));
