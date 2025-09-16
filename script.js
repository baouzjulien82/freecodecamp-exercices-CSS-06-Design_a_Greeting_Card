<script>
// Quand on clique sur un lien .card-links a
  document.querySelectorAll(".card-links a").forEach(link => {
    link.addEventListener("click", function(e) {
      // empêcher le saut de page par défaut
      e.preventDefault();
      
      // identifier la section cible
      const target = document.querySelector(this.getAttribute("href"));
      
      // masquer toutes les sections
      document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
      
      // afficher la section cible
      target.style.display = "block";
      
      // la masquer après 2 secondes
      setTimeout(() => {
        target.style.display = "none";
      }, 2000);
    });
  });
</script>
