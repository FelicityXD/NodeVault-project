// Scroll to Team Section
document.getElementById('meetTeamBtn').addEventListener('click', function () {
    document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
});

// Show Description on Click
function showDescription(memberId) {
    // Hide all descriptions
    let descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => desc.style.display = 'none');

    // Show selected description
    document.getElementById(memberId).style.display = 'block';
    
    // Scroll to the description
    document.getElementById(memberId).scrollIntoView({ behavior: 'smooth' });
}