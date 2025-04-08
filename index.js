// console.error("Salut");

// var x=5;

// console.log(x);

// var x=10;

// let y=10;

// console.log(y);

// y=20;


// const z=25;

// console.log(z);

// const v=[1,2,3];

// v[0]=2;

// console.log(v);


// v=[3,2,1]

// console.log(v);

// function suma_2_nr(a,b){
//     return a+b;
// }
console.log(verifCNP("2990219469000"));

function verifCNP(cnp){
    const key="279146358279";
    let control = 0;
    if(cnp.length != 13) {
        console.error("CNPul trebuie sa contina 13 caractere");
        return false;
    }

    if(!/^\d+$/.test(cnp)) {
        console.error("CNPul trebuie sa contina doar cifre");
        return false;
    }
    for (let i = 0; i<cnp.length-1; i++)
    {
        // if (cnp[i]=="[0-9]") {
        //     console.error("CNPul trebuie sa contina doar cifre");
        //     return false;
        // }

        control +=key[i]*cnp[i];
    }
    control %=11;

    if(control == 10) control = 1;

    return (control == cnp[12]);

}