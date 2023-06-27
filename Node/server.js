const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const corsOption = {
  credentials:true,
  origin:["http://localhost:4200","http://localhost:8000"]
}
app.use(cors(corsOption))


const detailsDb = mongoose.createConnection(
  "mongodb://localhost:27017/pokemon"
);
const strategyDb = mongoose.createConnection(
  "mongodb://localhost:27017/Strategies"
);

detailsDb.on("connected", () => {
  console.log("connected to Pokemon Db");
});
strategyDb.on("connected", () => {
  console.log("connected to Strategies Db");
});

const detailsSchema = new mongoose.Schema({
  name: { type: String },
  types: { type: Array },
  evolution: { type: Array },
  image: { type: String },
});
detailsModel = detailsDb.model("details", detailsSchema);

const strategySchema = new mongoose.Schema({
  name: { type: String },
  strategy: { type: Object },
  deatilsId: mongoose.Schema.Types.ObjectId,
  types: { type: Array },
  evolution: { type: Array },
  image: { type: String },
});


app.get("/allPokemon", (req, res) => {
  console.log("Server Requested");
  try {
    detailsModel
      .find({})
      .then((pokes) => {
        res.status(201).json(pokes);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("An error occurred while querying the database.");
      });
  } catch (error) {
    console.log(error);
  }
});
//   const strategyModel = strategyDb.model("dp",strategySchema)
// app.get('/dp', (req, res) => {
//     console.log('Server Requested')
//     try {
//       strategyModel.find({})
//       .then((pokes) => {
//         res.status(201).json(pokes);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).send('An error occurred while querying the database.');
//       });
//     }
//     catch (error) {
//     console.log(error)
//   }
//   });

gens = ["rb", "gs", "dp", "rs", "bw", "xy", "sm", "ss", "sv"];
gens.forEach((element) => {
  app.get("/" + element, (req, res) => {
    console.log(element + " Requested");
    try {
      let strategyModel = strategyDb.model(element.substring(), strategySchema);
      strategyModel
        .find({})
        .then((strats) => {
          res.status(201).json(strats);
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .send("An error occurred while querying the database.");
        });
    } catch (error) {
      console.log(error);
    }
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

detailsModel.find({}). then((data) => {
    let pokeList = data;
    let pokeNames = [];
    pokeList.forEach((poke) => {
      pokeNames.push(poke["name"]);
    });
    gens = ["rb", "gs", "dp", "rs", "bw", "xy", "sm", "ss", "sv"];
    gens.forEach((gen) => {
      pokeNames.forEach((pokemon)=>{
        app.get("/"+gen+"/"+pokemon,(req,res)=>{
          console.log("/"+gen+"/"+pokemon," requested")
          let strategyModel = strategyDb.model(gen, strategySchema);
          strategyModel.findOne({"name":pokemon}).then((strats)=>{
            console.log(strats)
            res.status(201).json(strats)
          })
        })
      })
    });
    pokeNames.forEach((pokemon)=>{
      app.get("/"+pokemon,(req,res)=>{
        console.log("/"+pokemon+" requested")
        detailsModel.findOne({"name":pokemon}).then((data)=>{
          res.status(201).json(data)
        })
      })
    })
  });





// detailsModel.find({}).then((data)=>{
//   let pokeList = data
//   let pokemonNames = []
//   pokeList.forEach(poke=>{
//     pokemonNames.push(poke["name"])
//   })
//   gens = ["rb","gs","dp","rs","bw","xy","sm","ss","sv"]
//   gens.forEach(gen =>{
//     let strategyModel = strategyDb.model(gen,strategySchema)
//     pokemonNames.forEach(pokemon =>{
//       app.get("/"+gen+"/"+pokemon,(req,res)=>{
//         console.log("/"+gen+"/"+pokemon+" requested")
//         strategyModel.find({"name":pokemon},{"name":0,"_id":0,"detailsId":0}).then((Strategies)=>{
//           // let pokeStrats = data
//           detailsModel.findOne({"name":pokemon}).then((pokeDetail)=>{
//             console.log( data,pokeDetail)
//             pokeDetail = {...pokeDetail,Strategies}
//             // console.log(pokeDetail)
//             res.status(201).json(pokeDetail)
//           })

//         })
//       })
//     })
//   })

// })
