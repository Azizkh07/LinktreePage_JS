const share = document.querySelectorAll('.tile-share-button');
console.log(share);
async function copytext(e){
//manklhaliwech el share yhezouna lel lien eli clickina alih   
e.preventDefault();
const link = this.getAttribute('link');
console.log(link);
try {
    await navigator.clipboard.writeText(link)
    alert("Link :" + link)
} catch (err) {
    console.error(err);
}
};

/*si on click al button share  njibou el share w nzidouh event listener*/
share.forEach(share => share.addEventListener('click', copytext))
