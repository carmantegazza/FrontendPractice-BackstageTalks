//LLAMADO A ELEMENTOS
let containerIssues = document.getElementById('containerIssues')

//TRAIGO DATOS DEL JSON
async function fetchData() {
    const URLJSON = "json/issues.json";
    const response = await fetch(URLJSON);
    const data = await response.json();
    issuesData = data;
  
    crearCards(issuesData);
  }
  fetchData();

//INYECTO CONTENIDO DEL JSON
const crearCards = array => {
    array.forEach(
        (issue) => {
            let containerCard = document.createElement('div');
            containerCard.className = "col-4";
            containerCard.innerHTML = `
            <img src="${issue.image}" alt="${issue.imageAlt}">
            <h3>${issue.issue}</h3> `;
            
            containerIssues.appendChild(containerCard);
        }
    )
}