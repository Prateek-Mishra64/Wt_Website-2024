// to get the website to scroll to about section
document.getElementById('about_button').addEventListener('click', function() {
    const targetSection = document.getElementById('about_us');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});
// to get the website to scroll to home section
document.getElementById('home').addEventListener('click', function() {
    const targetSection_2 = document.getElementById('whole');
    targetSection_2.scrollIntoView({ behavior: 'smooth' });
});
// to get the website to scroll to home section
document.getElementById('explore-more').addEventListener('click', function() {
    const targetSection_3 = document.getElementById('main_2');
    targetSection_3.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('get-started').addEventListener('click', function() {
    const targetSection_4 = document.getElementById('main_2');
    targetSection_4.scrollIntoView({ behavior: 'smooth' });
});

// 
function showAlert() {
    alert(`Site In Progress. Please Be patient. Thank You.🫡`);
}

function showAlert_2 (){
    alert('More Comming Soon, Stay Tuned for future updates. Thank You.😄👍')
}
