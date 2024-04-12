const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json');

module.exports = class Wish {

    constructor(wish){
        this.desvription = wish;
    }

    const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json');

module.exports = class Wish {

    constructor(wish){
        this.description = wish; // corrected typo in "description"
    }

    saveWish() {
        fs.readFile(filePath, (error, fileContent) => {
            let wishes = [];

            if(!error){
                wishes = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            wishes.push(this);

            fs.writeFile(filePath, JSON.stringify(wishes), (error) => {

                if(!error) {
                    console.log('wish saved');
                } else {
                    console.log(error);
                }
            });

        });
    }
    
    static fetchAllWishes(callBack){
        fs.readFile(filePath, (error, fileContent) => { // added missing arrow function
            if(error){
                callBack([]);
            } else {
                callBack(JSON.parse(fileContent));
            }
        });
    }

}