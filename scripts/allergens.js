// const allergens = [
//     "céréales qui contiennent du gluten : Blé (épeautre, kamut), seigle, orge, avoine ou leurs souches hybridées",
//     "crustacés",
//     "œufs",
//     "poissons",
//     "arachides",
//     "soja",
//     "lait",
//     "fruits à coque: Amandes, noisettes, noix, noix de cajou, noix de pécan, noix du Brésil, pistaches, noix de Macadamia (noix du Queensland)",
//     "céleri",
//     "moutarde",
//     "graines de sésame",
//     "sulfites et l’anhydride sulfureux (si >10mg/kg ou 10ml/L dans le produit fini)",
//     "lupin",
//     "mollusques"
// ]


const allergenBts = document.querySelectorAll('.allergens_bt')
let indices;

for (let i = 0; i < allergenBts.length; i++) {
    allergenBts[i].addEventListener('click', function() {
        this.nextElementSibling
    });
}

allergenBts[0].click()