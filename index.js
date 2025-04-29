// console.log(validatorCIF("1234test"));
// console.log(validatorCIF("1234567831"));
// console.log(validatorCIF("14826496"));

function validatorCIF(cif){
 // cheie de testare: 753217532
    const cheie =  "753217532".split(" ").reverse();

    if(cif.slice(0,2) == 'RO') cif = cif.slice(2);
    
    if(!/^\d+$/.test(cif)) {
        console.error("CIF/CUIul dat nu este format doar din cifre");
        return false;
    }
    
    if(cif.length > 10){
        console.error("CIF/CUI valid are maxim 10 caractere numerice");
        return false;
    }
    console.log(cif);
    cif = cif.split(" ").reverse();
    console.log(cif);
    sum = 0;
    let control = 0;
    for (let i = 1; i < cif.length; i++)
    {
        sum += cif[i] * cheie[i-1]; 
    }

    control = (control * 10) % 11;

    if (control == 10) control = 0;

    return control == cif[0];

}
function validatorISBN(isbn){
    // ^\d{1,3}-?\d{10,12}$
    if(/^\d{1,3}-?\d{10,12}$/.test(isbn)){
        console.error("ISBNul nu are formatul corespunzator");
        return false;
    }

    let j = 1;
    let res = 0;
    for(let i = 0; i < isbn.length - 1; i++){
        if(isbn[i] == '-') continue;
        
        if(j%2 == 0) res += isbn[i]*3;
        else res += Number.parseInt(isbn[i]);

        j++;
    }
    return res + Number.parseInt(isbn[isbn.length-1]) % 10 == 0;
}

console.log(validatorISBN("978-0571281749"));