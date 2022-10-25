/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

Wayne Barnett	Founder & CEO			wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor			        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager			walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	        angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer				scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer		        barbara-ramos-graphic-designer.jpg

**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sotto forma di stringhe
**MILESTONE 3:**
Stampare delle card formattate contenete immagini e testo (La grafica fornita è solo un esempio ma sentitevi liberi di “graficare” come preferite)
**BONUS:**
Aggiungere degli aggettivi (più di uno) che identifichino ogni persona e stamparli nella card
*/


// MILESTONE 0

const team =[
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Founder & CEO',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]


// MILESTONE 1

for (member of team){
    console.log(member);
}

// MILESTONE 2

// const lista = document.querySelector('.lista');

// for(let member of team){
//     const output = `<li>${member.name}, ${member.role}, ${member.image}</li>`;
//     lista.innerHTML += output;
// }

// MILESTONE 3

const row = document.getElementById('row');

for(member of team){
    let card = `
        <div class="col-4 d-flex justify-content-center py-3">
        <div class="card" style="width: 18rem;">
            <div class="card-img"><img src="img/${member.image}" class="card-img-top" alt="${member.name}"></div>
            <div class="card-body d-flex flex-column align-items-center my-3">
              <h5 class="card-title p-1">${member.name}</h5>
              <p class="card-text">${member.role}</p>
            </div>
          </div>
        </div>
        `;
 row.innerHTML += card;   
}