import iq from "inquirer";
import qr from "qr-image";
import fs from "fs";
iq
  .prompt([
    {
        message:"enter url",
        name:"URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const ul=answers.URL;
    var qi=qr.image(ul,{type:'png'});
    qi.pipe(fs.createWriteStream("qrl.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });