//  Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// function test()
// {
//     console.log("Hallo Thomas!");
// }


// // Funktionen 2a
// // Parametisierung + Datenübergabe von innen

// ausgabeNamen();

// function ausgabeNamen()
//  {
//     let firstName = "Thomas";
//     console.log("Hallo " + firstName + "!");
//     console.log(firstName);
// }

// console.log(firstName);


/*********** Funktion 2b ********/
// 2b. Parametisierung + Datenünergabe von Aussen

function ausgabeNamenParam(firstName) 
{
    const cond1 = (firstName == "")
    const cond2 = (firstName == undefined)


    if(cond1 || cond2)
    {
     firstName = "Nobody";
    }

    console.log("Hallo " + firstName + "!");

}
ausgabeNamenParam("Mia")
ausgabeNamenParam("Melanie")
ausgabeNamenParam()
ausgabeNamenParam(prompt("Bitte gib dein Vornamen ein :"));