const mongoose = require('mongoose');

const { myRNG, barFactory, testCases1 } = require('./shared')
const {FooArray} = require("./models")

const CS = 'mongodb://127.0.0.1:27017/p_test3'
if (false) {
    insertArrayData().catch(err => console.log(err));
}

if (false) {
    queryArrayData().catch(err => console.log(err));
}
if (true) {
    queryData2().catch(err => console.log(err)).finally(() => console.log("Press ctrl + c to end"));
}





async function queryData2() {
    await mongoose.connect(CS);
    console.time("MultipleQueries")
    const i = 500
    for(let j of testCases1) {
        const mongoQueryObj = {
        }
        mongoQueryObj[`array1.x1`] = `Gaga${j}_${i}`
        const fArr = await FooArray.find(mongoQueryObj)
        if (fArr.length == 0) {
            throw new Error("Something went wrong")

        }
    }
    

    console.timeEnd("MultipleQueries")
}

async function queryArrayData() {
    await mongoose.connect(CS);
    console.time("queryData")
    const ii = 103
    const i = 500
    const fArr = await FooArray.find({"array1.x1": `Gaga${ii}_${i}`
})
console.timeEnd("queryData")
    console.log(fArr.length)
    

}

async function insertArrayData() {
  await mongoose.connect(CS);
  console.time("insertData")
  for(let i = 0; i < 10**3; i++) {
    let array1 = []
    for(let ii = 0; ii < 10**3; ii++) {
        const bar = barFactory()
        bar.x1 = `Gaga${ii}_${i}`
        array1.push(bar)

    }
    const f = new FooArray({ name: `f${i}`, array1: array1 });
    await f.save()
    console.log(`Saved ${f.name}...`)
    console.timeLog(`insertData`)

  }
  console.timeEnd("insertData")
  console.log("Ende")
  

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}