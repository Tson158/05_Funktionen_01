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
// ausgabeNamenParam("Mia")
// ausgabeNamenParam("Melanie")
// ausgabeNamenParam()
// ausgabeNamenParam(prompt("Bitte gib dein Vornamen ein :"));

/******* Funktionen 2c ******/
// Mehrere Parameter

// function ausgabeNamenParams(firstName,familyName) {
//     console.log("Hallo " + firstName + " " + familyName + "!");

// }
// ausgabeNamenParams("Thomas","Sonntag")
// ausgabeNamenParams(prompt("Vorname?"), prompt("Nachnamen?"))

/***** Funktionen 3a *******/
//  3a Vorbereitung
// Postulat one function = one job (uncel bob)



function ausgabeNamenParams2(firstName,familyName) 
{

// 1. Funktionalität: String composing

    const gap = " ";
    const outputStr = "Hallo" + gap + firstName + gap + familyName + "!";

    // 2. Funktionalität: data output
    console.log(outputStr)
}
 ausgabeNamenParams2("Thomas","Sonntag")


 /***** Funktionen 03b *****/

// 1. Funktionalität: string composing

ausgabe(getString("Max","Mütze"));

function getString(firstName,familyName) {
    const gap = " ";
    const outputStr = "Hallo" + gap + firstName + gap + familyName +"!";

    return outputStr; // ---> Daten zum Call
    console.log("Hallo"); // return BEENDET die Funktion!
}

// 2. Funktionalität: data output
// ausgabe("Hallo");

function ausgabe(outputData) 
{
    console.log(outputData); 
}